
<script>
export default{
name: "AppHeader",
}
</script>

<template>

    <header>
        <button class="btn_red">order online</button>
        <nav class="left">
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
        <div>
            <a href="">
                <img src="../assets/img/h5-logo-divided-header.png" alt="">
            </a>
        </div>
        <nav>
            <ul>
                <li>
                    <a href=""></a>
                </li>
                <li>
                    <a href=""></a>
                </li>
                <li>
                    <a href=""></a>
                </li>
            </ul>
        </nav>
        <nav>
            <ul>                <li>
                <a href=""></a>
            </li>
            <li>
                <a href=""></a>
            </li>
        </ul>
        </nav>
    </header>

</template>

<style lang="scss" scoped>
@use "../styles/mixins" as*;
header{
    @include flex-center ("horizontal");
    padding-top: 2rem;
    height: 80px;
    width: 100%;
    nav{
        border: 1px solid springgreen;
        ul{
            display: flex;
            justify-content: space-around;
            li{
                margin: 0 1rem;
                
            }
        }
    }
    &>div{
        width: 6rem;
        border: 1px solid red;
        background-color: black;
        object-fit: contain;
        border-radius: 50%;
    }
}
</style>