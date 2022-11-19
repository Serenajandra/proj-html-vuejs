<script>
    export default{
        name:"CrewInfo",

        props:{
            photo: String
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
    </div>
       
</template>
<style lang="scss" scoped>

</style>