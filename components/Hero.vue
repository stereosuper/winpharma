<template>
    <div class="hero">
        <div class="wrapper-bg-hero">
            <img src="img/bg-hero-1.svg" alt="" class="bg-hero-1" />
            <img src="img/bg-hero-2.svg" alt="" class="bg-hero-2" />
        </div>
        <div class="container">
            <div class="wrapper-txt-hero">
                <p class="intro">Révolutionner votre gestion des commandes</p>
                <h2 class="h2">
                    <strong>winAutopilote<sup>®</sup></strong> c'est simple de gagner beaucoup de temps&nbsp;!
                </h2>
                <h1 class="h1">
                    La Méthode winAutopilote®, unique sur le marché, atteint des gains de temps et des gains financiers
                    encore jamais vus en matière de gestion de stock en pharmacie&nbsp;!
                </h1>
                <Button :href="'#'">Demander une démo</Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 90vh;
    padding: 110px 0;
    text-align: center;
    color: $white;
    background: $primary;
    z-index: 1;
}
.wrapper-bg-hero {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -1;
}
.bg-hero-1,
.bg-hero-2 {
    position: absolute;
    max-width: none;
}
.bg-hero-1 {
    left: -97%;
    bottom: -35%;
    width: 310%;
    fill: $primary-dark;
}
.bg-hero-2 {
    width: 549px;
    transform: translate3d(-36%, 0, 0);
    fill: $primary-darker;
    opacity: 0;
}
.h2 {
    > strong {
        display: block;
    }
    sup {
        top: -1.2em;
        font-size: 1.8rem;
    }
}
.intro {
    margin: 0 0 32px;
    font-family: $ageo-bold;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

@media (min-width: $desktop-small) {
    .hero {
        padding: 150px 0;
        text-align: left;
    }
    .wrapper-txt-hero {
        width: percentage(5/12);
    }
}
</style>
