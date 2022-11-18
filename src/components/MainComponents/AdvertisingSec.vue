<script>
export default{
    name:"AdvertisingSec",
    
    props:{
        img: String
    }    
}
    </script>
    <template>
        <section>
            <div class="container">
                <div>
                    <img src="../assets/img/h3-img-{{img}}" alt="">
                </div>
            </div>
        </section>
    </template>