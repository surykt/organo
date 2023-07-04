import React from "react";
import "./Button.css";

interface BotaoProps {
  children: React.ReactElement | string;
}

export default function Button({ children }: BotaoProps) {
  return (
    <div>
      <button className="button">{children}</button>
    </div>
  );
}
