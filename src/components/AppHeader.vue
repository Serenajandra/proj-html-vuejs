
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
        <div class="banner-container">
            <img class="bg-banner" src="../assets/img/h3-rev-img-5.png" alt="">
            <img class="pizza-banner" src="../assets/img/h3-rev-img-6.png" alt="">
        </div>
        <div class="btn-wrapper">
            <a class="next">next</a>
            <a class="prev">prev</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../styles/variabiles" as*;
    .container{
        width: 100%;
        height: 600px;
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
        .banner-container{
            padding-top: 2rem;
            .bg-banner{
                width: 50%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            .pizza-banner{
                width: 16rem;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                z-index: 1;
            }
        }

        .btn-wrapper{
            .next , .prev{
                color: $red-light;
                background-color: $bg-light;
                position: absolute;
                border-radius: 50%;
                width: 3rem;
                height: 3rem;
                text-align: center;
                text-transform: uppercase;
                padding-top: 0.5rem;
                bottom: 40%;
                transform: translateY(-50%);
                font-size: 0.6rem;
                

            }
            .next{
                right: -28px;
                transform: rotate(270deg); 
            } 
            .prev{
                left: -28px;
                transform: rotate(90deg); 
            }
        }
    }  
     
    .img-in-header-link{
        width: 1.2rem;
        filter: invert(100%); 
    }
    </style>