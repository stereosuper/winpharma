<template>
    <div ref="testimoniesContainer" class="wrapper-testimonies">
        <div class="wrapper-bg-testimonies">
            <img src="img/bg-testimonies-mobile.svg" alt="" class="bg-testimonies-mobile" />
            <img src="img/bg-testimonies.svg" alt="" class="bg-testimonies" />
        </div>
        <div class="container">
            <div ref="testimoniesTitle" class="wrapper-title">
                <h3 class="testimonies-title">
                    Avec le temps gagné, comme vos confrères,
                    <span class="secondary">faites avancer les projets dont vous rêvez&nbsp;!</span>
                </h3>
            </div>
            <div ref="testimoniesText" class="testimonies-intro">
                <p>
                    Nos pharmacies equipées de winAutopilote® ont trouvé de nouvelles façons de dynamiser leur officine
                    : mise en place des actions de promotions, plus de disponibilité pour écouter les clients, du temps
                    pour réorganiser son backoffice.
                </p>
                <Button :href="'http://www.winpharma.com/temoignages-winautopilote/'" :type="'Secondary'">
                    Tous nos témoignages
                </Button>
            </div>
        </div>
        <div ref="testimoniesParent" class="around-testimonies">
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
                                <span
                                    class="wrapper-img"
                                    :style="{ backgroundImage: `url(/img/${testimony.img})` }"
                                ></span>
                                <span>
                                    <cite class="blockquote-author">{{ testimony.author }}</cite>
                                    <span class="blockquote-source">{{ testimony.source }}</span>
                                </span>
                            </span>
                        </p>
                    </blockquote>
                </li>
            </ul>
        </div>
        <div v-if="isMobile" class="bullets">
            <span
                v-for="p in testimonies.length"
                :key="'bullet' + p"
                class="bullet"
                :class="{ active: p - 1 === currentBullet }"
            ></span>
        </div>
    </div>
</template>

<script>
import { gsap, CSSPlugin, Draggable, InertiaPlugin } from 'gsap/all';

if (process.browser) {
    gsap.registerPlugin(CSSPlugin, Draggable, InertiaPlugin);
}

