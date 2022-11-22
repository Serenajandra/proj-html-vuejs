<script>
export default{
    name:"PizzaMenu",
    props: {
        image: String,
        name: String,
        price: String
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
            <p class="price">{{price}}</p>
        </a>
    </div>
</template>
<style lang="scss" scoped>
@use "../../styles/variabiles" as*;
.card{
    margin: 3rem;
    padding: auto;
    
    img{
        width: 400px !important;
    }
    .name{
        color:$gold;
    }
    .price{
        color: $red-light;
    }

}
</style>