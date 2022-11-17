<script>
import { store } from "../../store";
export default{
    name:"FiftyImgFiftyTextCard",
    data(){
        return{
            store,
        }
    }
}
</script>
<template>
    <section class="d-flex">
        <div class="img-part">
            <img src="../../components/../assets/img/h1-img-4.jpg" alt="">
        </div>
        <div class="text-part">
            <div class="text-container">
                <h3>Specials*</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla magni autem beatae vel at perferendis</p>
                <div class="d-flex" v-for="(special, index) in store.specialsList" :key="index">
                    <h4 class="price">{{special.price}}</h4>
                    <div>
                        <h4>{{special.name}}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sapiente non</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.img-part{
    width: 50%;
    padding: 0.3rem;
}
.text-part{
    .text-container{
        padding: 4rem 7rem;
    }
    .price{
        color: red;
    }
}
</style>