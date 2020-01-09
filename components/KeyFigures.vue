<template>
    <div ref="wrapperKeyFigures" class="wrapper-key-figures">
        <div class="wrapper-wave">
            <svg viewBox="0 0 1440 178" preserveAspectRatio="none" class="wave-aze">
                <path
                    d="M0 116.061C174.596 -7.90953 531.156 -21.6062 776.5 23.8375C896.733 46.3769 1222.62 120.419 1440 176.959C1440 176.959 1440 177.262 1440 178H0V116.061Z"
                />
            </svg>
        </div>
        <div class="container">
            <h3 ref="keyFiguresTitle" class="h3 key-figures-title">
                Des résultats époustouflants
                <span class="second-line">pour <span class="secondary">toutes les pharmacies de&nbsp;:</span></span>
            </h3>
            <div class="wrapper-tabs">
                <div class="outer-tabs">
                    <button
                        ref="firstTabButton"
                        :class="{ active: tabActive === 0 && showActive }"
                        type="button"
                        class="key-figures-button"
                        @click="changeTab(0, $event)"
                    >
                        Quartier
                    </button>
                    <button
                        :class="{ active: tabActive === 1 && showActive }"
                        type="button"
                        class="key-figures-button"
                        @click="changeTab(1, $event)"
                    >
                        Village
                    </button>
                    <button
                        :class="{ active: tabActive === 2 && showActive }"
                        type="button"
                        class="key-figures-button"
                        @click="changeTab(2, $event)"
                    >
                        Centre C<span class="hide-small-device">ommerc</span>ial
                    </button>
                    <span class="select-bar" ref="selectBar"></span>
                </div>
            </div>
            <div
                :style="{ minHeight: tabContentActiveHeight + 'px' }"
                :class="{ 'height-set': heightTabSet }"
                class="wrapper-tabs-contents"
            >
                <div :class="{ active: tabActive === 0 }" class="tab-content">
                    <ul class="key-figures">
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>90%</strong> de taux d'automatisation</h4>
                            <p>En préparation envoi et réception des commandes.</p>
                        </li>
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>30%</strong> de manquants en moins</h4>
                            <p>Pour des prévisions plus justes et des besoins anticipés.</p>
                        </li>
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>+20&nbsp;000€</strong> de trésorerie</h4>
                            <p>Une bonne adéquation entre les besoins et le taux d'immobilisation.</p>
                        </li>
                    </ul>
                    <div class="user">
                        <div class="wrapper-img">
                            <img src="img/jean-rene-delobelle.png" alt="" />
                        </div>
                        <div>
                            <div class="wrapper-user-name-company">
                                <span class="user-name">Jean-René Delobelle</span>
                                <span class="user-company">, Pharmacie à Orchie (59)</span>
                            </div>
                            <div class="user-company">Chiffre d’affaires : 2M&nbsp;€</div>
                        </div>
                    </div>
                </div>
                <div :class="{ active: tabActive === 1 }" class="tab-content">
                    <ul class="key-figures">
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>91%</strong> de taux d'automatisation</h4>
                            <p>En préparation envoi et réception des commandes.</p>
                        </li>
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>8h</strong> gagnées chaque semaine</h4>
                            <p>Grâce à l’automatisation des commandes et la gestion des stocks.</p>
                        </li>
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>+25&nbsp;000€</strong> de trésorerie</h4>
                            <p>Récupérés grâce à un stock et des canaux d'achat optimisés.</p>
                        </li>
                    </ul>
                    <div class="user">
                        <div class="wrapper-img">
                            <img src="img/olivier-henry.png" alt="" />
                        </div>
                        <div>
                            <div class="wrapper-user-name-company">
                                <span class="user-name">Olivier Henry</span>
                                <span class="user-company">, Pharmacie Mereau (18)</span>
                            </div>
                            <div class="user-company">Chiffre d’affaires : 1,2M&nbsp;€</div>
                        </div>
                    </div>
                </div>
                <div :class="{ active: tabActive === 2 }" class="tab-content">
                    <ul class="key-figures">
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>87%</strong> de taux d'automatisation</h4>
                            <p>En préparation envoi et réception des commandes.</p>
                        </li>
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>1 temps plein</strong> d'économisé</h4>
                            <p>Du temps consacré pour optimiser la pharmacie.</p>
                        </li>
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>+ de sérénité</strong> au quotidien</h4>
                            <p>Des outils précis pour améliorer mon suivi et éviter les ruptures.</p>
                        </li>
                    </ul>
                    <div class="user">
                        <div class="wrapper-img">
                            <img src="img/sophie-lacheze.png" alt="Sophie Lachèze" />
                        </div>
                        <div>
                            <div class="wrapper-user-name-company">
                                <span class="user-name">Sophie Lachèze</span>
                                <span class="user-company">, Pharmacie à Merignac (33)</span>
                            </div>
                            <div class="user-company">Chiffre d’affaires : 7,2M&nbsp;€</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap';
