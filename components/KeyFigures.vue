<template>
    <div ref="wrapperKeyFigures" class="wrapper-key-figures">
        <div class="container">
            <h3 ref="keyFiguresTitle" class="h3 key-figures-title">
                Des résultats époustouflants
                <span class="second-line">pour <span class="secondary">toutes les pharmacies de&nbsp;:</span></span>
            </h3>
            <div class="wrapper-tabs">
                <button
                    :class="{ active: tabActive === 0 }"
                    type="button"
                    class="key-figures-button"
                    @click="changeTab(0)"
                >
                    Village
                </button>
                <button
                    :class="{ active: tabActive === 1 }"
                    type="button"
                    class="key-figures-button"
                    @click="changeTab(1)"
                >
                    Quartier
                </button>
                <button
                    :class="{ active: tabActive === 2 }"
                    type="button"
                    class="key-figures-button"
                    @click="changeTab(2)"
                >
                    Centre C<span class="hide-small-device">ommerc</span>ial
                </button>
            </div>
            <div
                :style="{ minHeight: tabContentActiveHeight + 'px' }"
                :class="{ 'height-set': heightTabSet }"
                class="wrapper-tabs-contents"
            >
                <div :class="{ active: tabActive === 0 }" class="tab-content">
                    <ul class="key-figures">
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>91%</strong> de taux d'automatisation</h4>
                            <p>En préparation envoi et réception des commandes.</p>
                        </li>
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>8h</strong> gagnées</h4>
                            <p>En temps chaque semaine grâce à l’automatisation des commandes.</p>
                        </li>
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>+25&nbsp;000€</strong> de trésorerie</h4>
                            <p>Récupérés grâce à un stock et des canaux d'achat optimisés.</p>
                        </li>
                    </ul>
                    <div class="user">
                        <div class="wrapper-img">
                            <img src="img/olivier-henry.png" alt="">
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
                <div :class="{ active: tabActive === 1 }" class="tab-content">
                    <ul class="key-figures">
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>87%</strong> de taux d'automatisation</h4>
                            <p>En préparation envoi et réception des commandes.</p>
                        </li>
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>1 temps plein</strong> d’économisé</h4>
                            <p>Du temps consacré pour optimiser la pharmacie.</p>
                        </li>
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>+ de sérénité</strong> au quotidien</h4>
                            <p>Des outils précis pour améliorer mon suivi et éviter les ruptures.</p>
                        </li>
                    </ul>
                    <div class="user">
                        <div class="wrapper-img">
                            <img src="img/jean-rene-delobelle.png" alt="">
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
                <div :class="{ active: tabActive === 2 }" class="tab-content">
                    <ul class="key-figures">
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>85%</strong> de taux d'automatisation</h4>
                            <p>En génération, envoi et réception, atteignable dès la 1re journée d'accompagnement.</p>
                        </li>
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>16h</strong> gagnées</h4>
                            <p>C’est le temps gagné chaque mois grâce à l’automatisation des commandes.</p>
                        </li>
                        <li class="key-figure">
                            <h4 class="key-figure-title"><strong>+15&nbsp;000€</strong> de trésorerie</h4>
                            <p>Soit 1 point de trésorerie récupérée pour une pharmacie moyenne.</p>
                        </li>
                    </ul>
                    <div class="user">
                        <div class="wrapper-img">
                            <img src="img/user-placeholder.svg" alt="">
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
        usersNotActive: null
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
                this.tlAppear.to(this.$refs.keyFiguresTitle, { duration: 0.3, x: 0, opacity: 1 });
                this.tlAppear.to(this.keyFiguresButtons, { duration: 0.3, x: 0, opacity: 1, stagger: 0.3, delay: 0.3 });
                this.tlAppear.to(
                    this.keyFiguresActive,
                    { duration: 0.3, scale: 1, opacity: 1, stagger: 0.3, delay: 0.3 },
                    'keyFiguresAppearing'
                );
                this.tlAppear.to(this.userActive, { duration: 0.3, opacity: 1, delay: 0.3 }, 'keyFiguresAppearing');
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
            this.tabContentActiveHeight = this.tabContentActive.getBoundingClientRect().height;
            this.heightTabSet = true;
        },
        changeTab(tabNb) {
            if (tabNb !== this.tabActive) {
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
                    { duration: 0.15, scale: 0.9, opacity: 0, stagger: 0.15 },
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
                        { duration: 0.3, scale: 1, opacity: 1, stagger: 0.3, delay: 0.3 },
                        'newKeyFiguresAppearing'
                    );
                    this.tlChangeTab.to(
                        this.userActive,
                        { duration: 0.3, opacity: 1, delay: 0.3 },
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
    padding: 60px 0 50px;
    background: $fake-white;
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
    > button {
        flex: 1 1 auto;
        position: relative;
        padding: 0 10px 30px;
        font-family: $ageo-medium;
        font-size: 1.8rem;
        border: 0;
        color: $grey-light;
        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            border-bottom: 3px solid $secondary;
            opacity: 0;
        }
        &.active {
            color: $secondary;
            &::before {
                opacity: 1;
            }
        }
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
        font-family: $ageo-semi-bold;
    }
    .user-company {
        font-family: $ageo-medium;
    }
}
.hide-small-device {
    display: none;
}

.key-figures-title,
.wrapper-tabs > button {
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

@media (min-width: $desktop-small) {
    .wrapper-tabs {
        justify-content: flex-end;
        > button {
            flex: 0 0 auto;
            margin-left: 20px;
            padding-left: 20px;
            padding-right: 20px;
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
</style>
