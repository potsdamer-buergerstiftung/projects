<template>
    <form @submit.prevent="submit">
        <div class="flex flex-col gap-4">
            <div class="col-span-3 md:col-span-1">
                <label class="text-sm font-medium">E-Mail-Adresse</label>
                <input type="email" v-model="email"
                    class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div class="col-span-3 md:col-span-1">
                <label class="text-sm font-medium">Passwort</label>
                <input type="password" v-model="password"
                    class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div class="col-span-3" v-if="error">{{ error }}</div>
            <div class="col-span-3">
                <Button :is-loading="isLoading">Log-in</Button>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
const directusUrl = useDirectusUrl();
const { listAuthProviders, login } = useDirectusAuth();
const router = useRouter();

// Basic Sign in

const email = ref('');
const password = ref('');
const error = ref<string>(null);
const isLoading = ref(false);

watch([email, password], () => {
    error.value = null;
})

async function submit() {
    try {
        isLoading.value = true;
        error.value = null;
        await login({ email: email.value, password: password.value });
        router.replace("/portal");
    } catch {
        error.value = "Die Zugangsdaten sind falsch."
    } finally {
        isLoading.value = false;
    }
}
</script>
