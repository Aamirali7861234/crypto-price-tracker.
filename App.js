import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCryptoData, simulateUpdates } from "./redux/cryptoSlice";
import CryptoTable from "./components/CryptoTable";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoData());
    const interval = setInterval(() => {
      dispatch(simulateUpdates());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;