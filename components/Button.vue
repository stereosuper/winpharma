<template>
    <component
        :is="tag"
        :href="href"
        :class="{
            btn: type === 'Primary',
            'btn-secondary': type === 'Secondary'
        }"
        class="base-btn"
    >
        <span :class="{ 'btn-inner': type === 'Primary' }">
            <slot></slot>
        </span>
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
.base-btn {
    &.secondary {
        &.btn-secondary {
            color: $secondary;
            &::after {
                background-color: $secondary;
            }
            .icon {
                fill: $secondary;
            }
            &:hover,
            &:focus,
            .button-trigger:hover &,
            .button-trigger:focus &,
            .hover {
                color: darken($secondary, 10%);
                .icon {
                    fill: darken($secondary, 10%);
                }
                &::after {
                    background-color: darken($secondary, 10%);
                }
            }
        }
    }
    &.quaternary {
        &.btn-secondary {
            color: $quaternary;
            &::after {
                background-color: $quaternary;
            }
            .icon {
                fill: $quaternary;
            }
            &:hover,
            &:focus,
            .button-trigger:hover &,
            .button-trigger:focus &,
            .hover {
                color: darken($quaternary, 15%);
                .icon {
                    fill: darken($quaternary, 15%);
                }
                &::after {
                    background-color: darken($quaternary, 15%);
                }
            }
        }
        &.btn {
            .btn-inner {
                background: $quaternary;
            }
            &:hover,
            &:focus {
                .btn-inner {
                    background-color: lighten($quaternary, 5%);
                }
            }
        }
    }
}
.btn {
    text-decoration: none;
    display: inline-block;
    color: $white;
    font-family: $ageo;
    font-weight: 700;
    font-size: 1.6rem;
    &:hover,
    &:focus {
        .btn-inner {
            background-color: #f55b33;
            transform: translateY(-5px) translateZ(0);
            &:before {
                opacity: 1;
            }
        }
    }
    &:active {
        .btn-inner {
            background: $secondary;
        }
    }
}

.btn-inner {
    position: relative;
    display: inline-flex;
    padding: 18px 20px 14px;
    background: $secondary;
    border-radius: 4px;
    transition: 0.7s $easeOut;
    backface-visibility: hidden;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        transform-origin: 50% 50%;
        transition: 0.7s $easeOut;
        opacity: 0;
        box-shadow: 0px 6.68073px 11.3946px rgba(0, 0, 0, 0.0525061), 0px 7.4708px 13.3969px rgba(0, 0, 0, 0.0774939),
            0px 13px 22px rgba(0, 0, 0, 0.07);
        z-index: -2;
    }
}

.btn-secondary {
    display: inline-flex;
    align-items: center;
    font-family: $ageo;
    font-weight: 600;
    font-size: 1.8rem;
    text-decoration: none;
    transition: color 0.6s $easeInOut;
    &.small {
        font-size: 1.6rem;
    }
    &::after,
    .icon {
        position: relative;
        top: -1px;
    }
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
