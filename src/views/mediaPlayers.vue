<template>
    <v-select v-model="clientSelect" label="Cliente" :items="clients" item-value="ns" item-title="name">
      <template v-slot:item="{ props, item }">
        <v-list-item v-bind="props" :subtitle="item.raw.ns"></v-list-item>
      </template>
    </v-select>

    <div v-if="clientSelect">
      <ul>
        <li v-for="(device) in mediaplayerdevices" :key="device.clientid">
          <mediaPlayer :device="device"></mediaPlayer>
        </li>
      </ul>
    </div>
    <div v-else>
      <h2 >Seleccione un cliente</h2>
    </div>


</template>

<script  lang="ts">
import { ref, onMounted,watch } from 'vue';
import mediaPlayer from '../components/mediaplayer-item.vue';
import clientService from '../services/clientService.ts';
import mediaPlayerService from '../services/mediaPlayerService.ts';
import { useMqtt } from '../services/brokerService.ts';


export default{
  components: {
    mediaPlayer
  },
  setup(){
    const clients = ref([]);
    const clientSelect = ref(null);
    const mediaplayerdevices = ref([]);
    const { doSubscribe, doPublish } = useMqtt();

    const listClients = async () => {
        try {
            clients.value = await clientService.get();
            console.log(clients.value);
        } catch (error) {
            console.error('Error al obtener clientes:', error);
        }
    };

    const listDevices = async () => {            
      if (clientSelect.value) {
        mediaplayerdevices.value = await mediaPlayerService.getDevicesConnected(clientSelect.value.toLowerCase());
      }
    };


    watch( clientSelect, () => {
      listDevices();
    });

    onMounted(listClients);
    onMounted(doPublish)

    return{
      clients,
      clientSelect,
      mediaplayerdevices,
    }
  }
}
</script>