export default {
    data: () => ({
        testimonies: [
            {
                title: 'Sécurité et simplicité',
                text:
                    "Pour moi, l’automatisation présente <strong>un gain de temps important</strong> et pour rien au monde je ne reviendrai en arrière. Cela apporte <strong>sécurité et simplicité</strong> surtout en cas d'équipe réduite.",
                author: 'Constance Vanwelden',
                source: 'Mouchin (59)',
                img: 'constance-vanwelden.png'
            },
            {
                title: 'Je gagne 1h de temps par jour',
                text:
                    "J'ai gagné avec winAutopilote® au moins 1h/jour soit presque <strong>une journée chaque semaine</strong>. Imaginez tout ce que vous pouvez faire de mieux. Pour ma part : des formations, du coaching, des travaux et du sport !",
                author: 'Isabelle Delobelle',
                source: 'Orchies (59)',
                img: 'isabelle-delobelle.png'
            },
            {
                title: 'J’ai gagné en efficacité',
                text:
                    "winAutopilote®, <strong>c'est un gain de temps énorme !</strong>  On se libère des commandes grossistes. Depuis, <strong>j’ai gagné en efficacité</strong>, en stock <strong>et surtout en marge !</strong>",
                author: 'Benoit Beaussier',
                source: 'Tinchebray (61)',
                img: 'benoit-beaussier.png'
            },

            {
                title: 'Tranquillité d’esprit au quotidien',
                text:
                    "winAutopilote® permet un pilotage automatique des commandes et une <strong>tranquillité d'esprit au quotidien.</strong> Je gagne 1h de temps par jour soit <strong>6h par semaine minimum.</strong>",
                author: 'Nicolas Zinck',
                source: 'Soisy-sur-Seine (59)',
                img: 'nicolas-zinck.png'
            },

            {
                title: 'Tout se déroule en automatique',
                text:
                    "En période de forte activité ou lorsqu'un collaborateur est absent, ce n'est pas la panique. <strong>Tout se déroule en automatique</strong>, sans stress et sans surcharge de travail.",
                author: 'Olivier Henry',
                source: 'Mereau (18)',
                img: 'olivier-henry.png'
            },
            {
                title: 'Mon stock a baissé de 10K euros',
                text:
                    'Les commandes se passent sans intervention de ma part. <strong>Les erreurs constatées sont très minimes.</strong> J’ai gagné en tranquillité d’esprit et <strong>mon stock a baissé de 10K euros !</strong>',
                author: 'Françoise Koenig',
                source: 'Versailles (78)',
                img: 'francoise-koenig.png'
            },
            {
                title: 'C’est Winpharma qui gère !',
                text:
                    'Pour tous ceux qui acceptent le Pharma-ML, <strong>c’est Winpharma qui gère !</strong> Pour les autres, la commande est paramétrée dans winAutopilote® envoyée <strong>sans vérification</strong>.',
                author: 'Marc Lhopitalier',
                source: 'Mouchamps (85)',
                img: 'marc-lhopitalier.png'
            }
        ],
        wrapperWidth: 0,
        slide: null,
        drag: null,
        currentBullet: 0,
        watcher: null,
        appeared: false
    }),
    computed: {
        isMobile() {
            if (!this.$store.state.superWindow) return true;
            return this.$store.state.superWindow.width < this.$breakpoints.list.m;
        },
        testimoniesDouble() {
            return this.isMobile ? this.testimonies.concat() : this.testimonies.concat(this.testimonies);
        },
        ww() {
            return this.$store.state.superWindow ? this.$store.state.superWindow.width : 0;
        }
    },
    watch: {
        ww() {
            if (!this.appeared) return;
            if ((this.drag && this.isMobile) || (!this.isMobile && this.slide)) return;

            if (this.isMobile && !this.drag) {
                if (this.slide) {
                    this.slide.kill();
                    this.slide = null;
                }
                this.initDrag();
            }

            if (!this.isMobile && !this.slide) {
                if (this.drag) {
                    this.drag.kill();
                    this.drag = null;
                }
                this.initSlide();
            }
            gsap.set(this.$refs.testimonies, { clearProps: 'all' });
            gsap.set(this.$refs.testimoniesWrapper, { clearProps: 'all' });
        }
    },
    mounted() {
        this.$stereorepo.superScroll.initializeScroll();
        if (!this.isMobile) {
            this.setCardsY();
        }
        gsap.set([this.$refs.testimoniesTitle, this.$refs.testimoniesText], { opacity: 0 });
        gsap.set(this.$refs.testimonies, { opacity: 0, y: '+=50' });

        const staggerValue = this.isMobile ? 0 : 0.05;

        this.watcher = this.$stereorepo.superScroll
            .watch({
                element: this.$refs.testimoniesContainer,
                options: {
                    stalk: false,
                    triggerOffset: '30%'
                }
            })
            .on('enter-view', () => {
                gsap.to(this.$refs.testimoniesTitle, {
                    duration: 1,
                    opacity: 1,
                    ease: 'power1.inOut'
                });
                gsap.to(this.$refs.testimoniesText, {
                    duration: 1,
                    opacity: 1,
                    delay: 0.3,
                    ease: 'power1.inOut'
                });
                gsap.to(this.$refs.testimonies, {
                    duration: 1.2,
                    y: '-=50',
                    opacity: 1,
                    delay: 0.7,
                    stagger: staggerValue,
                    ease: 'power3.out',
                    onComplete: () => {
                        this.appeared = true;
                        this.initModule();
                    }
                });
            });
    },
    beforeDestroy() {
        if (this.watcher) this.watcher.forget();
        this.$stereorepo.superScroll.destroyScroll();
    },
    methods: {
        initModule() {
            if (this.isMobile) {
                this.$nextTick(() => {
                    this.initDrag();
                });
            } else {
                this.$nextTick(() => {
                    this.initSlide();
                });
            }
        },
        initDrag() {
            const self = this;
            [this.drag] = Draggable.create(this.$refs.testimoniesWrapper, {
                type: 'x',
                bounds: this.$refs.testimoniesParent,
                inertia: true,
                throwResistance: 900,
                maxDuration: 0.45,
                onThrowComplete: function() {
                    const dist = gsap.getProperty(this.target, 'x');
                    self.currentBullet = -dist / self.ww;
                },
                snap: value => Math.round(value / this.ww) * this.ww
            });
        },
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
                } else {
                    y = 0;
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
            this.slide = gsap.to(this.$refs.testimoniesWrapper, {
                duration: 100,
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
            this.slide.timeScale(0);
            gsap.to(this.slide, { duration: 1, timeScale: 1, ease: 'power1.inOut' });
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
    display: flex;
    flex-direction: column;
    overflow: hidden;
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
    line-height: 40px;
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
    align-items: center;
    margin: 40px 0 25px;
    backface-visibility: hidden;
    will-change: transform;
    transform-style: preserve-3d;
    perspective: 1000px;
}
.testimony {
    user-select: none;
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
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
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

.bullets {
    display: flex;
    align-self: center;
}

.bullet {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    margin: 0 12px;
    border: 1px solid #b5b3b3;
    transition: 0.2s ease-in-out;
    &.active {
        width: 24px;
        border-color: $secondary;
    }
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
    .around-testimonies {
        padding-bottom: 90px;
    }
    .testimony {
        padding: 40px 50px;
        width: 400px;
    }
}

@media (min-width: $desktop-small) {
    .testimonies-title {
        max-width: none;
        width: percentage(5/10);
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
        width: 130%;
    }
    .wrapper-bg-testimonies {
        background-color: #fef5f3;
        &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding-top: 23%;
            background-color: $white;
            z-index: -1;
        }
    }
}

@media (min-width: $desktop-large) {
    .bg-testimonies {
        width: 100%;
        position: static;
    }
    .wrapper-bg-testimonies {
        overflow: hidden;
        top: auto;
    }
}
</style>
