<template>
    <div class="wrapper">
        <div class="wrapper-shape">
            <img class="shape" src="img/generation-shape.svg" alt="" />
        </div>
        <span class="wrapper-screen">
            <img class="screen" src="img/generation-screen.png" alt="" />
            <img class="front" src="img/generation-cosmonaut.svg" alt="" />
        </span>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.wrapper-shape {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
.shape {
    max-height: 100%;
}
.wrapper-screen {
    position: relative;
}
.screen,
.front {
    position: relative;
}
.screen {
    max-height: 200px;
}
.front {
    position: absolute;
    bottom: -15%;
    left: -1%;
    height: 70%;
}

@media (min-width: $tablet) {
    .screen {
        max-height: 250px;
    }
}
@media (min-width: $desktop-small) {
    .screen {
        max-height: 64vh;
    }
}
</style>
