
<script>
export default{
name: "AppHeader",
}
</script>

<template>
    <div class="container">
        <header>
            
            <nav class="left">
                <button class="btn_red">order online</button>
                <ul class="">
                    <li>
                        <a href="">link</a>
                    </li>
                    <li>
                        <a href="">link</a>
                    </li>
                    <li>
                        <a href="">link</a>
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
                    <li>
                        <a href="">Link</a>
                    </li>
                    <li>
                        <a href="">Link</a>
                    </li>
                    <li>
                        <a href="">Link</a>
                    </li>
                </ul>
                <ul>                
                    <li>
                        <img src="../assets/svg/svg-1.svg" alt="">
                        <a href="">link</a>
                    </li>
                    <li>
                        <img src="../assets/svg/svg-0.svg" alt="">
                        <a href="">Link</a>
                    </li>
                </ul>
            </nav>
        </header>
        <div class="banner-container">
            <img class="bg-banner" src="../assets/img/h3-rev-img-5.png" alt="">
            <img class="pizza-banner" src="../assets/img/h3-rev-img-6.png" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../styles/mixins" as*;
    .container{
        width: 100%;
        height: 600px;
        background-color: rgba(0, 0, 0, 0.947);
        position: relative;
    
        header{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem auto;
            height: 80px;
            width: 100%;
            text-transform: uppercase;
            nav{
                border: 1px solid springgreen;
                width: 20%;
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
                        margin: 0 0.3rem;
                        a,
                        img{
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
                width: 70%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            .pizza-banner{
                width: 16rem;
                position: absolute;
                left: 50%;
                top: 60%;
                transform: translate(-50%, -50%);
                z-index: 1;
            }
        }
    }   
</style>