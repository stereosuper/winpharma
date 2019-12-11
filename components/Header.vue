<template>
    <header class="header container">
        <nuxt-link to="/" class="logo">
            <Icon name="winpharma-horizontal" class="icon-logo" />
        </nuxt-link>
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
    </header>
</template>

<script>
export default {};
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
    padding: 60px 0;
}
.logo {
    flex: 0 0 auto;
    display: block;
    width: 244px;
    height: 36px;
    .icon-logo {
        display: block;
        width: 100%;
        height: 100%;
        fill: $white;
    }
}
.menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    > li {
        margin-left: 50px;
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
        .txt {
            position: relative;
            display: block;
            padding: 1px 0;
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
</style>
