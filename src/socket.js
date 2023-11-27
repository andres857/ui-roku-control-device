import { reactive } from "vue";
import { io } from 'socket.io-client';

// Here our state will be declared
export const socketState = reactive({
  connected: false,
  events: []
});

// You can specify here the url for the sockets backend
// const url = "http://localhost:5005"

// Create the socket connection
export const socket =  io('http://localhost:5005', { transports: ['websocket'] });

// Here we will manage the different events

// Change connected state
socket.on("connect", () => {
    console.log('Client conectado');
    socketState.connected = true;
  });
  
  socket.on("disconnect", () => {
    socketState.connected = false;
  });
  
  // Handle backend events
  
  // Add an event to our queue
  socket.on("addEvent", (item) => {
    socketState.events.push(item);
  });
  
  // Replace an event in the queue
  socket.on("updateEvent", (item) => {
    socketState.events = socketState.events.filter((event) => event.id !== item.id);
    socketState.events.push(item);
  });
  
  // Delete and Event in the queue
  socket.on("deleteEvent", (item) => {
    socketState.events= socketState.events.filter((event) => event.id !== item.id);
  });