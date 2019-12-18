<template>
    <div>
        <Hero />
        <KeyFigures />
        <Experiences />
        <Testimonies />
    </div>
</template>

<script>
import { getHome } from '~/cms';
import Hero from '~/components/Hero';
import KeyFigures from '~/components/KeyFigures';
import Experiences from '~/components/Experiences';
import Testimonies from '~/components/Testimonies';

export default {
    components: {
        Hero,
        KeyFigures,
        Experiences,
        Testimonies
    },
    async asyncData() {
        return {};
    }
};
</script>

<style lang="scss" scoped></style>
