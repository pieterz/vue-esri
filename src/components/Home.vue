<script setup lang="ts">
defineProps
</script>

<script lang="ts">
// import Search from '@arcgis/core/widgets/Search';

import NearbyCard, { ItemProps } from './NearbyCard.vue';
import { locate } from '../data/locate'
import { findNearbyPlaces } from '../data/places'

// const items: ItemProps[] = [
//     {
//         name: 'Donut Shop',
//         address: '555 Main st, 90022',
//         bearing: 'SE',
//         distance: 22.4
//     },
//     {
//         name: 'Coffee sop',
//         address: '555 1st st, 90022',
//         bearing: 'N',
//         distance: 5.2
//     }
// ];

const categories = 

export default {
    components: {
        NearbyCard
    },
    async mounted() {
        const result = await locate();
    },
    data() {
        return {
            items: []
        }
    }
}
</script>

<template>
    <!-- <div class="search-container" ref="search"></div> -->
    <div class="car-container">
        <calcite-list v-for="{ name, address, distance, bearing } in items" :key="name">
            <calcite-list-item>
                <NearbyCard
                    :name="name"
                    :distance="distance"
                    :address="address"
                    :bearing="bearing"
                />
            </calcite-list-item>
        </calcite-list>
    </div>
</template>

<style scoped>
.search-container {
    width: 100%;
}

.card-container {
    width: 100%;
    flex-shrink: 0;
}
</style>