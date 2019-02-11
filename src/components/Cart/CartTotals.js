import React from 'react'
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';
import { Segment } from 'semantic-ui-react'

export default function CartTotals({value, history}) {
    const{cartSubTotal, cartTax, cartTotal, clearCart} = value;

    return (
        <React.Fragment>
            <Segment floated='right'>
            <div className="container">
                <div className="row">

                    <div className="col-8-md">
                        <h5>
                            <span className="text-title">
                                subtotal : <strong>$ {cartSubTotal} </strong>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total : <strong>$ {cartTotal} </strong>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax : <strong>$ {cartTax} </strong>
                            </span>
                        </h5>
                    </div>
                    <div className="col-8-md pl-3">
                    <Link to="/products">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>
                                Clear Cart
                            </button>
                        </Link>
                        <PayPalButton 
                            total={cartTotal}
                            clearCart={clearCart}
                            history={history}
                        />
                    </div>
                                                         
                </div>
            </div>
            </Segment>
        </React.Fragment>
    )
}
