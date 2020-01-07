<template>
    <div class="wrapper-cards container">
        <a href="#" class="card button-trigger">
            <span class="wrapper-img" :style="{ backgroundImage: 'url(img/livre-blanc.png)' }"></span>
            <span class="card-txt">
                <span class="card-txt-top">
                    <span class="card-title">winAutopilote, une méthode adaptée à toutes les officines</span>
                    <p>
                        Si vous avez encore quelques questions, téléchargez ce livre blanc qui reprend 8 idées reçues
                        sur l’automatisation et pourquoi vous avez tout intérêt à les dépasser.
                    </p>
                </span>
                <span class="card-btn">
                    <Button tag="span" type="Secondary">
                        Notre livre blanc
                    </Button>
                </span>
            </span>
        </a>
        <a href="#" class="card button-trigger">
            <span class="wrapper-img" :style="{ backgroundImage: 'url(img/co-creation.png)' }"></span>
            <span class="card-txt">
                <span class="card-txt-top">
                    <span class="card-title">Le fruit d’un travail de co&#x2011;création</span>
                    <p>
                        Par un travail de terrain, au cœur des pharmacies, nous avons étudié, testé et validé tous les
                        paramètres intervenant dans la gestion des commandes d’une officine, de structure ou taille
                        différente.
                    </p>
                </span>
                <span class="card-btn">
                    <Button tag="span" type="Secondary">
                        Notre étude
                    </Button>
                </span>
            </span>
        </a>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper-cards {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 45px;
    margin-bottom: 50px;
    > a {
        margin-bottom: 30px;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
.card {
    max-width: 500px;
    position: relative;
    text-decoration: none;
    z-index: 1;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: $white;
        border-radius: 8px;
        box-shadow: 0px 0px 20px rgba($black, 0.05);
        z-index: -1;
    }
    > span {
        display: block;
    }
    p {
        color: $grey;
    }
}
.wrapper-img {
    height: 160px;
    background: $primary-light;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: 50% 50%;
}
.card-txt {
    padding: 30px 30px 40px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
.card-txt-top {
    display: block;
}
.card-title {
    display: block;
    margin-bottom: 20px;
    font-family: $ageo-semi-bold;
    font-size: 3.2rem;
    line-height: 1;
    color: $primary-darker;
}
p {
    line-height: 24px;
    color: $primary-darker;
}
.card-btn {
    display: block;
    margin-top: 30px;
}

@media (min-width: $phone-small) {
    .wrapper-img {
        height: 220px;
    }
}

@media (min-width: $tablet) {
    .wrapper-cards {
        margin-bottom: -165px;
    }
}

@media (min-width: $desktop-small) {
    .wrapper-cards {
        justify-content: space-between;
        align-items: stretch;
        flex-direction: row;
        > a {
            margin-bottom: 0;
        }
    }
    .card {
        display: flex;
        flex-direction: column;
        max-width: none;
        width: calc(50% - #{$gutter});
        > span {
            &.card-txt {
                flex: 1 1 auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }
    }
    .card-txt-top {
        flex: 1 1 auto;
    }
}
@media (min-width: $desktop-large) {
    .wrapper-cards {
        padding: 0 #{percentage(1/12)};
    }
}
</style>
