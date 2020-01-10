<template>
    <div ref="wrapperCards" class="wrapper-cards container">
        <a href="http://www.winpharma.com/livre-blanc-winautopilote/" class="card button-trigger">
            <div class="inner-card">
                <span class="wrapper-img" :style="{ backgroundImage: 'url(img/livre-blanc.png)' }"></span>
                <span class="card-txt">
                    <span class="card-txt-top">
                        <span class="card-title">winAutopilote, une méthode adaptée à toutes les officines</span>
                        <p>
                            Si vous avez encore quelques questions, téléchargez ce livre blanc qui reprend 8 idées
                            reçues sur l’automatisation et pourquoi vous avez tout intérêt à les dépasser.
                        </p>
                    </span>
                    <span class="card-btn">
                        <Button tag="span" type="Secondary">
                            Notre livre blanc
                        </Button>
                    </span>
                </span>
            </div>
        </a>
        <a href="http://www.winpharma.com/notre-etude/" class="card button-trigger">
            <div class="inner-card">
                <span class="wrapper-img" :style="{ backgroundImage: 'url(img/co-creation.png)' }"></span>
                <span class="card-txt">
                    <span class="card-txt-top">
                        <span class="card-title">Le fruit d’un travail de co&#x2011;création</span>
                        <p>
                            Par un travail de terrain, au cœur des pharmacies, nous avons étudié, testé et validé tous
                            les paramètres intervenant dans la gestion des commandes d’une officine, de structure ou
                            taille différente.
                        </p>
                    </span>
                    <span class="card-btn">
                        <Button tag="span" type="Secondary">
                            Notre étude
                        </Button>
                    </span>
                </span>
            </div>
        </a>
    </div>
</template>

<script>
import { gsap } from 'gsap/all';
import { query } from '@stereorepo/sac';
export default {
    data: () => ({
        myWatchers: [],
        cards: null
    }),
    mounted() {
        this.cards = query({ selector: '.card', ctx: this.$refs.wrapperCards });

        gsap.set(this.cards, { opacity: 0, y: 50 });
        this.$stereorepo.superScroll.initializeScroll();
        this.cards.forEach((el, i) => {
            const watcher = this.$stereorepo.superScroll
                .watch({
                    element: el,
                    options: {
                        stalk: true,
                        triggerOffset: '60%'
                    }
                })
                .on('enter-view', () => {
                    gsap.to(el, {
                        duration: 1,
                        opacity: 1,
                        y: 0,
                        delay: i * 0.2,
                        ease: 'power4.out'
                    });
                });
            this.myWatchers.push(watcher);
        });
    },
    beforeDestroy() {
        if (this.myWatchers) this.myWatchers.forgetMultiple();
        this.$stereorepo.superScroll.destroyScroll();
    }
};
</script>

<style lang="scss" scoped>
.wrapper-cards {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 45px;
    margin-bottom: 50px;
    z-index: 2;
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
    &:hover,
    &:focus {
        .inner-card {
            &::after {
                opacity: 1;
            }
            transform: translateY(-10px) translateZ(0);
        }
    }
}

.inner-card {
    position: relative;
    transform: translateY(0) translateZ(0);
    transition: transform 0.7s $easeOut;
    z-index: 1;
    > span {
        display: block;
    }
    p {
        font-size: 1.4rem;
        color: $grey;
    }
    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 8px;
    }
    &::before {
        background: $white;
        box-shadow: 0px 0px 20px rgba($black, 0.05);
        z-index: -1;
    }
    &::after {
        opacity: 0;
        z-index: -2;
        box-shadow: 0px 49px 30px rgba(25, 16, 40, 0.156714);
        transition: 0.7s $easeOut;
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
        max-width: none;
        width: calc(50% - #{$gutter});
    }
    .inner-card {
        height: 100%;
        display: flex;
        flex-direction: column;
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
