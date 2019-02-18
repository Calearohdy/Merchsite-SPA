import React, { Component } from 'react'
import Title from '../Util/Title';
import LinkedInTracker from '../Util/LinkedInTracker';
import TwitterTracker from '../Util/TwitterTracker';
import GitTracker from '../Util/GitTracker';
import {Transition} from 'semantic-ui-react';

export default class ActivityCard extends Component {
  render() {
    return (
    <Transition animation="fly up" duration={1000} transitionOnMount={true} >   
        <div className="ui padded text container segment bannerCard">
            <Title title="Activity" />
            <div className="newSegment">
                <div className="ui three column grid stackable">
                    <div className="column">
                        <GitTracker />
                            </div>
                    <div className="column">
                        <LinkedInTracker />
                    </div>
                    <div className="column">
                        <TwitterTracker />
                    </div>              
                </div>
            </div>
        </div>
    </Transition>
    )
  }
}
