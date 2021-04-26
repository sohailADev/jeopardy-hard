import { render } from '@testing-library/react'
import React from 'react'

export default class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            loginErro:'',
            loading:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleChange(event){
    event.preventDefault();
    
}
handleSubmit(event){
    event.preventDefault();
    console.log("hi")
}
componentDidMount(){

}
componentWillUnmount(){

}


  render(){
    return(
          <div>
              <h2>Signup Form</h2>
              <form onSubmit={this.handleSubmit}>
                  <div className="form_fileds">
                  <label>username</label>
                  <input name="username"  value={this.state.username} onChange={this.handleChange}/>
                  <label > password</label>
                  <input type="password" name="password" value={this.state.value} onChange={this.handleChange} />
                  <input type="submit" value="singup" />
                  </div>
              </form>
              
          </div>
      )
  }  
}
