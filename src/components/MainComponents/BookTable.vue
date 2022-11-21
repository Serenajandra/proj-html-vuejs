<script>
export default{
    name:"BookTable"
}
</script>
<template>
    <section>
        <div class="container">
            <div class="labels-wrapper">
                <div class="single-label-wrapper person-label">
                    <label for="">Person</label>
                    <input type="number" id="" name="" value="person">
                    <p>*Powered by OpenTable</p>
                </div>
                <div class="single-label-wrapper">
                    <label for="date">for</label>
                    <input type="date" id="date" name="">
                </div>
                <div class="single-label-wrapper">
                    <label for="">at</label>
                    <input type="time" id="" name="">
                </div>  
                <div class="button-container">
                    <button class="btn_red">book a table</button>
                </div>  
            </div>   
            

        </div>
    </section>
</template>
<style lang="scss" scoped>
@use "../../styles/variabiles" as*;
section{
    background-image: url(../../assets/img/h3-background-img-3.jpg);
    height: 15rem;
    width: 100%;
    .container{
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        .labels-wrapper{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 70%;
            height: 15%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            
            .single-label-wrapper{
                min-width: 20%;
                vertical-align: middle;
                
                label{
                    color: $light;
                    text-transform: uppercase;
                    font-size: .8rem;
                    padding-right: 0.5rem;
                }
                p{
                    color: $light;
                    padding-top: 0.2rem;
                    font-size: 0.8rem;

                }
            }
            .person-label{
                padding-top: 1.2rem;
            }
        }
    }
}
</style>