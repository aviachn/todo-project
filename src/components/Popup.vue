<template>
        <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
        <v-icon small left>add_task</v-icon>
          Add a new task
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Add a new task
        </v-card-title>

        <v-card-text>
            <v-form class="px-3" ref="form"> 
                <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
                <v-textarea label="Information" v-model="info" prepend-icon="edit"></v-textarea>
                
                 <v-menu v-model="showPicker" :close-on-content-click="true" transition="scale-transition"
                 offset-y full-width max-width="290px" min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field :value="date" label="Due Date" prepend-icon="date_range"
                    readonly v-on="on" ></v-text-field>
                  </template>
                  <v-date-picker  v-model="date" no-title @input="showPicker = false"></v-date-picker>
                </v-menu>

                  <v-combobox
                    v-model="model" :items="importance" :search-input.sync="search" hide-selected prepend-icon="person"
                    hint="Maximum of 5 members" label="Team members for this task" multiple persistent-hint small-chips>
                    <template v-slot:no-data>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>
                            No results matching for <strong>{{ search }}</strong>.
                           <!-- Press <kbd>enter</kbd> to create a new one-->
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </template>
                  </v-combobox>

                <v-select :items="importance" v-model="importan" label="Importance of this task"
                prepend-icon="opacity" value="taskImportance"></v-select>
                   
                <v-spacer></v-spacer>
                <v-btn text class="success mx-0 mt-3" @click="submit" v-bind="attrs" v-on="on">Add Task</v-btn>
                
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from 'date-fns/format'
/*import db from '@/fb'*/
export default {
    data(){
        return{
            importance: ['Important & Urgent','Important & Not Urgent','Not Important & Urgent','Not Important & Not Urgent'],
            title:'',
            info:'',
            date: null
        }
    },
    methods:{
      submit(){
        if(this.$refs.form.validate()){
          console.log(this.title, this.info, this.date, this.importan)
            
        }
      }
    },
      computed:{
      formattedDate(){
        console.log(format(this.date, 'Do MMM YYYY'))
        return this.date ? format(this.date, 'Do MMM YYYY'): ''
      }
    }
}
</script>