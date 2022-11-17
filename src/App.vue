<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue"

export default{
  components:{ 
    AppHeader,
  },
    data(){
      return{
        store,
      }
    }
}

</script>
<template>

  <AppHeader />
  
</template>



<style lang="scss">
@use "./styles/general.scss" as*;
@use "./styles/variabiles.scss" as*;
@use "./styles/mixins.scss" as*;

</style>
