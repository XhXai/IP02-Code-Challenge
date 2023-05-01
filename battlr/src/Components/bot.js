import React from './react'

function Bot(props){
    const { bot, onAddToArmy, onReleaseFromArmy, onDischarge } = props;
    const { name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

    const handleAddToArmy = () => {
        onAddToArmy && onAddToArmy(bot);
    };

    const handleReleaseFromArmy = () => {
        onReleaseFromArmy && onReleaseFromArmy(bot);
    };

    const handleDischarge = () => {
        onDischarge && onDischarge(bot);
    };

    return(
        <div className="card">
            <img src={avatar_url} alt={name} />
            <h2>{name}</h2>
            <p>Catchphrase: {catchphrase}</p>
            <p>Class: {bot_class}</p>
            <p>Health: {health}</p>
            <p>Damage: {damage}</p>
            <p>Armor: {armor}</p>

            {onAddToArmy &&
            <button onClick={handleAddToArmy}>Add To Army</button>
            }

            {onReleaseFromArmy &&
            <button onClick={handleReleaseFromArmy}>Release From Army</button>
            }

            {onDischarge &&
            <button onClick={handleDischarge}>Discharge</button>
            }
        </div>
    );
}

export default Bot;