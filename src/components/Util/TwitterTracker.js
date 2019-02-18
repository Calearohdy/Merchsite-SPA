import React, { Component } from 'react'
import { Card, Feed, Transition } from 'semantic-ui-react';
export default class TwitterTracker extends Component {
  render() {
    return (
      <Transition animation="browse" duration={1000} transitionOnMount={true} >
    <Card className="card">
        <Card.Content>
        <Card.Header>
            <i className="fab fa-twitter" ></i> Twitter Activity
        </Card.Header>
        </Card.Content>
        <Card.Content>
        <Feed>
            <Feed.Event>
            <Feed.Content>
                <Feed.Date content='1 day ago' />
                <Feed.Summary>
                Retweet.
                </Feed.Summary>
            </Feed.Content>
            </Feed.Event>

            <Feed.Event>
            <Feed.Content>
                <Feed.Date content='3 days ago' />
                <Feed.Summary>
                Tweeted.
                </Feed.Summary>
            </Feed.Content>
            </Feed.Event>

            <Feed.Event>
            <Feed.Content>
                <Feed.Date content='4 days ago' />
                <Feed.Summary>
                Retweet.
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
