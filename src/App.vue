<template>
<v-app>
  <Header/>
  
  <v-content>
    <router-view/>
  </v-content>

  <Footer></Footer>

</v-app>
</template>

<script>

import Header from './components/template/Header';
import Footer from './components/template/Footer';

export default {
  name: 'App',

  components: {
    Header, Footer
  },

  data: () => ({
    //
  }),
};
</script>
