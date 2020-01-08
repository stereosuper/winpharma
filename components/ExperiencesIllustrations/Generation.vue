<template>
    <div class="wrapper">
        <div class="wrapper-shape">
            <img class="shape" src="img/generation-shape.svg" alt="" />
        </div>
        <img class="screen" src="img/generation-screen.png" alt="" />
        <img class="front" src="img/generation-cosmonaut.svg" alt="" />
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
    img {
        max-height: 100%;
    }
}
.wrapper-shape {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
.screen,
.front {
    position: relative;
}
.front {
    position: absolute;
    bottom: -15%;
    left: -5%;
    width: 35%;
}
</style>
