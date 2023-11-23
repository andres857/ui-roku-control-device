<template>
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
        <v-btn
            class="ma-2"
            color="primary"
            :disabled="dialog"
            :loading="dialog"
            @click="dialog = true"
        >
        <v-icon icon="mdi-power"/>
      </v-btn>
      <v-dialog
        v-model="dialog"
        :scrim="false"
        persistent
        width="auto"
      >
      <v-card
        color="primary"
      >
        <v-card-text>
          Reiniciando Streaming
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    </v-col>
  </v-row>

  </v-card>
</template>

<script>
import createVuetify from '../plugins/vuetify';
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { io } from "socket.io-client";

export default {
  setup() {
    const socket = ref(null);
    const dialog = ref(false);


    onMounted(() => {
      socket.value = io("http://localhost:5005"); // Reemplaza con tu URL del servidor
      socket.value.on("connect", () => {
        console.log("Conectado a Socket.IO");
      });
    });

    onBeforeUnmount(() => {
      if (socket.value) {
        socket.value.close();
      }
    });

    watch(dialog, (val) => {
      if (!val) return;
      setTimeout(() => (dialog.value = false), 4000);
    });

    // const sendMessage = () => {
    //   if (message.value.trim() !== '') {
    //     socket.value.emit("chat-message", message.value);
    //     message.value = '';
    //   }
    // };
    return {
      dialog
    };
  }
};
</script>
