import React,{Component} from 'react'
import TextBox from '../../components/inputbox'
import Button from '../../components/button'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {userName:"",password:""};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    //handler for the form input change
     handleInputChange(e){
         if(e.target.id == 'Username'){
            this.setState({userName:e.target.value})
         }else{
            this.setState({password:e.target.value})
         }
    }

    //handler for the form submit
    handleFormSubmit(e){
        
    }
    render(){
        return(
            <div className = "login-screen">
                <div className = "container">
                    <form className = "login-container">
                        <div className = "login-banner">
                            <h2>Sign-in</h2>
                        </div>
                        <div>
                            <TextBox type = "textbox" name = "Username" handleInputChange = {this.handleInputChange}/>
                            <TextBox type = "textbox" name = "Password" handleInputChange = {this.handleInputChange}/>
                        </div>
                        <div className = "login-submit">
                            <Button displayName="Submit" style="btn btn-info btn-lg" handleFormSubmit = {this.handleFormSubmit}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}