<template>
    <div class="hero">
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
    min-height: 100vh;
    padding: 110px 0;
    text-align: center;
    color: $white;
    background: $primary;
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
