import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [datos, setDatos] = useState("a");
  const [error, setError] = useState("a");
  async function TraerDatos(params) {
    try {
      const response = await fetch('https://www.localhost:1420/api/CheckUser')
    } catch (error) {

    }
  }

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return <div className="container"></div>;
}

export default App;
