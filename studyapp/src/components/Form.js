import React, { useState } from 'react';

const Form = () => {
  // useState로 state 2개 만들기
  const [text, setText] = useState('');
  const [print, setPrint] = useState('');
  // onSubmit 함수 만들기
  const onSubmit = (e) => {
    e.preventDefault();
    setPrint(text);
    setText('');
  };
  // onChange 함수 만들기
  const onChange = (e) => {
    setText(e.target.value);
  };

  // jsx 코드 수정
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={text} />
        <button type="submit">제출</button>
      </form>

      <p>{print}</p>
    </div>
  );
};

export default Form;
