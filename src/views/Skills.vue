<template>
    <v-container>
        <v-row>
            <v-col>
                <TextStroke text="Habilidades"></TextStroke>
            </v-col>
        </v-row>

        <v-row>
            <v-col>

                <div
                        class="d-flex flex-wrap"
                >

                    <div
                            v-for="(skillGrup,key) in skills" :key="key"
                            style="padding-right: 75px"
                    >

                        <v-card-title>{{key}}</v-card-title>

                        <div v-for="(rating,skill) in skillGrup" :key="skill">
                            <v-row>
                                <v-col cols="2"><p>{{skill}}</p></v-col>
                                <v-col cols="10">
                                    <v-rating
                                            length="10"
                                            readonly
                                            :value="rating"
                                            size="10"

                                    >
                                        <template v-slot:item="props">
                                            <v-icon
                                                    color="secondary"
                                                    size="15"
                                            >
                                                {{ props.isFilled ? 'fas fa-circle' : 'far fa-circle' }}
                                            </v-icon>
                                        </template>
                                    </v-rating>
                                </v-col>
                            </v-row>


                        </div>


                    </div>


                </div>
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