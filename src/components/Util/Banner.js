import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
        <section className="jumbotron text-center">
            <div className="container">
                <h1 className="jumbotron-heading">Check 'em</h1>
                <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                    <button className="btn btn-primary mr-2">Subscribe</button>
                    <button className="btn btn-secondary my-2">Unsubscribe</button>
                </p>
            </div>
        </section>
    )
  }
}
