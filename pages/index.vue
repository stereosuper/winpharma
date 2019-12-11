<template>
    <div>
        <Hero />
    </div>
</template>

<script>
import { getHome } from '~/cms';
import Hero from '~/components/Hero';

export default {
    components: {
        Hero
    },
    async asyncData() {
        return {};
    }
};
</script>

<style lang="scss" scoped></style>
