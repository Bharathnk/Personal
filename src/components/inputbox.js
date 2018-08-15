import React,{Component} from 'react'

export default class TextBox  extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className = "group">      
                <input type = "text" id={this.props.name} onChange={this.props.handleInputChange} required/>
                <span className = "highlight"></span>
                <span className = "bar"></span>
                <label>{this.props.name}</label>
            </div>
        )
    }
}