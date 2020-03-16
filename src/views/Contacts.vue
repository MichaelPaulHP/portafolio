<template>
    <v-container fluid >
        <v-row  style="height: 550px">
            <v-col cols="3">
                <TextStroke text="Contacto"></TextStroke>
            </v-col>

            <v-col cols="6" align-self="center">

                    <h1> michael_h_p_@hotmail.com</h1>

            </v-col>



            <v-col cols="3" align-self="center">

                <v-row >
                    <v-btn
                            href="https://github.com/MichaelPaulHP" target="_blank"
                    >
                        <v-icon left dark>fab fa-github</v-icon>
                        GitHub
                    </v-btn>
                </v-row>
                <v-row style="margin-top: 20px;">
                    <v-btn
                            href="#" target="_blank"
                    >
                        <v-icon left dark>fas fa-envelope</v-icon>
                        Email
                    </v-btn>
                </v-row>
                <v-row style="margin-top: 20px;">
                    <v-btn
                            href="#" target="_blank"
                    >
                        <v-icon left dark>fas fa-mobile-alt</v-icon>
                        Phone: (+51) 999766470
                    </v-btn>
                </v-row>
                <v-row style="margin-top: 20px;">
                    <v-btn
                            href="#" target="_blank"
                    >
                        <v-icon left dark>fab fa-linkedin</v-icon>
                        Linkedin
                    </v-btn>
                </v-row>

            </v-col>

        </v-row>


    </v-container>

</template>

<script>
    import TextStroke from "../components/TextStroke";


    export default {
        name: "Contacts",
        components: {TextStroke},

    }
</script>

<style scoped>

</style>