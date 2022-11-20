<script>
export default{
    name:"BookTable"
}
</script>
<template>
    <section>
        <div>
            <div class="label-wrapper">
                <div>
                    <label for=""></label>
                    <input type="number" id="" name="" value="person">
                </div>
                <div>
                    <label for="date">for</label>
                    <input type="date" id="date" name="">
                </div>
                <div>
                    <label for="">at</label>
                    <input type="time" id="" name="">
                </div>   
                <div>
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
    div{
        position: relative;
        width: 100%;
        height: 100%;
        .label-wrapper{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 80%;
            height: 15%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            div{
                width: calc(100% / 4);
                vertical-align: middle;
                label{
                    color: $light;
                    text-transform: uppercase;
                    font-size: .8rem;
                    padding-right: 0.5rem;
                }
            }
        }
    }
}
</style>