<template>
    <v-card
        class="mx-auto p-3"
        max-width="344"
        elevation="07"
    >
    <v-row >
        <v-col cols="2">
            <v-icon icon="mdi-circle" :color="device.device.connected ? 'success' : 'red'"/>
        </v-col>
        <v-col cols="4">
            {{ device.device.clientid }}
        </v-col>
        <v-col cols="3">
            <input placeholder="Ubicacion" />
        </v-col>
        <v-col cols="3">
            <v-btn size="x-small" @click="dialog = true">reiniciar</v-btn>
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
                        <div>
                            Reiniciando Reproductor de Video
                    {{ device.device.clientid }}
                        </div>
                    <div>
                        Apagando Equipo...
                    </div>
                    <div>
                        Encendiendo Equipo...
                    </div>
                    <div>
                        Abriendo Streaming
                    </div>
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-2 mt-2"
                    ></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
    </v-card>
</template>

<script >
import createVuetify from '../plugins/vuetify';
import { ref, watch } from 'vue';

export default{
    props: {
        device: {
            type: Object,
            required: true
        }
    },
    setup(props){
        const dialog = ref(false);
        const device  = props;

        watch(dialog, (val) => {
            if (!val) return;
            setTimeout(() => (dialog.value = false), 15000);
        });

        return {
            device,
            dialog
        }
    }
}
</script>