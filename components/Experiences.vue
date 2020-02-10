<template>
    <div class="wrapper-experiences">
        <div class="wrapper-wave top-xp">
            <svg
                class="wave"
                viewBox="0 0 1440 170"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0V169.1C294.364 106.177 529.74 57.7845 662.66 33.9119C930.374 -13.5948 1193.04 -5.92603 1440 42.7717V0H0Z"
                    fill="#FBFBFD"
                />
            </svg>
        </div>
        <div class="container">
            <h2 ref="titleModule" class="title-experiences">
                <span>
                    Découvrez le fonctionnement simplissime de
                    <span class="secondary">winAutopilote<sup>®</sup></span>
                    au travers des gains incroyables d’un confrère&nbsp;!
                </span>
            </h2>
        </div>
        <div ref="containerExperiences" class="container-experiences">
            <ul class="experiences">
                <li class="experience">
                    <div class="container container-experience">
                        <div class="wrapper-img">
                            <QuoteAuthor ref="quoteIllus" />
                        </div>
                        <div class="container-txt">
                            <div class="experience-content">
                                <blockquote>
                                    <p>
                                        <span class="blockquote-content">
                                            «&nbsp;Je suis pharmacien titulaire de la pharmacie du Cœur de la Brie, en
                                            Seine-et-Marne. J’utilise winAutopilote depuis juillet 2019.&nbsp;»
                                        </span>
                                        <cite class="blockquote-author">Sylvain Pelletier</cite>
                                        <span class="blockquote-source">Pharmacie du Coeur de la Brie (77)</span>
                                        <span class="blockquote-more-infos">
                                            Chiffre d’affaires : 1,2M&nbsp;€ - Équipe : 20 pers.
                                        </span>
                                    </p>
                                </blockquote>
                                <div class="wrapper-experience-button">
                                    <Button
                                        :href="'http://www.winpharma.com/info-winautopilote/'"
                                        type="Primary"
                                        class="secondary experience-button"
                                    >
                                        Demander de l’information
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="experience">
                    <div class="wrapper-wave generation-xp">
                        <svg
                            class="wave"
                            viewBox="0 0 1440 146"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1440 0H0V126.632C164.733 28.8372 346.779 2.00012 576 2C728.589 1.99988 1063.26 49.2133 1440 145.094V0Z"
                                fill="#322654"
                            />
                        </svg>
                    </div>
                    <div class="container container-experience">
                        <div class="wrapper-img">
                            <Generation ref="generationIllus" />
                        </div>
                        <div class="container-txt">
                            <div class="experience-content">
                                <h3 class="content-title">
                                    Génération <br />
                                    et envoi automatiques
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
                                    winAutopilote, mémorise, analyse, controle, et envoie pour vous les commandes à
                                    vérifier. Il n'est jamais distrait ni même pressé.
                                </p>
                                <div class="experience-number">
                                    <div class="wrapper-number">
                                        +2h
                                    </div>
                                    <div class="wrapper-txt">
                                        <p>
                                            «&nbsp;Je gagne 2h par jour en génération et en envoi&nbsp;»
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="experience-testimony">
                            <div class="testimony-content">
                                <blockquote>
                                    <p>
                                        <span class="blockquote-content">
                                            «&nbsp;Le reste des commandes a été envoyé automatiquement en temps et en
                                            heure pendant que j’étais au comptoir auprès de mes patients.&nbsp;»
                                        </span>
                                        <span class="blockquote-infos">
                                            <span
                                                class="blockquote-image"
                                                :style="{ backgroundImage: 'url(img/sylvain-author.png)' }"
                                            >
                                            </span>
                                            <cite class="blockquote-author">Sylvain Pelletier,</cite>
                                            <span class="blockquote-source">Seine-et-Marne (77)</span>
                                        </span>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="experience">
                    <div class="container container-experience">
                        <div class="wrapper-img">
                            <Reception ref="receptionIllus" />
                        </div>
                        <div class="container-txt">
                            <div class="experience-content">
                                <h3 class="content-title">
                                    Réception automatique
                                </h3>
                                <p class="intro-text">
                                    Vous restez maitre de votre temps car la réception des livraisons se fait
                                    automatiquement. Lorsque vous le souhaitez, contentez-vous de contrôler les aléas de
                                    livraison et laissez winAutopilote® faire le reste.
                                </p>
                                <h4 class="content-subtitle">
                                    Suppression des faux promis
                                </h4>
                                <p class="content-text">
                                    Aucun laps de temps entre la livraison et la disponibilité des produits (même avec
                                    un robot) ce qui supprime les faux promis.
                                </p>
                                <h4 class="content-subtitle">
                                    Confort de travail
                                </h4>
                                <p class="content-text">
                                    Votre équipe se consacre plus sereinement à l’accueil, aux conseils et aux services
                                    des patients.
                                </p>
                                <div class="experience-number">
                                    <div class="wrapper-number">
                                        +2h
                                    </div>
                                    <div class="wrapper-txt">
                                        <p>
                                            «&nbsp;Je gagne 2h par jour en réception&nbsp;»
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="experience-testimony">
                            <div class="testimony-content">
                                <blockquote>
                                    <p>
                                        <span class="blockquote-content">
                                            «&nbsp;L’ordinateur s'occupe de mes commandes pendant que mon équipe
                                            privilégie nos patients et les tâches à valeur ajoutée.&nbsp;»
                                        </span>
                                        <span class="blockquote-infos">
                                            <span
                                                class="blockquote-image"
                                                :style="{ backgroundImage: 'url(img/sylvain-author.png)' }"
                                            >
                                            </span>
                                            <cite class="blockquote-author">Sylvain Pelletier,</cite>
                                            <span class="blockquote-source">Seine-et-Marne (77)</span>
                                        </span>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="experience">
                    <div class="container container-experience">
                        <div class="wrapper-img">
                            <Tools ref="toolsIllus" />
                        </div>
                        <div class="container-txt">
                            <div class="experience-content">
                                <h3 class="content-title">
                                    Des outils simples pour
                                    <br />gérer les commandes
                                </h3>
                                <p class="intro-text">
                                    Essentiellement, vous n’avez rien à faire. winAutopilote® s’occupe de tout&nbsp;! Un
                                    seul tableau de bord et une seule fenêtre de gestion des règles pour garder un œil
                                    sur votre pilote automatique.
                                </p>
                                <h4 class="content-subtitle">
                                    Visuel et dynamique
                                </h4>
                                <p class="content-text">
                                    Le tableau de bord winAutopilote® synthétise et pointe les commandes qui méritent
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
                                    <div class="wrapper-txt">
                                        <p>
                                            «&nbsp;Je visualise rapidement l’organisation et la gestion de mes
                                            commandes&nbsp;»
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="experience-testimony">
                            <div class="testimony-content">
                                <blockquote>
                                    <p>
                                        <span class="blockquote-content">
                                            «&nbsp;Seulement 5 min suffisent pour contrôler et isoler la commande des
                                            produits sensibles, nécessitant notre intervention.&nbsp;»
                                        </span>
                                        <span class="blockquote-infos">
                                            <span
                                                class="blockquote-image"
                                                :style="{ backgroundImage: 'url(img/sylvain-author.png)' }"
                                            >
                                            </span>
                                            <cite class="blockquote-author">Sylvain Pelletier,</cite>
                                            <span class="blockquote-source">Seine-et-Marne (77)</span>
                                        </span>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="experience">
                    <div class="container container-experience">
                        <div class="wrapper-img">
                            <Stock ref="stockIllus" />
                        </div>
                        <div class="container-txt">
                            <div class="experience-content">
                                <h3 class="content-title">
                                    Diminution du stock
                                </h3>
                                <p class="intro-text">
                                    L’automatisation des commandes engendre une diminution du stock et un maintien du
                                    niveau de manquant. Les algorithmes de winAutopilote® s’appuient sur les best
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
                                    Les produits sont en stock toujours au bon moment. La baisse du stock n'engendre pas
                                    d'augmentation des promis grâce à une optimisation des achats.
                                </p>
                                <div class="experience-number">
                                    <div class="wrapper-number">
                                        +&nbsp;38&nbsp;000€
                                    </div>
                                    <div class="wrapper-txt">
                                        <p>
                                            «&nbsp;De trésorerie grâce à une diminution du stock&nbsp;»
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="experience-testimony">
                            <div class="testimony-content">
                                <blockquote>
                                    <p>
                                        <span class="blockquote-content">
                                            «&nbsp;Notre trésorerie a également eu un sacré coup de pouce :
                                            38.000&nbsp;€ récupérés grâce à une diminution du stock. Et ce n’est que le
                                            début&nbsp;!&nbsp;»
                                        </span>
                                        <span class="blockquote-infos">
                                            <span
                                                class="blockquote-image"
                                                :style="{ backgroundImage: 'url(img/sylvain-author.png)' }"
                                            >
                                            </span>
                                            <cite class="blockquote-author">Sylvain Pelletier,</cite>
                                            <span class="blockquote-source">Seine-et-Marne (77)</span>
                                        </span>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
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
    data: () => ({}),
    computed: {},
    watch: {},
    mounted() {},
    beforeDestroy() {},
    destroyed() {},
    methods: {}
};
</script>

