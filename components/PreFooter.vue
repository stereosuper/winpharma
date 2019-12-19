<template>
    <div class="wrapper-prefooter container">
        <p class="prefooter-intro">
            Avec la méthode winAutopilote
        </p>
        <p class="prefooter-title">
            Prêt à vous lancer&nbsp;?
        </p>
        <Button :href="'#'" type="Primary">
            Prendre rendez-vous
        </Button>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper-prefooter {
    position: relative;
    padding-top: 90px;
    padding-bottom: 35px;
    text-align: center;
    color: $white;
    background: $primary;
    p {
        color: $white;
    }
}
.prefooter-intro {
    margin-bottom: 20px;
    font-family: $ageo-bold;
    font-size: 1.4rem;
    line-height: 22px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
}
.prefooter-title {
    margin-bottom: 20px;
    font-family: $ageo-semi-bold;
    font-size: 3.2rem;
    line-height: 38px;
}
</style>
