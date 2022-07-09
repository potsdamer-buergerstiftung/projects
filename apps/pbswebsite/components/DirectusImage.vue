<template>
  <img :src="imageUrl.toString()" />
</template>

<script setup lang="ts">
const directusUrl = useDirectusUrl();
const {
  assetId,
  height,
  width,
  quality = 50,
  fit,
  format = "webp",
} = defineProps<{
  assetId: string;
  height?: number;
  width?: number;
  quality?: number;
  fit?: "cover" | "contain" | "inside" | "outside";
  format?: "jpg" | "png" | "webp" | "tiff";
}>();

const imageUrl = new URL("/assets/" + assetId, directusUrl);
const sp = imageUrl.searchParams;
if (height) sp.append("height", height?.toString());
if (width) sp.append("width", width?.toString());
if (quality) sp.append("quality", quality.toString());
if (fit) sp.append("fit", fit);
if (format) sp.append("format", format);
</script>
