// 리엑트를 불러온다.
// userState는 state를 함수 컴포넌트 안에서 사용할 수 있게 해준다.
import React, {Component} from 'react';

// Count라는 이름의 function
/*function Count(){
	// 사용할 state를 선언한다.
	// userState() 괄호 안에 초기 값을 설정한다.
	// { number : 0 }
	// 배열 비구조화 문법
	// [첫 번째 원소, 두 번째 원소]
	// 첫 번째 원소 : 현재 상태 값을 제공하는 것
	// 두 번째 원소 : 원소의 값을 수정하는 것
	const [number, setValue] = useState(0);

	return (
		<center>
			<h2>Counter</h2>
			<h1>{number}</h1>
			<button onClick={ () => setValue(number+1) }>+</button>
			<button onClick={ () => setValue(number-1) }>-</button>

		</center>
	);
}
*/

// es6 문법
/*const Count = () => {

	const [number, setValue] = useState(0);

	// 문자열 데이터를 담을 state를 생성(선언)
	const [string, setString] = useState(""); 



	const onChangeString = e => {
		setString(e.target.value);
	}


	return (
		<center>
			<h2>Counter</h2>
			<h1>{number}</h1>
			<button onClick={ () => setValue(number+1) }>+</button>
			<button onClick={ () => setValue(number-1) }>-</button>
			<br/><br/><br/>
			<div>
				이름 입력 : <input value={string} onChange={onChangeString} />
			</div>
			<br/><br/>
			<div>
				입력한 내용 : {string}
			</div>
		</center>
	);
}
*/
class Count extends Component {
	
	// 클래스형 컴포넌트에서 state를 생성 및 선언하는 방법

	state = { number : 0, string : "", object : { hobby : "영화감상", job : "작가" } } //초기값
	
	// 생명주기 주요 함수들 실습

	// 컴포넌트 생성자 함수. 컴포넌트가 생성될 때 실행된다.
	constructor(props){
		super(props);
		console.log("constructor 실행!");
	}

	// 컴포넌트가 화면에 출력될 때 실행된다. (위의 함수와는 시점의 차이 위가 우선순위)
	componentDidMount(){
		console.log("componentDidMount 실행!")
	}

	// 랜더링 시 변화를 감지하고 실행되지만 특정 조건에서는 업데이트를 하지 않도록 활용할 수 있다.
	shouldComponentUpdate(nextProps,nextState){
		console.log("!!!shouldComponentUpdate!!!")

		// (조건) ? true : false;
		// let sort = (age>=20) ? "성" 
		// number state가 2의 배수일 때는 랜더링하지 않는다.
		return (nextState.number %2 == 0) ? false : true;
		
	}

	// render()가 작동된 이후에 실행된다.
	componentDidUpdate(prevProps, prevState){
		console.log("componentDidUpdate실행!!");
	}
	// 클래스형 컴포넌트에서 함수를 작성하는 방법 

	incresement = () => {
		this.setState({
			number : this.state.number + 1
		});
	}

	decresement = () => {
		this.setState({
			number : this.state.number - 1
		});
	}

	onChangeString = (e) => {
		this.setState({
			string : e.target.value
		});
	}
	
	// 객체 안쪽 값들을 수정할 때 특정 한 가지 값만 명시하면 안 된다.
	// 객체 전체를 덮어쓰는 방식으로 수정되기 때문
	updateObject = () =>{
		this.setState({
			object : {
				hobby : "목공예",
				job : this.state.object.job
			}
		});
	}
	render(){
		
		return(
			<center>
			<div>
				<h3>Counter</h3>
				<h3>{this.state.number}</h3>
				<br />
				<br />
				<button onClick={this.incresement}>+</button>
				<button onClick={this.decresement}>-</button>
				<br /> <br /> 
				<div>
					이름 입력 : <input value={this.state.string} onChange={this.onChangeString} />
				</div>
				<br/><br/>
				<div>
					입력한 내용 : {this.state.string}
				</div>
				<br/><br/>
				<div>
					{this.state.object.hobby} / {this.state.object.job}
				</div>
				<button onClick={this.updateObject}>깊숙한 위치의 특정 객체만 수정해보기</button>
				</div>
			</center>
		);
	}
}
// export
export default Count;