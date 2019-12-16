<template>
    <div class="wrapper-key-figures">
        <div class="container">
            <h3 class="h3">
                Des résultats époustouflants
                <span class="second-line">pour <span class="secondary">toutes les pharmacies de&nbsp;:</span></span>
            </h3>
            <div class="wrapper-tabs">
                <button type="button" :class="{ active: tabActive === 0 }">
                    Village
                </button>
                <button type="button" :class="{ active: tabActive === 1 }">
                    Quartier
                </button>
                <button type="button" :class="{ active: tabActive === 2 }">
                    Centre C<span class="hide-small-device">ommerc</span>ial
                </button>
            </div>
            <div class="wrapper-tabs-contents">
                <div class="tab-content">
                    <ul class="key-figures">
                        <li>
                            <h4 class="key-figure-title"><strong>85%</strong> de taux d'automatisation</h4>
                            <p>En génération, envoi et réception, atteignable dès la 1re journée d'accompagnement.</p>
                        </li>
                        <li>
                            <h4 class="key-figure-title"><strong>16h</strong> gagnées</h4>
                            <p>C’est le temps gagné chaque mois grâce à l’automatisation des commandes.</p>
                        </li>
                        <li>
                            <h4 class="key-figure-title"><strong>+15&nbsp;000€</strong> de trésorerie</h4>
                            <p>Soit 1 point de trésorerie récupérée pour une pharmacie moyenne.</p>
                        </li>
                    </ul>
                    <div class="user">
                        <div class="wrapper-img"></div>
                        <div>
                            <div class="user-name">Adrien Dupif,</div>
                            <div class="user-company">Pharmacie Le Coeur de la Brie (10)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabActive: 0
        };
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
        border-bottom: 1px solid #e8e8e8;
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
    padding-top: 30px;
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
        background: $primary;
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
