// 버튼을 누르면 숫자가 1씩 증가됩니다.
// useState를 사용하세요.

import React, { useState } from 'react';

const State = () => {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h1>이름 : {number} </h1>
      <button onClick={onIncrease}>+</button>
    </div>
  );
};

export default State;
