import React, { useState, useRef } from 'react';

const Ref = () => {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onFocus = () => {
    input.current.focus();
  };

  // Ref 객체를 1개 생성하세요.
  const input = useRef();
  setTimeout(onFocus, 3000);

  //jsx 코드를 수정하세요.
  return (
    <div className="App">
      <div>3초 후 포커스!</div>
      <input ref={input} placeholder="작성하시오" />
    </div>
  );
};
export default Ref;
