<template>
<div id="app" class="small-container">

    <cartel />
</div>
</template>

<script>
import '../node_modules/odometer/themes/odometer-theme-train-station.css';
import Cartel from './components/Cartel.vue'

export default {
    name: 'app',
    components: {
        Cartel
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #999;
    margin-top: 60px;

}
</style>
