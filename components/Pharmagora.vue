<template>
    <div class="pharmagora">
        <div class="pharmagora-logo">
            <svg viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M35.847 31.33v-4.216c3.187-1.025 5.69-2.848 6.373-6.266.91-4.215 1.138-8.544-1.138-12.418-1.82-3.076-4.78-4.557-8.307-4.557h-18.55V.342C14.795.114 15.477 0 16.274 0h16.728C41.538.114 47 5.468 47 14.127c0 2.962-.114 5.924-.797 8.658-1.138 4.898-5.007 7.974-10.356 8.544z"
                    fill="#fff"
                />
                <path
                    d="M13.998 31.785H0v-4.443h13.884V13.557h4.21v13.67h14.112v4.33H18.322V45h-4.324V31.785z"
                    fill="#FEC832"
                />
            </svg>
        </div>
        <div>
            <span class="pharmagora-title">Salon Pharmagora</span>
            <p>Stand Winpharma E110</p>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.pharmagora {
    display: inline-flex;
    align-items: center;
    width: 100%;
    max-width: 280px;
    margin-top: 50px;
    padding: 20px;
    background-color: $primary-light;
    text-align: left;
    border-radius: 8px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    p {
        font-size: 1.4rem;
        line-height: 19px;
        color: $white;
    }
}

.pharmagora-logo {
    width: 36px;
    height: 34px;
    margin-right: 20px;
}

.pharmagora-title {
    font-family: $ageo;
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 22px;
    color: $quaternary;
}
</style>
