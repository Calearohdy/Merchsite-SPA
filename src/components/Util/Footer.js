import React from 'react'

export default function Footer(props) {
  return (
    <footer className="text-muted mt-2">
        <div className="container">
            <p className="float-right">
                <a href={props.top} className="href">Back to Top</a>
            </p>
            <p>
             © CRMerch, LLC
            </p>
        </div>
    </footer>
  )
}
// Takes a prop of the current page the user is on