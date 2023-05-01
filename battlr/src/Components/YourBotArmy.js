import React from 'react';
import Bot from './bot';

const YourBotArmy = ({ army, onReleaseFromArmy, onDischarge }) => {

    const handleReleaseFromArmy = (bot) => {
        onReleaseFromArmy(bot);
    };

    const handleDischarge = (bot) => {
        onDischarge(bot);
    };

    return(
        <div className='your-bot-army'>
            <h2>Your Bot Army</h2>
            {army.length === 0 ? <p>No bot listed in the army.</p> : army.map((bot) => (
                <div key={bot.id} className='bot-army'>
                    <Bot 
                    bot={bot}
                    onReleaseFromArmy={handleReleaseFromArmy}
                    onDischarge={handleDischarge}
                    />
                </div>
            ))}
        </div>
    );
};


export default YourBotArmy;