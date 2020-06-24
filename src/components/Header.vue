<template>
   <div>
      <v-card
        dark
        flat
      >
        <v-btn
          absolute
          bottom
          color="deep-orange"
          right
          fab
          @click.stop="open = true"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-card-title class="primary lighten-2">
          <v-btn icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <h2 class="title text-center grow">{{ title }}</h2>
        </v-card-title>
        <Parallax />
      </v-card>
    <v-dialog v-model="open" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Participant</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="Nom*" v-model="name" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                  <v-checkbox v-model="joueFoot"  label="Tu joues au foot ?" />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="open = false">Annuler</v-btn>
          <v-btn color="blue darken-1" text @click="save">Valider</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
   </div>
</template>
<script>
import firebase from "firebase";
import Parallax from "./Parallax";
export default {
  props: {
    title: String
  },
  components :{
    Parallax,
  },
  data: function(){
    return {
      open: false,
      name: '',
      joueFoot: false,
      error: ''
   }
  },
  methods: {
     toggleOpen: function(){
       this.open = !this.open 
     },
     save: function() {
      this.createParticipant()
      .then(()=> {
        this.$router.push('/finish')
        this.open = false
      }).catch(()=> {
        
      })
     },
     createParticipant: function() {
       const db = firebase.firestore();
       return db.collection("participants").add({
          name: this.name,
          joueFoot: this.joueFoot,
      })
     }
  }
}
</script>
