import React, { Component } from 'react'
import { connect } from 'react-redux';

class Child extends Component {
  handleChange = (e) => {
    const { storeChange } = this.props;
    const { value } = e.target;
    // this.setState({ textValue: value });
    storeChange(value);
  }
  render() {
    const { display, value, heading } = this.props;
    return (
      <div>
        <h4>{heading}</h4>
        {display
          && <label>{value}</label>}
        {!display
          &&
          <input
            type="text"
            onChange={this.handleChange}
            value={value} />
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

const mapDispathToProps = dispatch => ({
  storeChange: (payload) => dispatch({ type: 'CHANGE_VAL', payload }),
  getData: () => {
    return fetch('https://reqres.in/api/users?page=2').then(res => res.json()).then(res => {
      return dispatch({ type: 'CHANGE_VAL', value: res.data.data });
    })
  }
})

export default connect(mapStateToProps, mapDispathToProps)(Child);