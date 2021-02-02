import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      emailValid: false,
      passwordValid: false,
      password: '',
      email: '',
      rememberMe: false,
    }
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChangeEmail(e) {
    const newEmail = e.target.value;
    const reg = /^\S+@\S+\.\S+$/g;
    const isEmail = reg.test(newEmail)

    this.setState({
      email: newEmail,
      emailValid: isEmail
    })
  }

  onChangePassword(e) {
    let newPasswordValid = false;
    if (e.target.value.length >= 4) {
      newPasswordValid = true
    } else {
      newPasswordValid = false
    }
    this.setState({
      password: e.target.value,
      passwordValid: newPasswordValid
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submitClick: true})
  }

  render() {
    if (this.state.submitClick === true) {
      return (<div className="jumbotron" style= {{ fontSize : "100px",textAlign : "center" }}>
        <h1>Form submitted</h1> 
        </div> )}
        else{
          return (
            <div>
          <div className="pt-4">
            <h1 style= {{ fontSize : "50px",textAlign : "center", color: "blue"}}>login</h1>
            </div>
            <form className="pt-5">
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"
                    onChange={this.onChangeEmail}
                    className={ this.state.emailValid ? 'form-control is-valid' : 'form-control is-invalid'}/>
                       
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password"
                    onChange={this.onChangePassword}
                     className={this.state.passwordValid ? 'form-control is-valid' : 'form-control is-invalid'}/>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                  </div>
                  <button type="submit" className="btn btn-primary"
                   disabled={!this.state.emailValid || !this.state.passwordValid} 
                   onClick={this.handleSubmit}>Submit</button>
                </form>
                </div>
          )
          
        }
    
  }
}

export default App;


