<script>
export default{
    name:"AdvertisingSec",
    
    props:{
        image: String
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
        <img :src="getImageUrl(`../../assets/img/${image}.jpg`)" alt="advertising">
        <div class="wrapper">
            <div class="hover-eye">
                <i class="fa-solid fa-eye fa-3x"></i>
            </div>
        </div>
    </div> 
</template>
<style lang="scss" scoped>
    @use "../../styles/variabiles" as*;
.col{
width: calc(100% / 4);
position: relative;
    img{
        padding: 0.4rem 0.2rem;
        position: absolute;
    }
    .hover-eye{
        z-index: -1;
        height: 16rem;
        position: relative;
        background-color: $light;
        
        .fa-solid{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            color: red;
        }
    }
}

.col:hover .hover-eye{
    z-index: 100;
}
 </style>