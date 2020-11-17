<template>
    <nav>
        <v-app-bar text app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer= !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light"> Todo </span>
                <span> Project </span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text color="grey">
                <span> Sign Out </span>
                <v-icon right>input</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="success">
            <v-row>
                <v-col  class="mt-5" align="center">
                    <v-avatar size="100">
                        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                    </v-avatar>
                </v-col>
                <v-col class="mt-4 mb-3">
                    <Popup/>
                </v-col>
            </v-row>
            <v-list>
                <v-list-item v-for="link in links" v-bind:key="link.text" router :to="link.route"> 
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from '@/components/Popup'

export default {
    components:{ Popup },
    data(){
        return{
            drawer: false,
            links:
            [
                {icon: 'dashboard', text: 'Dashboard', route:'/'},
                {icon: 'folder', text: 'My Tasks', route:'/projects'},
                {icon: 'group', text: 'Team', route:'/team'}
            ]
        }
    }
}
</script>
