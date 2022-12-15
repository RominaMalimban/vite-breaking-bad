<script>

export default {
    name: "Loader",
    data() {
        return {
            img: "img/loading.png"
        }
    }
};
</script>

<template>

    <section>
        <div>
            <img :src="img" alt="">
        </div>
    </section>


</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

section {
    background-color: #000;
    height: 100vh;
}
</style>