<template>
    <div class="wrapper-testimonies">
        <div class="container">
            <div class="wrapper-title">
                <h3 class="testimonies-title">
                    Comme ces pharmaciens ouvrez-vous à de <span class="secondary">nouveaux horizons&nbsp;!</span>
                </h3>
            </div>
            <div class="testimonies-intro">
                <p>
                    Nos pharmacies equipées de winAutopilote ont trouvé de nouvelles façons de dynamiser leur officine :
                    mise en place des actions de promotions, plus de disponibilité pour écouter les clients, du temps
                    pour réorganiser son backoffice.
                </p>
                <Button :href="'#'" :type="'Secondary'">
                    Tous nos témoignages
                </Button>
            </div>
        </div>
        <ul class="testimonies">
            <li class="testimony">
                <blockquote>
                    <p>
                        <span class="blockquote-content">
                            Avec son clavier intuitif, <strong>Winpharma réfléchit et pense</strong> à la place de
                            l’utilisateur&nbsp;!
                        </span>
                        <span class="blockquote-wrapper-author">
                            <span class="wrapper-img" />
                            <span>
                                <cite class="blockquote-author">Hélène Lecoq</cite>
                                <span class="blockquote-source">Issy-les-Moulineaux (92)</span>
                            </span>
                        </span>
                    </p>
                </blockquote>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper-testimonies {
    padding: 80px 0 120px;
}
.wrapper-title {
    position: relative;
    margin-bottom: 30px;
    padding: 0 0 30px;
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: calc(100vw - #{2 * $small-gutter});
        border-top: 1px solid #ffe2db;
    }
}
.testimonies-title {
    font-family: $ageo-semi-bold;
    font-size: 2.8rem;
    line-height: 30px;
}
.testimonies-intro {
    p {
        margin-bottom: 25px;
    }
}
.testimony {
    padding: 20px 30px;
    border-radius: 8px;
    background: $white;
    box-shadow: 0px 0px 30px rgba(112, 112, 112, 0.1);
    .blockquote-content {
        font-family: $dm;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 20px;
        color: $grey;
        &::before,
        &::after {
            content: none;
        }
        > strong {
            font-weight: 700;
        }
    }
    .blockquote-author {
        line-height: 24px;
        color: $primary-darker;
    }
    .blockquote-source {
        font-size: 1.3rem;
        font-weight: 500;
        line-height: 24px;
        color: $grey;
    }
}
.blockquote-wrapper-author {
    display: flex;
    align-items: center;
    .wrapper-img {
        flex: 0 0 auto;
        width: 40px;
        height: 40px;
        margin-right: 15px;
        border-radius: 50%;
        background: $primary;
    }
}
</style>
