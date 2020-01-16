<template>
    <div>
        <Header />
        <nuxt />
        <Svgs />
        <Footer />
    </div>
</template>

<script>
import { smoothScrollPolyfill } from '@stereorepo/sac';

import Header from '~/components/Header';
import Svgs from '~/components/Svgs';
import Footer from '~/components/Footer';

export default {
    components: {
        Header,
        Svgs,
        Footer
    },
    mounted() {
        // Initialize polyfills
        smoothScrollPolyfill();

        // Initializing stereorepo
        this.$stereorepo.superWindow.initializeWindow(this.$store);
        this.$stereorepo.superScroll.initializeScroll().then(firstScrollTop => {
            this.$store.commit('scroll/setFirstScrollTop', firstScrollTop);
        });
        this.$stereorepo.superScroll.on('scroll', scrollTop => {
            this.$store.commit('scroll/setScrollTop', scrollTop);
        });

        this.$nextTick(() => {
            this.$store.commit('setLoading', false);
            this.$store.commit('setReady', true);
        });
    }
};
</script>

<style></style>
