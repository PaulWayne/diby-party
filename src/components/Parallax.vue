<template>
  <div>
   <v-img height="200"
          :src="image"
          gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
        >
        
          <v-container class="fill-height">
            <v-row align="center">
              <strong class="display-4 font-weight-regular mr-6">{{jour}}</strong>
              <v-row>
                <div class="display-1 font-weight-light mt-10">{{mois}}</div>
              </v-row>
            </v-row>
             <v-row justify="end">
              <div class="display-1 font-weight-regular amber--text  mr-3">{{cotisation}}</div>
            </v-row>
            <v-row justify="end">
                <div class="display-1 font-weight-light mr-5">{{lieu}}</div>
            </v-row>
          </v-container>
          
   </v-img>
  </div>   
</template>
<script>
export default {
  data () {
    return {
      image: require('@/assets/banner_2.jpg'),
      jour: '14',
      mois: 'Juillet',
      cotisation: '30€/pers',
      lieu: 'Chez Sorbonne'
    }
  },
}
</script>
<style>
 .root {
   height: 200px;
 }
</style>

