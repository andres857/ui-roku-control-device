<template>
  <v-card style="overflow: initial; z-index: initial">
    <v-card-body class="v-row">
      <div class="v-col-md-2 v-col-2 text-center">
        <i class="bi bi-speaker-fill" style="font-size: 2rem; color: cornflowerblue;"></i>
      </div>
      <div class="v-col-md-8 v-col-8">
        <div class="text-left">
            <strong>Module 7</strong> <i class="text-subtitle-2">Speaker</i>
        </div>
        <div class="text-left">
          <h6><i class="bi bi-circle" style="color: rgb(55, 185, 4);"></i> Online</h6> 
        </div>
      </div>

      <div class="v-col-md-2 v-col-2 text-center">
        <v-btn icon="$vuetify" size="x-small">
            <i class="bi bi-power" style="font-size: 2rem;"></i>
        </v-btn>
      </div>
    </v-card-body>
  </v-card>    
</template>

<script>
  import createVuetify from '../plugins/vuetify';
  import { ref, watch, onMounted } from 'vue';

  export default {
    setup() {
      const dialog = ref(false);

      watch(dialog, (val) => {
        if (!val) return;
        setTimeout(() => (dialog.value = false), 4000);
      });

      return {
        dialog,
      };
    },
  };
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