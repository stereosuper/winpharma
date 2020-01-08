<template>
    <div class="wrapper-experiences">
        <div class="container">
            <h2 class="title-experiences">
                <span>Découvrez <span class="primary-light">les gains incroyables</span> de vos confrères&nbsp;!</span>
                <Icon name="arrow" class="title-arrow primary-light" />
            </h2>
        </div>
        <div ref="containerExperiences" class="container-experiences">
            <div ref="bgImg" class="container-img-large">
                <div class="bg-img"></div>
            </div>
            <ul class="experiences">
                <li class="experience">
                    <div class="experience-content-large">
                        <div class="container-img">
                            <div class="wrapper-img">
                                <div class="bg-img"></div>
                                <div class="wrapper-illus img">
                                    <QuoteAuthor />
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
                                    <Button :href="'#'" type="Primary" class="experience-button">
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
                                    <Reception />
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
                                <h3 class="h3">
                                    Réception automatique
                                </h3>
                                <h4 class="h4">
                                    Suppression des faux promis
                                </h4>
                                <p>
                                    Aucun laps de temps perdu entre la livraison des produits et le chargement du robot
                                    ou la disponibilité des promis.
                                </p>
                                <h4 class="h4">
                                    Confort de travail
                                </h4>
                                <p>
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
                                    <Tools />
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
                                <h3 class="h3">
                                    Des outils simples pour gérer les commandes
                                </h3>
                                <h4 class="h4">
                                    Visuel et dynamique
                                </h4>
                                <p>
                                    Le tableau de bord winAutopilote synthétise et pointe les commandes qui méritent
                                    votre attention.
                                </p>
                                <h4 class="h4">
                                    Des règles de gestion dynamiques
                                </h4>
                                <p>
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
                                    <Generation />
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
                                <h3 class="h3">
                                    Génération et envoi automatique
                                </h3>
                                <h4 class="h4">
                                    L’esprit tranquille
                                </h4>
                                <p>
                                    Ne vous souciez plus de vérifier et passer les commandes des grossistes,
                                    d'homéopathie et même de certains laboratoires directs.
                                </p>
                                <h4 class="h4">
                                    Réduction des erreurs
                                </h4>
                                <p>
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
                                    <Stock />
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
                                <h3 class="h3">
                                    Diminution du stock
                                </h3>
                                <h4 class="h4">
                                    Un stock optimisé
                                </h4>
                                <p>
                                    Diminue d’environ 1 %, ce qui représente en moyenne 15 000 € pour une pharmacie
                                    générant 1,5 M€ de chiffre d’affaires.
                                </p>
                                <h4 class="h4">
                                    Des clients toujours satisfaits
                                </h4>
                                <p>
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
        containerExperiences: null,
        bgImg: null,
        revealXp: null,
        bgCollant: null,
        experiences: null,
        collantCreated: false,
        containerTxt: null,
        experiencesContents: null,
        experiencesCollants: [],
        experiencesTxt: [],
        experiencesIntro: [],
        experiencesIllus: [],
        nbExperiences: 0,
        tlXpIn: null,
        tlXpOut: null
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
            }
        }
    },
    mounted() {
        this.$stereorepo.superScroll.initializeScroll();
        this.$stereorepo.superWindow.initializeWindow(this.$store);

        this.initRefs();

        this.tlXpIn = gsap.timeline();
        this.tlXpOut = gsap.timeline();

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
            element: this.bgImg,
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
        this.$stereorepo.superScroll.destroyScroll();
    },
    destroyed() {
        // this.$store is your VueX store instance
        this.$stereorepo.superWindow.destroyWindow(this.$store);
    },
    methods: {
        initRefs() {
            this.containerExperiences = this.$refs.containerExperiences;
            this.bgImg = this.$refs.bgImg;
            this.containerTxt = query({ selector: '.container-txt', ctx: this.containerExperiences });
            this.experiences = query({ selector: '.experience', ctx: this.containerExperiences });
            this.experiencesTxt = query({ selector: '.experience-content', ctx: this.containerExperiences });
            this.nbExperiences = this.experiences.length;
            this.experiencesContents = query({ selector: '.experience-content-large', ctx: this.containerExperiences });
            this.experiencesIntro = query({ selector: '.experience-intro', ctx: this.containerExperiences });
            this.experiencesIllus = query({ selector: '.wrapper-illus', ctx: this.containerExperiences });
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
                gsap.to(this.experiencesIllus[xpIndex], { duration: 0.3, opacity: 0 });
                gsap.to(this.experiencesTxt[xpIndex], { duration: 0.3, opacity: 0 });
                gsap.to(this.experiencesIntro[xpIndex], { duration: 0.3, opacity: 0, scale: 0.9 });
            }
        },
        inXp(xpIndex) {
            this.tlXpIn.kill();
            this.tlXpIn = gsap.timeline();
            this.tlXpIn.to(this.experiencesIllus[xpIndex], { duration: 0.3, opacity: 1, delay: 0.3 });
            this.tlXpIn.to(this.experiencesTxt[xpIndex], { duration: 0.3, opacity: 1, delay: 0.3 });
            this.tlXpIn.to(this.experiencesIntro[xpIndex], { duration: 0.3, opacity: 1, scale: 1 });
        },
        outXp(xpIndex) {
            if (xpIndex < this.nbExperiences - 1) {
                gsap.to(this.experiencesIllus[xpIndex], { duration: 0.3, opacity: 0 });
                gsap.to(this.experiencesTxt[xpIndex], { duration: 0.3, opacity: 0 });
                gsap.to(this.experiencesIntro[xpIndex], { duration: 0.3, opacity: 0, scale: 0.9 });
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
        &:last-child {
            margin-bottom: 0;
        }
    }
}
.wrapper-img {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 316px;
    .bg-img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: $secondary;
    }
}
.wrapper-illus {
    flex: 0 0 auto;
    width: 80%;
    height: 80%;
    &.img {
        width: 100%;
        height: 100%;
    }
    /deep/ svg {
        max-height: 100%;
    }
}
.experience-intro {
    margin: -35px 0 30px;
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
    }
}
.wrapper-experience-button {
    display: flex;
    justify-content: center;
    margin-top: 30px;
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
        p {
            > strong {
                display: block;
                font-family: $ageo-bold;
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
}
@media (min-width: $desktop-small) {
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
    .experience-content-large {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: stretch;
        padding: 10vh #{$gutter * 2};
        @media (min-height: $desktop-v) {
            padding-top: 15vh;
            padding-bottom: 15vh;
        }
    }
    .container-img {
        flex: 0 0 auto;
        display: flex;
        justify-content: flex-end;
        width: percentage(7/12);
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
    }
    .experience-intro {
        order: 2;
        width: 100%;
        margin: 30px 0 -45px calc(-20% + #{$gutter * 2});
        opacity: 0;
        transform: scale(0.9);
    }
    .experience-number {
        @media (min-height: $desktop-v) {
            margin-top: 60px;
        }
    }
    .container-img-large {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: calc(58.33333337% - 5px);
        height: 100vh;
        transform: translate3d(calc(50vw - 50%), 0, 0);
        .bg-img {
            position: absolute;
            top: 10vh;
            right: 0;
            bottom: 10vh;
            left: 0;
            background: $secondary;
            @media (min-height: $desktop-v) {
                padding-top: 15vh;
                padding-bottom: 15vh;
            }
        }
    }
}
@media (min-width: $desktop-xxl) {
    .container-txt {
        padding-left: percentage(1/12);
    }
    .experience-intro {
        margin-left: calc(-50% + #{$gutter * 2});
    }
}
</style>
