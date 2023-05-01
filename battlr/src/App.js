import './App.css';
import React, { useState } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';

function App() {
  const [army, setArmy] = useState([]);

  const addtToArmy = (bot) => {
    if(!army.includes(bot)){
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (bot) => {
    const updatedArmy = army.filter((bot) => bot.id !== bot.id);
    setArmy(updatedArmy);
  };

  const dischargeBot = async (bot) => {
    try{
      await fetch('http://localhost:3000/bots/${bot.id}', {
        method: "DELETE",
      });
      releaseFromArmy(bot);
    }catch (error){
      console.log('Error discharging bot:', error);
    }
  };
  return (
    <div className='app'>
      <h1>Bot</h1>
      <div className='section-bot'>
        <BotCollection onAddToArmy={addtToArmy} />
        <YourBotArmy 
          army={army}
          onReleaseFromArmy={releaseFromArmy}
          onDischarge={dischargeBot}
        />
      </div>
    </div>
  );
}

export default App;
