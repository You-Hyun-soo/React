import React from 'react';  // 리엑트를 불러온다
// import - node.js에서 require('명칭')과 유사한 역할을 한다.
import logo from './logo.svg';
import './App.css';

import User from './User.js';
import Count from './Count.js';

function App() {

  //const name = "aaa";
  let title = "React Project~";
  let a = 3;
  let b = 5;
  let c = "3";

  let name = "홍길동";

  //return (렌더링할 내용(요소)을 이 안에 작성한다 );
  // == 와 ===의 차이
  // == 동등연산자 : 비교 대상이 서로 다른 데이터 타입이면 강제 변환해서 비교를 한다.
  // === 일치연산자 : 배교 대상을 더욱 엄격하게 비교한다.
  return (
  
    //import한 User에게 값을 전달한다.
    //{userName : "YHS", email : "###@gmail.com"}
    //<User userName={name} />
    <Count />
  /*
  <div className="App">
    <header className="App-header">
      <p>Hello React.js! {title}</p>
      <p>{a+b}</p>
      <p>
        {a===b ? (<span>true</span>) : (<span>false</span>)}
      </p>
      <p>
        {a==c ? (<span>true</span>) : (<span>false</span>)}
      </p>
      <p>
        {a===c ? (<span>true</span>) : (<span>false</span>)}
      </p>
    </header>
  </div>
  */
  );
}

export default App;
