import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { io } from 'socket.io-client'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const socket = io("https://vm4983125.25ssd.had.wf:5000"); // Replace with your server URL

    socket.on("connect", () => {
      console.log("Socket connected");
    });

    socket.on("onlineUsers", (data) => {
      console.log(data);
      setUsers(data);
    });
    
    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    // return () => {
    //   socket.disconnect();
    // };
  }, []);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
