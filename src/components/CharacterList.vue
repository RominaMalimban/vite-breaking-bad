<script>

import { store } from '../store.js';

export default {
    name: "CharacterList",
    data() {
        return {
            store
        };
    }
};
</script>

<template>
    <section>
        <div class="container">

            <select name="category" id="category">
                <option value="choice">Select Category</option>
                <option value="cat1">Category 1</option>
                <option value="cat1">Category 2</option>
            </select>

            <div class="wrapper">
                <div class="result">
                    Find 62 characters
                </div>

                <!-- contenitore padre che contiene singola card -->
                <div class="cards">
                    <!-- card -->
                    <div class="card">
                        <!-- <img src="" alt=""> -->
                        <h3>NOME</h3>
                        <h4>SERIE</h4>
                        <h4>VIVO</h4>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

section {
    margin-top: 37px;

    .container {

        select {
            padding: 5px;
        }

        .wrapper {
            background-color: $white;
            padding: 40px;
            margin-top: 30px;

            .result {
                color: $white;
                background-color: $bg-dark;
                padding: 10px;
                font-weight: bolder;
            }

            .cards {
                display: flex;
                flex-wrap: wrap;
                margin: 20px -20px;
                text-align: center;

                .card {
                    width: calc(100% / 5 - 40px);
                    background-color: $bg-dark-blue;
                    margin: 0 20px;
                    // debug
                    height: 250px;
                    border: 1px solid white;
                }
            }
        }
    }
}
</style>