// JSX를 사용하기 위해서 리엑트를 불러온다.
import React from 'react';

// User function
function User(props){
	
	return(
		<div>
			<h3>이름은 {props.userName}</h3>
		</div>
	);	
}


// 기본 값 설정
User.defaultProps = { userName : "관리자"};

// export 내보내기
// user함수를 모듈처럼 사용할 수 있게 export한다.
// 다른 파일에서 User를 불러와서(improt해서) 호출, 접근할 수 있도록 모듈화해준다.
export default User;