import { query, forEach } from '@stereorepo/sac';

export default {
    data: () => ({
        tabActive: 0,
        showActive: false,
        myWatcher: null,
        keyFiguresButtons: null,
        keyFiguresActive: null,
        userActive: null,
        tabContents: null,
        tabContentActive: null,
        tabContentActiveHeight: 0,
        heightTabSet: false,
        tlAppear: null,
        tlChangeTab: null,
        keyFiguresNotActive: null,
        usersNotActive: null,
        transitionDone: true
    }),
    computed: {
        ww() {
            if (!this.$store.state.superWindow) return false;
            return this.$store.state.superWindow.width;
        }
    },
    watch: {
        ww() {
            this.tabContentHeight();
        }
    },
    mounted() {
        this.$stereorepo.superScroll.initializeScroll();
        this.$stereorepo.superWindow.initializeWindow(this.$store);

        this.tabContents = query({ selector: '.tab-content' });
        this.tabContentActive = this.tabContents[this.tabActive];
        this.keyFiguresButtons = query({ selector: '.key-figures-button' });
        this.keyFiguresActive = query({ selector: '.key-figure', ctx: this.tabContentActive });
        this.userActive = query({ selector: '.user', ctx: this.tabContentActive });

        this.tabContentHeight();
        // Watch an element
        this.myWatcher = this.$stereorepo.superScroll
            .watch({
                element: this.$refs.wrapperKeyFigures,
                options: {
                    stalk: false,
                    triggerOffset: '40%'
                }
            })
            .on('enter-view', () => {
                this.tlAppear = gsap.timeline();
                this.tlAppear.to(this.$refs.keyFiguresTitle, { duration: 1.2, x: 0, opacity: 1, ease: 'power4.out' });
                this.tlAppear.to(this.keyFiguresButtons, {
                    duration: 0.7,
                    x: 0,
                    opacity: 1,
                    stagger: 0.2,
                    delay: -0.9,
                    ease: 'power4.out',
                    onComplete: () => {
                        this.showActive = true;
                        const button = this.$refs.firstTabButton;
                        const width = button.getBoundingClientRect().width;
                        const left = button.offsetLeft;
                        gsap.to(this.$refs.selectBar, {
                            duration: 0.7,
                            width: width,
                            transformOrigin: '50% 50%',
                            ease: 'power4.inOut',
                            x: left
                        });
                    }
                });
                this.tlAppear.to(
                    this.keyFiguresActive,
                    { duration: 1, scale: 1, force3D: true, opacity: 1, stagger: 0.1, delay: 0.3, ease: 'power4.out' },
                    'keyFiguresAppearing'
                );
                this.tlAppear.to(this.userActive, { duration: 0.7, opacity: 1, delay: 0.3 }, 'keyFiguresAppearing');
            });
    },
    beforeDestroy() {
        // Forget the watcher to avoid memory leak
        if (this.myWatcher) this.myWatcher.forget();
        this.$stereorepo.superScroll.destroyScroll();
    },
    destroyed() {
        // this.$store is your VueX store instance
        this.$stereorepo.superWindow.destroyWindow(this.$store);
    },
    methods: {
        tabContentHeight() {
            if (!this.tabContentActive) return;
            this.tabContentActiveHeight = this.tabContentActive.getBoundingClientRect().height;
            this.heightTabSet = true;
        },
        changeTab(tabNb, e) {
            if (tabNb !== this.tabActive && this.transitionDone) {
                this.transitionDone = false;
                const width = e.target.getBoundingClientRect().width;
                const left = e.target.offsetLeft;
                gsap.to(this.$refs.selectBar, {
                    duration: 0.7,
                    width: width,
                    transformOrigin: '50% 50%',
                    ease: 'power4.inOut',
                    x: left
                });

                // Clear other tabs styles
                this.keyFiguresNotActive = query({ selector: '.tab-content:not(.active) .key-figure' });
                this.usersNotActive = query({ selector: '.tab-content:not(.active) .user' });
                forEach(this.keyFiguresNotActive, item => {
                    item.removeAttribute('style');
                });
                forEach(this.usersNotActive, item => {
                    item.removeAttribute('style');
                });
                // Hide current key figures
                this.tlChangeTab = gsap.timeline();
                this.tlChangeTab.to(
                    this.keyFiguresActive,
                    { duration: 0.5, scale: 0.9, opacity: 0, force3D: true, stagger: 0.1, ease: 'power4.out' },
                    'keyFiguresDisappearing'
                );
                this.tlChangeTab.to(this.userActive, { duration: 0.15, opacity: 0 }, 'keyFiguresDisappearing');

                // Show new key figures
                this.tlChangeTab.add(() => {
                    this.tabActive = tabNb;
                    this.tabContentActive = this.tabContents[this.tabActive];
                    this.tabContentActiveHeight = this.tabContentActive.getBoundingClientRect().height;
                    this.keyFiguresActive = query({ selector: '.key-figure', ctx: this.tabContentActive });
                    this.userActive = query({ selector: '.user', ctx: this.tabContentActive });
                    this.tlChangeTab.to(
                        this.keyFiguresActive,
                        { duration: 1, scale: 1, force3D: true, opacity: 1, stagger: 0.1, ease: 'power4.out' },
                        'newKeyFiguresAppearing'
                    );
                    this.tlChangeTab.to(
                        this.userActive,
                        {
                            duration: 0.7,
                            opacity: 1,
                            delay: 0.3,
                            onComplete: () => {
                                this.transitionDone = true;
                            }
                        },
                        'newKeyFiguresAppearing'
                    );
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-key-figures {
    position: relative;
    z-index: 1;
    padding: 15px 0 50px;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: $fake-white;
        z-index: -1;
    }
}
.wrapper-wave {
    position: absolute;
    overflow: hidden;
    top: -47px;
    left: 0;
    right: 0;
    height: 48px;
    .wave-aze {
        display: block;
        width: calc(100% + 10px);
        height: 100%;
        fill: $fake-white;
    }
}
.select-bar {
    height: 3px;
    width: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: $secondary;
}

.outer-tabs {
    position: relative;
    display: flex;
    width: 100%;
    > button {
        flex: 1 1 auto;
        position: relative;
        padding: 0 10px 30px;
        font-family: $ageo-medium;
        font-size: 1.8rem;
        border: 0;
        color: $grey-light;
        transition: color 0.4s $easeInOut;
        &.active {
            color: $secondary;
        }
    }
}

.wrapper-tabs {
    position: relative;
    display: flex;
    &::before {
        content: '';
        position: absolute;
        bottom: 1px;
        left: 0;
        right: 0;
        border-bottom: 1px solid $grey-lighter;
    }
}
.wrapper-tabs-contents {
    position: relative;
    margin-top: 30px;
    transition: min-height 0.2s ease-out;
    &.height-set {
        .tab-content {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            display: block;
            opacity: 0;
            visibility: hidden;
            &.active {
                opacity: 1;
                visibility: visible;
            }
        }
    }
}
.tab-content {
    display: none;
    backface-visibility: hidden;
    will-change: transform;
    &.active {
        display: block;
    }
}
.key-figures {
    display: flex;
    flex-direction: column;
    margin: 0;
    > li {
        margin-bottom: 20px;
        padding: 30px;
        border-radius: 8px;
        background: $white;
        box-shadow: 0px 0px 20px rgba($black, 0.05);
        &:last-child {
            margin-bottom: 0;
        }
    }
    p {
        margin: 0;
        font-size: 1.4rem;
        line-height: 20px;
        color: $grey;
    }
}
.key-figure-title {
    margin: 0 0 6px;
    font-family: $ageo-semi-bold;
    font-size: 2rem;
    line-height: 24px;
    > strong {
        display: block;
        font-size: 3.8rem;
        line-height: 46px;
        color: $secondary;
    }
}
.user {
    display: flex;
    align-items: center;
    margin-top: 30px;
    line-height: 17px;
    color: $grey-light;
    font-family: $dm;
    font-size: 1.4rem;
    .wrapper-img {
        flex: 0 0 auto;
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border-radius: 50%;
    }
    .wrapper-user-name-company {
        display: flex;
        justify-content: flex-start;
        align-items: baseline;
    }
    .user-name {
        font-weight: 700;
    }
}
.hide-small-device {
    display: none;
}

.key-figures-title,
.outer-tabs > button {
    transform: translate3d(-50px, 0, 0);
    opacity: 0;
}
.key-figure {
    transform-origin: 50% 50%;
    transform: scale(0.9);
    opacity: 0;
}
.user {
    opacity: 0;
}

@media (min-width: $tablet) {
    .wrapper-key-figures {
        padding: 0 0 50px;
    }
    .wrapper-wave {
        top: -99px;
        height: 100px;
    }
}

@media (min-width: $desktop-small) {
    .outer-tabs {
        width: auto;
        margin-left: auto;
        > button {
            flex: 0 0 auto;
            margin-left: 20px;
            padding-left: 20px;
            padding-right: 20px;
            &:first-child {
                margin-left: 0;
            }
        }
    }
    .key-figures {
        flex-direction: row;
        align-items: stretch;
        width: calc(100% + #{2 * $gutter});
        margin-left: #{-$gutter};
        > li {
            flex: 0 0 auto;
            width: calc(33.3333% - #{2 * $gutter});
            margin: 0 #{$gutter};
        }
    }
    .h3 {
        margin-bottom: 0;
        .second-line {
            display: block;
        }
    }
    .hide-small-device {
        display: inline;
    }
}

@media (min-width: $desktop-large) {
    .wrapper-key-figures {
        margin-top: -60px;
        &::before {
            top: 60px;
        }
    }
    .wrapper-wave {
        top: -110px;
        height: 170px;
    }
}
</style>
