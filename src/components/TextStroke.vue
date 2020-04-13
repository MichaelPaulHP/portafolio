<template>
    <h1>
        {{text}}
    </h1>
</template>

<script>
    export default {
        name: "TextStroke",
        props:{
            text:String
        }
    }
</script>

<style scoped>
    h1 {
        margin: 0;
        font-size: 50px;

        /*   animation: colorchange 2s infinite; */
    }
    @supports (-webkit-text-stroke: 1px red) {
        h1 {
            -webkit-text-stroke: 1px #88C0D0;
            -webkit-text-fill-color: transparent;
        }
    }
</style>