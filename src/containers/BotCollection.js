import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = props => {
  return (
    <div className="ui four column grid">
      <div className="row">
        Collection of all bots
        {props.bots.map(bot => (
          <BotCard key={bot.id} bot={bot} addToArmy={props.addToArmy} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
