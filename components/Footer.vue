<template>
    <div class="footer container">
        <ul class="footer-menu">
            <li>
                <h4 class="footer-title">
                    Produits
                </h4>
                <ul class="footer-submenu">
                    <li>
                        <a href="#">winAutopilote</a>
                    </li>
                    <li>
                        <a href="#">Winpharma 9</a>
                    </li>
                    <li>
                        <a href="#">winTeam</a>
                    </li>
                    <li>
                        <a href="#">winStat</a>
                    </li>
                    <li>
                        <a href="#">Elsa</a>
                    </li>
                    <li>
                        <a href="#">winAccompagnement</a>
                    </li>
                    <li>
                        <a href="#">Cashguard</a>
                    </li>
                </ul>
            </li>
            <li>
                <h4 class="footer-title">
                    Winpharma
                </h4>
                <ul class="footer-submenu">
                    <li>
                        <a href="#">À propos</a>
                    </li>
                    <li>
                        <a href="#">Actualités</a>
                    </li>
                    <li>
                        <a href="#">Témoignages</a>
                    </li>
                    <li>
                        <a href="#">Recrutement</a>
                    </li>
                    <li>
                        <a href="#">Espace e&#x2011;learning</a>
                    </li>
                    <li>
                        <a href="#">Forum</a>
                    </li>
                </ul>
            </li>
            <li>
                <h4 class="footer-title">
                    Contact
                </h4>
                <address class="footer-address">
                    <span>Espace Atlantica,</span>
                    <span>7552 Z.A. du Rédo,</span>
                    <span>56640 ARZON</span>
                </address>
            </li>
            <li>
                <h4 class="footer-title">
                    Téléphone
                </h4>
                <a href="telto:contact@winpharma.com">0 820 220 333</a>
            </li>
            <li>
                <h4 class="footer-title">
                    Email
                </h4>
                <a href="mailto:contact@winpharma.com">contact@winpharma.com</a>
            </li>
        </ul>
        <div class="wrapper-newsletter">
            <h4 class="newsletter-title">
                S’abonner à la newsletter Winpharma
            </h4>
            <p>Les dernières actualités et produits Winpharma, dans votre boîte de mail tous les mois.</p>
            <form class="newsletter-form">
                <div class="wrapper-input-btn">
                    <input id="newsletter-mail" type="email" name="newsletter-mail" placeholder="Votre adresse email" />
                    <button type="submit">
                        S'abonner
                    </button>
                </div>
            </form>
        </div>
        <div class="footer-logo">
            <Icon name="winpharma-colored" class="logo-colored" />
        </div>
        <ul class="social">
            <li>
                <a href="#" target="_blank" rel="noopener noreferrer" class="twitter">
                    <Icon name="twitter" />
                </a>
            </li>
            <li>
                <a href="#" target="_blank" rel="noopener noreferrer" class="facebook">
                    <Icon name="facebook" />
                </a>
            </li>
            <li>
                <a href="#" target="_blank" rel="noopener noreferrer" class="youtube">
                    <Icon name="youtube" />
                </a>
            </li>
            <li>
                <a href="#" target="_blank" rel="noopener noreferrer" class="linkedin">
                    <Icon name="linkedin" />
                </a>
            </li>
            <li>
                <a href="#" target="_blank" rel="noopener noreferrer" class="instagram">
                    <Icon name="instagram" />
                </a>
            </li>
        </ul>
        <p class="copyright">
            Copyright 1994 - 2018 Winpharma | All Rights Reserved
        </p>
        <div class="footer-bottom">
            <a href="#">Mentions légales</a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
    padding-top: 45px;
    padding-bottom: 30px;
}
.footer-menu {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0;
    > li {
        width: calc(50% - #{$gutter});
        margin: 0 0 30px;
    }
    a {
        font-family: $dm;
        font-size: 1.4rem;
        line-height: 24px;
        text-decoration: none;
    }
}
.footer-title {
    margin-bottom: 20px;
    font-family: $dm;
    font-size: 1.6rem;
    line-height: 21px;
    font-weight: 700;
    color: $primary-darker;
}
.footer-submenu {
    > li {
        margin: 0 0 10px;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
.footer-address {
    font-family: $dm;
    font-style: normal;
    font-size: 1.4rem;
    line-height: 24px;
    color: $primary-darker;
    > span {
        display: block;
    }
}
.wrapper-newsletter {
    p {
        color: $primary-darker;
    }
}
.newsletter-title {
    margin-bottom: 10px;
    font-size: 1.4rem;
    line-height: 1;
    color: $secondary;
}

.newsletter-form {
    margin-top: 30px;
}
.wrapper-input-btn {
    display: flex;
    align-items: stretch;
    input {
        flex: 1 1 auto;
        padding: 12px 20px;
        border: 1px solid $grey-lighter;
        border-right: 0;
        border-radius: 4px;
        font-family: $dm;
        font-size: 1.3rem;
        line-height: 24px;
        color: $primary-darker;
        &::placeholder {
            color: #b2b0b0;
        }
    }
    button {
        flex: 0 0 auto;
        padding: 14px 20px 12px;
        font-family: $ageo-bold;
        font-size: 1.6rem;
        line-height: 24px;
        border: 0;
        border-radius: 0px 4px 4px 0px;
        color: $white;
        background: $secondary;
    }
}
.footer-logo {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
.logo-colored {
    flex: 0 0 auto;
    width: 217px;
    height: 32px;
}
.social {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 50px 0 0;
    > li {
        a {
            display: block;
            .icon {
                display: block;
                width: 100%;
                height: 100%;
                fill: #b2c5c9;
            }
            &.twitter {
                width: 23px;
                height: 23px;
            }
            &.facebook {
                width: 15px;
                height: 22px;
            }
            &.youtube {
                width: 25px;
                height: 22px;
            }
            &.linkedin {
                width: 23px;
                height: 23px;
            }
            &.instagram {
                width: 20px;
                height: 20px;
            }
        }
    }
}
.copyright {
    margin: 40px 0 0;
    font-size: 1.2rem;
    line-height: 24px;
    text-align: center;
    color: #b2b0b0;
}
.footer-bottom {
    margin-top: 10px;
    text-align: center;
    a {
        font-family: $dm;
        font-size: 1.2rem;
        line-height: 24px;
        text-decoration: none;
        color: $primary-darker;
    }
}
</style>
