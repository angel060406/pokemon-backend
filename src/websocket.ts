import { Server } from 'ws';

let wss: Server;

export const initializeWebSocketServer = (server: any) => {
  wss = new Server({ server });

  wss.on('connection', (ws) => {
    console.log('New client connected');
    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });

  return wss;
};

export const broadcastMessage = (message: string) => {
  wss.clients.forEach((client: any) => {
    if (client.readyState === client.OPEN) {
      client.send(message);
    }
  });
};
