<template>
    <div class="wrapper-testimonies">
        <div class="wrapper-bg-testimonies">
            <img src="img/bg-testimonies-mobile.svg" alt="" class="bg-testimonies-mobile" />
            <img src="img/bg-testimonies.svg" alt="" class="bg-testimonies" />
        </div>
        <div class="container">
            <div class="wrapper-title">
                <h3 class="testimonies-title">
                    Comme ces pharmaciens ouvrez-vous à de <span class="secondary">nouveaux horizons&nbsp;!</span>
                </h3>
            </div>
            <div class="testimonies-intro">
                <p>
                    Nos pharmacies equipées de winAutopilote ont trouvé de nouvelles façons de dynamiser leur officine :
                    mise en place des actions de promotions, plus de disponibilité pour écouter les clients, du temps
                    pour réorganiser son backoffice.
                </p>
                <Button :href="'#'" :type="'Secondary'">
                    Tous nos témoignages
                </Button>
            </div>
        </div>
        <div class="around-testimonies">
            <ul ref="testimoniesWrapper" class="testimonies">
                <li
                    v-for="(testimony, index) in testimoniesDouble"
                    :key="testimony.title + index"
                    ref="testimonies"
                    class="testimony"
                    @mouseenter="stop"
                    @mouseleave="play"
                >
                    <blockquote>
                        <h4 class="h4">
                            {{ testimony.title }}
                        </h4>
                        <p>
                            <span class="blockquote-content" v-html="testimony.text"></span>
                            <span class="blockquote-wrapper-author">
                                <span class="wrapper-img"></span>
                                <span>
                                    <cite class="blockquote-author">{{ testimony.author }}</cite>
                                    <span class="blockquote-source">{{ testimony.source }}</span>
                                </span>
                            </span>
                        </p>
                    </blockquote>
                </li>
            </ul>

            <svg class="svg-path" viewBox="0 0 1878 346" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref="path" d="M1 345C109 193 225 95 479 95C1109.43 95 1289 469 1877 1" stroke="black" />
            </svg>
        </div>
    </div>
</template>

<script>
import { gsap, CSSPlugin } from 'gsap/all';

if (process.browser) {
    gsap.registerPlugin(CSSPlugin);
}

