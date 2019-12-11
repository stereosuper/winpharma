<template>
    <div>
        <Header />
        <nuxt />
        <Svgs />
    </div>
</template>

<script>
import Header from '~/components/Header';
import Svgs from '~/components/Svgs';

export default {
    components: {
        Header,
        Svgs
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
