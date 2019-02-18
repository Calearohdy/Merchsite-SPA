import React, { Component } from 'react'
import { Card, Feed, Transition } from 'semantic-ui-react';

export default class GitTracker extends Component {
    // ** TODO - integrate API to update
    render() {
        return (
      <Transition animation="browse" duration={1000} transitionOnMount={true} >            
        <Card className="card" >
            <Card.Content>
            <Card.Header>
                 <i className="fab fa-github" ></i> GitHub Activity
            </Card.Header>
            </Card.Content>
            <Card.Content>
            <Feed>
                <Feed.Event>
                <Feed.Content>
                    <Feed.Date content='1 day ago' />
                    <Feed.Summary>
                    Pull Request for bookmarkFeature.
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                <Feed.Content>
                    <Feed.Date content='3 days ago' />
                    <Feed.Summary>
                    Commit.
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                <Feed.Content>
                    <Feed.Date content='4 days ago' />
                    <Feed.Summary>
                    Created a new Repo.
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
