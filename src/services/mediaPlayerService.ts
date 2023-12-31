import axios from 'axios';


class MediaPlayer {
    constructor() {
        this.baseUrl = 'http://192.168.0.102:5005'; // URL base para todas las solicitudes
    }

    get devices(){
        const devices = [
            {
                id:'',
                site:'',
                room:'',
            }
        ]
    }

    // Método para obtener los dispositivos
    async getDevicesConnected(client: string) {
        try {
            const response = await axios.get(`${this.baseUrl}/devices?client=${client}`);
            console.log(response.data);
            return response.data; 
        } catch (error:any) {
            console.error(error.message);
            throw error;
        }
    }

     // Método para obtener las subscripciones
     async getSubscriptions(idDevice: string) {
        try {
            const response = await axios.get(`${this.baseUrl}/subscriptions?idDevice=${idDevice}`);
            console.log(response.data);
            return response.data; 
        } catch (error:any) {
            console.error(error.message);
            throw error;
        }
    }
}

export default new MediaPlayer();
