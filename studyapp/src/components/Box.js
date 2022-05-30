// 이 파일 안에 3개의 컴포넌트를 생성하세요.
// 부모 컴포넌트 안에 자식1 컴포넌트를 넣으세요.
// 자식1 컴포넌트에 자식2 컴포넌트를 넣으세요.

import React from 'react';

const Box = () => {
  return (
    <>
      <div style={{ border: 'solid 5px gray', padding: '10px', margin: '5px' }}>
        1st Box
        <ChildBox1 />
      </div>
    </>
  );
};

// 자식 1 컴포넌트 만들기
const ChildBox1 = () => {
  return (
    <div style={{ border: 'solid 5px gray', padding: '10px', margin: '5px' }}>
      2st Box
      <ChildBox2 />
    </div>
  );
};

// 자식 2 컴포넌트 만들기
const ChildBox2 = () => {
  return (
    <div style={{ border: 'solid 5px gray', padding: '10px', margin: '5px' }}>
      3st Box
    </div>
  );
};

export default Box;
