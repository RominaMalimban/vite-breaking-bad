<script>


export default {
    name: "AppHeader"
}
</script>

<template>
    <header>
        <h1>Rick and Morty Api</h1>
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/generals.scss" as*;
@use "../styles/partials/variables" as*;

header {

    h1 {
        color: $white-txt;
    }
}
</style>