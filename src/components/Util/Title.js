import React from 'react'

export default function Title({name, title}) {
  return (
    <div>
      <div className="className">
          <div className="col-10 mx-auto my-4 text-center text-title pt-5">
              <h1 className="text-capitalize font-weight-bold">
                  {name} <strong className="popOut">{title}</strong>
              </h1>
              <hr />
          </div>
      </div>
    </div>
  )
}
