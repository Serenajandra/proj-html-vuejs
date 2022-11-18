<script>
export default{
    name:"PizzaDeals"
}
</script>

<template>
    <section>
        <div class="text-container text-part text-center">
                <h6>Made with love</h6>
                <h3>Delish pizza deals</h3>

                <div class="deals d-flex">
                    <h4 class="date">02 Nov</h4>
                    <div>
                        <h4>Traditional neapolitan pies in kyoto pizza mercato</h4>
                        <p>204 E. Piazzetta Tommaso</p>
                    </div>
                </div>
        </div>
        <div class="img-part">
            <img src="../../assets/img/h3-img-5a.jpg" alt="">
        </div>
    </section>
</template>
<style lang="scss" scoped>
section{
    display: flex;
    width: 100%;
    padding-bottom: 0.3rem;
    .img-part{
        width: 50%;
    }
    .text-part{
        
        width: 50%;
        max-height: 100%;
        
        h3{
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        p{
            margin-bottom: 3rem;
            color: grey;
        }
        h4{
            margin-bottom: .8rem;
            text-transform: uppercase;
            font-size: 1.2rem;
        
        }

        .date{
            color: red;
            margin-right: 1rem;
            font-size: 1.2rem;
        }    
    }
}
</style>