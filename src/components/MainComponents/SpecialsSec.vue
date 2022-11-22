<script>
import { store } from "../../store";
export default{
    name:"SpecialsSec",
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
            <img src="../../assets/img/h1-img-7n.png" alt="">
        </div>
        <div class="text-part">
            <div class="text-container">
                <h3 class="title">Specials*</h3>
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
@use"../../styles/variabiles.scss" as*;

    section{
        width: 100%;
        padding-bottom: 0.3rem;
        .img-part{
            width: 50%;
            height: 70vh;
            background-image: url(../../assets/img/h1-img-4.jpg);
            background-size: cover;
            position: relative;
            img{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 30%;
            }
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
            
                .title{
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                    font-size: 2rem;
                }
                p{
                    margin-bottom: 2rem;
                    color:$dark-grey;
                }
                h4{
                    margin-bottom: .6rem;
                    text-transform: uppercase;
                
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