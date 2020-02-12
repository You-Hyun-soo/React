import React, {Component} from 'react'

class Form extends Component {

	state = {name : "", job : ""}

  // onChangeData = (e) =>{
  //   this.setState({
  //     data : e.target.value
  //   });
  // }
  // 배열 형태(대괄호)로 표기한 것은 자바스크립트에서 객체의 이름을 사용할 때 쓰이는 문법이다.
  // var a = "name";
  // var obj = { [a + "A"] : "홍길동"}
  // {nameA : "홍길동" }
  // {name1 : "홍길동"}
  // var obj = {};
  // obj.name = "홍길동";
  // obj[my data] = "홍길동";


  onChangeValue = (e) => {
  	this.setState({
  		[e.target.name] : e.target.value

  	});
  }

  onSubmitValue = (e) => {
  	
  	// submit시 발생하는 전송 행위를 방지한다.
  	// 우선적으로 실행되는 이벤트를 막는다.
  	e.preventDefault();
	//입력받은 state 갑승ㄹ 부모 component에 돌려주는 함수형태
	// 파라미터를 통해서 부모 component와 소통할 수 있음
  	this.props.func(this.state);
  	// this.props.func()

  	// 부모props에 값을 전달하면 비워두는 것(초기값)
  	this.setState({
  		name : "",
  		job : ""
  	})
  }
  render(){
    return(

    <form onSubmit={this.onSubmitValue}>
      <center>
      	이름 : <input name="name" value={this.state.name} onChange={this.onChangeValue} />
      	직업 : <input name="job" value={this.state.job} onChange={this.onChangeValue} />
      	<div>{this.state.name}</div>
      	<div>{this.state.job}</div>
      	<button>등록하기</button>
      </center>
      
      </form>
  	);
  }
}


export default Form;