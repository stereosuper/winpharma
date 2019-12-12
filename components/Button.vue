<template>
    <a :href="href" class="btn">
        <slot />
    </a>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            required: true,
            default: ''
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
</style>
