import React, { useEffect, useState } from 'react';
import Coin from '../Coin/Coin';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    useEffect( ()=>{
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res => res.json())
        .then(data => setCoins(data));
    }, []);
    return (
        <div className='w-11/12 gap-8 grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 mt-10 mx-auto'>
            {
                coins.map(coin => <Coin key={coin.id} coin={coin}></Coin>)
            }
        </div>
    );
};

export default Coins;