import React, { Component } from 'react';

class PhoneInfo extends Component {

	// 수정 시 input 값을 담을 name,phone 선언
	// 상태 모드를 판별하고 기억해줄 editing 선언
	state = {
		editing : false,
		name : '',
		phone : ''
	}
	// 삭제 
	onRemoveValue = () => {

		const { info, onRemove} = this.props;

		// 물려받은 onRemove를 호출하며 id 값을 파라미터로 넘겨준다.
		// App.js에 생성된 onRemoveValue 메서드가 해당 id값을 넘겨받아서 filter 처리를 하기 위함.
		onRemove(info.id);
	}

	// 수정

	// 수정 모드로 변경한다.
	// t -> f , f -> t
	toggleEditMode = () => {

		const {editing} = this.state;
		this.setState({ editing : !editing }) // false -> !false (true) 현재 상태를 부정해서 반대 상태로 변경. 
	}

	onChangeValue = (e) => { 

		// [name] : value
		// e.target.name : e.target.value

	const {name, value} = e.target;
	this.setState({
		[name] : value
	})

	}

	// lifecycle 함수 사용
	// render()가 작동된 이후에 실행된다.
	// 컴포넌트가 화면에 출력될 때 실행이 되는 생명주기 함수
	// 수정 버튼이 클릭되면 기존의 값이 input 태그에 표시되고, 수정사항을 적용할 떄는 입력된 input값을 부모 컴포넌트에 전달한다.
	componentDidUpdate(prevProps, prevState){

		const {info, onUpdate } = this.props;

		// 조건1 (상황1 editing 값이 false로 전환될 때 이 조건에 걸린다.) 
		if (!prevState.editing && this.state.editing) {
			// 이전 editing 값은 false 이면서 동시에 현재 state 값은 true 일 떄 

			this.setState({
				name : info.name,
				phone : info.phone
			})
		}

		// 조건2 (상황2 editing 값이 true로 전환될 때 이 조건에 걸린다.)
		if (prevState.editing && !this.state.editing) {
			// 이전 editing 값은 true 이면서 동시에 현재 state 값은 false일 때
			// onUpdate(파라미터1, 파라미터2);
			onUpdate(info.id, { name : this.state.name, phone : this.state.phone })
		}
	}


	render(){

		const style = {
			border : '1px solid #000000',
			padding : '10px',
			margin : '10px'
		};

		const {editing} = this.state;

		// 수정용 레이아웃
		// editing이 true일 때
		// 현재 수정 모드
		if (editing) {
			return(
				<div style={style}>
					<div>
						<input placeholder = "이름 입력란" name = "name" value = {this.state.name} onChange={this.onChangeValue}/>
					</div>
					<div>
						<input placeholder = "전화번호 입력란" name = "phone" value={this.state.phone} onChange={this.onChangeValue}/>
					</div>
					<button onClick={this.toggleEditMode}>적용</button>
				</div>

			)
		}


		// 일반 리스트 출력용 요소
		const {name, phone } = this.props.info;

		return(
			<div style={style}>
				<div>{name}</div>
				<div>{phone}</div>
				<button onClick={this.toggleEditMode}>수정</button>
				<button onClick={this.onRemoveValue}>삭제</button>

			</div>
			
		);
	}
}

export default PhoneInfo;