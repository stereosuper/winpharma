<template>
    <div class="footer container">
        <div class="wrapper-menu-newsletter">
            <ul class="footer-menu">
                <li>
                    <h4 class="footer-title">
                        Produits
                    </h4>
                    <ul class="footer-submenu">
                        <li>
                            <a href="/">winAutopilote</a>
                        </li>
                        <li>
                            <a href="http://www.winpharma.com/winpharma9-5/">Winpharma 9</a>
                        </li>
                        <li>
                            <a href="http://www.winpharma.com/winteam/">winTeam</a>
                        </li>
                        <li>
                            <a href="http://www.winpharma.com/winstat/">winStat</a>
                        </li>
                        <li>
                            <a href="http://www.winpharma.com/elsa-2/">Elsa</a>
                        </li>
                        <li>
                            <a href="http://www.winpharma.com/winaccompagnement/">winAccompagnement</a>
                        </li>
                        <li>
                            <a href="http://www.winpharma.com/cashguard/">Cashguard</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4 class="footer-title">
                        Winpharma
                    </h4>
                    <ul class="footer-submenu">
                        <li>
                            <a href="http://www.winpharma.com/actualites/">Actualités</a>
                        </li>
                        <li>
                            <a href="http://www.winpharma.com/temoignages/">Témoignages</a>
                        </li>
                        <li>
                            <a href="http://www.winpharma.com/recrutement/">Recrutement</a>
                        </li>
                        <li>
                            <a href="http://www.winpharma.com/formations/">Espace e&#x2011;learning</a>
                        </li>
                        <li>
                            <a href="http://www.winpharma.com/forum/">Forum</a>
                        </li>
                    </ul>
                </li>
                <li class="big">
                    <ul class="footer-submenu">
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
                </li>
            </ul>
            <div class="wrapper-about">
                <h4 class="footer-title">
                    À propos
                </h4>
                <p>
                    N°1 des éditeurs indépendants de logiciels de pharmacie et leader en matière d’innovation, Winpharma
                    développe son logiciel, vend le matériel associé et assure les services d’installation, de formation
                    et d’assistance.
                </p>
            </div>
        </div>
        <div class="wrapper-footer-bottom">
            <div class="footer-logo">
                <Icon name="winpharma-colored" class="logo-colored" />
            </div>
            <ul class="social">
                <li>
                    <a href="https://twitter.com/Winpharma" target="_blank" rel="noopener noreferrer" class="twitter">
                        <Icon name="twitter" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.facebook.com/Winpharma-427022747370410/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="facebook"
                    >
                        <Icon name="facebook" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.youtube.com/user/winpharma/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="youtube"
                    >
                        <Icon name="youtube" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/company/winpharma-everys/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="linkedin"
                    >
                        <Icon name="linkedin" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/winpharma/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="instagram"
                    >
                        <Icon name="instagram" />
                    </a>
                </li>
            </ul>
            <div class="wrapper-copy-legals">
                <p class="copyright">
                    Copyright 1994 - 2018 Winpharma | All Rights Reserved
                </p>
                <div class="footer-bottom">
                    <a href="http://www.winpharma.com/mentions-legales/">Mentions légales</a>
                </div>
            </div>
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
        &.big {
            width: 100%;
            margin-bottom: 0;
            .footer-submenu {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                flex-wrap: wrap;
                margin: 0;
                > li {
                    width: calc(50% - #{$gutter});
                    margin: 0 0 30px;
                }
            }
        }
    }
    a {
        font-family: $dm;
        font-size: 1.4rem;
        line-height: 24px;
        text-decoration: none;
        transition: opacity $short-duration;
        &:hover {
            opacity: 0.6;
        }
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
.wrapper-about {
    p {
        line-height: 24px;
    }
}
.newsletter-title {
    margin-bottom: 10px;
    font-size: 1.4rem;
    line-height: 1;
    color: $secondary;
}

.newsletter-form {
    max-width: 400px;
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
        border-radius: 4px 0 0 4px;
        font-family: $dm;
        font-size: 1.3rem;
        line-height: 24px;
        color: $primary-darker;
        transition: $short-duration;
        &:focus {
            outline: 0;
            border-color: $secondary;
        }
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
    max-width: 600px;
    margin: 50px auto 0;
    > li {
        a {
            display: block;
            &:hover {
                .icon {
                    fill: $secondary;
                }
            }
            .icon {
                display: block;
                width: 100%;
                height: 100%;
                fill: #b2c5c9;
                transition: fill $short-duration;
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
        transition: opacity $short-duration;
        &:hover {
            opacity: 0.6;
        }
    }
}

@media (min-width: $desktop-small) {
    .footer-menu {
        justify-content: flex-start;
        width: calc(100% + #{$gutter * 2});
        margin: 0 #{-$gutter};
        > li {
            width: calc(33.3333% - #{$gutter * 2});
            margin-right: #{$gutter};
            margin-left: #{$gutter};
            &.big {
                width: calc(33.3333% - #{$gutter * 2});
                .footer-submenu {
                    display: flex;
                    flex-direction: column;
                    margin: 0;
                    > li {
                        width: 100%;
                        margin: 0 0 30px;
                        &:nth-child(n + 2) {
                            .footer-title {
                                margin-bottom: 0;
                            }
                        }
                    }
                }
            }
        }
    }
}
@media (min-width: $desktop) {
    .wrapper-menu-newsletter {
        display: flex;
        align-items: flex-start;
        width: calc(100% + #{$gutter * 2});
        margin-left: #{-$gutter};
    }
    .footer-menu {
        width: percentage(8/12);
        margin: 0 #{$gutter};
    }
    .wrapper-about {
        flex: 0 0 auto;
        width: percentage(4/12);
        margin: 0 #{$gutter};
    }
    .wrapper-footer-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 60px;
        > div {
            flex: 0 0 auto;
        }
    }
    .footer-logo {
        order: 1;
        justify-content: flex-start;
        width: percentage(3/12);
        margin-top: 0;
    }
    .wrapper-copy-legals {
        order: 2;
        width: percentage(6/12);
        margin: 0 #{$gutter * 2};
    }
    .social {
        order: 3;
        justify-content: flex-end;
        width: percentage(3/12);
        margin: 0;
        max-width: none;
        > li {
            margin-left: 32px;
            a {
                &.twitter {
                    width: 16px;
                    height: 16px;
                }
                &.facebook {
                    width: 9px;
                    height: 14px;
                }
                &.youtube {
                    width: 14px;
                    height: 14px;
                }
                &.linkedin {
                    width: 15px;
                    height: 14px;
                }
                &.instagram {
                    width: 12px;
                    height: 12px;
                }
            }
        }
    }
    .copyright {
        margin: 0 40px 0 0;
    }
    .footer-bottom {
        margin-top: 0;
    }
}
@media (min-width: $desktop-large) {
    .wrapper-copy-legals {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
