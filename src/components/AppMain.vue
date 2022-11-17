<script>
import FiftyImgFiftyTextCard from './MainComponents/FiftyImgFiftyTextCard.vue';
import TestimonialsSection from './MainComponents/TestimonialsSection.vue';

export default{
    name: "AppMain",
    components: {
    TestimonialsSection,
    FiftyImgFiftyTextCard,
}
}
</script>
<template>
    <section>
        <div class="container">
            <div>
                <img src="../assets/img/h3-img-1.jpg" alt="">
            </div>
            <div>
                <img src="../assets/img/h3-img-2.jpg" alt="">
            </div>
            <div>
                <img src="../assets/img/h3-img-3.jpg" alt="">
            </div>
            <div>
                <img src="../assets/img/h3-img-4.jpg" alt="">
            </div>
        </div>
    </section>
    
    <TestimonialsSection />
    <FiftyImgFiftyTextCard />


    
</template>

<style lang="scss" scoped>
.container{
    width: 100%;
    display: flex;

    img{
        padding: 0.4rem 0.2rem;
    }
}
</style>