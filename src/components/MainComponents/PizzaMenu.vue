<script>
import { store } from "../../store";
import PizzaDeals from "./PizzaDeals.vue";
export default{
    name:"PizzaMenu",
    props: {
        image: String,
        name: String,
        price: String,
        untilSalePrice: String,
        sold: Boolean 
    },
    data(){
        return{
            store
        }
    },
    methods:{
        getImageUrl(url) {
            return new URL(url, import.meta.url).href;
        }
    }
}
</script>
<template>
    <div class="card">
        <a href="">
            <img :src="getImageUrl(`../../assets/img/h3-product-img-${image}.png`)" alt="">
            <p class="name">{{name}}</p>
            <p class="price"><span class="old-price">{{untilSalePrice}} </span>{{price}}</p>
            <div class="sold" :class="sold === true ? `active` : `` ">
                <p>sold</p>
            </div>
        </a>
        
    </div>
</template>
<style lang="scss" scoped>
@use "../../styles/variabiles" as*;
.card{
    margin: 3rem;
    padding: auto;
    position: relative;
    
    img{
        width: 400px !important;
    }
    .name{
        color:$gold;
    }
    .price{
        color: $red-light;
        .old-price{
            color: $grey;
            text-decoration: line-through;
        }
    }
    .sold{
        border-radius: 50%;
        background-color: $red-light;
        color: $light;
        padding: 0.7rem;
        width: 3.5rem;
        height: 3.5rem;
        text-transform: uppercase;
        position: absolute;
        top: 0;
        right: 0;
        display: none;
    }
    .active{
        display: inline-block;
    }

}
</style>