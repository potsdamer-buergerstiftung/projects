<script setup lang="ts">
const route = useRoute();

const hash = route.params.hash as string;

navigateTo({
  path: `/veranstaltungen/${hash}`,
});
</script>
