import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObject = {
    username : 'Shivam',
    age : 23
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 mb-4">Tailwing test</h1>
      <Card username='Shivam' myself='My Name is Shivam Ahlawat' btnText='click me'></Card>
      <Card username='Shiv' myself='My Name is Shiv Ahlawat'/>
    </>
  );
}

export default App;
