<template>
    <svg class="icon" :class="`icon-${name}`"><use v-bind="{ 'xlink:href': `#icon-${name}` }"></use></svg>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
};
</script>