import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm.js';


class App extends Component {

  // 기본 값으로 사용할 두 개의 객체를 생성한다.

  state = {
    information : [
      { name : "홍길동", phone : "010-1234-5678" }, { name : "아무개", phone : "010-0000-0000" }
    ]
  }

  getData = (data) => {
    console.log("전달받은 데이터 확인용 :" ,data);

    // 홍길동, 아무개 값이 들어있는 state
    const { information } = this.state;

    // 새로 입력받은 값을 추가하기
    // 홍길동, 아무개 + 새로 입력받은 값(전달받은 데이터)
    // concat()

    this.setState({
        information : information.concat({ name : data.name, phone : data.phone })
    })
  }
  
  render(){
    const { information } = this.state;

    return(

      <div>
      <PhoneForm Func={this.getData}/>
      {JSON.stringify({information})}
      </div>
  )
}
}
// json용어로 변환


export default App;
