import { useState } from "react";

const HitPoints = () => {
  const [value1, setValue1] = useState(20);
  const [value2, setValue2] = useState(20);

  const resetAll = () => {
    setValue1(20);
    setValue2(20);
  };

  return (
    <div className="container">
      <div>
        <h1>Player Hit Points</h1>
        <h1>{value1}</h1>
        <button className="button-81 hp" onClick={() => setValue1(value1 + 1)}>
          +
        </button>
        <button className="button-81 hp" onClick={() => setValue1(value1 - 1)}>
          -
        </button>
      </div>
      <div>
        <h1>Opponent Hit Points</h1>
        <h1>{value2}</h1>
        <button className="button-81 hp" onClick={() => setValue2(value2 + 1)}>
          +
        </button>
        <button className="button-81 hp" onClick={() => setValue2(value2 - 1)}>
          -
        </button>
      </div>
      <button className="button-81 hp" onClick={resetAll}>
        Reset
      </button>
    </div>
  );
};
export default HitPoints;
