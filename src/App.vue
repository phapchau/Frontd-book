<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
    components: {
        AppHeader,
    },
};
</script>
<template>
    <div>
        <AppHeader />
        <div class="component1">
            <!-- <router-view /> -->
        </div>
        <div class="container mt-3 pt-3 component2">
            <router-view />
        </div>
    </div>
</template>
<style>
/* .page {
    max-width: 1024px;
    margin: auto;
} */
</style>