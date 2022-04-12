<template>
  <v-row justify="center" align="center">
    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <InputDate v-model="date[0]" label="Elige una fecha de inicio"  />
    </v-col>
    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <InputDate v-model="date[1]" label="Elige una fecha de término" />
    </v-col>
    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <v-btn
        tile
        color="success"
        @click="sampleSearch"
        :loading="searchIsLoading"
      >
        <v-icon left>
          mdi-magnify
        </v-icon>
        Buscar
      </v-btn>
    </v-col>
    <v-col
      cols="12"
      v-if="results.length && !searchIsLoading"
    >
      <BarChartJs height.number="300" label="Vías de administración por medicamento" :labels="labels" :values="values" />
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'IndexPage',
  data: () => ({
    searchIsLoading: false,
    date: [null, null],
    labels: [],
    values: []
  }),
  computed: mapState({
    results: state => state.results
  }),
  head() {
    return {
      titleTemplate: 'Buscador OpenFDA Api',
    }
  },
  methods: {
    ...mapActions(['searchFDA']),
    async sampleSearch(){
      try {
        console.log(this.date)
        this.searchIsLoading = true;
  
        await this.searchFDA(this.date)
  
        this.values = Array.from(this.results, item => item.count);
        this.labels = Array.from(this.results, item => item.term);
  
        console.log(this.$store.state.results)
        
      } catch (error) {
        
      } finally {
        this.searchIsLoading = false;
      }
    }

  }
}
</script>
