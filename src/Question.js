import React from 'react'


function Question(props) {
const options = props.question.map(opt => {

	return <button key={opt} onClick={() => props.onSelect(opt)}>{opt}</button>

	})
		return (
			<div>
				<h2>{props.stat}</h2>
				{options}
			</div> )

		
}

export default Question;