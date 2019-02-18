import React, { Component } from 'react'
import { Card, Feed, Transition } from 'semantic-ui-react';
export default class LinkedInTracker extends Component {
    // ** TODO - integrate API to update
  render() {
    return (
      <Transition animation="browse" duration={1000} transitionOnMount={true} >        
    <Card className="card">
        <Card.Content>
        <Card.Header>
            <i className="fab fa-linkedin" ></i> LinkedIn Activity
        </Card.Header>
        </Card.Content>
        <Card.Content>
        <Feed>
            <Feed.Event>
            <Feed.Content>
                <Feed.Date content='1 day ago' />
                <Feed.Summary>
                You added Jenny Hess to your coworker group.
                </Feed.Summary>
            </Feed.Content>
            </Feed.Event>

            <Feed.Event>
            <Feed.Content>
                <Feed.Date content='3 days ago' />
                <Feed.Summary>
                You added Molly Malone as a friend.
                </Feed.Summary>
            </Feed.Content>
            </Feed.Event>

            <Feed.Event>
            <Feed.Content>
                <Feed.Date content='4 days ago' />
                <Feed.Summary>
                You added Elliot Baker to your musicians group.
                </Feed.Summary>
            </Feed.Content>
            </Feed.Event>
        </Feed>
        </Card.Content>
    </Card>
    </Transition>
    )
  }
}
