<script setup lang="ts">
export interface ItemProps {
    name: string;
    address: string;
    bearing: string;
    distance: number;
}

defineProps<ItemProps>()
</script>

<template>
    <calcite-card>
        <span slot="title">{{ name }}</span>
        <span slot="subtitle">
            {{ bearing }}
            <small>{{ distance.toFixed(2) }}m</small>
            <small>{{ address }}</small>
        </span>
    </calcite-card>
</template>

<style scoped>
</style>