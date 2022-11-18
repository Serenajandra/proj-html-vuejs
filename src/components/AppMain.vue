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
            advertising: [
                "h3-img-1.jpg",
                "h3-img-2.jpg",
                "h3-img-3.jpg",
                "h3-img-4.jpg"
            ],
        }
    }

}
</script>

<template>
    <AdvertisingSec  v-for="(img, index) in advertising" :key="index" :img="img" />    
    <TestimonialsSection />
    <FiftyImgFiftyTextSec />
    <GoAhead />
    <CrewInfo />
    <ClientSec />
    <PizzaMenu />
    <PizzaDeals />
    <BookTable />



    
</template>

<style lang="scss" scoped>

</style>