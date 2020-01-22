<template>
    <div class="wrapper-experiences">
        <div class="container">
            <h2 ref="titleModule" class="title-experiences">
                <span>Découvrez <span class="primary-light">le fonctionnement de winAutopilote<sup>®</sup></span> au travers des gains incroyables d’un confrère&nbsp;!</span>
                <Icon name="arrow" class="title-arrow primary-light" />
            </h2>
        </div>
        <div ref="containerExperiences" class="container-experiences">
            <div ref="containerImgLarge" class="container-img-large">
                <div ref="bgImg" class="bg-img-large">
                    <div ref="starsBg" class="stars-bg"></div>
                </div>
            </div>
            <div ref="topRounded" class="top-rounded">
                <img src="/img/toprounded.svg" alt="" />
            </div>
            <ul class="experiences">
                <li class="experience">
                    <div class="experience-content-large-wrapper">
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
                                    <div
                                        v-if="isL"
                                        class="blockquote-image"
                                        :style="{ backgroundImage: 'url(img/sylvain-author.png)' }"
                                    ></div>
                                    <blockquote>
                                        <p>
                                            <span class="blockquote-content">
                                                «&nbsp;Je suis pharmacien titulaire de la pharmacie du Cœur de la Brie,
                                                en Seine-et-Marne. J’utilise winAutopilote depuis juillet 2019.&nbsp;»
                                            </span>
                                            <cite class="blockquote-author">Sylvain Pelletier</cite>
                                            <span class="blockquote-source">Pharmacie du Coeur de la Brie (77)</span>
                                        </p>
                                    </blockquote>
                                    <div class="wrapper-experience-button">
                                        <Button
                                            :href="'http://www.winpharma.com/info-winautopilote/'"
                                            type="Secondary"
                                            class="secondary experience-button"
                                        >
                                            Demander de l’information
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="experience">
                    <div class="experience-content-large-wrapper">
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
                                    <div
                                        v-if="isL"
                                        class="blockquote-image"
                                        :style="{ backgroundImage: 'url(img/sylvain-author.png)' }"
                                    ></div>
                                    <blockquote>
                                        <p>
                                            <span class="blockquote-content secondary">
                                                Le reste des commandes a été envoyé automatiquement en temps et en heure
                                                pendant que j’étais au comptoir auprès de mes patients.
                                            </span>
                                            <cite class="blockquote-author">Sylvain Pelletier,</cite>
                                            <span class="blockquote-source">Seine-et-Marne (77)</span>
                                        </p>
                                    </blockquote>
                                </div>
                                <div class="experience-content">
                                    <h3 class="content-title">
                                        Génération <br />
                                        et envoi automatique
                                    </h3>
                                    <p class="intro-text">
                                        winAutopilote® est tellement fiable que vous pouvez automatiser la génération et
                                        l’envoi de vos commandes.
                                    </p>
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
                                            <p class="title">
                                                Les gains dans mon officine
                                            </p>
                                            <p>
                                                Je gagne 2h par jour
                                                <br />en génération et en envoi
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="experience">
                    <div class="experience-content-large-wrapper">
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
                                    <div
                                        v-if="isL"
                                        class="blockquote-image"
                                        :style="{ backgroundImage: 'url(img/sylvain-author.png)' }"
                                    ></div>
                                    <blockquote>
                                        <p>
                                            <span class="blockquote-content secondary">
                                                L’ordinateur s'occupe de mes commandes pendant que mon équipe privilégie
                                                nos patients et les tâches à valeur ajoutée.
                                            </span>
                                            <cite class="blockquote-author">Sylvain Pelletier,</cite>
                                            <span class="blockquote-source">Seine-et-Marne (77)</span>
                                        </p>
                                    </blockquote>
                                </div>
                                <div class="experience-content">
                                    <h3 class="content-title">
                                        Réception automatique
                                    </h3>
                                    <p class="intro-text">
                                        Vous restez maitre de votre temps car la réception des livraisons se fait
                                        automatiquement. Lorsque vous le souhaitez, contentez-vous de contrôler les
                                        aléas de livraison et laissez winAutopilote® faire le reste.
                                    </p>
                                    <h4 class="content-subtitle">
                                        Suppression des faux promis
                                    </h4>
                                    <p class="content-text">
                                        Aucun laps de temps entre la livraison et la disponibilité des produits (même
                                        avec un robot) ce qui supprime les faux promis.
                                    </p>
                                    <h4 class="content-subtitle">
                                        Confort de travail
                                    </h4>
                                    <p class="content-text">
                                        Votre équipe se consacre plus sereinement à l’accueil, au conseil et au service
                                        des patients.
                                    </p>
                                    <div class="experience-number">
                                        <div class="wrapper-icon">
                                            <Icon name="time" class="experience-icon" />
                                        </div>
                                        <div class="wrapper-txt">
                                            <p class="title">
                                                Les gains dans mon officine
                                            </p>
                                            <p>
                                                Je gagne 2h par jour
                                                <br />en réception
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="experience">
                    <div class="experience-content-large-wrapper">
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
                                    <div
                                        v-if="isL"
                                        class="blockquote-image"
                                        :style="{ backgroundImage: 'url(img/sylvain-author.png)' }"
                                    ></div>
                                    <blockquote>
                                        <p>
                                            <span class="blockquote-content secondary">
                                                Seulement 5 min suffisent pour contrôler et isoler la commande des
                                                produits sensibles, nécessitant notre intervention.
                                            </span>
                                            <cite class="blockquote-author">Sylvain Pelletier,</cite>
                                            <span class="blockquote-source">Seine-et-Marne (77)</span>
                                        </p>
                                    </blockquote>
                                </div>
                                <div class="experience-content">
                                    <h3 class="content-title">
                                        Des outils simples pour
                                        <br />gérer les commandes
                                    </h3>
                                    <p class="intro-text">
                                        Essentiellement, vous n’avez rien à faire, winAutopilote® s’occupe de
                                        tout&nbsp;! Un seul tableau de bord et une seule fenêtre de gestion des règles
                                        pour garder un œil sur votre pilote automatique.
                                    </p>
                                    <h4 class="content-subtitle">
                                        Visuel et dynamique
                                    </h4>
                                    <p class="content-text">
                                        Le tableau de bord winAutopilote® synthétise et pointe les commandes qui
                                        méritent votre attention.
                                    </p>
                                    <h4 class="content-subtitle">
                                        Des règles de gestion dynamiques
                                    </h4>
                                    <p class="content-text">
                                        Des règles personnalisées à la pharmacie, qui évoluent automatiquement tout au
                                        long du cycle de vie des produits.
                                    </p>
                                    <div class="experience-number">
                                        <div class="wrapper-icon">
                                            <Icon name="eye" class="experience-icon" />
                                        </div>
                                        <div class="wrapper-txt">
                                            <p class="title">
                                                Les gains dans mon officine
                                            </p>
                                            <p>
                                                Je visualise d’un coup d’œil
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="experience">
                    <div class="experience-content-large-wrapper">
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
                                    <div
                                        v-if="isL"
                                        class="blockquote-image"
                                        :style="{ backgroundImage: 'url(img/sylvain-author.png)' }"
                                    ></div>
                                    <blockquote>
                                        <p>
                                            <span class="blockquote-content secondary">
                                                Notre trésorerie a également eu un sacré coup de pouce : 38.000&nbsp;€
                                                récupérés grâce à une diminution du stock. Et ce n’est que le début !
                                            </span>
                                            <cite class="blockquote-author">Sylvain Pelletier,</cite>
                                            <span class="blockquote-source">Seine-et-Marne (77)</span>
                                        </p>
                                    </blockquote>
                                </div>
                                <div class="experience-content">
                                    <h3 class="content-title">
                                        Diminution du stock
                                    </h3>
                                    <p class="intro-text">
                                        L’automatisation des commandes engendre une diminution du stock et un maintien
                                        du niveau de manquant. Les algorithmes de winAutopilote® s’appuient sur les best
                                        practices des winPharmaciens et s’adaptent à toutes les spécificités de votre
                                        officine.
                                    </p>
                                    <h4 class="content-subtitle">
                                        Un stock optimisé
                                    </h4>
                                    <p class="content-text">
                                        Diminue d’environ 1 %, ce qui représente en moyenne 15.000 € pour une pharmacie
                                        générant 1,5&nbsp;M€ de chiffre d’affaires.
                                    </p>
                                    <h4 class="content-subtitle">
                                        Des clients toujours satisfaits
                                    </h4>
                                    <p class="content-text">
                                        Les produits sont en stock toujours au bon moment. La baisse du stock n'engendre
                                        pas d'augmentation des promis grâce à une optimisation des achats.
                                    </p>
                                    <div class="wrapper-experience-button small-margin">
                                        <Button
                                            :href="'http://www.winpharma.com/info-winautopilote/'"
                                            type="Secondary"
                                            class="secondary experience-button small"
                                        >
                                            Demander de l’information
                                        </Button>
                                    </div>
                                    <div class="experience-number">
                                        <div class="wrapper-icon">
                                            <Icon name="graph" class="experience-icon" />
                                        </div>
                                        <div class="wrapper-txt">
                                            <p class="title">
                                                Les gains dans mon officine
                                            </p>
                                            <p>
                                                J’ai récupéré 38&nbsp;000€
                                                <br />de trésorerie.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div v-if="isL" ref="wrapperBullet" class="wrapper-nav-xp">
                <div ref="bullets" class="nav-xp">
                    <button
                        type="button"
                        :class="{ inactive: activeBullet === 0 }"
                        class="btn-xp prev"
                        @click="changeSlide(activeBullet - 1)"
                    >
                        <Icon name="chevron-back" class="arrow-xp" />
                    </button>
                    <span class="nb-slide active" v-html="activeBullet + 1"></span>
                    <span class="nb-slide-separator"> / </span>
                    <span class="nb-slide">5</span>
                    <button
                        type="button"
                        :class="{ inactive: activeBullet === nbExperiences - 1 }"
                        class="btn-xp next"
                        @click="changeSlide(activeBullet + 1)"
                    >
                        <Icon name="chevron" class="arrow-xp" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap, CSSPlugin } from 'gsap/all';
