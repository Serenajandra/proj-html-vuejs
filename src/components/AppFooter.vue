<script>
import { store } from "../store";
export default{
    name: "AppFooter",
    data(){
        return {
            store
        }
    }
}
</script>

<template>
    <Footer class="d-flex">
        <div class="text-part">
            <div class="row">
                <div class="col">
                    <h4>Find our restaurants</h4>
                    <ul class="restaurans-address">
                        <li v-for="(restaurant, index) in store.RestaurantsAddress" :key="index"> 
                            <p>{{restaurant.address}}.</p>
                            <p>{{restaurant.city}}</p>
                            <p>{{restaurant.tel}}</p> 
                        </li>
                        <!-- <li>164 E. Bell Rd #104.  (602) 867-1010</li>
                        <li>164 E. Bell Rd #104. Salerno, AZ 85022 (602) 867-1010</li>
                        <li>164 E. Bell Rd #104. Salerno, AZ 85022 (602) 867-1010</li> -->
                    </ul>
                </div>
                <div class="col">
                    <h4>Working hours</h4>
                    <ul>
                        <li>
                            <h5>Monday</h5>
                            <p class="closed-kitchen">kitchen closed</p>
                        </li>
                        <li>
                            <h5>Tuesday until friday</h5> 
                            <p>9.00-22.00</p>   
                        </li>
                        <li>
                            <h5>Saturday <span>*</span></h5> 
                            <p>Saturday 11 am to midnight</p>
                        </li>
                        <li> 
                            <h5>Sunday</h5> 
                            <p>9.00-22.00</p>  
                        </li>
                    </ul>
                    <div class="d-flex">
                        <h5>Follow us:</h5>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div class="col">
                    <h3>the don peppe crew first and foremost values an authentic, well baked slice of pizza.</h3>
                </div>
            </div>
        </div>
        <div class="img-part">
            <img src="../assets/img/footer-img-1.jpg" alt="">
        </div>
    </Footer>
</template>

<style lang="scss" scoped>
@use "../styles/variabiles" as*;

footer{
    width: 100%;
    background-color:$bg-dark;
    color: $light;

    .text-part{
        width: 50%;
        max-height: 100%;
        font-size: 0.9rem;
        .row{
            display: flex;
            padding-top: 4rem;
            padding-left: 3rem;
        
            
            .col{
                width: calc(100% / 3);
                h3{
                    padding: 1rem;
                }
                h4{
                    text-transform: uppercase;
                    color: $dark-gold;
                    padding: 1rem;
                }
                ul{
                    padding: 0 1rem;
                    li{
                        line-height: 1.3rem;
                        margin: 1rem 0;
                        color:$grey;
                    }
                }
            }
        }
        h3{
            text-transform: uppercase;
        }
    }
    .img-part{
        width: 50%;
    }
    h5{
        text-transform: uppercase;
        color:$dark-gold;
        span{
            color: $red-light;
        }
    }
    i{
        padding: 0.2rem;
        font-size: 0.6rem;
    }
    .closed-kitchen{
        color: $red-light;
    }
}
</style>