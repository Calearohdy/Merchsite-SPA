import React, { Component } from 'react'
import { Grid, Transition, Image } from 'semantic-ui-react'
import Logo from '../../assets/img3.png'

export default class MainCard extends Component {
  state = { visible: true }

  render() {
    return (
      <Transition animation="fly down" duration={1000} transitionOnMount={true} >
        <div className="ui text padded segment container bannerCard" >
        <Grid stackable>
          <Grid.Row >
            <Grid.Column textAlign='center'>
            <Image src={Logo} circular centered/>
            <div className="ui header">Hello Everybody, I am<br/> <h1>  <span className='popOut' >Caleb Rohdy</span> </h1> </div>
              <div>Experienced Junior Developer with a </div>
              <div>
               demonstrated history of working with educational-student level data. 
              </div>
              <div>
              Skilled in SQL, JavaScript (React/Redux), and QlikSense. 
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            
          </Grid.Row>
        </Grid>
        </div>
      </Transition>
    )
  }
}