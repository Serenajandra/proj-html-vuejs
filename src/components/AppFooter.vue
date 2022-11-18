<script>
export default{
    name: "AppFooter"
}
</script>

<template>
    <Footer class="d-flex">
        <div class="text-part">
            <div class="row">
                <div class="col">
                    <h4>Find our restaurants</h4>
                    <ul>
                        <li>164 E. Bell Rd #104. Salerno, AZ 85022 (602) 867-1010</li>
                        <li>164 E. Bell Rd #104. Salerno, AZ 85022 (602) 867-1010</li>
                        <li>164 E. Bell Rd #104. Salerno, AZ 85022 (602) 867-1010</li>
                        <li>164 E. Bell Rd #104. Salerno, AZ 85022 (602) 867-1010</li>
                    </ul>
                </div>
                <div class="col">
                    <h4>Working hours</h4>
                    <ul>
                        <li>
                            <h5>Monday</h5>
                            <p>kitchen closed</p>
                        </li>
                        <li>
                            <h5>Tuesday until friday</h5> 
                            <p>9.00-22.00</p>   
                        </li>
                        <li>
                            <h5>Saturday*</h5> 
                            <p>Saturday 11 am to midnight</p>
                        </li>
                        <li> 
                            <h5>Sunday</h5> 
                            <p>9.00-22.00</p>  
                        </li>
                    </ul>
                    <div>
                        <h5>Follow us</h5>
                    </div>
                </div>
                <div class="col">
                    <h3>the don peppe crew first and foremost values an authentic, well baked slice of pizza.</h3>
                </div>
            </div>
        </div>
        <div class="img-part">
            <img src="../assets/img/footer-img-1.jpg" alt="">
        </div>
    </Footer>
</template>

<style lang="scss" scoped>
@use "../styles/variabiles" as*;

footer{
    width: 100%;
    background-color:$bg-dark;
    color: $light;

    .text-part{
        width: 50%;
        max-height: 100%;
        .row{
            display: flex;
            .col{
                padding: 1rem;
                h4{
                    text-transform: uppercase;
                    color: $gold;
                    padding: 1rem 0;
                }
                ul{
                    padding: 0;
                    li{
                        line-height: 1.3rem;
                        margin: 1rem 0;
                        h5{
                            text-transform: uppercase;
                            color:$gold;
                        }

                    }
                }
            }
        }
        h3{
            text-transform: uppercase;
        }
    }
    .img-part{
        width: 50%;
    }
}
</style>