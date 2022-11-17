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
            <div class="prova"></div>
        </div>
        
    </section>
</template>
<style lang="scss" scoped>
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
            .prova{
                border: 1px solid red;
                width:30%;
                height:30%;
            }
        }
    }    
</style>