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
                    <h3>Title</h3>
                    <ul>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                </div>
                <div class="col">
                    <h3>Title</h3>
                    <ul>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                </div>
                <div class="col">
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel corporis corrupti cum illum perfer</p>
                </div>
            </div>
        </div>
        <div class="img-part">
            <img src="../assets/img/footer-img-1.jpg" alt="">
        </div>
        <div></div>
        <div></div>
    </Footer>
</template>

<style lang="scss" scoped>
footer{
    width: 100%;
    padding-bottom: 0.3rem;
    .img-part{
        width: 50%;
    }
    .text-part{
        position: relative;
        width: 50%;
        max-height: 100%;

    }
}
</style>