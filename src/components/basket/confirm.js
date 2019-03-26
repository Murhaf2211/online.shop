import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export  class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {hasRedirected: false};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({hasRedirected: true});
    }, 5000)
  }

  componentWillUmount() {
    this.setState({hasRedirected: false});
  }

  render() {
    return (
      <>
        <h2 className="alert alert-success text-center">Thank you, Your order has been submitted you will be redirected back home in 5 secs</h2>
        {this.state.hasRedirected && <Redirect to="/" />}
      </>
    )
  }
}
