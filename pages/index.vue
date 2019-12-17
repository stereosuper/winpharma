<template>
    <div>
        <Hero />
        <KeyFigures />
        <Experiences />
    </div>
</template>

<script>
import { getHome } from '~/cms';
import Hero from '~/components/Hero';
import KeyFigures from '~/components/KeyFigures';
import Experiences from '~/components/Experiences';

export default {
    components: {
        Hero,
        KeyFigures,
        Experiences
    },
    async asyncData() {
        return {};
    }
};
</script>

<style lang="scss" scoped></style>
