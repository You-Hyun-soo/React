import React, {Component} from 'react'

class PhoneForm extends Component {

	state = {name : '', phone : ''}

	onChangeValue = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		});
	}

	onSubmitValue = (e) => {

		// 가장 먼저 실행되는 이벤트인 submit(페이지 이동 및 로드 현상)을 막아준다.
		e.preventDefault();
		// state 값을 부모 컴포넌트인 App.js 에게 전달한다.
		this.props.Func(this.state);

		// 윗줄에서 부모 컴포넌트에게 값을 전달했으니 초기 상태로 돌려둔다.
		// state를 초기값으로 되돌리기한다.
		this.setState({
			name : '',
			phone : ''
		})
	}

	render(){
		return(
			<form onSubmit={this.onSubmitValue}>
				<center>
				이름 : <input placeholder="이름" name="name" value={this.state.name} onChange={this.onChangeValue}/>
				전화번호 : <input placeholder = "전화번호" name="phone" value={this.state.phone} onChange={this.onChangeValue}/>
				
			<div>{this.state.name}</div>
			<div>{this.state.phone}</div>
			<button>등록하기</button>
				</center>
			</form>
		)
	}
}

export default PhoneForm;