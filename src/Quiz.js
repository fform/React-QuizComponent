import React, {Component} from 'react'
export default class Quiz extends Component{
    constructor(props){
        super(props)
        this.state = {
            quiz_position: 1
        }

    }
    render(){
        return <div className="QuizQuestion">{this.state.quiz_position}</div>
    }
}