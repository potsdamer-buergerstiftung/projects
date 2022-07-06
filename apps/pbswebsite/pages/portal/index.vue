<template>

    <div class="py-40">
        <h1 class="pt-40" v-if="user">
            {{ user.first_name }} {{ user.last_name }}
            <PortalAdminRedirectButton />
            <button class="p-4 bg-emerald-500" @click="logout()">Logout</button>
        </h1>
        <a :href="url" class="p-4 bg-green-500" v-else>Log-in</a>
    </div>

</template>

<script setup lang="ts">
const durl = useDirectusUrl();
const websiteUrl = useWebsiteUrl();

const { fetchUser, setToken, logout } = useDirectusAuth()

const user: any = await fetchUser();

const { data } = await useLazyFetch<any>('https://portal.potsdamer-buergerstiftung.org/auth/refresh', {
    method: 'POST',
    credentials: 'include',
    headers: useRequestHeaders(['cookie']),
    server: false,
})

watch(data, (newData) => {
    if (newData) {
        setToken(newData.data.access_token)
    }
})

const url = durl + "/auth/login/microsoft?redirect=" + websiteUrl;
</script>