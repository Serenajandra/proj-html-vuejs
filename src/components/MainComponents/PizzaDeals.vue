<script>
export default{
    name:"PizzaDeals",
    props: {
        day: String,
        month: String,
        event: String,
        address: String
    }
}
</script>

<template>

    <div class="deals d-flex">
        <div>
            <h3 class="day">{{day}}</h3>
            <h4 class="month">{{month}}</h4>
        </div>
        
        <div>
            <h4>{{event}}</h4>
            <p> <span><i class="fa-solid fa-location-dot"></i></span> {{address}}</p>
        </div>
    </div>
       
</template>
<style lang="scss" scoped>
    @use "../../styles/variabiles" as*;

    .deals{
        align-items: center;
        padding-bottom: 1.5rem;
        border-bottom: 1px dashed $gold;
    }
    h6{
        color: $red-light;
        text-transform: uppercase;
    }
    p{
        color:$red-light;
        margin-top: 0.5rem;
    }
    h4{
        text-transform: uppercase;
    }
    .day{
        color: red;
        text-align: center;
        margin: 0 1rem;
        font-size: 3rem;
    }
    .month{
        margin: 0 1rem;
        text-align: center;
    }    

</style>