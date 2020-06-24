<template>
  <div>
   <v-img height="200"
          :src="image"
          gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
        >
        
          <v-container class="fill-height">
            <v-row align="center">
              <strong class="display-4 font-weight-regular mr-6">14</strong>
              <v-row>
                <div class="display-1 font-weight-light mt-10">Juillet</div>
              </v-row>
            </v-row>
             <v-row justify="end">
              <div class="display-1 font-weight-regular amber--text  mr-3">30€/pers</div>
            </v-row>
            <v-row justify="end">
                <div class="display-1 font-weight-light mr-5">Chez Sorbonne</div>
            </v-row>
          </v-container>
          
   </v-img>
  </div>   
</template>
<script>
export default {
  data () {
    return {
      image: require('@/assets/banner_1.jpg')
    }
  },
}
</script>
<style>
 .root {
   height: 200px;
 }
</style>

