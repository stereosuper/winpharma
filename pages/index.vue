<template>
    <div>
        <Hero />
        <KeyFigures />
        <Experiences />
        <Testimonies />
        <Cards />
        <PreFooter />
    </div>
</template>

<script>
import Hero from '~/components/Hero';
import KeyFigures from '~/components/KeyFigures';
import Experiences from '~/components/Experiences';
import Testimonies from '~/components/Testimonies';
import Cards from '~/components/Cards';
import PreFooter from '~/components/PreFooter';

export default {
    components: {
        Hero,
        KeyFigures,
        Experiences,
        Testimonies,
        Cards,
        PreFooter
    },

    created() {
        if (process.browser) {
            window.addEventListener(
                'beforeunload',
                () => {
                    this.$store.commit('setLoading', true);
                    window.scrollTo(0, 0);
                },
                false
            );
        }
    }
};
</script>

<style lang="scss" scoped></style>
