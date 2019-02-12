import React, { Component } from 'react'

export default class Banner extends Component {

    state = {
        sub: window.localStorage
    }

    handleClick = () => {  
      let myStorage = window.localStorage;

      if(myStorage.getItem('isSubbed')) {
          myStorage.removeItem('isSubbed')
          return this.setState({sub: myStorage})
      }
      
      localStorage.setItem('isSubbed','Subscribed')

      this.setState({
          sub: myStorage
      })
    }

    handleSubBanner = () => {
        // Subbed user
        if(this.state.sub.isSubbed) {
           return (
            <div className="ui raised very padded text container segment">
                <h1 className="jumbotron-heading">Glad To Have You!</h1>
                <p className="lead text-muted">
                Expect to be seeing a newsletter every few weeks. <br/>
                Keep an eye out for any special deals in your inbox!
                </p>
                <p>
                <button className="ui huge green button" onClick={() => this.handleClick()} >
                    Thank you <i className="fas fa-check"></i>
                </button>
                </p>
            </div>
           ) 
        }
        // not Subbed
        return (
            <div className="ui raised very padded text container segment">
                <h1 className="jumbotron-heading">Check 'em</h1>
                    <p className="lead text-muted">
                    Enjoy our product line-up? <br/>
                    Then subscribe to our newsletter to get updates on new inventory!
                    </p>
                    <p>
                    <button className="ui huge primary button" onClick={() => this.handleClick()} >
                    Subscribe <i className="right arrow icon"></i>
                    </button>
                </p>
            </div>
        )
    }
    

    render() {
        return (
            <section className="jumbotron text-center mainBackground">
                {this.handleSubBanner()}
            </section>
        )
    }
}
