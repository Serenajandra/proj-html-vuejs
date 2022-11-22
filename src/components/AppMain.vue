<script>
import { store } from "../store";
import JumbotronSec from './MainComponents/JumbotronSec.vue';
import BookTable from './MainComponents/BookTable.vue';
import CrewInfo from './MainComponents/CrewInfo.vue';
import GoAhead from './MainComponents/GoAhead.vue';
import ClientSec from './MainComponents/ClientSec.vue';
import TestimonialsSection from './MainComponents/TestimonialsSection.vue';
import PizzaMenu from './MainComponents/PizzaMenu.vue';
import PizzaDeals from './MainComponents/PizzaDeals.vue';
import AdvertisingSec from './MainComponents/AdvertisingSec.vue';
import SpecialsSec from './MainComponents/SpecialsSec.vue';

export default{
    name: "AppMain",

    components: {
    TestimonialsSection,
    GoAhead,
    CrewInfo,
    ClientSec,
    PizzaMenu,
    PizzaDeals,
    BookTable,
    AdvertisingSec,
    JumbotronSec,
    SpecialsSec
    },
    data(){
        return{
            store,
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
                    price:"$30.00",
                    untilSalePrice: "$55.00",
                    sold: false
                },
                {
                    image: "2a-150x150",
                    name: "Fior di zucca",
                    price:"$17.00 - $50.00",
                    untilSalePrice: "",
                    sold: false
                },
                {
                    image: "3a-150x150",
                    name: "Valdostana",
                    price:"$30.00",
                    untilSalePrice: "",
                    sold: true
                },
                {
                    image: "4a-150x150",
                    name: "Pizza tartufata",
                    price:"$45.00",
                    untilSalePrice: "",
                    sold: false
                }, {
                    image: "5a-150x150",
                    name: "Francescana",
                    price:"$25.00",
                    untilSalePrice: "",
                    sold: false
                },
                {
                    image: "6a-100x100",
                    name: "Campagnola",
                    price:"$50.00 - $95.00",
                    untilSalePrice: "",
                    sold: false
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
    },
    methods: {
        addToCart(){
            store.newCArt.push(pizza);

        }
    }

}
</script>

<template>
    <div class="main-container">
        <section>
            <JumbotronSec />
        </section>

        <div class="fixed-icon">
            <img src="../assets/svg/svg-4.svg" alt="">
        </div>
        
        <section>
            <div class="container">
                <div class="row d-flex">
                 <AdvertisingSec  v-for="(img, index) in Advertising" :key="index" :image="img" />    
                </div>
            </div>
        </section>

        <section>
            <TestimonialsSection />
        </section> 

        <section>
            <SpecialsSec />
        </section>

        <section>
            <GoAhead />
        </section>
        
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
                 <div class="pizzas-list text-center">
                     <PizzaMenu v-for="(pizza, index) in PizzasMenu" :key="index" :image="pizza.image" :name="pizza.name" :price="pizza.price" :sold="pizza.sold" :untilSalePrice="pizza.untilSalePrice"/>
                 </div>
             </div>
        </section>

        <section class="pizza-deals">
            <div class="pizza-deals-text">
                <div class="text-container">
                    <h6>Made with love</h6>
                    <h3 class="title">Delish pizza deals</h3>
                    <PizzaDeals v-for="(deal, index) in Deals" :key="index" :day="deal.day" :month="deal.month" :event="deal.event" :address="deal.address" @click="addToCart()" />  
                </div>
            </div>
            <div class="img-part">
                <img src="../assets/img/h3-img-5a.jpg" alt="">
            </div>
            <div class="cart-logo-container">
                <div class="circle-logo">
                    <a href="">
                        <img src="../assets/svg/svg-7.svg" alt="">
                    </a>
                </div>
                <div class="cart-logo">
                    <a href="">
                        <img src="../assets/svg/svg-9.svg" alt="">
                    </a>
                </div>
            </div>
        </section>
 
        <section>
            <BookTable />
        </section>
    
    </div>
    
</template>

<style lang="scss" scoped>
@use "../styles/variabiles" as*;

    .main-container{
        overflow: hidden;

        .fixed-icon{
            right: 1rem;
            bottom: 50%;
            z-index: 999;
            position: fixed;
            background-color: $light;
            border-radius: 50%;
            padding: 0.25rem 0.5rem;
        }

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
                display: flex;
                justify-content: space-around;
                padding: 3rem 0;
                width: 1500px;

            
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
            position: relative;
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
            .cart-logo-container{
                position: absolute;
                    right: 1rem;
                    top: -2rem;
                    background-color: $light;
                .circle-logo{
                    margin-bottom: 0.2rem;
                    background-color: $red-light;
                }
                .cart-logo , .circle-logo{
                    width: 2rem;
                    height: 2rem;
                    padding: 0.5rem; 

                }
            }
        }
    }
</style>