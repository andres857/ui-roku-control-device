/* eslint-disable no-useless-catch */
import axios from 'axios';

const API_URL = 'https://api-nettrotter.windowschannel.com';

class ClientService {
    async create(client: any): Promise<any> {
        try {
            const response = await axios.post(`${API_URL}/clients`, client);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async get(): Promise<any> {
        const getClients = () => {
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    const clients = [
                        {
                            name: 'Liga Contra el Cancer',
                            ns: 'LCC',
                        },
                        {
                            name: 'Windows Channel - Testing',
                            ns: 'WC',
                        },
                        {
                            name: 'Imbanaco',
                            ns: 'CMI',
                        },
                        {
                            name: 'Fundacion Valle de Lili',
                            ns: 'FVL',
                        }
                    ];
                    resolve(clients)
                },1000);
            })
        }
        try {
            // Simulación de llamada a una API con promesa y temporizador
            const clients = await getClients();
            return clients;
        } catch (error) {
            throw error;
        }
    }
}

export default new ClientService();