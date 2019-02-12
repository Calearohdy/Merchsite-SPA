import React from 'react'
import CartItem from './CartItem'
import { Segment } from 'semantic-ui-react'

export default function CartList({value}) {
    const {cart} = value;

    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <Segment key={item.id} raised ><CartItem item={item} value={value}/></Segment>
            })}
        </div>
    )
}
