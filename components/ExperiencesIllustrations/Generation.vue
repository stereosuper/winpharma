<template>
    <div class="wrapper">
        <div class="wrapper-shape">
            <img ref="shape" class="shape" src="img/generation-shape.svg" alt="" />
        </div>
        <span class="wrapper-screen">
            <img class="screen" src="img/generation-screen.png" alt="" />
            <img ref="front" class="front" src="img/generation-cosmonaut.svg" alt="" />
        </span>
    </div>
</template>

<script>
import { gsap } from 'gsap/all';

export default {
    data: () => ({
        shape: null,
        factorShape: 1,
        front: null,
        factorFront: 2
    }),
    mounted() {
        this.initRefs();
    },
    methods: {
        initRefs() {
            this.shape = this.$refs.shape;
            this.front = this.$refs.front;
        },
        launchFloat() {
            gsap.to(this.shape, {
                duration: 3 * (this.factorShape * 0.1 + 1),
                repeat: -1,
                yoyo: true,
                y: -5 * this.factorShape - 5,
                ease: 'power1.inOut'
            });
            gsap.to(this.shape, {
                duration: 3 * (this.factorShape * 0.6 + 1),
                repeat: -1,
                yoyo: true,
                rotation: -5 * (this.factorShape * 0.5),
                ease: 'power1.inOut',
                transformOrigin: '50% 50%'
            });
            gsap.to(this.front, {
                duration: 3 * (this.factorFront * 0.1 + 1),
                repeat: -1,
                yoyo: true,
                y: -5 * this.factorFront - 5,
                ease: 'power1.inOut',
                delay: 1.5
            });
            gsap.to(this.front, {
                duration: 3 * (this.factorFront * 0.6 + 1),
                repeat: -1,
                yoyo: true,
                rotation: -5 * (this.factorFront * 0.5),
                ease: 'power1.inOut',
                transformOrigin: '50% 50%',
                delay: 1.5
            });
        },
        killFloat() {
            gsap.killTweensOf([this.shape, this.front]);
        }
    }
};
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
