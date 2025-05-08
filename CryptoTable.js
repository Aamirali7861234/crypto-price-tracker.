import React from "react";
import { useSelector } from "react-redux";

const CryptoTable = () => {
  const data = useSelector((state) => state.crypto.data);

  return (
    <div className="overflow-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th>#</th><th>Logo</th><th>Name</th><th>Symbol</th><th>Price</th><th>1h %</th><th>24h %</th><th>7d %</th><th>Market Cap</th><th>24h Volume</th><th>Circulating</th><th>Max Supply</th><th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin, idx) => (
            <tr key={coin.id}>
              <td>{idx + 1}</td>
              <td><img src={coin.logo} alt={coin.name} className="w-6 h-6" /></td>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>${coin.price}</td>
              <td className={coin.change_1h >= 0 ? "text-green-500" : "text-red-500"}>{coin.change_1h}%</td>
              <td className={coin.change_24h >= 0 ? "text-green-500" : "text-red-500"}>{coin.change_24h}%</td>
              <td>{coin.change_7d}%</td>
              <td>${coin.market_cap}</td>
              <td>${coin.volume_24h}</td>
              <td>{coin.circulating_supply}</td>
              <td>{coin.max_supply}</td>
              <td><img src={coin.chart} alt="chart" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;