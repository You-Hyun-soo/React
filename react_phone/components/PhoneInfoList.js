import React, {Component} from 'react';
// 리스트를 관리하는 컴포넌트
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
	
	render(){

		// 물려받은 props 값을 저장한다.
		const { data, onRemove, onUpdate } = this.props;
		// check the render method.. unique "key" props 를 확인해라...
		// map 함수를 이용해서 data 안에 있는 데이터들을 list 라는 배열로 반환한다.
		// 각 요소를 출력해주는 PhoneInfo 컴포넌트에 데이터를 전달한다.
		const list = data.map(
			info => (<PhoneInfo key={info.id} info={info} onRemove={onRemove} onUpdate={onUpdate} />) //매개변수 info // 고유값마다 id를 가지고 있어야한다. (key를 빼고 난 후의 오류를 살펴보는 것도 좋은방법)
		);

		// data.map(function(info){
		// 	return 조건
		// })

		return(
			<div>
				{list}
			</div>
		);
	
	}
}

export default PhoneInfoList;