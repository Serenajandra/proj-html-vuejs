
<script>
import { store } from "../store";
export default{
    name: "AppHeader",
    headerLeftNav: ["home","pages","menu"],
    headerRightNav:["event","blog","landing"],
    headerRightRightNav: ["cards","search"],

    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <header>
            <nav class="left">
                <button class="btn_red">order online</button>
                <ul class="">
                    <img class="img-in-header-link" src="../assets/svg/svg-0.svg" alt="">
                    <li v-for="(link, index) in store.headerLeftNav" :key="index">
                        <a href="">{{link}}</a>
                    </li>
                </ul>
            </nav>
            <div class="logo-container">
                <a href="">
                    <img src="../assets/img/h5-logo-divided-header.png" alt="">
                </a>
            </div>
            <nav class="right">
                <ul>
                    <li v-for="(link, index) in store.headerRightNav" :key="index">
                        <a href="">{{link}}</a>
                    </li>
                </ul>
                <ul> 
                    <li>
                        <div class="carts-wrapper">
                            <p class="counter">0</p>
                            <img class="img-in-header-link" src="../assets/svg/svg-1.svg" alt="">      
                        </div>         
                        <a href="">Carts</a>
                    </li>
                    <li>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <a href="">Search</a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<style lang="scss" scoped>
    @use "../styles/variabiles" as*;
    .container{
        width: 100%;
        height: 120px;
        background-color: $bg-dark;
        position: relative;
    
        header{
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 2rem;
            height: 80px;
            width: 100%;
            text-transform: uppercase;
            nav{

                &.left , &.right{
                    width: 45%;
                    display: flex;
                    justify-content: space-between;
                }
                ul{
                    display: flex;
                    align-items: center;
                    padding: 0;

                    li{ 
                        display: flex;
                        align-items: center;
                        margin: 0 0.3rem;
                        font-size: 0.6rem;

                        .carts-wrapper{
                            position: relative;
                            .counter{
                                width: 1.2em;
                                border-radius: 50%;
                                color:$red-light;
                                background-color: $bg-light;
                                text-align: center;
                                font-size: .8em;
                                padding: 0;
                                position: absolute;
                                left: -.3em;
                                z-index: 1;
                            }
                        }
                        
                        a{
                            color: white;
                            margin-left: 0.3rem;
                            margin-right: 0.5rem;
                        }
                        .fa-solid{
                            color: white;
                        }
                    }
                }
            }
            .logo-container{
                width: 10%;
                height: 5rem;
                object-fit: contain;
            }
        }
    }
    .img-in-header-link{
        width: 1.2rem;
        filter: invert(100%); 
    }
</style>