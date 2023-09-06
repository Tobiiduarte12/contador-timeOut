import React, { useEffect, useRef, useState } from "react";

const AppRapper = () => {
  const [Count, setCount] = useState(0);

  let id = useRef();

  useEffect(() => {
    id.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2000);
  }, []);

  const stopIncrement = () => {
    clearInterval(id.current);
  };

  return (
    <>
      <div>
        <p>CONTADOR:</p>
        <span>{Count}</span>
      </div>

      <button onClick={stopIncrement} style={{ marginTop: "10px" }}>
        Stop
      </button>
    </>
  );
};

export default AppRapper;
