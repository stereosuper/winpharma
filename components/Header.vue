<template>
    <header
        :class="{
            'nav-activated': burgerState
        }"
        class="header container"
    >
        <nuxt-link to="/" @click.native="closeBurger" class="logo">
            <Icon name="winpharma-horizontal" class="icon-logo" />
        </nuxt-link>
        <nav class="main-navigation">
            <ul class="menu">
                <li>
                    <a href="http://www.winpharma.com/"><span class="txt">Winpharma</span></a>
                </li>
                <li class="active">
                    <nuxt-link to="/"><span class="new">new</span> <span class="txt">winAutopilote</span></nuxt-link>
                </li>
                <li>
                    <a href="http://www.winpharma.com/temoignages/"><span class="txt">Témoignages</span></a>
                </li>
                <li>
                    <a href="http://www.winpharma.com/actualites/"><span class="txt">Actualités</span></a>
                </li>
                <li>
                    <a href="http://www.winpharma.com/recrutement/"><span class="txt">Recrutement</span></a>
                </li>
                <li>
                    <a href="http://www.winpharma.com/contact/"><span class="txt">Contact</span></a>
                </li>
            </ul>
        </nav>
        <button
            v-if="navigationIsMobile"
            :class="{ activated: burgerState }"
            @click="toggleBurger"
            class="burger"
            type="button"
            aria-label="Burger menu navigation"
        >
            <span></span>
        </button>
    </header>
</template>

<script>
export default {
    computed: {
        navigationIsMobile() {
            if (!this.$store.state.superWindow) return false;
            return this.$store.state.superWindow.width < this.$breakpoints.list.l;
        },
        burgerState() {
            return this.$store.state.navigation.navigationActivated;
        }
    },
    watch: {
        navigationIsMobile(isMobile) {
            if (!isMobile) {
                this.$store.commit('navigation/toggleBurger', false);
            }
        }
    },
    mounted() {
        this.$stereorepo.superWindow.initializeWindow(this.$store);
    },
    methods: {
        toggleBurger() {
            this.$store.commit('navigation/toggleBurger', !this.burgerState);
        },
        closeBurger() {
            if (this.burgerState) {
                this.$store.commit('navigation/toggleBurger', false);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 40px;
    z-index: 2;
}
.logo {
    flex: 0 0 auto;
    position: relative;
    display: block;
    width: 163px;
    height: 24px;
    z-index: 1;
    .icon-logo {
        display: block;
        width: 100%;
        height: 100%;
        fill: $white;
    }
}
.main-navigation {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: stretch;
    justify-content: center;
    min-height: 100vh;
    padding: 104px 0 30px;
    background: $primary;
    transform: translate3d(0, -100%, 0);
    transition: transform 0.3s ease-out;
    .nav-activated & {
        transform: translate3d(0, 0, 0);
    }
}
.menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    > li {
        margin: 15px 0;
        &.active {
            a {
                .txt {
                    &::before {
                        opacity: 1;
                    }
                }
            }
        }
    }
    a {
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: $white;
        font-size: 2.4rem;
        .txt {
            position: relative;
            display: block;
            padding: 3px 0;
            &::before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                border-bottom: 1px solid $white;
                opacity: 0;
            }
        }
    }
}
.new {
    display: none;
}

.burger {
    position: relative;
    width: 29px;
    height: 23px;
    border: 0;
    z-index: 1;
    &::before,
    &::after {
        content: '';
        display: block;
        transform-origin: 0 50%;
    }
    &::before,
    &::after,
    > span {
        position: absolute;
        left: 0;
        right: 0;
        height: 3px;
        border-radius: 2px;
        background: $white;
        transition: transform 0.3s ease-out;
    }
    &::before {
        top: 0;
    }
    &::after {
        bottom: 0;
    }
    > span {
        top: 50%;
        margin-top: -1px;
    }
    &.activated {
        &::before {
            transform: rotate(45deg) translate3d(3px, -3px, 0);
        }
        &::after {
            transform: rotate(-45deg) translate3d(3px, 3px, 0);
        }
        > span {
            opacity: 0;
        }
    }
}

@media (min-width: $desktop-small) {
    .header {
        padding-top: 60px;
        padding-bottom: 60px;
    }
    .logo {
        width: 200px;
        height: 30px;
    }
    .main-navigation {
        position: static;
        top: auto;
        left: auto;
        right: auto;
        display: block;
        min-height: 0;
        padding: 0;
        background: transparent;
        transform: none;
    }
    .menu {
        flex-direction: row;
        justify-content: flex-end;
        > li {
            margin: 0 0 0 25px;
        }
        a {
            font-size: 1.7rem;
            .txt {
                padding: 1px 0;
            }
        }
    }
}

@media (min-width: $desktop-large) {
    .logo {
        width: 244px;
        height: 36px;
    }
    .menu {
        > li {
            margin-left: 50px;
        }
    }
    .new {
        display: inline-flex;
        margin-right: 6px;
        padding: 9px 6px 6px;
        border-radius: 5px;
        font-family: $ageo-bold;
        font-size: 1.2rem;
        line-height: 1;
        letter-spacing: 1px;
        text-transform: uppercase;
        background: $secondary;
    }
}
</style>
