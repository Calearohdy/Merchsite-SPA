import React, { Component } from 'react'
import { Grid, Image, List, Transition } from 'semantic-ui-react'
import image from '../../assets/img3.png';

export default class MainCard extends Component {
  state = { visible: true }

  handleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <Transition animation="fly down" duration={1000} visible={visible} transitionOnMount="true" >
        <div className="ui very padded text container segment bannerCard" onClick={() => this.handleVisibility} >
        <Grid>
            <Grid.Column width={7}>
            <Image src={image} className="rotateImg" size="massive" />
            </Grid.Column>
            <Grid.Column width={9}>
            <div className="ui header">Hello Everybody, I am<br/> <h1> Caleb Rohdy </h1> </div>
              <div>
              Experienced Junior Developer with a demonstrated history of working with educational-student level data. 
              Skilled in SQL, JavaScript (React/Redux), QlikSense. </div>
              <List>
                <List.Item>
                  <List.Icon name='users' />
                  <List.Content>Eidex Insights</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='marker' />
                  <List.Content>Grand Rapids, MI</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='mail' />
                  <List.Content>
                    <a href='mailto:rohdy.cale@gmail.com'>Rohdy.Cale@gmail.com</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='linkify' />
                  <List.Content>
                    <a href='https://www.linkedin.com/in/cale-rohdy-developer/'>LinkedIn</a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
        </Grid>
        </div>
      </Transition>
    )
  }
}