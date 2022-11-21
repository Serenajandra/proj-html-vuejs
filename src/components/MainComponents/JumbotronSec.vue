<script>
export default{
    name: "JumbotronSec"
}
</script>

<template>
    <div class="container">
        <div class="banner-container">
            <img class="bg-banner" src="../../assets/img/h3-rev-img-5.png" alt="">
            <img class="pizza-banner" src="../../assets/img/h3-rev-img-6.png" alt="">
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