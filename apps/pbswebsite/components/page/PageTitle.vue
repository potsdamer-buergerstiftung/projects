<template>
    <section class="bg-white">
        <div class="container mx-auto px-4 pt-44 pb-8">
            <h1 class="font-header text-7xl font-bold">{{ title }}</h1>
            <div class="mt-4" v-if="$slots.description">
                <slot name="description" />
            </div>
            <div class="mt-4" v-if="$slots.actions">
                <slot name="actions" />
            </div>
            <div class="mt-24" v-if="$slots.breadcrumb">
                <slot name="breadcrumb" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; description?: string }>();
</script>
