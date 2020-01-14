<template>
    <div class="wrapper-img-quote">
        <img src="img/sylvain.png" alt="" />
        <div class='rounded-wrapper'>
            <img class="round" src="/img/toproundedorange.svg" alt="" />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.rounded-wrapper {
    opacity: 0;
}
.wrapper-img-quote {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 100%;
    > img {
        flex: 0 0 auto;
        max-height: 90%;
    }
    > div {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
        z-index: -1;
    }
    .round {
        position: relative;
        bottom: -10.7vh;
        max-width: none;
        width: 100vw;
        flex: 1 0 100vw;
    }
}
</style>
