<template>
    <div class="container card-image" :style="{ backgroundImage: 'url(' + require('@/assets/img/fondo3.jpg') + ')' }">
        <diV class="contInterno">
            <div class="periodo">Fecha: {{moment().format('DD-MM-YYYY')}}</div>
            <h1>PROCESOS TOTALES</h1>

            <vue-odometer :value="datos" class="odometer gral odometer-theme-train-station"></vue-odometer>

            <div class="container_data">
                <div class="dataBox">
                    <h2>ALTAS</h2>
                    <h3 class="altas">{{altas}}</h3>

                </div>
                <div class="dataBox_derecha">
                    <h2>BAJAS</h2>
                    <h3 class="bajas">{{bajas}}</h3>

                </div>
            </div>
            <div class="logo">
                <img src="~@/assets/logo.png" width="60px" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import '../../node_modules/odometer/themes/odometer-theme-train-station.css';
import VueOdometer from 'v-odometer/src'
window.odometerOptions = {
    auto: false,
}
export default {

    components: {
        'vue-odometer': VueOdometer,
    },
    data() {
        return {
            datos: 0,
            altas: 852,
            bajas: 123

        }
    },

    created: function () {
        this.fetchItems();
        this.altas = this.paddy(this.altas, 5);
        this.bajas = this.paddy(this.bajas, 5);
        //        this.datos = this.paddy(this.datos, 5);

        this.datos = 41768;
        this.timer = setInterval(this.fetchEventsList, 3600000)
    },

    methods: {
        paddy(num, padlen, padchar) {
            var pad_char = typeof padchar !== 'undefined' ? padchar : '0';
            var pad = new Array(1 + padlen).join(pad_char);
            return (pad + num).slice(-pad.length);
        },
        fetchItems() {
            const AuthStr = 'TLgKlZ9026dLYUFcSmWJzAtjjN4x9EsW';
            let uri = 'https://bolsadepulpos.octopus.com.ar/api/monitor';
            this.axios.get(uri, {
                    headers: {
                        token: AuthStr
                    }
                })
                .then(response => {
                    this.datos = parseInt(response.data.procesos_totales);
                    this.bajas = this.paddy(response.data.bajas, 5);
                    this.altas = this.paddy(response.data.ln1_nuevos, 5);
                })
                .catch((error) => {
                    console.log('error ' + error);
                });
        }
    }
}
</script>

<style scoped>
body{
    overflow: hidden;
}
.gral {
    font-size: 7em;
}

h1 {
    color: #fff;
    font-size: 3em;
    text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, .1), 0 0 5px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .2), 0 20px 20px rgba(0, 0, 0, .15);
    font-family: Impact, Charcoal, sans-serif;
    letter-spacing: 15px;
}

h2 {
    color: #fff;
    text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, .1), 0 0 5px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .2), 0 20px 20px rgba(0, 0, 0, .15);
    font-family: Impact, Charcoal, sans-serif;
    letter-spacing: 15px;
}

.contInterno{
    margin: 0 auto;
    overflow-y: hidden;
}

.altas {
    color: blue;
    font-size: 1.8em;
    font-family: Impact, Charcoal, sans-serif;
    letter-spacing: 20px;
    -webkit-text-stroke: 1px white;
    /*text-shadow: 3px 5px 2px #ccc, 2px 2px 2px rgba(206, 89, 55, 0);*/
    
}

.bajas {
    color: red;
    font-size: 1.8em;
    font-family: Impact, Charcoal, sans-serif;
    letter-spacing: 20px;
     -webkit-text-stroke: 2px white;
    /*text-shadow: 3px 5px 2px #ccc, 2px 2px 2px rgba(206, 89, 55, 0);*/
}

.periodo {
    margin-top: 10px;
    color: #fff;
    font-family: Impact, Charcoal, sans-serif;
    font-size: 1.5em;
    letter-spacing: 15px;
    text-shadow: 3px 2px 3px black;
}

.container {
    width: 100%;
    height: 100%;
    background: #000000;
    background-repeat: no-repeat;
	overflow-y: hidden;
	animation: gradientBG 15s ease infinite;
}

.container_data {
    margin-top: 50px;
    height: 300px;
}

.cifra {
    margin-top: 100px;
    font-size: 7em;
    color: #FFFFFF;
    font-family: Impact, Charcoal, sans-serif;
    letter-spacing: 50px;
    text-shadow: 3px 5px 2px #474747, 2px 2px 2px rgba(206, 89, 55, 0);
}

.dataBox {
    height: 50px;
    width: 50%;
    float: left;
    color: black;
    font-size: 2em;
}

.dataBox_derecha {
    height: 50px;
    width: 49%;
    float: left;
    color: black;
    font-size: 2em;
}

.logo {
    margin-top: -120px;
    padding-bottom: 15px;
}
</style>
