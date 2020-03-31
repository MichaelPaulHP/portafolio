<template>

    <v-window>
        <v-row>
            <v-col cols="12">
                <TextStroke text="Proyectos"></TextStroke>
            </v-col>
            <v-col cols="12">

                <v-row>
                    <v-col cols="12">
                        <v-item-group
                                v-model="window"
                                class="shrink mr-6"
                                mandatory
                                tag="v-flex"

                        >
                            <v-item
                                    v-for="(work,i) in works"
                                    :key="i"
                                    v-slot:default="{ active, toggle }"

                            >

                                    <v-btn
                                            :input-value="active"
                                            icon
                                            @click="toggle"  x-large
                                    >

                                            <div>
                                            <v-img height="30" width="30" :src="work.icon"> </v-img>
                                            <div>
                                                <v-icon v-if="active" color="accent"> fas fa-angle-up </v-icon>
                                            </div>
                                            </div>
                                    </v-btn>





                            </v-item>
                        </v-item-group>
                    </v-col>

                    <v-col cols="12"  >
                        <v-window
                                v-model="window"


                        >
                            <v-window-item
                                    v-for="(work,i) in works"
                                    :key="i"

                            >
                                <work :work="work" ></work>
                            </v-window-item>
                        </v-window>
                    </v-col>

                </v-row>

            </v-col>
        </v-row>



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
                window: 0,
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