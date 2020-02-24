import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList'
import axios from 'axios';


// axios 

class App extends Component {

  /*
  id = 2; //기본값 default

  // 기본 값으로 사용할 두 개의 객체를 생성한다.

  state = {
    information : [
      { id : 0, name : "홍길동", phone : "010-1234-5678" }, 
      { id : 1, name : "아무개", phone : "010-0000-0000" }
    ]
  }
  */

  id = 0;

  state = {
    information : []
  }
  
  // 생성자메서드
  constructor(props){
    super(props);
    console.log("생명주기 함수 중 가장 먼저 실행되는 생성자인 constructor 메서드 실행");
    this.getList();
  }

  // DB에 이미 저장되어 있는 데이터 목록을 불러오는 메소드
  getList = () => {

    axios.get('http://localhost:3000/list')
    .then((response) =>{
      console.log(response);
      this.setState({ information : response.data.list })

    })
    .catch((error) => {
      console.log(error);
    })
  }


// 신규등록
  onCreateValue = (data) => {
    console.log("전달받은 데이터 확인용 :" ,data);

    /*
    // 홍길동, 아무개 값이 들어있는 state
    const { information } = this.state;

    // 새로 입력받은 값을 추가하기
    // 홍길동, 아무개 + 새로 입력받은 값(전달받은 데이터)
    // concat()

    this.setState({
        information : information.concat({ id : this.id++, name : data.name, phone : data.phone })
    })
  }
  */
  // DB 연동하기
  // PhoneForm 컴포넌트로부터 전달받은 새로운 데이터를 DB에 저장한다.
  axios.post('http://localhost:3000/add', { name : data.name  , phone : data.phone})
  .then((response) =>{

    // const {information} = this.state;
    console.log(response);
    if(response.data.result === 'success') {
      // this.setState({
      //   information : information.concat({ id : this.id++, name : data.name, phone : data.phone })     
      // })
      this.getList();
    }
  })
  .catch((error) => {
    console.log(error);
  })

}
  
// 기존데이터 삭제
  onRemoveValue = (id) => {

    console.log("삭제할 아이디는 ?", id);

    // const {information} = this.state;

    // this.setState({
    //   // return 조건에 부합하는 id값만 필터링해서 새로운 배열로 반환한다.
    //   information : information.filter(info => info.id !== id) 
    // })

    // http://localhost:3000/delete/5
  axios.delete('http://localhost:3000/delete/'+id)    
    .then((response) => {
      console.log(response);
      if (response.data.result === 'success'){
        this.getList();
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  // 수정
  onUpdateValue = (id, data) => {

      console.log("수정할 id 확인하기 :", id);
      console.log("수정할 데이터 확인하기 :", data);


      /*
      const {information} = this.state;

      this.setState({
        information : information.map(
          info=> id === info.id ? { id : id, name : data.name, phone : data.phone} : info)
      })
      */
      axios.put('http://localhost:3000/edit/', {id: id, name: data.name, phone: data.phone})
      .then((response) =>{
        
        // const {information} = this.state;

        if(response.data.result === 'success'){
          this.getList();
      
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  // http 통신 및 백엔드 연동 테스트
  // onTest = () => {

  //   // jQuery의 ajax

  //   // http 통신 라이브러리 중 하나이다.
  //   axios.get('http://localhost:3000/test')
  //   .then((response) => {
  //     console.log("성공!",response);
  //   })
  //   .catch((error) => {
  //     console.log("실패 또는 에러",error);
  //   })
  // }

  render(){
    const { information } = this.state;

    // this.onTest();
    // this.getList();

    return(

      <div>
      <PhoneForm Func={this.onCreateValue}/>
      <PhoneInfoList data={information} onRemove={this.onRemoveValue} onUpdate = {this.onUpdateValue}/>
      </div>
  );
}
}

// {JSON.stringify({information})}
// json용어로 변환


export default App;
