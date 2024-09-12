import { useEffect, useState } from 'react';

function App() {
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    // Connect to the WebSocket server running on Node.js
    const ws = new WebSocket('ws://localhost:8080');

    // Listen for messages
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.price && data.quantity) {
        setPrice(data.price);
        setQuantity(data.quantity);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="App">
      <h1>Live BTC/USDT Trade Data</h1>
      {price && quantity ? (
        <div>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
      ) : (
        <p>Waiting for data...</p>
      )}
    </div>
  );
}

export default App;
