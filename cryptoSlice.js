import { createSlice } from "@reduxjs/toolkit";
import sampleData from "../data/sampleData";

const initialState = {
  data: [],
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    fetchCryptoData: (state) => {
      state.data = sampleData;
    },
    simulateUpdates: (state) => {
      state.data = state.data.map((coin) => {
        const random = (percent) => ((Math.random() - 0.5) * percent);
        return {
          ...coin,
          price: +(coin.price + random(10)).toFixed(2),
          change_1h: +(coin.change_1h + random(2)).toFixed(2),
          change_24h: +(coin.change_24h + random(5)).toFixed(2),
          volume_24h: +(coin.volume_24h + random(1000000)).toFixed(0),
        };
      });
    },
  },
});

export const { fetchCryptoData, simulateUpdates } = cryptoSlice.actions;
export default cryptoSlice.reducer;