<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container text class="my-5">
        <v-row wrap>
          <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
              <v-card text class="text-center">
                <v-responsive class="pt-4">
                  <v-avatar size="100" class="grey lighten-2">
                    <v-img 
                    lazy-src="https://picsum.photos/id/11/10/6" max-height="150" max-width="100" src="https://picsum.photos/id/11/500/300">
                    </v-img>
                  </v-avatar>
                </v-responsive>
                <v-card-text>
                  <div class="subheading ">{{ person.name }}</div>
                  <div class="grey--text">{{ person.role }}</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="grey">
                    <v-icon small left>message</v-icon>
                    <span>Message</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
          </v-col>
        </v-row>
      </v-container>



  </div>
</template>

<script>
// @ is an alias to /src

export default {
    data(){
      return{
        team:[
          {name: 'PersonA', role: 'Build website'},
          {name: 'PersonB', role: 'Design video'},
          {name: 'PersonC', role: 'Code homepage'}
        ]
      }
    }
}
</script>