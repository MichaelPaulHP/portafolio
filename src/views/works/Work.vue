<template>
    <v-container  >
        <v-row justify="center" align="start">

            <v-col cols="6" xs="12">

                <v-row >

                    <v-carousel
                            :show-arrows="true"
                            hide-delimiters
                            height="auto"
                    >
                      <v-carousel-item  v-if="work.video">
                        <v-row align="center" justify="center" >
                          <video width="auto" height="520"  controls>
                            <source :src="work.video" type="video/mp4">
                          </video>
                        </v-row>

                      </v-carousel-item>

                        <v-carousel-item  v-for="(item,i) in work.imagesSrc"  :key="i">
                            <v-img :src="item"  contain  aspect-ratio="1.7778" >
                                <template v-slot:placeholder>
                                    <v-row
                                            class="fill-height ma-0"
                                            align="center"
                                            justify="center"
                                    >
                                        <v-progress-circular indeterminate color="red"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>

                        </v-carousel-item>

                    </v-carousel>

                </v-row>

            </v-col>

            <v-col  cols="6" >
                <v-row align="center">
                    <v-card-title v-text="work.title"></v-card-title>
                </v-row>
               <v-row>
                   <p>
                       {{work.description}}
                   </p>
               </v-row>

                <v-row align="center" justify="space-around">
                    <v-btn
                            v-for="(repo,i) in work.repositories"
                            :key="i.src"
                            :href="repo.src" target="_blank"
                            x-small
                    >
                        <v-icon left dark>fab fa-github</v-icon>
                        {{repo.name}}
                    </v-btn>
                </v-row>




            </v-col>
            <v-col cols="12" >

                <v-row align="start" justify="center">

                    <v-chip v-for="(tool) in work.tools " :key="tool"
                            class="ma-2"
                            outlined
                            color="warning"
                    >
                        <v-icon left  >fab fa-{{tool}}</v-icon>
                        {{tool}}
                    </v-chip>
                </v-row>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    export default {
        name: "Work",
        props:{
            work:Object
        },

    }
</script>

<style scoped>

</style>