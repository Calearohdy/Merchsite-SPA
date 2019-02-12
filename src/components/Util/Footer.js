import React from 'react'
import {Link} from 'react-router-dom';

export default function Footer({top}) {
  return (
    <footer className="text-muted mt-2">
        <div className="container">
            <p className="float-right">
                <Link to={`${top}`}>
                    Back to Top
                </Link>
            </p>
            <p>
             © CRMerch, LLC
            </p>
        </div>
    </footer>
  )
}
// Takes a prop of the current page the user is on