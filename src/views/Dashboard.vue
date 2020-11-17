<template>
  <div class="dashboard">
    <h1 class="subheading grey--text mb-6">Dashboard</h1>


    

    <v-container text >
      <v-row class="mx-0">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
          <v-btn small text color="grey" @click = "sortBy('title')" dark v-bind="attrs" v-on="on">
            <v-icon left >folder</v-icon>
          </v-btn>
          </template>
          <span>Sort By Project Name</span>
          
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey" @click = "sortBy('person')"  dark v-bind="attrs" v-on="on">
              <v-icon left >person</v-icon>
            </v-btn>
          </template>
          <span>Sort By Person Name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey" @click = "sortBy('person')"  dark v-bind="attrs" v-on="on">
              <v-icon left >event</v-icon>
            </v-btn>
          </template>
          <span>Sort By Due Date</span>
        </v-tooltip>
      </v-row>

      <v-row class="mt-3 no-gutters ">
        <v-col cols="12" xs="12" md="6" >
            <v-card class="white--text text-center font-weight-thin pb-3 pt-3 grey lighten-6 mx-1" background-color="indigo"
    dark>Task Title</v-card>
        </v-col>

          <v-col xs="6" sm="4" md="2">
              <v-card class="white--text text-center font-weight-thin pb-3 pt-3 grey lighten-6 mx-1" >Person</v-card>
          </v-col>

          <v-col xs="6" sm="4" md="2">
              <v-card class="white--text text-center font-weight-thin pb-3 pt-3 grey lighten-6 mx-1" >Due By</v-card>
          </v-col>

          <v-col xs="2" sm="4" md="2">
              <v-card class="white--text text-center font-weight-thin pb-3 pt-3 grey lighten-6" >Status</v-card>
          </v-col>
        </v-row>
    </v-container>
      
      <v-container text v-for="project in projects" :key="project.title">
        <v-row :class="`project ${project.status}`">
          <v-col xs="12"  md="6" class="my-1">
              <div class=" black--text font-weight-light ">{{ project.title }}</div>
          </v-col>

          <v-col align="center" xs="6" sm="4" md="2" :v-slot:activator="{ on }">
            <v-chip pill
            v-on="on">
              <v-avatar left>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-avatar>
              {{ project.person }}
             </v-chip>
          </v-col>

          <v-col align="center" xs="6" sm="4" md="2">
              <div class=" black--text font-weight-light">{{ project.due_date}}</div>
          </v-col>

          <v-col align="center" xs="2" sm="4" md="2" :v-slot:activator="{ on }">
                <v-chip small center :class="`projStatus ${project.status} white--text`" pill v-on="off" >
                  {{ project.status }}
                </v-chip >
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    data(){
      return{
        projects:[
          {title: 'Build a website', person: 'PersonA', due_date:'10th October 2020', status:'Overdue'},
          {title: 'Design video', person: 'PersonC', due_date:'7th December 2020', status:'Complete'},
          {title: 'Code up the homepage', person: 'PersonB', due_date:'27th November 2021', status:'Ongoing'}
          
        ]
      }
    },
    methods:{
      sortBy(prop){
        this.projects.sort( (a,b) => a[prop] < b[prop]? -1 : 1 )
      }
    }
}
</script>


<style>
  .project.Overdue{
      border-left: 8px solid tomato;
      border-radius: 2px;
  }
  .project.Ongoing{
      border-left: 8px solid orange;
      border-radius: 2px;
  }
  .project.Complete{
      border-left: 8px solid #3cd1c2;
      border-radius: 2px;
  }
  .v-chip.v-chip.projStatus.Overdue{
      background: tomato;
  }
  .v-chip.v-chip.projStatus.Ongoing{
      background:orange;
  }
  .v-chip.v-chip.projStatus.Complete{
      background: #3cd1c2;
  }
</style>