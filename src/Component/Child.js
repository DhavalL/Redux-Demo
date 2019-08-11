import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getData, loginData } from '../Action/action';

class Child extends Component {
  state = {
    email: '',
    password: '',
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit = () => {
    const { loginData } = this.props;
    loginData({ ...this.state });
  }
  render() {
    const { email, password } = this.state;
    const { display, value, heading } = this.props;
    return (
      <div>
        <h4>{heading}</h4>
        {display
          && <div>
            <p>token : {value}</p>
          </div>

        }
        {!display
          &&
          <div>
            email: <input
              name="email"
              type="text"
              value={email}
              onChange={this.handleChange} /><br />
            password: <input
              name="password"
              type="text"
              value={password}
              onChange={this.handleChange} /><br />
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        }
        <br /> <br />
        <button onClick={this.props.getData}> Click to get data </button>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  value: store.value
})

const mapDispatchtoProps = dispatch => ({
  storeChange: (payload) => dispatch({ type: 'CHANGE_VAL', payload }),
  getData: () => {
    return fetch('https://reqres.in/api/users?page=2').then(res => res.json()).then(res => {
      return dispatch({ type: 'CHANGE_VAL', payload: JSON.stringify(res.data) });
    })
  },
  loginData: (data) => { 
    return fetch('https://reqres.in/api/register', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(res => {
      return dispatch({ type: 'CHANGE_VAL', payload: res.error ? res.error : JSON.stringify(res.token) });
    })
  }
})

export default connect(mapStateToProps, { getData, loginData })(Child);

// to call async request without thunk,  pass mapDispatchtoProps and take dispatch from props.
// else to use thunk, use method like now on line #77 to pass functions, so thunk will override your
// dispatch and allow a function to be passed in.