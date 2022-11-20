<script>
export default{
    name: "ClientSec",
    props: {
        logo: String
    },
    methods:{
        getImageUrl(url) {
            return new URL(url, import.meta.url).href;
        }
    }
}
</script>
<template>
    <li>
        <img :src="getImageUrl(`../../assets/img/${logo}.png`)" alt="logo">
    </li>
</template>
<style lang="scss" scoped>
    
   
</style>