<style lang="scss" scoped>
.wrapper-experiences {
    position: relative;
    padding: 80px 0 0;
    background: $primary-darker;
}
.wrapper-wave {
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    .wave {
        display: block;
        width: 100%;
        height: 100%;
    }
    &.top-xp {
        top: -1px;
        height: 55px;
        width: 100%;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
    }
    &.generation-xp {
        top: -1px;
        height: 30px;
        width: 100%;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
    }
}
.container-experiences {
    position: relative;
}
.title-experiences {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    font-family: $ageo;
    font-weight: 600;
    font-size: 3.4rem;
    line-height: 41px;
    text-align: center;
    max-width: 795px;
    color: $white;
    sup {
        top: -0.6em;
        font-size: 65%;
    }
}
.experiences {
    margin: 0;
    > li {
        position: relative;
        padding: 40px 0;
        &:nth-child(n + 2) {
            background: #463271;
        }
        &:nth-child(1) {
            .wrapper-img {
                margin-bottom: 20px;
            }
        }
        &:nth-child(2) {
            padding-top: 60px;
        }
    }
    blockquote {
        .blockquote-content {
            color: $white;
        }
    }
}
.container-experience {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
}
.wrapper-img {
    flex: 0 0 auto;
    margin-bottom: 40px;
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
.experience-testimony {
    flex: 0 0 auto;
    width: 100%;
    margin-top: 40px;
    text-align: center;
    .testimony-content {
        max-width: 793px;
        margin: 0 auto;
    }
    blockquote {
        .blockquote-content {
            position: relative;
            margin-bottom: 20px;
            padding-bottom: 20px;
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                margin-left: -15px;
                display: block;
                width: 30px;
                border-top: 1px solid #795bc0;
            }
        }
        .blockquote-infos {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .blockquote-image {
            flex: 0 0 auto;
            width: 33px;
            height: 33px;
            margin-right: 15px;
            border-radius: 50%;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: cover;
        }
        .blockquote-author,
        .blockquote-source {
            font-size: 1.3rem;
            line-height: 24px;
            color: $white;
        }
        .blockquote-author {
            font-weight: 500;
            margin-right: 5px;
        }
        .blockquote-source {
            font-weight: 400;
        }
    }
}
.experience-content {
    color: $white;
    p,
    .blockquote-source {
        color: $white;
    }
    .blockquote-more-infos {
        display: block;
    }
}
.wrapper-experience-button {
    text-align: center;
}
.experience-button {
    margin-top: 30px;
}

.content-title {
    margin-bottom: 20px;
    font-family: $ageo;
    font-size: 3.8rem;
    font-weight: 600;
    line-height: 36px;
    br {
        display: none;
    }
}

.content-subtitle {
    display: inline-flex;
    margin: 30px 0 10px;
    padding: 3px 8px 1px;
    font-family: $ageo;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 19px;
    border-radius: 5px;
    background: $tertiary;
}

.intro-text {
    margin-bottom: 10px;
    font-size: 1.8rem;
    line-height: 23px;
}

.content-text {
    font-size: 1.4rem;
    line-height: 20px;
}

.experience-number {
    display: flex;
    align-items: center;
    margin-top: 40px;
    padding: 20px 28px 20px 20px;
    border-radius: 8px;
    background: $white;
    box-shadow: 0px 0px 20px rgba($black, 0.05);
    .wrapper-number {
        flex: 0 0 auto;
        margin-right: 22px;
        font-family: $ageo;
        font-weight: 600;
        font-size: 2.8rem;
        line-height: 34px;
        color: $tertiary;
    }
    .wrapper-txt {
        p {
            font-family: $ageo;
            font-weight: 600;
            font-style: italic;
            font-size: 1.6rem;
            line-height: 19px;
            color: $primary-even-darker;
        }
    }
}
@media (min-width: $phone) {
    .experience-number {
        padding: 24px 40px 24px 20px;
        .wrapper-number {
            margin-right: 30px;
            font-size: 3.8rem;
            line-height: 46px;
        }
        .wrapper-txt {
            p {
                font-style: italic;
                font-size: 2rem;
                line-height: 24px;
            }
        }
    }
}
@media (min-width: $desktop-small) {
    .wrapper-experiences {
        padding-top: 190px;
    }
    .wrapper-wave {
        &.top-xp {
            height: 178px;
        }
        &.generation-xp {
            height: 146px;
        }
    }
    .title-experiences {
        font-size: 4.2rem;
        line-height: 50px;
    }
    .experiences {
        > li {
            padding: 62px 0;
            &:nth-child(odd) {
                .container-experience {
                    flex-direction: row-reverse;
                }
                .wrapper-img {
                    padding-left: #{$small-gutter};
                }
                .container-txt {
                    padding-right: calc(#{percentage(1/12)} + #{$small-gutter});
                }
            }
            &:nth-child(even) {
                .container-experience {
                    flex-direction: row;
                }
                .wrapper-img {
                    padding-right: #{$small-gutter};
                }
                .container-txt {
                    padding-left: calc(#{percentage(1/12)} + #{$small-gutter});
                }
            }
            &:nth-child(1) {
                .wrapper-img {
                    margin-bottom: 0;
                }
            }
            &:nth-child(2) {
                padding-top: 172px;
            }
        }
    }
    .wrapper-img,
    .container-txt {
        width: 50%;
    }
    .wrapper-img {
        margin-bottom: 0;
    }
    .wrapper-experience-button {
        text-align: left;
    }
    .experience-testimony {
        margin-top: 70px;
    }
    .experience-button {
        margin-top: 60px;
    }
}
</style>
