<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col cols="12">

                    <v-app-bar
                            color="transparent"
                            flat

                    >
                        <v-spacer></v-spacer>

                        <v-btn disabled v-on:click="$vuetify.theme.dark=!$vuetify.theme.dark" elevation="0">
                            <v-icon v-if="$vuetify.theme.dark" color="yellow" size="small">
                                fas fa-sun
                            </v-icon>
                            <v-icon v-if="!$vuetify.theme.dark" size="small" >
                                fas fa-moon
                            </v-icon>
                        </v-btn>

                        <v-menu
                                v-model="menu"
                                :close-on-content-click="false"
                                :nudge-width="200"
                                offset-x
                        >
                            <template v-slot:activator="{ on }">
                                <v-btn
                                        v-on="on"
                                        large
                                        color="transparent"
                                        elevation="0"

                                >
                                    <v-icon size="medium" >
                                        fas fa-bars
                                    </v-icon>
                                </v-btn>
                            </template>

                            <v-card>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-avatar>

                                        </v-list-item-avatar>

                                        <v-list-item-content>
                                            <v-list-item-title>Michael Huahuasoncco</v-list-item-title>
                                            <v-list-item-subtitle>michael_h_p_@hotmail.com</v-list-item-subtitle>
                                        </v-list-item-content>

                                    </v-list-item>
                                </v-list>
                                <v-divider></v-divider>
                                <v-list>
                                    <v-list-item
                                            v-for="item in items"
                                            :key="item.title"
                                            link
                                            :to="item.uri"
                                    >
                                        <v-list-item-icon>
                                            <v-icon size="x-small">{{ item.icon }}</v-icon>

                                        </v-list-item-icon>

                                        <v-list-item-content>

                                            <v-list-item-title>
                                                {{ item.title }}

                                            </v-list-item-title>

                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-menu>




                    </v-app-bar>



                    <v-content >
                        <transition name="fade">
                            <router-view></router-view>
                        </transition>
                    </v-content>


                    <v-footer
                            absolute
                            color="primary"

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
            menu:false,
            drawer: null,
            items: [
                {title: '/', icon: 'fas fa-square-full', uri: "/"},
                {title: 'About', icon: 'fas fa-square-full', uri: "/about"},
                {title: 'Works', icon: 'fas fa-square-full', uri: "/works"},
                {title: 'Skills', icon: 'fas fa-square-full', uri: "/skills"},
                {title: 'Contacts', icon: 'fas fa-square-full', uri: "/contacts"},

            ],
        }),
    };
</script>
