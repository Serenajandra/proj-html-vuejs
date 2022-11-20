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
            CrewPhoto : [
                {
                    photo:"h1-team-1a",
                    name:"John Snow",
                    role: "Barman",
                },
                {
                    photo:"h1-team-2a",
                    name:"Jessica Bunner",
                    role: "waitress",
                },
                {
                    photo:"h1-team-3a",
                    name:"Sandy Day",
                    role: "disk jockey",
                },
                {
                    photo:"h1-team-4a",
                    name:"Frank Bayley",
                    role: "kitchen porter",
                }
            ],
            ClientsLogos : ["h1-clients-img-1","h1-clients-img-2","h1-clients-img-3","h1-clients-img-4","h1-clients-img-5"],
            PizzasMenu : [
                {
                    image: "1a-100x100",
                    name: "Bismark",
                    price:"$30.00"
                },
                {
                    image: "2a-150x150",
                    name: "Fior di zucca",
                    price:"$7.00 - $50.00"
                },
                {
                    image: "3a-150x150",
                    name: "Valdostana",
                    price:"$55.00 - $30.00"
                },
                {
                    image: "4a-150x150",
                    name: "Pizza tartufata",
                    price:"$45.00"
                }, {
                    image: "5a-150x150",
                    name: "Francescana",
                    price:"$25.00"
                },
                {
                    image: "6a-100x100",
                    name: "Campagnola",
                    price:"$50.00 - $95.00"
                }
            ],
            Deals: [
                {
                    day:"02",
                    month:"nov",
                    event:"Traditional neapolitan pies in kyoto pizza mercato",
                    address:" 204 E. Piazzetta Tommaso"
                },
                {
                    day:"03",
                    month:"nov",
                    event:"Terrazza patio dining space opening this weekend",
                    address:" 204 E. Piazzetta Tommaso"
                },
                {
                    day:"05",
                    month:"nov",
                    event:"Sienna private dining room with Stéphane Brunn",
                    address:" 204 E. Piazzetta Tommaso"
                }
            ]
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
    <section>
        <div class="container">
            <div class="row d-flex">
                <CrewInfo v-for="(photo, index) in CrewPhoto" :key="index" :photo="photo.photo" :name="photo.name" :role="photo.role"/>
            </div>
        </div>
    </section>

   <section>
    <div class="container">
        <ul class="clientLogoList" >
            <ClientSec  v-for="(clientLogo, index) in ClientsLogos" :key="index" :logo="clientLogo" /> 
        </ul>
    </div>
   </section>

   <section>
        <div class="pizzas-container overflow-hidden">
            <div class="text-part text-center">
                <h6>Choose your flavor</h6>
                <h2>The best pizza menu in town</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus repellendus blanditiis dignissimos dolorum, nisi aut? Consequuntur laboriosam</p>
            </div>
            <div class="pizzas-list d-flex text-center">
                <PizzaMenu v-for="(pizza, index) in PizzasMenu" :key="index" :image="pizza.image" :name="pizza.name" :price="pizza.price" />
            </div>
        </div>
    </section>
    
    <section class="pizza-deals">
        <div class="pizza-deals-text">
            <div class="text-container">
                <h6>Made with love</h6>
                <h3 class="title">Delish pizza deals</h3>
                <PizzaDeals v-for="(deal, index) in Deals" :key="index" :day="deal.day" :month="deal.month" :event="deal.event" :address="deal.address" />  
            </div>
        </div>
        <div class="img-part">
            <img src="../assets/img/h3-img-5a.jpg" alt="">
        </div>
    </section>
 
    
    <BookTable />



    
</template>

<style lang="scss" scoped>
@use "../styles/variabiles" as*;

.container{
    width: 100%;
    padding: 0.5rem 0;
    .row{
        width: 100%;
    }
    .clientLogoList{
        display: flex;
        justify-content: center;
        width: 70%;
    }

}
.pizzas-container{
    width: 100%;

    .pizzas-list{
        padding: 4rem 0; 
        overflow: hidden;
    }
    .text-part{
        padding: 2rem;
        line-height: 2rem;
        h6{
            color:$red-light;
            text-transform: uppercase;
        }
        h2{
            text-transform: uppercase;
            padding-bottom: 1rem;
        }
        p{
            color: $dark-grey;
            width: 60%;
            line-height: 1.5rem;
        }
        .title{
            font-size: 2rem;
            margin-bottom: 2rem;
        }
    }
}
.pizza-deals{
    display: flex;
    width: 100%;
    padding-bottom: 0.3rem;
    .img-part{
        width: 50%;
    }
    .pizza-deals-text{
        background-color: $bg-dark;
        width: 50%;
        max-height: 100%;
        color: $light;
        .text-container{
            width: 60%;
            margin-top: 5rem;
        }
    }
    h6{
        color: $red-light;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
    }
    h3{
        padding-bottom: 1rem;
        font-size: 2rem;
        text-transform: uppercase;

    }
}
</style>