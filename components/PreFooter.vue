<template>
    <div class="wrapper-prefooter">
        <div class="wrapper-txt container">
            <p class="prefooter-intro">
                Avec la méthode winAutopilote
            </p>
            <p class="prefooter-title">
                Prêt à vous lancer&nbsp;?
            </p>
            <Button :href="'#'" type="Primary">
                Prendre rendez-vous
            </Button>
        </div>
        <PreFooterIllustration />
    </div>
</template>

<script>
import PreFooterIllustration from '~/components/PreFooterIllustration';
export default {
    components: {
        PreFooterIllustration
    }
};
</script>

<style lang="scss" scoped>
.wrapper-prefooter {
    position: relative;
    text-align: center;
    color: $white;
    background: $primary;
    p {
        color: $white;
    }
}
.wrapper-txt {
    position: relative;
    z-index: 1;
    padding: 90px 0 35px;
}
.prefooter-intro {
    margin-bottom: 20px;
    font-family: $ageo-bold;
    font-size: 1.4rem;
    line-height: 22px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
}
.prefooter-title {
    margin-bottom: 20px;
    font-family: $ageo-semi-bold;
    font-size: 3.2rem;
    line-height: 40px;
}

@media (min-width: $tablet) {
    .wrapper-txt {
        padding: 315px 0 25px;
    }
    .prefooter-title {
        font-size: 4.2rem;
        line-height: 60px;
    }
}

@media (min-width: $desktop-small) {
    .prefooter-title {
        font-size: 6.8rem;
        line-height: 80px;
    }
}
</style>
