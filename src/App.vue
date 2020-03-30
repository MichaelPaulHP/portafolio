<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col>

                    <v-app-bar
                        color="transparent"
                        flat
                    >
                        <v-spacer></v-spacer>

                        <v-btn
                                to="/"
                        >
                            <span class="mr-2">/</span>
                        </v-btn>

                        <v-btn
                            to="/about"
                        >
                            <span class="mr-2">About</span>
                        </v-btn>


                        <v-btn
                                to="/works"
                        >
                            <span class="mr-2">Works</span>
                        </v-btn>

                        <v-btn
                                to="/skills"
                        >
                            <span class="mr-2">Skills</span>
                        </v-btn>

                        <v-btn
                                to="/contacts"
                        >
                            <span class="mr-2">Contacts</span>
                        </v-btn>




                        <v-switch
                            v-model="$vuetify.theme.dark"
                            hide-details
                            inset
                            label="Theme Dark"
                        ></v-switch>
                    </v-app-bar>

                    <v-content>
                        <transition name="fade">
                            <router-view></router-view>
                        </transition>
                    </v-content>


                    <v-footer
                        absolute
                    >
                        <span>
                            Código limpio con  ❤ por Michael Huahuasoncco
                        </span>
                        <v-spacer></v-spacer>
                        <div>&copy; {{ new Date().getFullYear() }}</div>
                    </v-footer>

                </v-col>
            </v-row>
        </v-container>


        <div>

        </div>

    </v-app>
</template>

<script>

    export default {
        name: 'App',

        components: {},

        data: () => ({
            //
        }),
    };
</script>
