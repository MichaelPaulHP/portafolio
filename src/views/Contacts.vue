<template>
    <v-container fluid >
        <v-row  style="height: 550px">
            <v-col >
                <TextStroke text="Contacto"></TextStroke>
            </v-col>

            <v-col  align-self="center">

                    <v-card-title> michael_h_p_@hotmail.com</v-card-title>
            </v-col>



            <v-col align-self="center">

                <v-row class="ma-2" >
                    <v-btn
                            href="https://github.com/MichaelPaulHP" target="_blank"
                    >
                        <v-icon left dark>fab fa-github</v-icon>
                        GitHub
                    </v-btn>
                </v-row>
                <v-row class="ma-2">
                    <v-btn
                            target="_blank"  href="mailto:michael_h_p_@hotmail.com"
                    >
                        <v-icon left dark>fas fa-envelope</v-icon>
                        Email
                    </v-btn>
                </v-row>
                <v-row class="ma-2">
                    <v-btn
                            target="_blank" href="tel:+51999766470"
                    >
                        <v-icon left dark>fas fa-mobile-alt</v-icon>
                        Phone: (+51) 999766470
                    </v-btn>
                </v-row>
                <v-row class="ma-2">
                    <v-btn
                            target="_blank"
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