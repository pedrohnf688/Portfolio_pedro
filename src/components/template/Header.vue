<template>

    <v-app-bar app color="primary" dark>
      
      <div class="d-flex align-center">
          <span class="mr-2">Portfolio
            <v-icon>code</v-icon>
          </span>
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" text>
        <span class="mr-2">Home</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      <v-btn to="/sobre" text>
        <span class="mr-2">About</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      <v-btn to="/contato" text>
        <span class="mr-2">Contact</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      
    </v-app-bar>
    
</template>


<script>
export default {
    
}
</script>>