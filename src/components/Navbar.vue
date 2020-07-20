<template>
    <div id="component-navbar">
        <div class="meg-logo"><h1 class="meg-logo">{{title}}</h1></div>
    </div>
</template>

<style>
    .meg-logo {
        font-weight: bolder;
        font-size: 52px;
        display: inline-block;
        margin: 0;
        float: left;
    }
    .nav-middle {
        padding-top: 40px;
    }
    #component-navbar {
        margin-top: 8px;
        display: block;
        padding: 12px 30px 30px 12px;
        height: 42px;
    }
</style>

<script>
    export default {
        name: 'Navbar',
        props: ['title']
    }
</script>