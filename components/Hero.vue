<template>
    <div class="hero">
        <div class="wrapper-bg-hero">
            <svg viewBox="0 0 1190 935" preserveAspectRatio="none" class="bg-hero">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M890.755 0C870.405 17.1395 850.106 22.0367 829.442 27.0219C798.016 34.6036 765.746 42.3889 731.169 93.7515C704.963 132.679 698.196 161.446 692.157 187.121C682.844 226.714 675.261 258.951 600.787 309.745C525.527 361.076 506.775 401.679 487.308 443.83C475.019 470.439 462.446 497.664 435.193 528.594C398.661 570.055 340.872 587.401 282.286 604.987C227.931 621.302 172.889 637.823 133.5 674C51.6546 749.17 0 916 0 916C0 916 356.202 749.345 578.898 807.388C715.644 843.029 994.849 896.967 1190 933.293V0H890.755Z"
                    fill="#453270"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M604.134 719.534C814.606 682.166 1018.22 719.753 1190 799.105V935H0V916C175.5 823.5 411 753.824 604.134 719.534Z"
                    fill="#322654"
                />
            </svg>
        </div>
        <div ref="text" class="wrapper-txt container">
            <div class="wrapper-txt-hero">
                <p class="intro">
                    Révolutionner votre gestion des commandes
                </p>
                <h2 class="h2">
                    <strong>winAutopilote<sup>®</sup></strong> c'est simple de gagner beaucoup de temps&nbsp;!
                </h2>
                <h1 class="h1">
                    La Méthode winAutopilote®, unique sur le marché, atteint des gains de temps et des gains financiers
                    encore jamais vus en matière de gestion de stock en pharmacie&nbsp;!
                </h1>
                <Button :href="'http://www.winpharma.com/info-winautopilote/'" type="Primary">
                    Demander une démo
                </Button>
            </div>
        </div>
        <HeroIllustration v-if="showIllus" />
    </div>
</template>

<script>
import { gsap } from 'gsap/all';

import HeroIllustration from '~/components/HeroIllustration';
export default {
    scrollToTop: true,

    components: {
        HeroIllustration
    },
    data: () => ({
        showIllus: false
    }),
    computed: {
        isMobile() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width < this.$breakpoints.list.l;
        },
        ready() {
            return this.$store.state.ready;
        },
        ww() {
            if (!this.$store.state.superWindow) return false;
            return this.$store.state.superWindow.width;
        }
    },
    watch: {
        async ready(r) {
            if (!r) return;
            this.reveal();
        },
        ww(w) {
            if (w >= this.$breakpoints.list.l) {
                this.showIllus = true;
            } else {
                this.showIllus = false;
            }
        }
    },
    methods: {
        reveal() {
            gsap.from(this.$refs.text, {
                duration: 1,
                opacity: 0,
                delay: 1.3
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.hero {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 95vh;
    padding: 110px 0;
    text-align: center;
    overflow: hidden;
    color: $white;
    background: $primary;
    z-index: 1;
}
.wrapper-bg-hero {
    position: absolute;
    top: 0;
    right: -300px;
    bottom: 0;
    width: 80%;
    min-width: 800px;
    overflow: hidden;
    z-index: -1;
}
.bg-hero {
    width: 100%;
    height: 100%;
}
.wrapper-txt {
    position: relative;
    width: 100%;
    z-index: 1;
}
.h2 {
    > strong {
        display: block;
    }
    sup {
        top: -1.2em;
        font-size: 1.8rem;
    }
}
.intro {
    margin: 0 0 32px;
    font-family: $ageo-bold;
    font-size: 1.2rem;
    line-height: 22px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: $white;
}

@media (min-width: $tablet) {
    .wrapper-bg-hero {
        right: 0;
    }
}

@media (min-width: $desktop-small) {
    .hero {
        padding: 150px 0;
        text-align: left;
    }
    .wrapper-txt-hero {
        width: percentage(5/12);
    }
}

@media (min-width: $desktop-large) {
    .hero {
        padding: 200px 0;
    }
}
</style>
