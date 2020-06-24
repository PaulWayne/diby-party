<template>
 <div>
  <v-toolbar color="primary" light extended>
          <v-toolbar-title class="white--text">Diby Party</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      <v-dialog v-model="open" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Participant</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Nom*" v-model="name" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
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
export default {
   data: function(){
    return {
      open: false,
      name: '',
      joueFoot: false,
      error: ''
   }
  },
  methods: {
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
