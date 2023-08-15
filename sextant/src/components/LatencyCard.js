import { useState } from 'react';
import { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');

function LatencyCard() {
    const [latency, setLatency] = useState();

    useEffect(() => {
        client.onmessage = (message) => {
            setLatency(new Date().getTime() - message.data)
        };
      }, []);
  
    return (
      <>
        <div className="latencyContainer">
          <h3 className="dataTitle">Packet Latency:</h3>
          <hr className="dataUL" />
           <h2 className="latency">{latency}ms</h2>
        </div> 
      </>
    );
  }
  
  export default LatencyCard;
  