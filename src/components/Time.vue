
<template>
  <v-timeline class="mt-2" :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
      large
      class="mr-4"
    >
    <template v-slot:icon>
        <v-avatar>
          <span class="white--text">
            {{item.hour}}
          </span>
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>{{item.hour}}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title :class="item.color">{{item.title}}</v-card-title>
        <v-card-text>
          {{item.description}}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
  export default {
    data: () => ({
      reverse: true,
      items: [
        {
          color: 'green lighten-1',
          icon: 'mdi-soccer',
          hour: '10h-11h',
          title: 'Match de Foot',
          description: 'Pour l’amour du beau jeu et du beau geste. Parce que la victoire est au bout des crampons ,et surtout parce qu’un joueur n’est rien sans ses équipiers, Rendez-vous au Five de bezons à 10h pour un match de titan …'
        },
        {
          color: 'amber lighten-1',
          icon: 'mdi-microphone-variant',
          hour: '12h-14h',
          title: 'Debat/Interviews',
          description: 'Nous regardons avec impuissance la crise politico-economico-securitaire que traverse que notre cher pays.Assistons-nous à la dislocation du Mali ? Venez partager vos idées et opinions lors des minis-debats/interviews(les sujets vous seront communiqués ulterieurment)'
        },
        {
          color: 'red lighten-1',
          icon: 'mdi-grill',
          hour: '12h-14h',
          title: 'Barbecue',
          description: 'Après 2 mois de confinement, il est temps de profiter du beau soleil d’été: le barbecue et ses braises sauront satisfaire les gourmets les plus délicats, Rendez-vous chez Sorbonne pour un moment de convivialité'
        }
      ],
    }),
  }
</script>
