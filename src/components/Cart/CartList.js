import React from 'react'
import CartItem from './CartItem'
import { Segment } from 'semantic-ui-react'

export default function CartList({value}) {
    const {cart} = value;

    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <Segment><CartItem key={item.id} item={item} value={value}/></Segment>
            })}
        </div>
    )
}
