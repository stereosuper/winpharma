<template>
    <div class="wrapper-experiences">
        <div class="container">
            <h2 ref="titleModule" class="title-experiences">
                <span>Découvrez <span class="primary-light">les gains incroyables</span> de vos confrères&nbsp;!</span>
                <Icon name="arrow" class="title-arrow primary-light" />
            </h2>
        </div>
        <div ref="containerExperiences" class="container-experiences">
            <div ref="containerImgLarge" class="container-img-large">
                <div v-if="isL" class="bullets">
                    <span
                        v-for="p in 5"
                        :key="'bullet' + p"
                        class="bullet"
                        :class="{ active: p - 1 === activeBullet }"
                    ></span>
                </div>
                <div ref="bgImg" class="bg-img-large">
                    <div ref="starsBg" class="stars-bg"></div>
                </div>
            </div>
            <ul class="experiences">
                <li class="experience">
                    <div class="experience-content-large">
                        <div class="container-img">
                            <div class="wrapper-img">
                                <div class="bg-img"></div>
                                <div class="wrapper-illus img">
                                    <QuoteAuthor ref="quoteIllus" />
                                </div>
                            </div>
                        </div>
                        <div class="container-txt container">
                            <div class="experience-intro double">
                                <div>
                                    <span class="intro-title">CA annuel</span>
                                    <span class="intro-number primary-light">5,4 M€</span>
                                </div>
                                <div>
                                    <span class="intro-title">Équipe</span>
                                    <span class="intro-number primary-light">20 pers.</span>
                                </div>
                            </div>
                            <div class="experience-content">
                                <blockquote>
                                    <p>
                                        <span class="blockquote-content">
                                            Je suis pharmacien titulaire de la pharmacie du Cœur de la Brie, en
                                            Seine-et-Marne. J’utilise winAutopilote depuis juillet 2019.
                                        </span>
                                        <cite class="blockquote-author">Sylvain Pelletier</cite>
                                        <span class="blockquote-source">WinPharmacien Le Coeur de la Brie (10)</span>
                                    </p>
                                </blockquote>
                                <div class="wrapper-experience-button">
                                    <Button
                                        :href="'http://www.winpharma.com/info-winautopilote/'"
                                        type="Primary"
                                        class="experience-button"
                                    >
                                        Demander une démo
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="experience">
                    <div class="experience-content-large">
                        <div class="container-img">
                            <div class="wrapper-img">
                                <div class="bg-img"></div>
                                <div class="wrapper-illus">
                                    <Reception ref="receptionIllus" />
                                </div>
                            </div>
                        </div>
                        <div class="container-txt container">
                            <div class="experience-intro">
                                <blockquote>
                                    <p>
                                        <span class="blockquote-content secondary">
                                            L’ordinateur s'occupe de mes commandes pendant que mon équipe privilégie nos
                                            patients et les tâches à valeur ajoutée.
                                        </span>
                                        <cite class="blockquote-author">Sylvain Pelletier,</cite>
                                        <span class="blockquote-source">WinPharmacien Le Coeur de la Brie (10)</span>
                                    </p>
                                </blockquote>
                            </div>
                            <div class="experience-content">
                                <h3 class="content-title">
                                    Réception automatique
                                </h3>
                                <h4 class="content-subtitle">
                                    Suppression des faux promis
                                </h4>
                                <p class="content-text">
                                    Aucun laps de temps perdu entre la livraison des produits et le chargement du robot
                                    ou la disponibilité des promis.
                                </p>
                                <h4 class="content-subtitle">
                                    Confort de travail
                                </h4>
                                <p class="content-text">
                                    Votre équipe se consacre plus sereinement à l’accueil, au conseil et au service des
                                    patients.
                                </p>
                                <div class="experience-number">
                                    <div class="wrapper-icon">
                                        <Icon name="time" class="experience-icon" />
                                    </div>
                                    <div class="wrapper-txt">
                                        <p>
                                            <strong>2h de temps gagnées</strong> Chaque jour grâce à la reception
                                            automatique.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="experience">
                    <div class="experience-content-large">
                        <div class="container-img">
                            <div class="wrapper-img">
                                <div class="bg-img"></div>
                                <div class="wrapper-illus">
                                    <Tools ref="toolsIllus" />
                                </div>
                            </div>
                        </div>
                        <div class="container-txt container">
                            <div class="experience-intro">
                                <blockquote>
                                    <p>
                                        <span class="blockquote-content secondary">
                                            Seulement 5 min suffisent pour contrôler et isoler la commande des produits
                                            sensibles, nécessitant votre intervention.
                                        </span>
                                        <cite class="blockquote-author">Sylvain Pelletier,</cite>
                                        <span class="blockquote-source">WinPharmacien Le Coeur de la Brie (10)</span>
                                    </p>
                                </blockquote>
                            </div>
                            <div class="experience-content">
                                <h3 class="content-title">
                                    Des outils simples pour gérer les commandes
                                </h3>
                                <h4 class="content-subtitle">
                                    Visuel et dynamique
                                </h4>
                                <p class="content-text">
                                    Le tableau de bord winAutopilote synthétise et pointe les commandes qui méritent
                                    votre attention.
                                </p>
                                <h4 class="content-subtitle">
                                    Des règles de gestion dynamiques
                                </h4>
                                <p class="content-text">
                                    Des règles personnalisées à la pharmacie, qui évoluent automatiquement tout au long
                                    du cycle de vie des produits.
                                </p>
                                <div class="experience-number">
                                    <div class="wrapper-icon">
                                        <Icon name="eye" class="experience-icon" />
                                    </div>
                                    <div class="wrapper-txt">
                                        <p>
                                            <strong>1 seul coup d’oeil</strong> Visualiser rapidement l’organisation de
                                            la gestion de vos commandes
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="experience">
                    <div class="experience-content-large">
                        <div class="container-img">
                            <div class="wrapper-img">
                                <div class="bg-img"></div>
                                <div class="wrapper-illus">
                                    <Generation ref="generationIllus" />
                                </div>
                            </div>
                        </div>
                        <div class="container-txt container">
                            <div class="experience-intro">
                                <blockquote>
                                    <p>
                                        <span class="blockquote-content secondary">
                                            Le reste des commandes a été envoyé automatiquement en temps et en heure
                                            pendant que j’étais au comptoir auprès de mes patients.
                                        </span>
                                        <cite class="blockquote-author">Sylvain Pelletier,</cite>
                                        <span class="blockquote-source">WinPharmacien Le Coeur de la Brie (10)</span>
                                    </p>
                                </blockquote>
                            </div>
                            <div class="experience-content">
                                <h3 class="content-title">
                                    Génération et envoi automatique
                                </h3>
                                <h4 class="content-subtitle">
                                    L’esprit tranquille
                                </h4>
                                <p class="content-text">
                                    Ne vous souciez plus de vérifier et passer les commandes des grossistes,
                                    d'homéopathie et même de certains laboratoires directs.
                                </p>
                                <h4 class="content-subtitle">
                                    Réduction des erreurs
                                </h4>
                                <p class="content-text">
                                    winAutopilote, mémorise, analyse, controle, et envoi pour vous les commandes à
                                    vérifier. Il n'est jamais distrait ni même pressé.
                                </p>
                                <div class="experience-number">
                                    <div class="wrapper-icon">
                                        <Icon name="time" class="experience-icon" />
                                    </div>
                                    <div class="wrapper-txt">
                                        <p>
                                            <strong>2h de temps gagnées</strong> Par jour grâce à 26 commandes
                                            quotidiennes automatisées
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="experience">
                    <div class="experience-content-large">
                        <div class="container-img">
                            <div class="wrapper-img">
                                <div class="bg-img"></div>
                                <div class="wrapper-illus">
                                    <Stock ref="stockIllus" />
                                </div>
                            </div>
                        </div>
                        <div class="container-txt container">
                            <div class="experience-intro">
                                <blockquote>
                                    <p>
                                        <span class="blockquote-content secondary">
                                            Seulement 5 min suffisent pour contrôler et isoler la commande des produits
                                            sensibles, nécessitant votre intervention.
                                        </span>
                                        <cite class="blockquote-author">Sylvain Pelletier,</cite>
                                        <span class="blockquote-source">WinPharmacien Le Coeur de la Brie (10)</span>
                                    </p>
                                </blockquote>
                            </div>
                            <div class="experience-content">
                                <h3 class="content-title">
                                    Diminution du stock
                                </h3>
                                <h4 class="content-subtitle">
                                    Un stock optimisé
                                </h4>
                                <p class="content-text">
                                    Diminue d’environ 1 %, ce qui représente en moyenne 15 000 € pour une pharmacie
                                    générant 1,5 M€ de chiffre d’affaires.
                                </p>
                                <h4 class="content-subtitle">
                                    Des clients toujours satisfaits
                                </h4>
                                <p class="content-text">
                                    Les produits sont en stock toujours au bon moment. La baisse du stock n'engendre pas
                                    d'augmentation des promis grâce à une optimisation des achats.
                                </p>
                                <div class="experience-number">
                                    <div class="wrapper-icon">
                                        <Icon name="graph" class="experience-icon" />
                                    </div>
                                    <div class="wrapper-txt">
                                        <p>
                                            <strong>+&nbsp;38&nbsp;000€ de trésorerie</strong> Grâce à une diminution du
                                            stock
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap';
import { query, forEach } from '@stereorepo/sac';

