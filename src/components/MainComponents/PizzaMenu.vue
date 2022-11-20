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
        <img :src="getImageUrl(`../../assets/img/h3-product-img-${image}.png`)" alt="">
        <p class="name">{{name}}</p>
        <p class="price">{{price}}</p>
    </div>
</template>
<style lang="scss" scoped>
@use "../../styles/variabiles" as*;
.card{
    padding: 0 2rem;
    width: 100%;
    img{
        width: 200px;
    }
    .name{
        color:$gold;
    }
    .price{
        color: $red-light;
    }

}
</style>