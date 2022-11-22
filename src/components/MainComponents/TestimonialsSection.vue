<script>
import { store } from "../../store";

export default{
    name: "TestimonialsSection",
    data(){
        return{
            testimonials: [
                {
                    text:"Forget the trandy pizza shops, this hidden spot makes the best newyork-style pizza slice in Naples.",
                    author: "Washington Post 2018"
                },
                {
                    text: "Friendliness, dedication and competence are the hallmarks of all staff. An excellent pizza to eat with friends to live an experience not only culinary but able to involve all our senses.",
                    author: "The Sunday 2019"
                },
                {
                    text: "An extraordinary dive into the 50s, where cuisine and style come together in a unique experience that will leave you dreamy and a little nostalgic.",
                    author: "The New York Times 2020"
                }
            ],
            review: 0
        }
    },
    methods: {
        showNext(){
            if (this.review < this.testimonials.length - 1) {
                this.review++;
            }else{
                this.review = 0;
            }
        },

        showPrev(){
            if (this.review > 0) {
                this.review--;                
            }else{
                this.review = this.testimonials.length - 1;
            }
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="testimonials">
            <div class="card">
                <i class="fa-solid fa-quote-left fa-4x"></i>
                <h3>{{testimonials[review].text}}</h3>
                <p>{{testimonials[review].author}}</p>
            </div>
        </div>
        <div class="btn-wrapper">
            <a class="next" @click="showNext()" >next</a>
            <a class="prev" @click="showPrev()" >prev</a>
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
                i{
                    color: $dark-gold;
                    padding-bottom: 2rem;
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