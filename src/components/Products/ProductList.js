import React, { Component } from 'react'
import Product from './Product'
import Banner from '../Util/Banner';
import Footer from '../Util/Footer';
import Title from '../Util/Title'
import {ProductConsumer} from '../../context';
export default class ProductList extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <React.Fragment>
        <Banner />
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products"/>
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
        <Footer top="/products" />
      </React.Fragment>
    )
  }
}
