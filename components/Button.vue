<template>
    <component :is="tag" :href="href" :class="[{ btn: type === 'Primary' }, { 'btn-secondary': type === 'Secondary' }]">
        <slot />
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
    display: inline-flex;
    padding: 18px 20px 14px;
    border-radius: 4px;
    font-family: $ageo-bold;
    font-size: 1.6rem;
    text-decoration: none;
    color: $white;
    background: $secondary;
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
}
</style>
