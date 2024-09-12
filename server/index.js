// const WebSocket = require("ws");
// const axios = require("axios");

// const binanceApiUrl = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";
// const getCurrentRate = async () => {
//   try {
//     const response = await axios.get(binanceApiUrl);
//     const currentRate = response.data.price;
//     console.log(`Current Price: ${currentRate}`);
//   } catch (error) {
//     console.error('Error fetching current rate:', error);
//   }
// };

// // Fetch current price on script startup

// // Create a new WebSocket connection
// const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@depth");

// // Event listener when connection is opened
// ws.on("open", () => {
//   console.log("Connected to Binance WebSocket!");
// });

// // Event listener when message is received
// ws.on("message", (data) => {
//   const trade = JSON.parse(data);
//   // console.log(`Price: ${trade.p}, Quantity: ${trade.q}`);
//   console.log(trade);

//   // console.log("hello");
//   getCurrentRate();
// });

// // Event listener when connection is closed
// ws.on("close", () => {
//   console.log("Disconnected from WebSocket");
// });

// // Error handling
// ws.on("error", (error) => {
//   console.error("WebSocket error:", error.data);
// });

// const WebSocket = require("ws");
// const axios = require("axios");

// // Create a WebSocket server for React frontend
// const wss = new WebSocket.Server({ port: 8080 });

// // Binance WebSocket for live BTC/USDT trades
// const binanceSocket = new WebSocket(
//   "wss://stream.binance.com:9443/ws/btcusdt@trade"
// );

// // Broadcast data to all connected WebSocket clients
// function broadcast(data) {
//   wss.clients.forEach((client) => {
//     if (client.readyState === WebSocket.OPEN) {
//       client.send(data);
//     }
//   });
// }

// // Handle messages from Binance WebSocket
// binanceSocket.on("message", (data) => {
//   const trade = JSON.parse(data);
//   const price = trade.p;
//   const quantity = trade.q;

//   const message = `Price: ${price}, Quantity: ${quantity}`;
//   // console.log(message);

//   // Broadcast the message to all connected clients
//   broadcast(JSON.stringify({ price, quantity }));
// });

// // WebSocket server connection listener for React clients
// wss.on("connection", (ws) => {
//   console.log("React client connected!");

//   // Optional: Send a welcome message to new clients
//   ws.send(JSON.stringify({ message: "Welcome to the WebSocket server!" }));

//   // Handle WebSocket disconnection
//   ws.on("close", () => {
//     console.log("React client disconnected");
//   });
// });

// const binanceApiUrl = "https://api.binance.com/api/v3/klines";
// const symbol = "BTCUSDT"; // Bitcoin/USDT trading pair
// const interval = "1d"; // Daily candlesticks (1d = 1 day)

// // Optionally, you can specify startTime and endTime in milliseconds (optional)
// const startTime = new Date("2022-01-01").getTime(); // Start from 1st Jan 2022

// axios
//   .get(
//     `${binanceApiUrl}?symbol=${symbol}&interval=${interval}&startTime=${startTime}`
//   )
//   .then((response) => {
//     const data = response.data;

//     // Format and display the OHLC data
//     data.forEach((candle) => {
//       const [openTime, open, high, low, close, volume, closeTime] = candle;
//       console.log(
//         `Open: ${open}, High: ${high}, Low: ${low}, Close: ${close}, Volume: ${volume}`
//       );
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching historical data:", error);
//   });

