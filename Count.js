// 리엑트를 불러온다.
// userState는 state를 함수 컴포넌트 안에서 사용할 수 있게 해준다.
import React, {useState} from 'react';

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

const Count = () => {

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
// export
export default Count;