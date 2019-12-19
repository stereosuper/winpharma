<template>
    <div>
        <Header />
        <nuxt />
        <Svgs />
        <Footer />
    </div>
</template>

<script>
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
        this.$stereorepo.superWindow.initializeWindow(this.$store);
        this.$nextTick(() => {
            this.$store.commit('setLoading', false);
        });
    }
};
</script>

<style></style>
