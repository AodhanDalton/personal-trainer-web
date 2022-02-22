import React from "react"
import './Login.css'
const ReactCSSTG = React.addons.CSSTransitionGroup;


//login application
function App(){
    return (
      <>
      <h1>Hello</h1>
      </>
    )
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    }
    //Bindings
    this.handleSubmit = this.handleSubmit(this);
    this.handRemout = this.handRemout.bind(this);
  }
  //handle the submit method
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isVisible: false
    }, function() {
      console.log(this.state.isVisible)
    });
    return false;
  }
  //handle remount method
  handleRemout(e) {
    this.setState({
      isVisible: true
    }, function() {
      console.log(this.state.isVisible)
    });
    e.preventDefault();
  }
  render() {
    // React CSS transition declaration 
    let component = this.state.isVisible ? <Modal onSubmit={
      this.handleSubmit }
      key='modal'/> : <ModalBack onClick={ this.handleRemout}
      key='bringitback'/>;

      return <ReactCSSTG transitionName='animation' transitionAppear={true}
      transitionEnterTimeout={500} transistionEnterTimeout={500} transitionLeaveTimeout={300}>
      { component }
      </ReactCSSTG>
    }
}

//Modal: password fields
class Modal extends React.Component {
  render() {
    return <div className='Modal'>
      <Logo />
      <form onSubmit={this.props.onSubmit}>
        <Input type='text' name='username' placeholder='username'/>
        <Input type='password' name='password' placeholder='password' />
        <button>Sign in</button>
      </form>
      <a href='http://localhost:3000/'>Lost your password?</a>
    </div>
  }
}

// Generic input fields
class Input extends React.component {
  render() {
    return <div className="Input">
      <input type={ this.props.type } name={ this.props.name } placehlder={ this.props.placeholder }
      required autoComplete="false" /> 
      <label for={this.props.name} ></label>
    </div>
  }
}

//Logo class
class Logo extends React.component {
  render(){
    return <div className="Logo">
      <i className="fa fa-bug" aria-hidden="true"></i>
      <span> logo name </span>
    </div>
  }
}

//button to bring the login back
class ModalBack extends React.component {
  render(){
    return <button className='bringitback' onClick={ this.props.onClick } key={ this.props.clasName }>
      Bring back the login box
    </button>
  }
}

export default App;