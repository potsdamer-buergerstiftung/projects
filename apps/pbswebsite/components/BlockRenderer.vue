<template>
  <div>
    <parseData />
  </div>
</template>

<script setup lang="ts">
import { VNode } from "vue";

const { data } = defineProps<{ data: any }>();

function ParseFunctionError(type: string) {
  return new Error(`\x1b[31m The Parser function of type "${type}" is not defined. \n
  Define your custom parser functions as: \x1b[34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks \x1b[0m`);
}

type Block = {
  type: string;
  data: {
    text?: string;
    level?: number;
    caption?: string;
    url?: string;
    file?: {
      url?: string;
    };
    stretched?: boolean;
    withBackground?: boolean;
    withBorder?: boolean;
    items?: Array<string> | Array<ListItem>;
    style?: string;
    code?: string;
    service?: "vimeo" | "youtube";
    source?: string;
    embed?: string;
    width?: number;
    height?: number;
  };
};

type transforms = {
  [key: string]: any;
  delimiter(): VNode;
  header(block: Block): VNode;
  paragraph(block: Block): VNode;
  list(block: Block): VNode;
  image(block: Block): VNode;
  quote(block: Block): VNode;
  code(block: Block): VNode;
  embed(block: Block): VNode;
};

type ListItem = {
  content: string;
  items: Array<ListItem>;
};

const transforms: transforms = {
  delimiter: () => {
    return h("hr");
  },

  header: ({ data }) => {
    return h(
      "h" + data.level,
      {
        class: "font-header text-4xl font-bold mb-4",
      },
      data.text
    );
  },

  paragraph: ({ data }) => {
    return h("p", {
      innerHTML: data.text,
      class: "font-body text-md mb-8 prose",
    });
  },

  nestedlist: ({ data }) => {
    return h(
      "ul",
      {
        class: "list-disc mb-8 ml-4",
      },
      data.items.map((item) => {
        return h(
          "li",
          {
            class: "mb-4",
          },
          item.content
        );
      })
    );
  },

  list: ({ data }) => {
    const listStyle = data.style === "unordered" ? "ul" : "ol";

    return h("li", "Liste");
  },

  image: ({ data }) => {
    let caption = data.caption ? data.caption : "Image";
    return h("figure", {}, [
      h("img", {
        src: data.url,
        alt: caption,
        loading: "lazy",
        width: data.width,
        height: data.height,
      }),
      h("figcaption", {}, caption),
    ]);
  },

  quote: ({ data }) => {
    return h("blockquote", {}, data.text);
  },

  code: ({ data }) => {
    return h("pre", {}, h("code", {}, data.code));
  },

  embed: ({ data }) => {
    switch (data.service) {
      case "vimeo":
        return h("iframe", {
          src: data.embed,
          width: data.width,
          height: data.height,
          frameborder: 0,
          allowfullscreen: true,
        });
      case "youtube":
        return h("iframe", {
          src: data.embed,
          width: data.width,
          height: data.height,
          frameborder: 0,
          allowfullscreen: true,
        });
      default:
        return h("div", {}, data.text);
    }
  },
};

type Parser = {
  parse(data: any): Array<string>;
  parseStrict(data: any): Array<string> | Error;
  parseBlock(block: Block): string;
  validate(data: any): Array<string>;
};

const parser = (plugins = {}): Parser => {
  const parsers = Object.assign({}, transforms, plugins);

  return {
    parse: ({ blocks }) => {
      return blocks.map((block) => {
        return parsers[block.type]
          ? parsers[block.type](block)
          : ParseFunctionError(block.type);
      });
    },

    parseBlock: (block) => {
      return parsers[block.type]
        ? parsers[block.type](block)
        : ParseFunctionError(block.type);
    },

    parseStrict: ({ blocks }) => {
      const parserFreeBlocks = parser(parsers).validate({ blocks });

      if (parserFreeBlocks.length) {
        throw new Error(
          `Parser Functions missing for blocks: ${parserFreeBlocks.toString()}`
        );
      }

      const parsed = [];

      for (let i = 0; i < blocks.length; i++) {
        if (!parsers[blocks[i].type]) throw ParseFunctionError(blocks[i].type);

        parsed.push(parsers[blocks[i].type](blocks[i]));
      }

      return parsed;
    },

    validate: ({ blocks }) => {
      const types = blocks
        .map((item: Block) => item.type)
        .filter(
          (item: string, index: number, blocksArr: Array<string>) =>
            blocksArr.indexOf(item) === index
        );

      const parser_keys = Object.keys(parsers);

      return types.filter((type) => !parser_keys.includes(type));
    },
  };
};

const edjsParser = parser();

const parseData = () => {
  return edjsParser.parse(data);
};
</script>
