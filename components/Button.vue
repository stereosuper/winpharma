<template>
    <a :href="href" :class="[{ btn: type === 'Primary' }, { 'btn-secondary': type === 'Secondary' }]">
        <slot />
    </a>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            required: true,
            default: '#'
        },
        type: {
            type: String,
            required: true,
            default: 'Primary'
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
    background: $secondary;
}
.btn-secondary {
    font-family: $ageo-semi-bold;
    font-size: 1.8rem;
    text-decoration: none;
}
</style>
