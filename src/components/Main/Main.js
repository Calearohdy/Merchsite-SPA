import React, { Component } from 'react'
import './main.css'
import MainCard from './MainCard';
import SkillsCard from './SkillsCard';
import ActivityCard from './ActivityCard';
import { Grid } from 'semantic-ui-react'


export default class Main extends Component {

  render() {
    return (
      <div className="mainBackground">
      <div style={{margin: 'auto'}} >
				<Grid stackable>
					<Grid.Row columns={1}>
					<Grid.Column>
						<MainCard />
						<SkillsCard />
						<ActivityCard />
					</Grid.Column>								
					<Grid.Column>
					</Grid.Column>
					</Grid.Row>
				</Grid>
      </div>
      </div>
    )
  }
}
