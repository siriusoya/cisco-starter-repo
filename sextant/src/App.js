import { useState } from 'react';
import { useEffect } from 'react';
import DataCard from "./components/DataCard";
import LatencyCard from './components/LatencyCard';

function App() {
  const [IPv4, setIPv4] = useState();
  const [IPv6, setIPv6] = useState();


  async function getIPv4() {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    setIPv4(data.ip)
  }

  async function getIPv6() {
    try {
      const response = await fetch("http://api64.ipify.org?format=json");
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const data = await response.json();
      setIPv6(data.ip);
      console.log(data.ip);
    } catch (error) {
      console.error("Error fetching IPv6 data:", error);
    }
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
        <DataCard name='IPv4' ipAddress={IPv4} />
        <DataCard name='IPv6' ipAddress={IPv6} />
        <LatencyCard />
      </div>
    </>
  );
}

export default App;
