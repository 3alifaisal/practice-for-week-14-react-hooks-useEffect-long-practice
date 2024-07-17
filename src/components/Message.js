import { useState, useEffect } from "react";
function Message({ size, featherCount }) {
  const [message, SetMessage] = useState("");

  useEffect(() => {
    if (featherCount <= 0) {
      SetMessage("BIIIrd where your clothes at");
    } else if (featherCount >= 10 && featherCount < 20) {
      SetMessage(
        "Bro got so many feathers that I can't count them on my fingers"
      );
    } else if (featherCount >= 20) {
      SetMessage("bro chillout with the feathers a bit");
    } else {
      SetMessage(`dude you can add up to ${10 - featherCount} more feathers`);
    }
  }, [featherCount]);
  return <div className={`message ${size}`}>{message}</div>;
}

export default Message;
