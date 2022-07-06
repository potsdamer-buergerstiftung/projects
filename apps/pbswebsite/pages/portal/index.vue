<template>

    <div v-if="user">
        <PageTitle :title="`${greetingMessage()}, ${user.first_name}.`">
            <template #description>
                <p class="max-w-2xl">
                    Unser Freilligenportal vernetzt Dich und bietet Dir einen Überblick über alles, was in der
                    Bürgerstiftung passiert und über die Sachen, für die Du Dich engagieren kannst.
                </p>
            </template>
        </PageTitle>
    </div>
    <div v-else>
        <PageTitle :title="`${greetingMessage()}.`">
            <template #description>
                <p class="max-w-2xl">
                    Unser Freilligenportal vernetzt Dich und bietet Dir einen Überblick über alles, was in der
                    Bürgerstiftung passiert und über die Sachen, für die Du Dich engagieren kannst.
                </p>
            </template>
        </PageTitle>
        <section class="py-16">
            <div class="container mx-auto px-4">
                <PortalLoginForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "portal"
})
const { fetchUser } = useDirectusAuth()
const user = await fetchUser() as any;

const greetingMessage = () => {
    const dayTime = new Date().getHours()

    if (dayTime > 18) {
        return "Guten Abend";
    }
    if (dayTime > 10) {
        return "Guten Tag"
    }
    if (dayTime > 6) {
        return "Guten Morgen"
    }
    return "Hallo"
}
</script>