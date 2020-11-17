<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <Popup />
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Popup from '@/components/Popup'

export default {
  iconfont: 'md',
  name: 'App',
  components: { Navbar, Popup },
  data: () => ({
    //
  }),
};

</script>

