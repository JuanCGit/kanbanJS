<template>
    <nav class="navbar navbar-light navbar-expand-md">
        <div class="container-fluid"><button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div id="navcol-1" class="collapse navbar-collapse">
                <ul class="navbar-nav align-items-center mx-auto">
                    <li class="nav-item"><router-link class="nav-link" to="/boards">Boards</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/"><img src="@/assets/kanbanjs.png" alt="Home" width="170"></router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
}
</script>

<style lang="scss" scoped>
    li {
        border-style: none !important;
        color: #495057 !important;
        a:hover{
            color: #ffe000 !important;
        }
    }
</style>