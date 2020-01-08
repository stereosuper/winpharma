<template>
    <component :is="tag" :href="href" :class="[{ btn: type === 'Primary' }, { 'btn-secondary': type === 'Secondary' }]">
        <slot></slot>
        <Icon v-if="type === 'Secondary'" name="chevron" />
    </component>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            required: false,
            default: '#'
        },
        type: {
            type: String,
            required: true,
            default: 'Primary'
        },
        tag: {
            type: String,
            required: false,
            default: 'a'
        }
    }
};
</script>

<style lang="scss" scoped>
.btn {
    position: relative;
    display: inline-flex;
    padding: 18px 20px 14px;
    font-family: $ageo-bold;
    font-size: 1.6rem;
    text-decoration: none;
    color: $white;
    transition: 0.7s $easeOut;
    backface-visibility: hidden;
    &:after,
    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        border-radius: 4px;
        transform-origin: 50% 50%;
        transition: 0.7s $easeOut;
    }
    &:after {
        background: $secondary;
        z-index: -1;
    }
    &:before {
        opacity: 0;
        box-shadow: 0px 6.68073px 11.3946px rgba(0, 0, 0, 0.0525061), 0px 7.4708px 13.3969px rgba(0, 0, 0, 0.0774939),
            0px 13px 22px rgba(0, 0, 0, 0.07);
        z-index: -2;
    }

    &:hover,
    &:focus {
        &:after {
            transform: scale(1.05) translateZ(0);
            background-color: #f55b33;
        }
        &:before {
            opacity: 1;
            transform: scale(1.05) translateZ(0);
        }
    }
    &:active {
        &:after {
            background: $secondary;
        }
    }
}
.btn-secondary {
    display: inline-flex;
    align-items: center;
    font-family: $ageo-semi-bold;
    font-size: 1.8rem;
    text-decoration: none;
    transition: color 0.6s $easeInOut;
    &::after {
        content: '';
        height: 2px;
        width: 22px;
        border-radius: 5px;
        background-color: $primary-dark;
        transform-origin: 0% 50%;
        transform: scaleX(0) translateX(-22px);
        transition: 0.6s $easeInOut;
    }
    .icon {
        width: 6px;
        height: 10px;
        margin-left: 20px;
        fill: $primary-dark;
        transition: 0.6s $easeInOut;
    }
    &:hover,
    &:focus,
    .button-trigger:hover &,
    .button-trigger:focus &,
    .hover {
        color: $secondary;
        .icon {
            transform: translateX(22px);
            fill: $secondary;
        }
        &::after {
            background-color: $secondary;
            transform: scaleX(1) translateX(0);
        }
    }
    &:active,
    .button-trigger:active & {
        .icon {
            transform: translateX(17px);
            transition: 0.6s $easeOut;
        }
        &:after {
            transform: scaleX(1) translateX(-5px);
            transition: 0.6s $easeOut;
        }
    }
}
</style>
