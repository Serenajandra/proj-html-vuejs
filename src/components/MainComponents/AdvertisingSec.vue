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
        <section>
            <div class="container">
                <div>
                    <img :src="getImageUrl(`../../assets/img${img}.jpg`)" alt="advertising">
                </div>
            </div>
        </section>
    </template>
    <style lang="scss" scoped>
    .container{
        width: 100%;
        display: flex;
    
        img{
            padding: 0.4rem 0.2rem;
        }
    }
    </style>