// JSX를 사용하기 위해서 리엑트를 불러온다.
import React, {Component} from 'react';

// User function
// v16.8 (2018) - react hooks (함수형)
// class fields (클래스형)
/*function User(props){
	
	return(
		<div>
			<h3>이름은 {props.userName}</h3>
		</div>
	);	
}
*/
class User extends Component {
	render(){
		return(

			// hook : (props.userName)
			// class : (this.props.userName)
			// 클래스형 컴포넌트에서는 부모 컴포넌트로부터 물려받은 값을 'this.props.키'로 접근한다.
			<div>
				<h3>이름은 {this.props.userName}</h3>
			</div>
		);
	};
};

// 기본 값 설정
// User.defaultProps = { userName : "관리자"};

// export 내보내기
// user함수를 모듈처럼 사용할 수 있게 export한다.
// 다른 파일에서 User를 불러와서(improt해서) 호출, 접근할 수 있도록 모듈화해준다.
export default User;

