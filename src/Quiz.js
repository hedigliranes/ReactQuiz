import React from 'react';
import Results from './Results.js';
import Question from './Question.js';



class Quiz extends React.Component {
	questions = [
		{
			statement: 'Qual a cor do cavalo branco de napoleão ?',
			options: ['preto','branco','azul','verde']
		},
		{
			statement: 'Qual a cor do cavalo azul de napoleão ?',
			options: ['preto','branco','azul','verde']
		}
	]

	constructor(props){
		super(props)
		this.state = {
			showResults: false,
			currentOption: 0,
			answers: []

		}
	}

	next() {
		if(this.state.currentOption < this.questions.length - 1){
			this.setState({
				currentOption: this.state.currentOption + 1
			})
		}else{
			this.setState({
				showResults: true
			})
		}
	}

	selected(answer){
		const answers = [this.state.answers]
		answers[this.state.currentOption] = answer
		this.setState({
			answers
		})
	}

	render(){
		const results = this.state.showResults?<Results answers={this.state.answers}/> : null 
		return (
			<div>
				<Question
				stat = {this.questions[this.state.currentOption].statement} 
				question = {this.questions[this.state.currentOption].options} 
				onSelect = {opt => this.selected(opt) }/>
				<button onClick={ () => this.next()}>Selecionar</button>
				{results}
			</div>
		)
	}
		
}

export default Quiz;