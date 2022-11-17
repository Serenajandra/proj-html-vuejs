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
                <div class=" menu d-flex" v-for="(special, index) in store.specialsList" :key="index">
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
    section{
        width: 100%;
        padding-bottom: 0.3rem;
        .img-part{
            width: 50%;
        }
        .text-part{
            position: relative;
            width: 50%;
            max-height: 100%;
            .text-container{
                width: 60%;
                
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            
                h3{
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                }
                p{
                    margin-bottom: 3rem;
                    color: grey;
                }
                h4{
                    margin-bottom: .8rem;
                    text-transform: uppercase;
                    font-size: 1.2rem;
                
                }
            
                .price{
                    color: red;
                    margin-right: 1rem;
                    font-size: 1.2rem;
                }
            }
        }
    }
</style>