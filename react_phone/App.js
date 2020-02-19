import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList'

class App extends Component {

  id = 2; //기본값 default

  // 기본 값으로 사용할 두 개의 객체를 생성한다.

  state = {
    information : [
      { id : 0, name : "홍길동", phone : "010-1234-5678" }, 
      { id : 1, name : "아무개", phone : "010-0000-0000" }
    ]
  }


// 신규등록
  getData = (data) => {
    console.log("전달받은 데이터 확인용 :" ,data);

    // 홍길동, 아무개 값이 들어있는 state
    const { information } = this.state;

    // 새로 입력받은 값을 추가하기
    // 홍길동, 아무개 + 새로 입력받은 값(전달받은 데이터)
    // concat()

    this.setState({
        information : information.concat({ id : this.id++, name : data.name, phone : data.phone })
    })
  }
  
// 기존데이터 삭제
  onRemoveValue = (id) => {

    console.log("삭제할 아이디는 ?", id);

    const {information} = this.state;

    this.setState({
      // return 조건에 부합하는 id값만 필터링해서 새로운 배열로 반환한다.
      information : information.filter(info => info.id !== id) 
    })
    

  }

  // 수정
  onUpdateValue = (id, data) => {

      console.log("수정할 id 확인하기 :", id);
      console.log("수정할 데이터 확인하기 :", data);

      const {information} = this.state;

      this.setState({
        information : information.map(
          info=> id === info.id ? { id : id, name : data.name, phone : data.phone} : info)
      })
  }

  render(){
    const { information } = this.state;

    return(

      <div>
      <PhoneForm Func={this.getData}/>
      <PhoneInfoList data={information} onRemove={this.onRemoveValue} onUpdate = {this.onUpdateValue}/>
      </div>
  );
}
}

// {JSON.stringify({information})}
// json용어로 변환


export default App;
