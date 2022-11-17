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
    <section>
        <div class="testimonials">
            <div class="card">
                <img src="" alt="">
                <h3>"Forget the trandy pizza shops, this hidden spot makes the best newyork-style pizza slice in Naples"</h3>
                <p>Washington Post 2018</p>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.testimonials{
    background-image: url(../assets/img/h3-testimonials-bckgrnd.jpg);
    background-size: contain;
    width: 100%;
    height: 18rem;
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
</style>