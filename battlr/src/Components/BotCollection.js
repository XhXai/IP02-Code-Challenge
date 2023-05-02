import React, { useEffect, useState } from 'react';
import Bot from './bot';


const BotCollection = ({ onAddToArmy }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch('https://bot-qyvv.onrender.com/bots');
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.log('Error fetching bots:', error);
      }
    };

    fetchBots();
  }, []);

  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <Bot bot={bot} onAddToArmy={onAddToArmy} />
        </div>
      ))}
    </div>
  );
};

export default BotCollection;


