<script>

export default {
    name: "CardCharacter",
    props: {

    }
};
</script>

<template>

    <!-- card -->
    <div class="card">
        <!-- <img src="" alt=""> -->
        <h3>NOME</h3>
        <h4>SERIE</h4>
        <h4>VIVO</h4>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

.card {
    width: calc(100% / 5 - 40px);
    background-color: $bg-dark-blue;
    margin: 0 20px;
    // debug
    height: 250px;
    border: 1px solid white;
}
</style>