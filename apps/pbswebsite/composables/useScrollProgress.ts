export default function () {
  if (!window) {
    return ref(0);
  }

  const progress = ref(0);

  function update() {
    const { documentElement, body } = document;
    let windowScroll = body.scrollTop || documentElement.scrollTop;
    let height = documentElement.scrollHeight - documentElement.clientHeight;
    progress.value = (windowScroll / height) * 100;
  }

  onMounted(() => window.addEventListener("scroll", update));
  onUnmounted(() => window.removeEventListener("mousemove", update));

  return progress;
}
