<template>

    <div class="py-40">
        <h1 class="pt-40" v-if="user">
            {{ user.first_name }} {{ user.last_name }}
            <PortalAdminRedirectButton />
            <button class="p-4 bg-emerald-500" @click="logout()">Logout</button>
        </h1>
        <div v-else>
            <a v-for="provider in providers.data" :href="loginUrl(provider.name).toString()"
                class="p-4 bg-green-500">Einloggen mit {{
                        provider.name
                }}</a>
        </div>
    </div>

</template>

<script setup lang="ts">
const directusUrl = useDirectusUrl();
const websiteUrl = useWebsiteUrl();

const { logout, listAuthProviders, fetchUser } = useDirectusAuth()

const providers = await listAuthProviders();

const user = await fetchUser() as any;

const redirectUrl = new URL("/portal/sso", websiteUrl);
const loginUrl = (provider: string) => {
    let url = new URL(`/auth/login/${provider}`, directusUrl);
    url.searchParams.append("redirect", redirectUrl.toString());
    return url;
}
</script>