<script>
import { store } from "../../store";

export default{
    name: "TestimonialsSection",
    date(){
        return{
            store,
        }
    }

}
</script>
<template>
    <div class="container">
        <div class="testimonials">
            <div class="card">
                <img src="" alt="">
                <h3>"Forget the trandy pizza shops, this hidden spot makes the best newyork-style pizza slice in Naples"</h3>
                <p>Washington Post 2018</p>
            </div>
        </div>
        <div class="btn-wrapper">
            <a class="next">next</a>
            <a class="prev">prev</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../../styles/variabiles" as*;
    .container{
        position: relative;

        .testimonials{
            background-image: url(../../assets/img/h3-testimonials-bckgrnd.jpg);
            background-size: cover;
            width: 100%;
            height: 25rem;
            .card{
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 50%;
                h3 , p{
                    text-align: center;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    line-height: 1.5rem;
                }
                p{
                    color: red;
                    font-size: 0.6rem;
                }
            }
        }
        .btn-wrapper{
            .next , .prev{
                color: $red-light;
                background-color: white;
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

</style>