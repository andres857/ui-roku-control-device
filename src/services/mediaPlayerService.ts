import axios from 'axios';

class MediaPlayer {
    constructor() {
        this.baseUrl = 'http://localhost:5005'; // URL base para todas las solicitudes
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
}

export default new MediaPlayer();
