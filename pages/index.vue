<template>
    <div>
        <Hero />
        <KeyFigures />
    </div>
</template>

<script>
import { getHome } from '~/cms';
import Hero from '~/components/Hero';
import KeyFigures from '~/components/KeyFigures';

export default {
    components: {
        Hero,
        KeyFigures
    },
    async asyncData() {
        return {};
    }
};
</script>

<style lang="scss" scoped></style>
