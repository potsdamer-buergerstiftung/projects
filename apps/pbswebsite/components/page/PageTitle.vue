<template>
    <section class="bg-white">
        <div class="container mx-auto px-4 pt-36 md:pt-44 pb-8">
            <h1 class="font-header text-5xl font-bold md:text-6xl lg:text-7xl">{{ title }}</h1>
            <div class="mt-4" v-if="$slots.description">
                <slot name="description" />
            </div>
            <div class="mt-4" v-if="$slots.actions">
                <slot name="actions" />
            </div>
            <div class="mt-16 md:mt-24" v-if="$slots.breadcrumb">
                <slot name="breadcrumb" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; description?: string }>();
</script>
