// import * as mqtt from "mqtt/dist/mqtt.min";
import mqtt from 'mqtt'
import { ref } from 'vue';

export function useMqtt() {
    // Tu código existente de conexión, suscripción y publicación
    const clientId = "emqx_vue3_" + Math.random().toString(16).substring(2, 8);
    const username = "emqx_test";
    const password = "emqx_test";

    const client = mqtt.connect("ws://3.129.105.109:8083/mqtt", {
        clientId,
        username,
        password,
        // ...other options
    });
    client.on("connect", () => {
        console.log("Conectado exitosamente al broker MQTT!");
        // Aquí puedes poner más lógica que quieras ejecutar justo después de conectarte
    });
    client.on("reconnect", () => {
        console.log("Intentando reconectar al broker MQTT...");
    });
    client.on("error", (error) => {
        console.error("Error de conexión MQTT:", error);
    });
    // Topic & QoS
const subscription = ref({
    topic: "topic/mqttx",
    qos: 0 as mqtt.QoS,
  });
  
  const doSubscribe = () => {
    const { topic, qos } = subscription.value;
    client.subscribe(
      topic,
      { qos },
      (error: Error, granted: mqtt.ISubscriptionGrant[]) => {
        if (error) {
          console.log("subscribe error:", error);
          return;
        }
        console.log("subscribe successfully:", granted);
      }
    );
  };

const publish = ref({
    topic: "topic/browser",
    payload: '{ "msg": "Hello, I am browser." }',
    qos: 0 as mqtt.QoS,
  });
  
const doPublish = () => {
    const { topic, qos, payload } = publish.value;
    client.publish(topic, payload, { qos }, (error) => {
        if (error) {
        console.log("publish error:", error);
        return;
        }
        console.log(`published message: ${payload}`);
    });
};

client.on("message", (topic: string, message) => {
    console.log(`received message: ${message} from topic: ${topic}`);
  });

    return {
      doSubscribe,
      doPublish,
    };
  }




