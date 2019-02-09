import React, { Component } from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class PayPalButton extends Component {
  render() {

    const onSuccess = payment => {
        this.props.clearCart();
        this.props.history.push('/')
    }

    const onCancel = data => {
    }

    const onError = err => {
    }

    let env = "sandbox";
    let currency = "USD"

    const client = {
        sandbox: process.env.REACT_APP_PP_ID, // private key - local only
        production: "your production id"
    }

        return (
            <PaypalExpressBtn 
                env={env}
                client={client}
                currency={currency}
                total={this.props.total}
                onCancel={onCancel}
                onError={onError}
                onSuccess={onSuccess}
            />
        )
  }
}
