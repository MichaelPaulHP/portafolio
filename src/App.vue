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

                        <v-btn v-on:click="$vuetify.theme.dark=!$vuetify.theme.dark" elevation="0">
                            <v-icon v-if="$vuetify.theme.dark" color="yellow" size="small">
                                fas fa-sun
                            </v-icon>
                            <v-icon v-if="!$vuetify.theme.dark" size="small" >
                                fas fa-moon
                            </v-icon>
                        </v-btn>

                        <v-btn
                                color="transparent"
                                elevation="0"
                                @click.stop="drawer = !drawer"
                        >
                            <v-icon size="medium" >
                                fas fa-bars
                            </v-icon>
                        </v-btn>


                    </v-app-bar>

                    <v-navigation-drawer
                            v-model="drawer"
                            absolute
                            temporary
                            right
                            disable-resize-watcher
                    >
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-img></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>Michael Huahuasoncco</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider></v-divider>

                        <v-list dense>

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
                    </v-navigation-drawer>

                    <v-content >
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
