import React, { useCallback } from "react";
import "../index.css";

export const ArmitsButton = () => {
  const onClick = useCallback(() => {
    console.log("Hello world!");
  }, []);

  return (
    <button
      onClick={onClick}
      className={`bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
    >
      ARMITS2-Fraemwork
    </button>
  );
};
