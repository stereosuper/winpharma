<template>
    <header class="header container">
        <nuxt-link to="/" class="logo">
            <Icon name="winpharma-horizontal" class="icon-logo" />
        </nuxt-link>
        <ul class="menu">
            <li>
                <a href="http://www.winpharma.com/">Winpharma</a>
            </li>
            <li class="active">
                <nuxt-link to="/">winAutopilote</nuxt-link>
            </li>
            <li>
                <a href="http://www.winpharma.com/temoignages/">Témoignages</a>
            </li>
            <li>
                <a href="http://www.winpharma.com/actualites/">Actualités</a>
            </li>
            <li>
                <a href="http://www.winpharma.com/recrutement/">Recrutement</a>
            </li>
            <li>
                <a href="http://www.winpharma.com/contact/">Contact</a>
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
        }
    }
    a {
        text-decoration: none;
        color: $white;
    }
}
</style>
