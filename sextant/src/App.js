import { useState } from 'react';
import { useEffect } from 'react';
import DataCard from "./components/DataCard";

function App() {
  const [IPv4, setIPv4] = useState();
  const [IPv6, setIPv6] = useState();


  async function getIPv4() {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    setIPv4(data.ip)
  }

  async function getIPv6() {
    const response = await fetch("http://api64.ipify.org?format=json");
    const data = await response.json();
    setIPv6(data.ip)
    console.log(data.ip)
  }

  useEffect(() => {
    getIPv4()
    getIPv6()
  }, []);

  return (
    <>
      <div className="banner">
        <h1 className="title">Sextant</h1>
      </div>
      <div className="contentContainer">
        <DataCard IPv4={IPv4} />
        <DataCard IPv6={IPv6} />
      </div>
    </>
  );
}

export default App;
