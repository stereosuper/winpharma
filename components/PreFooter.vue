<template>
    <div ref="wrapperPreFooter" class="wrapper-prefooter">
        <div ref="allText" class="wrapper-txt container">
            <p ref="textPreFooter" class="prefooter-intro">
                Avec la méthode winAutopilote
            </p>
            <p class="prefooter-title">
                Prêt à vous lancer&nbsp;?
            </p>
            <Button :href="'http://www.winpharma.com/info-winautopilote/'" type="Primary" class="quaternary">
                Prendre rendez-vous
            </Button>
        </div>
        <PreFooterIllustration />
    </div>
</template>

<script>
import { gsap } from 'gsap/all';
import { query } from '@stereorepo/sac';
import PreFooterIllustration from '~/components/PreFooterIllustration';
export default {
    components: {
        PreFooterIllustration
    },
    data: () => ({
        watcherWrapper: null,
        watcherText: null,
        wrapper: null,
        text: null
    }),
    mounted() {
        this.$stereorepo.superScroll.initializeScroll();
        this.wrapper = this.$refs.wrapperPreFooter;
        this.text = this.$refs.textPreFooter;

        gsap.set(this.wrapper, { opacity: 0, y: 50 });
        gsap.set(this.$refs.allText, { opacity: 0 });
        this.watcherWrapper = this.$stereorepo.superScroll
            .watch({
                element: this.wrapper,
                options: {
                    stalk: false,
                    triggerOffset: 0
                }
            })
            .on('enter-view', () => {
                gsap.to(this.wrapper, {
                    duration: 1,
                    opacity: 1,
                    y: 0,
                    delay: 0.3,
                    ease: 'power4.out'
                });
            });
        this.watcherText = this.$stereorepo.superScroll
            .watch({
                element: this.text,
                options: {
                    stalk: false,
                    triggerOffset: 200
                }
            })
            .on('enter-view', () => {
                gsap.to(this.$refs.allText, {
                    duration: 1,
                    opacity: 1,
                    ease: 'power1.inOut'
                });
            });
    },
    beforeDestroy() {
        if (this.watcherWrapper) this.watcherWrapper.forget();
        if (this.watcherText) this.watcherText.forget();
        this.$stereorepo.superScroll.destroyScroll();
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
    font-family: $ageo;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 22px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
}
.prefooter-title {
    margin-bottom: 20px;
    font-family: $ageo;
    font-weight: 600;
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
