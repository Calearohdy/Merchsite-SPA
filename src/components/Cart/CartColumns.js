import React from 'react'

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block pb-3" >
      <div className="row">
          <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase"><u>products</u></p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase"><u>Name of Product</u></p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase"><u>Price</u></p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase"><u>Quantity</u></p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase"><u>Remove</u></p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase"><u>total</u></p>
          </div>                                        
      </div>
    </div>
  )
}
