<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <TextStroke text="Habilidades"></TextStroke>
            </v-col>

            <v-col cols="12">

                <v-row align="start"
                       justify="space-around"
                       >

                    <div
                            v-for="(skillGrup,key) in skills" :key="key"
                    >

                        <v-card-title style="font-size: xx-large" > {{key}} </v-card-title>

                        <div v-for="(rating,skill) in skillGrup" :key="skill">
                            <v-row>
                                <v-col cols="2"><p>{{skill}}</p></v-col>
                                <v-col cols="10">
                                    <v-rating
                                            length="10"
                                            readonly
                                            :value="rating"
                                            size="x-small"
                                            color="accent"
                                    >
                                        <template v-slot:item="props">
                                            <v-icon
                                                    color="info"
                                                    size="x-small"
                                            >
                                                {{ props.isFilled ? 'fas fa-circle' : 'far fa-circle' }}
                                            </v-icon>
                                        </template>
                                    </v-rating>
                                </v-col>
                            </v-row>


                        </div>

                    </div>
                </v-row>





            </v-col>
        </v-row>



    </v-container>
</template>

<script>
    import TextStroke from "../components/TextStroke";
    import skills from "../data/skills";

    export default {
        name: "Skills",
        components: {TextStroke},
        data: function () {
            return {
                skills: skills,
            }
        }
    }
</script>

<style scoped>

</style>