export default {
    data: () => ({
        testimonies: [
            {
                title: 'Sécurité et simplicité',
                text:
                    "Pour moi, l’automatisation présente <strong>un gain de temps important</strong> et pour rien au monde je ne reviendrai en arrière. Cela apporte <strong>sécurité et simplicité</strong> surtout en cas d'équipe réduite.",
                author: 'Hélène Lecoq',
                source: 'Issy-les-Moulineaux (92)'
            },
            {
                title: 'Je gagne 1h de temps par jour',
                text:
                    "J'ai gagné avec winAutopilote au moins 1h/jour soit presque <strong>une journée chaque semaine</strong>. Imaginez tout ce que vous pouvez faire de mieux. Pour ma part : des formations, du coaching, des travaux et du sport !",
                author: 'Isabelle Delobelle',
                source: 'Orchies (59)'
            },
            {
                title: 'J’ai gagné en efficacité',
                text:
                    "WinAutopilote, <strong>c'est un gain de temps énorme !</strong>  On se libère des commandes grossistes. Depuis, <strong>j’ai gagné en efficacité</strong>, en stock <strong>et surtout en marge !</strong>",
                author: 'Benoit Beaussier',
                source: 'Tinchebray (61)'
            },

            {
                title: 'Tranquillité d’esprit au quotidien',
                text:
                    "WinAutopilote permet un pilotage automatique des commandes et une <strong>tranquillité d'esprit au quotidien.</strong> Je gagne 1h de temps par jour soit <strong>6h par semaine minimum.</strong>",
                author: 'Nicolas Zinck',
                source: 'Soisy-sur-Seine (59)'
            },

            {
                title: 'Tout se déroule en automatique',
                text:
                    "En période de forte activité ou lorsqu'un collaborateur est absent, ce n'est pas la panique. <strong>Tout se déroule en automatique</strong>, sans stress et sans surcharge de travail.",
                author: 'Olivier Henry',
                source: 'Mereau (18)'
            },
            {
                title: 'Mon stock a baissé de 10K euros',
                text:
                    'Les commandes se passent sans intervention de ma part. <strong>Les erreurs constatées sont très minimes.</strong> J’ai gagné en tranquillité d’esprit et <strong>mon stock a baissé de 10K euros !</strong>',
                author: 'Françoise Koenig',
                source: 'Versailles (78)'
            },
            {
                title: 'C’est Winpharma qui gère !',
                text:
                    'Pour tous ceux qui acceptent le Pharma-ML, <strong>c’est Winpharma qui gère !</strong> Pour les autres, la commande est paramétrée dans winAutopilote et envoyée <strong>sans vérification</strong>.',
                author: 'Marc Lhopitalier',
                source: 'Mouchamps (85)'
            }
        ],
        wrapperWidth: 1280,
        slide: null
    }),
    computed: {
        testimoniesDouble() {
            return this.testimonies.concat(this.testimonies);
        },
        ww() {
            return this.$store.state.superWindow ? this.$store.state.superWindow.width : 0;
        }
    },
    watch: {
        ww(w) {
            if (!this.slide && w < 780) return;
            if (this.slide) {
                this.slide.kill();
                this.slide = null;
            }
            gsap.set(this.$refs.testimonies, { clearProps: 'all' });
            gsap.set(this.$refs.testimoniesWrapper, { clearProps: 'all' });
            if (w >= 780) {
                this.$nextTick(() => {
                    this.initSlide();
                });
            }
        }
    },
    mounted() {
        if (this.ww >= 780) {
            this.$nextTick(() => {
                this.initSlide();
            });
        }
    },
    methods: {
        initSlide() {
            this.wrapperWidth = this.$refs.testimoniesWrapper.getBoundingClientRect().width / 2;
            this.go();
        },
        easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        setCardsY() {
            this.$refs.testimonies.forEach(el => {
                const rect = el.getBoundingClientRect();

                let x = rect.left / this.ww;

                let y = gsap.getProperty(el, 'y');

                if (rect.left >= -440 && x < 0.2) {
                    x = this.mapRange(x, -0.5, 0.2, 1, 0);
                    y = this.easeInOutQuad(x);
                } else if (x >= 0.2 && x < 0.6) {
                    x = this.mapRange(x, 0.2, 0.6, 0, 1);
                    y = this.easeInOutQuad(x);
                } else if (x >= 0.6 && rect.left < this.ww + 440) {
                    x = this.mapRange(x, 0.6, 1.3, 1, 0);
                    y = this.easeInOutQuad(x);
                }

                gsap.set(el, { y: y * 100 });
            });
        },
        stop() {
            if (this.ww < 780) return;
            gsap.to(this.slide, { duration: 2.4, timeScale: 0.3, ease: 'power2.out' });
        },
        play() {
            if (this.ww < 780) return;
            gsap.to(this.slide, { duration: 2.4, timeScale: 1, ease: 'power2.out' });
        },
        go() {
            console.log('go');

            this.slide = gsap.to(this.$refs.testimoniesWrapper, {
                duration: 60,
                ease: 'linear',
                x: -this.wrapperWidth,
                repeat: -1,
                onRepeat: () => {
                    gsap.set(this.$refs.testimoniesWrapper, {
                        x: 0
                    });
                },
                onUpdate: () => {
                    this.setCardsY();
                }
            });
        },
        mapRange(value, low1, high1, low2, high2) {
            return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-testimonies {
    position: relative;
    padding: 120px 0;
}
.wrapper-bg-testimonies {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
}
.bg-testimonies-mobile,
.bg-testimonies {
    position: absolute;
    max-width: none;
    left: -70px;
    top: 3%;
    width: 750px;
    min-width: 100%;
}

.bg-testimonies {
    display: none;
}

.wrapper-title {
    position: relative;
    margin-bottom: 30px;
    padding: 0 0 30px;
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid #ffe2db;
    }
}
.testimonies-title {
    font-family: $ageo-semi-bold;
    font-size: 2.8rem;
    line-height: 30px;
    max-width: 480px;
}
.testimonies-intro {
    p {
        margin-bottom: 25px;
        font-size: 1.6rem;
        line-height: 28px;
        color: $primary-darker;
    }
}
.around-testimonies {
    position: relative;
    display: flex;
}
.testimonies {
    display: flex;
    margin: 40px 0 25px;
    backface-visibility: hidden;
    will-change: transform;
    transform-style: preserve-3d;
    perspective: 1000px;
}
.testimony {
    flex: 0 0 auto;
    width: calc(100vw - #{4 * $small-gutter});
    padding: 20px 30px;
    margin: 0 $small-gutter * 2;
    border-radius: 8px;
    background: $white;
    box-shadow: 0px 0px 30px rgba(112, 112, 112, 0.1);
    will-change: transform;
    transform-style: preserve-3d;
    perspective: 1000px;
    .h4 {
        font-size: 2rem;
        margin: 0 0 20px;
    }
    .blockquote-content {
        font-family: $dm;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 20px;
        color: $grey;
        &::before,
        &::after {
            content: none;
        }
        > strong {
            font-weight: 700;
        }
    }
    .blockquote-author {
        line-height: 24px;
        color: $primary-darker;
    }
    .blockquote-source {
        font-size: 1.3rem;
        font-weight: 500;
        line-height: 24px;
        color: $grey;
    }
}
.blockquote-wrapper-author {
    display: flex;
    align-items: center;
    .wrapper-img {
        flex: 0 0 auto;
        width: 40px;
        height: 40px;
        margin-right: 15px;
        border-radius: 50%;
        background: $primary;
    }
}

.svg-path {
    margin-left: -440px;
    width: calc(100vw + 880px);
    backface-visibility: hidden;
    will-change: transform;
    transform-style: preserve-3d;
    perspective: 1000px;
}

@media (min-width: $phone) {
    .bg-testimonies-mobile,
    .bg-testimonies {
        left: 0;
        top: 0;
    }
}

@media (min-width: $tablet) {
    .bg-testimonies-mobile {
        display: none;
    }
    .bg-testimonies {
        display: block;
    }
    .testimonies-intro {
        width: percentage(8/12);
        margin-left: percentage(2/12);
    }
    .testimonies-title {
        font-size: 3.6rem;
    }
    .testimony {
        padding: 40px 50px;
        width: 400px;
    }
}

@media (min-width: $desktop-small) {
    .testimonies-title {
        max-width: none;
        width: percentage(5/12);
    }
    .wrapper-title {
        margin-left: percentage(2/12);
        &::before {
            width: calc(100vw - #{2 * $small-gutter});
        }
    }
    .testimonies-intro {
        width: percentage(5/12);
        margin-left: percentage(4/12);
    }
    .bg-testimonies {
        top: auto;
        bottom: 0;
        width: 120%;
    }
}

@media (min-width: $desktop) {
    .bg-testimonies {
        width: 100%;
    }
}
</style>
