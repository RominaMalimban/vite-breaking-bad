<script>

export default {
    name: "CardCharacter",
    props: {
        info: Object
    }
};
</script>

<template>

    <!-- card -->
    <div class="card">
        <img :src="info.image" alt="">
        <h3>{{ info.name }}</h3>
        <h4>{{ info.status }}</h4>
        <h4>{{ info.species }}</h4>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

.card {
    width: calc(100% / 5 - 30px);
    background-color: $bg-dark-blue;
    margin: 10px 15px;
    padding: 10px 10px 40px;

    h3 {
        color: $white;
        margin: 15px 0;
    }

    h4 {
        color: $gray-txt;
    }

}
</style>