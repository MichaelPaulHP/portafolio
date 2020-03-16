<template>
    <v-container>
        <v-row>
            <TextStroke text="Michael Huahuasoncco"></TextStroke>
        </v-row>
        <v-row>
            <v-col cols="6">

                <p> Holaa!</p>
                <p> Mi Nombre es Michael, soy un Ingeniero de Software y estoy emocionado de iniciar
                    proyectos de software contigo para conquistar el mundo.
                </p>
                <p>Si quieres Sabes más Acerca de mí y de mis proyectos por favor baja el scroll </p>
                <p> Si quieres saludar, recomendarme algo o quieres preguntar algo, no dudes en escribirme un email</p>
            </v-col>

            <v-col cols="6">

            </v-col>
        </v-row>

    </v-container>

</template>
<script>
    import TextStroke from "../components/TextStroke";

    export default {
        name: "About",
        components: {TextStroke}
    }
</script>
