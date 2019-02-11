import React, { Component } from 'react'
import { Card, Feed} from 'semantic-ui-react';
import image from '../../assets/head.png'
export default class GitTracker extends Component {
    // ** TODO - integrate API to update
    render() {
        return (
        <Card raised>
            <Card.Content>
            <Card.Header>
                 <i className="fab fa-github" ></i> GitHub Activity
            </Card.Header>
            </Card.Content>
            <Card.Content>
            <Feed>
                <Feed.Event>
                <Feed.Label image={image}/>
                <Feed.Content>
                    <Feed.Date content='1 day ago' />
                    <Feed.Summary>
                    You added Jenny Hess to your coworker group.
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                <Feed.Label image={image}/>
                <Feed.Content>
                    <Feed.Date content='3 days ago' />
                    <Feed.Summary>
                    You added Molly Malone as a friend.
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                <Feed.Label image={image} />
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
        )
    }
}
