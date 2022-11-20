<script>
    export default{
        name:"CrewInfo",

        props:{
            photo: String,
            name: String,
            role: String
        },
        methods:{
        getImageUrl(url) {
            return new URL(url, import.meta.url).href;
        }
    }
    }
</script>
<template>

    <div class="col">
        <img :src="getImageUrl(`../../assets/img/${photo}.jpg`)" alt="crewPhoto">
        <div class="wrapper">
            <div class="hover">
                <div class="text">
                    <h4>{{name}}</h4>
                    <p>{{role}}</p>
                    <div class="d-flex socials">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
       
</template>
<style lang="scss" scoped>
    @use "../../styles/variabiles"as*;
    .col{
        width: calc(100% / 4);
        position: relative;
        max-height: 56vh;
        .wrapper{
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: 99%;
            background-color: $light;
            border: .5px solid $red-light;
            
            .hover{
                margin:1vh;
                height: 95%;
                position: relative;
                background-color: $red-light;

                .text{
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    color:$light;
                    padding: 0.5rem;
                    text-align: center;
                    line-height: 1.5rem;
                }
                h4{
                    text-transform: uppercase;
                }
                .socials{
                    margin-top: 1rem;
                }
            }
        }
    }

.col:hover .wrapper{
    z-index: 100;
}
</style>