<script>
import BookTable from './MainComponents/BookTable.vue';
import CrewInfo from './MainComponents/CrewInfo.vue';
import FiftyImgFiftyTextSec from './MainComponents/FiftyImgFiftyTextSec.vue';
import GoAhead from './MainComponents/GoAhead.vue';
import ClientSec from './MainComponents/ClientSec.vue';
import TestimonialsSection from './MainComponents/TestimonialsSection.vue';
import PizzaMenu from './MainComponents/PizzaMenu.vue';
import PizzaDeals from './MainComponents/PizzaDeals.vue';
import AdvertisingSec from './MainComponents/AdvertisingSec.vue';

export default{
    name: "AppMain",

    components: {
    TestimonialsSection,
    GoAhead,
    FiftyImgFiftyTextSec,
    CrewInfo,
    ClientSec,
    PizzaMenu,
    PizzaDeals,
    BookTable,
    AdvertisingSec
    },
    data(){
        return{
            Advertising : ["h3-img-1","h3-img-2","h3-img-3","h3-img-4"],
            CrewPhoto : ["h1-team-1a","h1-team-2a", "h1-team-3a","h1-team-4a"]
        }
    }

}
</script>

<template>
   
    <div class="container">
        <div class="row d-flex">
         <AdvertisingSec  v-for="(img, index) in Advertising" :key="index" :image="img" />    
        </div>
    </div>

    <TestimonialsSection />
    <FiftyImgFiftyTextSec />
    <GoAhead />
    
    <div class="container">
        <div class="row d-flex">
            <CrewInfo v-for="(photo, index) in CrewPhoto" :key="index" :photo="photo" />
        </div>
    </div>

   
    <ClientSec />
    <PizzaMenu />
    <PizzaDeals />
    <BookTable />



    
</template>

<style lang="scss" scoped>

.container{
    width: 100%;
    padding: 0.5rem 0;
    .row{
        width: 100%;
    }
}
</style>