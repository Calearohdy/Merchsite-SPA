import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
        <section className="jumbotron text-center mainBackground">
            <div className="ui raised very padded text container segment">
                <h1 className="jumbotron-heading">Check 'em</h1>
                <p className="lead text-muted">
                Enjoy our product line-up? <br/>
                Then subscribe to our newsletter to get updates on new inventory!
                </p>
                <p>
                    <button className="ui huge primary button">
                        Subscribe <i className="right arrow icon"></i>
                    </button>
                </p>
            </div>
        </section>
    )
  }
}
