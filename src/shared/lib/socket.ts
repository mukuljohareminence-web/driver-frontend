import { io, type Socket } from 'socket.io-client';
import { env } from '@/shared/config/env';

let socket: Socket | null = null;

export function getSocket(): Socket {
  socket ??= io(env.NEXT_PUBLIC_WS_URL, {
    transports: ['websocket'],
    reconnection: true,
  });

  return socket;
}
