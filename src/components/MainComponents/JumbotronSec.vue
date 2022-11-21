<script>

export default{
    name: "JumbotronSec",
    data(){
        return{
            jumboImages : [    
                {
                    pizza: `../../assets/img/h3-rev-img-6.png`,
                    bgText: `../../assets/img/h3-rev-img-5.png`,
                },
                {
                    pizza: "../../assets/img/h3-rev-img-2.png",
                    bgText: "../../assets/img/h3-rev-img-1.png",
                },
                {
                    pizza: "../../assets/img/h3-rev-img-4.png",
                    bgText: "../../assets/img/h3-rev-img-3.png",
                }
            ],
            activeImage: 0,
        }
    },
    methods:{
        getImageUrl(url) {
            return new URL(url, import.meta.url).href;
        },


        showNext(){
            if (this.activeImage < this.jumboImages.length -1) {
                this.activeImage++;                
            }else{
                this.activeImage = 0;
            }
        },
        ShowPrev(){
            if (this.activeImage > 0) {
                this.activeImage--;
            }else{
                this.activeImage = this.jumboImages.length -1;
            }
        }
    }
}
</script>

<template>


    <div class="container">
        <div class="banner-container">
            <img class="bg-banner" :src="getImageUrl(`${jumboImages[activeImage].bgText}`)" alt="">
            <img class="pizza-banner" :src="getImageUrl(`${jumboImages[activeImage].pizza}`)" alt="">
        </div>
        <div class="btn-wrapper">
            <a class="next" @click="showNext()">next</a>
            <a class="prev" @click="ShowPrev()">prev</a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../../styles/variabiles" as*;
    .container{
        width: 100%;
        min-height: 400px;
        background-color: $bg-dark;
        position: relative;
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
                bottom: 50%;
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