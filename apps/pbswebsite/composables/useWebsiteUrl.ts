export default function () {
    const conf = useRuntimeConfig()
    return conf.public.websiteUrl;
}