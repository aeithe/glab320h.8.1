import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Price() {
  const apiKey = "934ED36A-F25A-455F-9D08-71523DFCE1F4";

  const params = useParams();
  const symbol = params.symbol;

  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState("null");

  const getCoin = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCoin();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  console.log(coin);
  return coin && coin.rate ? loaded() : loading();
}

export default Price;