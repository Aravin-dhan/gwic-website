'use client';

import { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

let socket: Socket;

export default function Scribble() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket = io('http://localhost:3001');

    socket.on('drawing', (data) => {
      const canvas = canvasRef.current;
      if (canvas) {
        const context = canvas.getContext('2d');
        if (context) {
          context.beginPath();
          context.moveTo(data.x0, data.y0);
          context.lineTo(data.x1, data.y1);
          context.stroke();
        }
      }
    });

    socket.on('chat message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        let x = e.nativeEvent.offsetX;
        let y = e.nativeEvent.offsetY;
        context.beginPath();
        context.moveTo(x, y);

        const handleMouseMove = (event: MouseEvent) => {
          const data = {
            x0: x,
            y0: y,
            x1: event.offsetX,
            y1: event.offsetY,
          };
          socket.emit('drawing', data);
          context.lineTo(event.offsetX, event.offsetY);
          context.stroke();
          x = event.offsetX;
          y = event.offsetY;
        };

        const handleMouseUp = () => {
          canvas.removeEventListener('mousemove', handleMouseMove);
          canvas.removeEventListener('mouseup', handleMouseUp);
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);
      }
    }
  };

  const handleMouseUp = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.onmousemove = null;
    }
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit('chat message', message);
    setMessage('');
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
      <canvas
        ref={canvasRef}
        width="800"
        height="600"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{ border: '1px solid black' }}
      />
      <div>
        <ul style={{ listStyle: 'none', padding: 0, height: '500px', overflowY: 'scroll', border: '1px solid #ccc' }}>
          {messages.map((msg, i) => <li key={i}>{msg}</li>)}
        </ul>
        <form onSubmit={sendMessage}>
          <input value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}