import QuoteAuthor from '~/components/ExperiencesIllustrations/QuoteAuthor';
import Reception from '~/components/ExperiencesIllustrations/Reception';
import Tools from '~/components/ExperiencesIllustrations/Tools';
import Stock from '~/components/ExperiencesIllustrations/Stock';
import Generation from '~/components/ExperiencesIllustrations/Generation';

export default {
    components: {
        QuoteAuthor,
        Reception,
        Tools,
        Stock,
        Generation
    },
    data: () => ({
        revealTitle: null,
        containerExperiences: null,
        containerImgLarge: null,
        bgImg: null,
        bgImgColor: '#EB522B',
        starsBg: null,
        revealXp: null,
        bgCollant: null,
        experiences: null,
        collantCreated: false,
        containerTxt: null,
        experiencesContents: null,
        experiencesCollants: [],
        experiencesTxt: [],
        experiencesIntro: [],
        experiencesWrapperIllus: [],
        experiencesIllus: [],
        nbExperiences: 0,
        tlXpIn: null,
        tlXpOut: null,
        activeBullet: 0
    }),
    computed: {
        isL() {
            if (!this.$store.state.superWindow) return false;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.l;
        }
    },
    watch: {
        isL(isBigDevice) {
            if (isBigDevice && !this.collantCreated) {
                this.$nextTick(() => {
                    this.createCollant();
                });
                this.collantCreated = true;
            } else if (!isBigDevice && this.collantCreated) {
                if (this.revealXp) this.revealXp.forget();
                if (this.bgCollant) this.bgCollant.forget();
                forEach(this.experiencesContents, (item, index) => {
                    this.experiencesCollants[index].forget();
                    gsap.set(
                        [
                            this.experiencesContents[index],
                            this.experiencesWrapperIllus[index],
                            this.experiencesIntro[index],
                            this.experiencesTxt[index]
                        ],
                        { clearProps: 'all' }
                    );
                });
                this.collantCreated = false;
            }
        }
    },
    mounted() {
        this.$stereorepo.superScroll.initializeScroll();
        this.$stereorepo.superWindow.initializeWindow(this.$store);

        this.initRefs();

        this.tlXpIn = gsap.timeline();
        this.tlXpOut = gsap.timeline();

        gsap.set(this.$refs.titleModule, { opacity: 0 });

        this.revealTitle = this.$stereorepo.superScroll
            .watch({
                element: this.$refs.titleModule,
                options: {
                    stalk: false,
                    triggerOffset: 200
                }
            })
            .on('enter-view', () => {
                gsap.to(this.$refs.titleModule, { duration: 0.7, opacity: 1, ease: 'power1.inOut' });
                forEach(this.experiencesContents, (item, index) => {
                    this.experiencesCollants[index].forget();
                });
                this.createCollant();
            });

        // Watch an element
        this.revealXp = this.$stereorepo.superScroll
            .watch({
                element: this.containerExperiences,
                options: {
                    stalk: false,
                    triggerOffset: 400
                }
            })
            .on('enter-view', () => {
                // appear initial animation
                gsap.to(this.bgImg, { duration: 0.3, x: 0 });
                this.inXp(0);
            });
        this.bgCollant = this.$stereorepo.superScroll.watch({
            element: this.containerImgLarge,
            options: {
                collant: true,
                target: this.containerExperiences,
                position: 'top',
                collantOffset: 0
            }
        });
    },
    beforeDestroy() {
        // Forget the watcher to avoid memory leak
        if (this.revealXp) this.revealXp.forget();
        if (this.bgCollant) this.bgCollant.forget();
        if (this.revealTitle) this.revealTitle.forget();
        forEach(this.experiencesContents, (item, index) => {
            this.experiencesCollants[index].forget();
        });
        this.$stereorepo.superScroll.destroyScroll();
    },
    destroyed() {
        // this.$store is your VueX store instance
        this.$stereorepo.superWindow.destroyWindow(this.$store);
    },
    methods: {
        initRefs() {
            this.containerExperiences = this.$refs.containerExperiences;
            this.containerImgLarge = this.$refs.containerImgLarge;
            this.bgImg = this.$refs.bgImg;
            this.starsBg = this.$refs.starsBg;
            this.containerTxt = query({ selector: '.container-txt', ctx: this.containerExperiences });
            this.experiences = query({ selector: '.experience', ctx: this.containerExperiences });
            this.experiencesTxt = query({ selector: '.experience-content', ctx: this.containerExperiences });
            this.nbExperiences = this.experiences.length;
            this.experiencesContents = query({ selector: '.experience-content-large', ctx: this.containerExperiences });
            this.experiencesIntro = query({ selector: '.experience-intro', ctx: this.containerExperiences });
            this.experiencesWrapperIllus = query({ selector: '.wrapper-illus', ctx: this.containerExperiences });
            this.experiencesIllus = [
                this.$refs.quoteIllus,
                this.$refs.receptionIllus,
                this.$refs.toolsIllus,
                this.$refs.generationIllus,
                this.$refs.stockIllus
            ];
        },
        createCollant() {
            forEach(this.experiencesContents, (item, index) => {
                this.experiencesCollants[index] = this.$stereorepo.superScroll
                    .watch({
                        element: item,
                        options: {
                            collant: true,
                            target: this.experiences[index],
                            position: 'top',
                            collantOffset: 0
                        }
                    })
                    .on('before-enter-collant', () => {
                        this.outBeforeXp(index);
                    })
                    .on('enter-collant', () => {
                        this.inXp(index);
                    })
                    .on('leave-collant', () => {
                        this.outXp(index);
                    });
            });
            this.$stereorepo.superScroll.update();
        },
        outBeforeXp(xpIndex) {
            if (xpIndex != 0) {
                gsap.set(this.experiencesWrapperIllus[xpIndex], { opacity: 0, scale: 0.9, visibility: 'hidden' });
                gsap.set(this.experiencesTxt[xpIndex], { opacity: 0, visibility: 'hidden' });
                gsap.set(this.experiencesIntro[xpIndex], { opacity: 0, scale: 0.9, visibility: 'hidden' });
                this.experiencesIllus[xpIndex].killFloat();
            }
        },
        inXp(xpIndex) {
            this.activeBullet = xpIndex;
            this.tlXpIn.kill();
            this.tlXpIn = gsap.timeline();
            this.tlXpIn.to(
                this.experiencesWrapperIllus[xpIndex],
                { duration: 0.3, opacity: 1, scale: 1, visibility: 'visible' },
                'first-step'
            );
            this.tlXpIn.to(
                this.bgImg,
                { duration: 0.3, background: xpIndex === 0 ? '#EB522B' : '#593D8C' },
                'first-step'
            );
            if (xpIndex != 0) {
                this.experiencesIllus[xpIndex].launchFloat();
                this.tlXpIn.to(
                    this.starsBg,
                    {
                        duration: 0.8,
                        opacity: 1,
                        visibility: 'visible',
                        backgroundPosition: `-${xpIndex * 300}% 0`,
                        ease: 'power4.inOut'
                    },
                    'first-step'
                );
            } else {
                this.tlXpIn.to(this.starsBg, { duration: 0.3, opacity: 0, visibility: 'hidden' }, 'first-step');
            }
            this.tlXpIn.to(
                this.experiencesTxt[xpIndex],
                { duration: 0.3, opacity: 1, visibility: 'visible' },
                'first-step'
            );
            this.tlXpIn.to(this.experiencesIntro[xpIndex], {
                duration: 0.3,
                opacity: 1,
                visibility: 'visible',
                scale: 1
            });
        },
        outXp(xpIndex) {
            if (xpIndex < this.nbExperiences - 1) {
                gsap.set(this.experiencesWrapperIllus[xpIndex], { opacity: 0, scale: 0.9, visibility: 'hidden' });
                gsap.set(this.experiencesTxt[xpIndex], { opacity: 0, visibility: 'hidden' });
                gsap.set(this.experiencesIntro[xpIndex], { opacity: 0, scale: 0.9, visibility: 'hidden' });
            }
            if (xpIndex != 0) {
                this.experiencesIllus[xpIndex].killFloat();
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-experiences {
    padding: 80px 0 20px;
}
.container-experiences {
    position: relative;
}
.title-experiences {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 30px;
    font-family: $ageo-semi-bold;
    font-size: 3.4rem;
    line-height: 41px;
    text-align: center;
    .title-arrow {
        flex: 0 0 auto;
        width: 12px;
        height: 30px;
        margin-top: 10px;
    }
}
.experiences {
    margin: 0;
    > li {
        margin: 0 0 60px;
        &:first-child {
            .wrapper-img {
                .bg-img {
                    background: $secondary;
                }
            }
        }
        &:last-child {
            margin-bottom: 0;
        }
    }
}
.bullets {
    position: absolute;
    top: calc(10vh + 20px);
    left: calc(100% + 30px);
    display: flex;
}

.bullet {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    margin-right: 25px;
    border: 1px solid #b5b3b3;
    transition: 0.2s ease-in-out;
    &.active {
        width: 24px;
        border-color: $secondary;
    }
}
.wrapper-img {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 280px;
    .bg-img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: -35px;
        left: 0;
        background-color: $primary;
        background-image: url('/img/stars.svg');
        background-repeat: repeat;
        background-position: 0 0;
    }
}
.wrapper-illus {
    position: relative;
    flex: 0 0 auto;
    width: 80%;
    height: 80%;
    text-align: center;
    &.img {
        width: 100%;
        height: 100%;
    }
    /deep/ svg {
        max-height: 100%;
    }
}
.experience-intro {
    position: relative;
    margin: 0 0 30px;
    border-radius: 8px;
    background: $white;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    &.double {
        position: relative;
        display: flex;
        align-items: flex-start;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 1px;
            background: $grey-lighter;
        }
        > div {
            display: flex;
            flex-direction: column;
            width: 50%;
            padding: 40px #{$gutter};
            text-align: center;
        }
    }
    &:not(.double) {
        padding: 20px #{$gutter * 2};
    }
    blockquote {
        .blockquote-content {
            font-family: $dm;
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 20px;
            margin-bottom: 10px;
        }
        .blockquote-author,
        .blockquote-source {
            font-size: 1.2rem;
            line-height: 16px;
            color: $grey;
        }
        .blockquote-author {
            display: inline;
        }
    }
    .intro-title {
        margin-bottom: 13px;
        font-family: $ageo-bold;
        font-size: 1.4rem;
        text-transform: uppercase;
        color: $grey;
    }
    .intro-number {
        font-family: $ageo-semi-bold;
        font-size: 3rem;
        line-height: 36px;
        font-weight: 500;
    }
}
.wrapper-experience-button {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.content-title {
    margin-bottom: 30px;
    font-family: $ageo;
    font-size: 2.8rem;
    font-weight: normal;
}

.content-subtitle {
    margin-top: 20px;
    font-family: $ageo-semi-bold;
    font-size: 2rem;
}

.content-text {
    font-size: 1.4rem;
}

.experience-number {
    display: flex;
    align-items: center;
    margin-top: 35px;
    padding-top: 30px;
    border-top: 1px solid $grey-lighter;
    .wrapper-icon {
        flex: 0 0 auto;
        width: 70px;
        height: 60px;
        margin-right: #{$small-gutter * 2};
    }
    .wrapper-txt {
        color: $grey-light;
        p {
            > strong {
                display: block;
                font-family: $ageo-semi-bold;
                font-size: 2rem;
                line-height: 24px;
                color: $tertiary;
            }
            font-size: 1.6rem;
            line-height: 21px;
        }
    }
    .experience-icon {
        width: 100%;
        height: 100%;
    }
}
.container-img-large {
    display: none;
}

@media (min-width: $tablet) {
    .wrapper-experience-button {
        justify-content: flex-start;
        margin-top: 40px;
    }
    .wrapper-img {
        height: 350px;
    }
}

@media (min-width: $desktop-small) {
    .content-title {
        margin-bottom: 20px;
    }
    .title-experiences {
        .title-arrow {
            margin-top: 100px;
        }
    }
    .experiences {
        position: relative;
        width: 100%;
        > li {
            position: relative;
            height: 200vh;
            margin: 0;
            &:not(:first-child) {
                margin-top: calc(-100vh + 1px);
            }
        }
    }
    .experience-number {
        margin-top: 20px;
        padding-top: 20px;
    }
    .experience-content-large {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: stretch;
        padding: 10vh #{$gutter * 2};
        &.collant {
            z-index: 1;
        }
    }
    .container-img {
        flex: 0 0 auto;
        display: flex;
        justify-content: flex-end;
        width: percentage(6/12);
        height: 100%;
    }
    .wrapper-img {
        flex: 0 0 auto;
        width: calc(100% + #{$gutter * 2});
        height: 100%;
        .bg-img {
            display: none;
        }
    }
    .wrapper-illus {
        opacity: 0;
        transform: scale(0.9);
        visibility: hidden;
        &.img {
            transform-origin: 50% 100%;
        }
    }
    .container-txt {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 50px;
        padding: 0 0 0 #{$gutter * 2};
    }
    .experience-content {
        order: 1;
        opacity: 0;
        visibility: hidden;
    }
    .experience-intro {
        order: 2;
        width: 100%;
        margin: 30px 0 -45px -20%;
        opacity: 0;
        transform: scale(0.9);
        visibility: hidden;
    }
    .container-img-large {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: calc(50% - 5px);
        height: 100vh;

        .bg-img-large {
            position: absolute;
            top: 10vh;
            right: 0;
            bottom: 10vh;
            left: 0;
            background: $secondary;
            transform: translate3d(calc(50vw - 50%), 0, 0);
        }
        .stars-bg {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-image: url('/img/stars.svg');
            background-repeat: repeat;
            background-position: 0 0;
            opacity: 0;
            visibility: hidden;
        }
    }
}

@media (min-width: $container) {
    .container-img-large {
        width: calc(#{percentage(7/12)} - 5px);
    }

    .content-title {
        margin-bottom: 70px;
    }

    .container-img {
        width: percentage(7/12);
    }
    .container-txt {
        padding: 0 0 0 100px;
        width: 500px;
        margin: 100px 0 0;
    }
    .experience-number {
        margin-top: 35px;
        padding-top: 40px;
    }
    .experience-intro {
        width: 125%;
        margin-left: -50%;
        .intro-number {
            font-size: 4rem;
        }
    }
    .bullets {
        left: calc(100% + 100px);
        top: calc(10vh + 45px);
    }
}
</style>
