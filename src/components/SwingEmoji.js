import { useState } from "react";

function SwingEmoji() {
  const [animationKey, setAnimationKey] = useState(0);

  const restartAnimation = () => {
    setAnimationKey(prev => prev + 1);
  };

  return (
    <span
      key={animationKey}
      className="swing"
      onMouseEnter={restartAnimation}
      style={{ fontSize: "3rem", cursor: "pointer" }}
    >
      🤙
    </span>
  );
}

export default SwingEmoji