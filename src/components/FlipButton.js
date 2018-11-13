import React from 'react';

const FlipButton = (props) => {

	return (
		<button className="button-view" onClick={props.func}>
			Change view 
		</button>
	);

};

export default FlipButton;