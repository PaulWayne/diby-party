<template>
  <v-img
    height="500"
  >
    <v-row
      align="center"
      justify="center"
      class="mt-10"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-2 primary--text font-weight-thin mb-4"> <v-icon x-large color="primary">mdi-check-all</v-icon> Merci !</h1>
        <h3 class="subheading">Rendez-vous le 14 juillet !</h3>
      </v-col>
    </v-row>
  </v-img>
</template>
<script>
export default {
  data () {
    return {
      image: require('@/assets/banner_2.jpg')
    }
  }
}
</script>