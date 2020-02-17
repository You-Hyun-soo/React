import React, { Component } from 'react';

class PhoneInfo extends Component {
	render(){

		const style = {
			border : '1px solid #000000',
			padding : '10px',
			margin : '10px'
		};


		return(
			<div style={style}>
				<div>{name}</div>
				<div>{phone}</div>
			</div>
			
		);
	}
}

export default PhoneInfo;