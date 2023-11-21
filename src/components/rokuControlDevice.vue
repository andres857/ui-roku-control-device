<template>
<v-div>
    <v-card
    class="mx-auto my-8"
    max-width="344"
    elevation="07"
  >
  <v-row>
    <v-col cols="2" class="d-flex align-center justify-center">
        <v-icon icon="mdi-remote"/>
    </v-col>
    <v-col cols="8" class="container-title-device pl-0">
        <v-row class="ma-0 pa-0">
            <v-col cols="3" class="title-device">
                <p class="font-weight-bold text-sm">Roku</p> 
            </v-col>
            <v-col  class="title-device-description">
                <v-card-subtitle class="pl-0"> Univision </v-card-subtitle>
            </v-col>
        </v-row>
        <v-row class="ma-0 pa-0">
            <v-col cols="2" class="my-col pt-0">
                <v-icon icon="mdi-circle" color="success"/>
            </v-col>
            <v-col class="d-flex align-center justify-start pl-0 pt-0">
                <v-card-subtitle class="pl-0 icon-sm" > Online </v-card-subtitle>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="2" class="d-flex align-center justify-center">
        <v-icon icon="mdi-power"/>
    </v-col>
  </v-row>

  </v-card>
</v-div>

</template>

<script >
import createVuetify from '../plugins/vuetify'
    export default {
        data: () => ({
        labels: { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' },
        expand: false,
        time: 0,
        forecast: [
            { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
            { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
            { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
        ],
        }),
    }
</script>
<style>

.title-device{
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 15px;
    padding-bottom: 0px;
}
.title-device-description{
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 15px;
    padding-bottom: 0px;
}
.my-col {
  padding: 10px 5px 10px 5px;;
}
</style>