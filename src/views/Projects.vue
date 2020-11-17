<template>
  <div class="projects">
    <h1 class="subheading grey--text mb-4">My Todo List</h1>
    <template>
      <div>
        <div class="text-center d-flex pb-4">
          <v-btn @click="all">
            all
          </v-btn>
          <v-btn @click="none">
            Important and Urgent
          </v-btn>
          <v-btn @click="none">
            Not Important and Urgent
          </v-btn>
          <v-btn @click="none">
            Important and Not Urgent
          </v-btn>
          <v-btn @click="none">
            Not Important and Not Urgent
          </v-btn>
        </div>

        <v-expansion-panels v-model="panel" multiple>
          <v-expansion-panel v-for="project in myPojects" :key="project.title">
            <v-expansion-panel-header> {{ project.title }}</v-expansion-panel-header>
            <v-expansion-panel-content class="font-weight-bold px-4 grey--text">Due By {{ project.due_date }}</v-expansion-panel-content>
            <v-expansion-panel-content>{{ project.content }}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </template>
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
    computed:{
      myPojects(){
        return this.projects.filter(project =>
        {return project.person == 'PersonA'}
        )
      }
    },
    methods:{
      sortBy(prop){
        this.projects.sort( (a,b) => a[prop] < b[prop]? -1 : 1 )
      }
    }
}
</script>