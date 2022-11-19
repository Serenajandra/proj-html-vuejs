<script>
export default{
    name: "GoAhead",
}
</script>
<template>
    <section class="go-ahead">
        <div class="img-top">
            <!-- <img src="../../assets/img/h3-background-img.jpg" alt=""> -->
        </div>
        <div class="img-bottom"></div>
        <div class="img-central">
            <div class="text">
                <h2>Go ahead and <br> build your <br> own pizza <br> we won't <br> judge!</h2>
            </div>
        </div>
        
    </section>
</template>
<style lang="scss" scoped>
@use "../../styles/variabiles" as*;

    section{
        position: relative;
        width: 100%;
        height: 500px;
        padding: 0.3rem;
        background-image: url(../../assets/img/h3-background-img.jpg);
        background-size: cover;
        
        .img-top{
            background-image: url(../../assets/img/h3-background-img.jpg);
            background-size: cover;
            background-position-y: bottom;
            position: absolute;
            top:0;
            left:50%;
            transform: translatex(-50%);
            margin: 0 auto;
            height:25%;
            width: 90%;

        
        }
        .img-bottom{
            background-image: url(../../assets/img/h3-background-img.jpg);
            background-size: cover;
            background-position-y: center;
            position: absolute;
            margin: 0 auto;
            height:25%;
            width: 90%;
            bottom: 0;
            left:50%;
            transform: translatex(-50%);
        }
        .img-central{
            background-image: url(../../assets/img/h3-background-img.jpg);
            background-size: cover;
            background-position-y: center;
            position: absolute;
            margin: 0 auto;
            height:50%;
            width: 90%;
            top: 50%;
            left:50%;
            transform: translate(-50%,-50%);
            .text{
                position: absolute;
                left:6rem;
                top: -1rem;
                width:35%;
                color: $light;
                text-transform: uppercase;
                font-size: 1.5rem;
            }
        }
    }    
</style>