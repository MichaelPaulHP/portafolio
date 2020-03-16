<template>
    <v-window>
        <TextStroke text="Proyectos"></TextStroke>
        <v-carousel
                :hide-delimiters="true"
                :show-arrows="true"
                height="auto"
        >
            <v-row

                    align="center"
                    justify="center"
            >

                    <v-carousel-item
                            v-for="(work,i) in works"
                            :key="i"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            :prev-icon="false"
                            :cycle="true"
                            :progress="true"
                    >

                        <work :work="work" ></work>

                    </v-carousel-item>

            </v-row>


        </v-carousel>

    </v-window>
</template>

<script>
    import Work  from "./Work" ;
    import worksList from "../../data/Workslist";
    import TextStroke from "../../components/TextStroke";

    export default {
        name: "Works",
        components: {Work,TextStroke},

        data: function () {
            return {
                works:worksList,
                windowsHeight:0,
            }
        },
        mounted() {
            this.windowsHeight= window.screen.height;
        }
    }
</script>

<style scoped>

</style>