import { query, forEach } from '@stereorepo/sac';

if (process.browser) {
    gsap.registerPlugin(CSSPlugin);
}

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
        bgImgPosActive: false,
        bgImgPos: 0,
        bgImgColor: '#EB522B',
        starsBg: null,
        revealBgXp: null,
        revealXp: null,
        bgCollant: null,
        navCollant: null,
        experiences: null,
        collantCreated: false,
        containerTxt: null,
        experiencesContents: null,
        experiencesContentsWrapper: null,
        experiencesWatcherDown: [],
        experiencesWatcherUp: [],
        experiencesTxt: [],
        experiencesIntro: [],
        experiencesWrapperIllus: [],
        experiencesIllus: [],
        wrapperBullet: null,
        nbExperiences: 0,
        tlXpIn: null,
        tlXpOut: null,
        activeBullet: 0,
        overExperiences: true,
        roundedCollant: null,
        tlLeaveFromTop: null,
        tlLeaveFromBottom: null,
        tlEnterFromTop: null,
        tlEnterFromBottom: null,
        nextIndex: 0,
        position: 'above'
    }),
    computed: {
        isL() {
            if (!this.$store.state.superWindow) return false;
            return this.$store.state.superWindow.width >= this.$breakpoints.list.l;
        },
        ww() {
            if (!this.$store.state.superWindow) return false;
            return this.$store.state.superWindow.width;
        }
    },
    watch: {
        isL(isBigDevice) {
            if (isBigDevice && !this.collantCreated) {
                window.scrollTo(0, 0);
                this.nextIndex = 0;
                this.activeBullet = 0;
                this.position = 'above';
                this.$nextTick(() => {
                    this.createAllTheThings();
                });
                this.collantCreated = true;
                this.initBgPos();
                console.log('yes');
            } else if (!isBigDevice && this.collantCreated) {
                if (this.revealBgXp) this.revealBgXp.forget();
                if (this.revealXp) this.revealXp.forget();
                if (this.navCollant) this.navCollant.forget();
                if (this.bgCollant) this.bgCollant.forget();
                if (this.roundedCollant) this.roundedCollant.forget();
                forEach(this.experiencesContents, (item, index) => {
                    this.experiencesWatcherDown[index].forget();
                    this.experiencesWatcherUp[index].forget();
                    gsap.set(
                        [
                            this.experiencesContentsAround[index],
                            this.experiencesWrapperIllus[index],
                            this.experiencesIntro[index],
                            this.experiencesTxt[index]
                        ],
                        { clearProps: 'all' }
                    );
                });
                gsap.set(this.containerImgLarge, { clearProps: 'all' });
                gsap.set(this.bgImg, { clearProps: 'all' });
                this.collantCreated = false;
            }
        },
        ww(w) {
            if (w >= this.$breakpoints.list.l) {
                this.initBgPos();
                if (!this.bgImgPosActive) {
                    gsap.set(this.bgImg, { x: this.bgImgPos });
                }
            }
        }
    },
    mounted() {
        this.$stereorepo.superScroll.initializeScroll();
        this.$stereorepo.superWindow.initializeWindow(this.$store);

        this.initRefs();
        this.initBgPos();

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
                    this.experiencesWatcherDown[index].forget();
                    this.experiencesWatcherUp[index].forget();
                });
                this.createAllTheThings();
            });
    },
    beforeDestroy() {
        // Forget the watcher to avoid memory leak
        if (this.revealBgXp) this.revealBgXp.forget();
        if (this.revealXp) this.revealXp.forget();
        if (this.navCollant) this.navCollant.forget();
        if (this.bgCollant) this.bgCollant.forget();
        if (this.roundedCollant) this.roundedCollant.forget();
        if (this.revealTitle) this.revealTitle.forget();
        forEach(this.experiencesContents, (item, index) => {
            this.experiencesWatcherDown[index].forget();
            this.experiencesWatcherDown[index].forget();
        });
        this.$stereorepo.superScroll.destroyScroll();
    },
    destroyed() {
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
            this.experiencesContentsAround = query({
                selector: '.experience-content-large-wrapper',
                ctx: this.containerExperiences
            });
            this.experiencesContentsWrapper = query({ selector: '.experience', ctx: this.containerExperiences });
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
                if (this.experiencesWatcherDown[index]) this.experiencesWatcherDown[index].forget();
                this.experiencesWatcherDown[index] = this.$stereorepo.superScroll
                    .watch({
                        element: item,
                        options: {
                            triggerOffset: ['100vh', 0]
                        }
                    })
                    .on('enter-view', () => {
                        if (this.$store.state.scroll.direction != 'down') return;
                        this.nextIndex = index;
                        if (this.nextIndex !== this.activeBullet) {
                            this.outXp(this.activeBullet, true);
                        }
                    });
                if (this.experiencesWatcherUp[index]) this.experiencesWatcherUp[index].forget();
                this.experiencesWatcherUp[index] = this.$stereorepo.superScroll
                    .watch({
                        element: this.experiencesContentsWrapper[index],
                        options: {
                            triggerOffset: [0, '100vh']
                        }
                    })
                    .on('enter-view', () => {
                        if (this.$store.state.scroll.direction != 'up') return;
                        this.nextIndex = index;
                        if (this.nextIndex !== this.activeBullet) {
                            this.outXp(this.activeBullet, true);
                        }
                    });
            });

            this.$stereorepo.superScroll.update();
        },
        // STEP 1 - apparition du bloc coloré
        createRevealBgXp() {
            if (this.revealBgXp) this.revealBgXp.forget();
            this.revealBgXp = this.$stereorepo.superScroll
                .watch({
                    element: this.containerExperiences,
                    options: {
                        triggerOffset: '25vh'
                    }
                })
                .on('enter-view', () => {
                    gsap.to(this.bgImg, { duration: 0.3, y: 0, opacity: 1 });
                })
                .on('leave-view', () => {
                    if (this.activeBullet === 0) {
                        gsap.to(this.bgImg, { duration: 0.3, y: '25vh', opacity: 0 });
                    } else {
                        gsap.to(this.bgImg, { duration: 0.3, y: 0, opacity: 0 });
                    }
                });
        },
        // STEP 2 - apparition de l'illustration dans le bloc
        createRevealXp() {
            if (this.revealXp) this.revealXp.forget();
            this.revealXp = this.$stereorepo.superScroll
                .watch({
                    element: this.containerExperiences,
                    options: {
                        triggerOffset: '50vh'
                    }
                })
                .on('enter-view', () => {
                    gsap.to(this.experiencesWrapperIllus[this.activeBullet], {
                        duration: 0.3,
                        opacity: 1,
                        scale: 1,
                        visibility: 'visible'
                    });
                    this.bgImgPosActive = true;
                })
                .on('leave-view', () => {
                    gsap.to(this.experiencesWrapperIllus[this.activeBullet], {
                        duration: 0.3,
                        opacity: 0,
                        scale: 0.9,
                        visibility: 'visible'
                    });
                    this.bgImgPosActive = false;
                });
        },
        createBgCollant() {
            if (this.navCollant) this.navCollant.forget();
            this.navCollant = this.$stereorepo.superScroll.watch({
                element: this.$refs.wrapperBullet,
                options: {
                    collant: true,
                    target: this.containerExperiences,
                    position: 'top',
                    collantOffset: 0
                }
            });
            if (this.bgCollant) this.bgCollant.forget();
            this.bgCollant = this.$stereorepo.superScroll.watch({
                element: this.containerImgLarge,
                options: {
                    collant: true,
                    target: this.containerExperiences,
                    position: 'top',
                    collantOffset: 0
                }
            });
            if (this.roundedCollant) this.roundedCollant.forget();
            this.roundedCollant = this.$stereorepo.superScroll
                .watch({
                    element: this.$refs.topRounded,
                    options: {
                        collant: true,
                        target: this.containerExperiences,
                        position: 'top',
                        collantOffset: 0
                    }
                })
                .on('enter-collant', () => {
                    if (this.activeBullet === 0) {
                        this.enterFromTop();
                    } else {
                        this.enterFromBottom();
                    }
                })
                .on('leave-collant', () => {
                    this.leaveFromBottom();
                })
                .on('before-enter-collant', () => {
                    if (this.position === 'in') {
                        this.leaveFromTop();
                    }
                });
        },
        createAllTheThings() {
            this.createCollant();
            this.createRevealBgXp();
            this.createRevealXp();
            this.createBgCollant();
        },

        stick() {
            this.experiencesContentsAround[this.activeBullet].classList.add('collant');
            gsap.set(this.experiencesContentsAround[this.activeBullet], {
                position: 'fixed',
                top: '0px',
                bottom: 'auto'
            });
        },
        unstick(elts) {
            elts.forEach(el => el.classList.remove('collant'));
            gsap.set(elts, {
                position: 'absolute',
                top: 'auto',
                bottom: '0px'
            });
        },
        resetStick(elts) {
            elts.forEach(el => el.classList.remove('collant'));
            gsap.set(elts, {
                clearProps: 'top,bottom,position'
            });
        },
        ////////////////////////////////
        /////// FOR EACH SLIDES ////////
        ////////////////////////////////
        inXp() {
            if (this.position !== 'in') return;
            if (this.tlXpIn) this.tlXpIn.kill();
            this.tlXpIn = gsap.timeline();
            this.tlXpIn.to(
                this.experiencesWrapperIllus[this.activeBullet],
                { duration: 0.3, opacity: 1, scale: 1, visibility: 'visible' },
                'first-step+=1'
            );
            this.tlXpIn.to(
                this.bgImg,
                { duration: 0.3, background: this.activeBullet === 0 ? '#EB522B' : '#593D8C' },
                'first-step'
            );
            if (this.activeBullet != 0) {
                this.experiencesIllus[this.activeBullet].launchFloat();
                this.tlXpIn.to(
                    this.starsBg,
                    {
                        duration: 1,
                        opacity: 1,
                        visibility: 'visible',
                        backgroundPosition: `-${this.activeBullet * 600}% 0`,
                        ease: 'power4.inOut'
                    },
                    'first-step'
                );
                this.tlXpIn.to(
                    this.experiencesTxt[this.activeBullet],
                    { duration: 0.3, opacity: 1, visibility: 'visible' },
                    'first-step+=0.2'
                );
            } else {
                this.tlXpIn.to(this.starsBg, { duration: 0.3, opacity: 0, visibility: 'hidden' }, 'first-step');
                this.tlXpIn.to(
                    this.experiencesTxt[this.activeBullet],
                    { duration: 0.3, opacity: 1, visibility: 'visible' },
                    'first-step+=0.5'
                );
            }

            this.tlXpIn.to(this.experiencesIntro[this.activeBullet], {
                duration: 0.3,
                opacity: 1,
                visibility: 'visible',
                scale: 1
            });
        },
        manageStick() {
            const toUnstick = this.experiencesContentsAround.filter(
                (el, index) => this.position === 'below' || index > this.activeBullet
            );
            const toReset = this.experiencesContentsAround.filter(
                (el, index) => this.position === 'above' || index < this.activeBullet
            );
            this.unstick(toUnstick);
            this.resetStick(toReset);
            if (this.position === 'in') this.stick();
        },
        outXp(xpIndex, animateIllu, leave = false) {
            if (this.tlXpOut && this.tlXpOut.progress() < 1) return;

            if (this.tlXpIn) this.tlXpIn.kill();

            this.tlXpOut = gsap.timeline({
                onComplete: () => {
                    this.activeBullet = this.nextIndex;
                    this.manageStick(leave);
                    if (!leave) {
                        this.inXp();
                    }
                }
            });
            this.tlXpOut.to(this.experiencesTxt, { duration: 0.5, autoAlpha: 0 }, 'text-in');
            this.tlXpOut.to(
                this.experiencesIntro,
                {
                    duration: 0.5,
                    autoAlpha: 0,
                    scale: 0.9
                },
                'text-in'
            );
            if (this.activeBullet != 0) {
                this.experiencesIllus[xpIndex].killFloat();
            }
            if (animateIllu) {
                this.tlXpOut.set(
                    this.experiencesWrapperIllus,
                    {
                        autoAlpha: 0,
                        scale: 0.9
                    },
                    'text-in'
                );
            }
        },
        ////////////////////////////////
        ////////// FOR THE BG //////////
        ////////////////////////////////
        leaveFromTop() {
            this.activeBullet = 0;
            this.nextIndex = 0;
            this.resetStick(this.experiencesContentsAround);
            this.outXp(this.activeBullet, false, true);
            this.position = 'above';
            if (this.tlXpIn) this.tlXpIn.kill();
            this.tlLeaveFromTop = gsap.timeline();
            this.tlLeaveFromTop.to(this.bgImg, { duration: 0.3, background: '#EB522B' }, 'bg-step');
            this.tlLeaveFromTop.to(this.starsBg, { duration: 0.3, autoAlpha: 0 }, 'bg-step');
            this.tlLeaveFromTop.to(query({ selector: '.rounded-wrapper', ctx: this.experiencesWrapperIllus[0] }), {
                duration: 0.3,
                opacity: 0
            });
            this.tlLeaveFromTop.to(this.$refs.bullets, { duration: 0.3, opacity: 0 }, 'bg-step');
            this.tlLeaveFromTop.to(
                [this.bgImg, this.experiencesWrapperIllus[0]],
                { duration: 0.3, x: this.bgImgPos },
                'bg-step'
            );
        },
        leaveFromBottom() {
            this.activeBullet = this.nbExperiences - 1;
            this.nextIndex = this.nbExperiences - 1;
            this.unstick(this.experiencesContentsAround);
            this.outXp(this.activeBullet, false, true);
            this.position = 'below';
            if (this.tlXpIn) this.tlXpIn.kill();
            this.tlLeaveFromBottom = gsap.timeline();
            this.tlLeaveFromBottom.to(this.bgImg, { duration: 0.3, background: '#593D8C' }, 'bg-step');
            this.tlLeaveFromBottom.to(
                this.starsBg,
                {
                    duration: 0.3,
                    autoAlpha: 1,
                    backgroundPosition: `-${this.activeBullet * 600}% 0`
                },
                'bg-step'
            );
            this.tlLeaveFromBottom.to(query({ selector: '.rounded-wrapper', ctx: this.experiencesWrapperIllus[0] }), {
                duration: 0.3,
                opacity: 0
            });
            this.tlLeaveFromBottom.to(this.$refs.bullets, { duration: 0.3, opacity: 0 }, 'bg-step');
            this.tlLeaveFromBottom.to(
                [this.bgImg, this.experiencesWrapperIllus[this.nbExperiences - 1]],
                { duration: 0.3, x: this.bgImgPos },
                'bg-step'
            );
        },
        enterFromTop() {
            this.position = 'in';
            if (this.tlXpOut) this.tlXpOut.kill();
            this.tlEnterFromTop = gsap.timeline();
            this.stick();
            this.inXp();
            this.tlEnterFromTop.to([this.bgImg, this.experiencesWrapperIllus[0]], { duration: 0.3, x: 0 }, 'bg-step');
            this.tlEnterFromTop.to(
                query({ selector: '.rounded-wrapper', ctx: this.experiencesWrapperIllus[0] }),
                { duration: 0.3, opacity: 1 },
                'bg-step+=0.3'
            );
            this.tlEnterFromTop.to(this.$refs.bullets, { duration: 0.3, opacity: 1 });
        },
        enterFromBottom() {
            this.position = 'in';
            if (this.tlXpOut) this.tlXpOut.kill();
            this.tlEnterFromBottom = gsap.timeline();
            this.stick();
            this.inXp();
            this.tlEnterFromBottom.to(
                [this.bgImg, this.experiencesWrapperIllus[this.nbExperiences - 1]],
                { duration: 0.3, x: 0 },
                'bg-step'
            );
            this.tlEnterFromBottom.to(
                query({ selector: '.rounded-wrapper', ctx: this.experiencesWrapperIllus[0] }),
                { duration: 0.3, opacity: 1 },
                'bg-step+=0.3'
            );
            this.tlEnterFromBottom.to(this.$refs.bullets, { duration: 0.3, opacity: 1 });
        },
        initBgPos() {
            this.bgImgPos = this.$store.state.superWindow.width / 2 - this.bgImg.getBoundingClientRect().width / 2;
        },
        changeSlide(newIndex) {
            if (newIndex >= 0 && newIndex <= this.nbExperiences - 1) {
                window.scroll({
                    top:
                        this.experiences[newIndex].getBoundingClientRect().top + this.$store.state.scroll.scrollTop + 1,
                    left: 0
                });
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
    margin: 0 auto 30px;
    font-family: $ageo-semi-bold;
    font-size: 3.4rem;
    line-height: 41px;
    text-align: center;
    max-width: 880px;
    sup {
        top: -1.5em;
        font-size: 1.2rem;
    }
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
.nav-xp {
    position: absolute;
    top: 0;
    left: calc(50% + 30px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-top: 10vh;
    font-family: $ageo;
    opacity: 0;
    font-size: 1.8rem;
    color: $grey-light;
    z-index: 2;
    pointer-events: all;
}
.wrapper-nav-xp {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;
    pointer-events: none;
}

.btn-xp {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 0;
    cursor: pointer;
    &.prev {
        margin: 0 20px 0 -10px;
    }
    &.next {
        margin-left: 18px;
    }
    &.inactive {
        opacity: 0.4;
        cursor: default;
    }
    .arrow-xp {
        width: 6px;
        height: 10px;
        fill: $grey-light;
    }
}
.nb-slide {
    min-width: 12px;
    &.active {
        font-family: $ageo-semi-bold;
        color: $secondary;
    }
}
.nb-slide-separator {
    margin: 0 10px;
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

.top-rounded {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: none;
    align-items: flex-end;
    z-index: -1;
    img {
        width: 100%;
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
.experience-content {
    .blockquote-author {
        color: $primary-light;
    }
}
.wrapper-experience-button {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    &.small-margin {
        margin-top: 20px;
    }
}

.content-title {
    margin-bottom: 30px;
    font-family: $ageo;
    font-size: 2.8rem;
    font-weight: normal;
    line-height: 36px;
    br {
        display: none;
    }
}

.content-subtitle {
    margin-top: 20px;
    font-family: $ageo-semi-bold;
    font-size: 1.8rem;
    line-height: 22px;
}

.intro-text {
    margin-bottom: 30px;
    font-size: 1.4rem;
    line-height: 20px;
    color: $primary-darker;
}

.content-text {
    font-size: 1.3rem;
    line-height: 18px;
}

.experience-number {
    display: flex;
    align-items: center;
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid $grey-lighter;
    .wrapper-icon {
        flex: 0 0 auto;
        width: 70px;
        height: 60px;
        margin-right: #{$small-gutter * 2};
    }
    .wrapper-txt {
        p {
            font-family: $ageo-semi-bold;
            font-size: 2rem;
            line-height: 24px;
            color: $tertiary;
            &.title {
                font-family: $ageo-bold;
                font-size: 1.2rem;
                line-height: 18px;
                letter-spacing: 1px;
                color: $grey-light;
                text-transform: uppercase;
            }
            br {
                display: none;
            }
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
    .top-rounded {
        display: flex;
    }
    .wrapper-experiences {
        padding-bottom: 0;
    }
    .content-title {
        margin-bottom: 15px;
        br {
            display: block;
        }
    }
    .title-experiences {
        font-size: 4.2rem;
        .title-arrow {
            margin-top: 100px;
        }
    }
    .experiences {
        position: relative;
        width: 100%;
        > li {
            position: relative;
            height: 150vh;
            margin: 0;
            &:not(:first-child) {
                margin-top: calc(-100vh + 1px);
            }
            &:first-child {
                .wrapper-illus {
                    transform: translate3d(calc(50vw - 50%), 0, 0);
                }
            }
        }
    }
    .experience-number {
        margin-top: 20px;
        padding-top: 20px;
        .wrapper-txt {
            p {
                br {
                    display: block;
                }
            }
        }
    }
    .experience-content-large-wrapper {
        position: relative;
        width: 100%;
        height: 100vh;
        &.collant {
            z-index: 1;
        }
    }
    .experience-content-large {
        display: flex;
        position: relative;
        width: 100%;
        height: 100vh;
        align-items: stretch;
        padding: 10vh #{$gutter * 2};
    }
    .container-img {
        flex: 0 0 auto;
        display: flex;
        width: percentage(6/12);
        height: 100%;
    }
    .wrapper-img {
        flex: 0 0 auto;
        width: calc(100% + #{$gutter * 2});
        height: 100%;
        margin-left: #{-$gutter * 2};
        .bg-img {
            display: none;
        }
    }
    .blockquote-image {
        display: none;
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
            transform: translate3d(calc(50vw - 50%), 25vh, 0);
            opacity: 0;
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
    @media (max-height: 800px) {
        .container-txt {
            margin-top: 40px;
        }
        .content-title {
            margin-bottom: 5px;
        }
        .intro-text {
            margin-bottom: 20px;
        }
        .content-subtitle {
            margin-top: 15px;
        }
    }
}

@media (min-width: $container) {
    .container-img-large {
        width: calc(#{percentage(7/12)} - 5px);
    }

    .content-title {
        @media (min-height: $desktop-v) {
            margin-bottom: 20px;
        }
    }

    .container-img {
        width: percentage(7/12);
    }
    .container-txt {
        padding: 0 0 0 100px;
        width: 500px;
        margin-right: 0;
        margin-left: 0;
        @media (min-height: $desktop-v) {
            margin-top: 100px;
        }
    }
    .experience-intro {
        width: 125%;
        margin-left: -50%;
        .intro-number {
            font-size: 4rem;
        }
    }
    .nav-xp {
        left: calc(#{percentage(7/12)} + 100px);
        @media (min-height: $desktop-v) {
            padding-top: calc(10vh + 30px);
        }
    }
    .blockquote-image {
        display: block;
        flex-shrink: 0;
        width: 120px;
        background-color: $secondary;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 100%;
        border-radius: 8px 0 0 8px;
    }
    .experience-intro {
        display: flex;
        &:not(.double) {
            padding: 0;
            > blockquote {
                padding: 20px 30px;
            }
        }
    }
    @media (max-height: 800px) {
        .nav-xp {
            left: calc(#{percentage(7/12)} + 30px);
        }
        .container-txt {
            padding-left: 30px;
        }
    }
}
@media (min-width: $desktop-huge) and (min-height: 950px) {
    .nav-xp {
        padding-top: calc(10vh + 95px);
    }
    .container-txt {
        margin-top: 150px;
        justify-content: flex-start;
    }
}

@media (max-height: 800px) {
    .blockquote-image {
        display: none;
    }
}
</style>
