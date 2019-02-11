import React, { Component } from 'react'
import './main.css'
import Title from '../Util/Title'
import Footer from '../Util/Footer';
import GitTracker from '../Util/GitTracker';
import LinkedInTracker from '../Util/LinkedInTracker';
import TwitterTracker from '../Util/TwitterTracker';
import { Grid, Image, Progress, List } from 'semantic-ui-react'
import image from '../../assets/img3.png';

export default class Main extends Component {
  render() {
    return (
      <div>
      <div className="pusher mainBackground">
        <div className="ui raised very padded text container segment">
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
      </div>
      <Title name="My" title="Skills" />
        <div className="ui vertical px-5">
          <div className="ui middle aligned stackable grid container">
            
          <section className="welcome_area p_120 mt-3">
        	<div className="container">
        		<div className="row welcome_inner">
        			<div className="col-lg-6">
        				<div>
        					<h4 style={{fontFamily: 'Oswald'}} >About Myself</h4>
        					<h5 style={{fontFamily: 'Poppins'}} className="text-muted" >I'm passionate about technologies especially with web development. 
                    I created my first web project using html, css, javascript, php and mysql way back 2015. 
                    And since then, I was amazed of how great it is when it comes to working with code and solving logical/Business problems. 
                    It made me realize that programming is so wide and there's a lot to learn to become an expert to it. 
                    But even though it's hard, learning is great and it's what I do everyday.</h5>
                    <div className="row">
        						<div className="col-md-4">
        							<div className="wel_item">
        								<i className="lnr lnr-book"></i>
        							</div>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div className="col-lg-6">
        				<div className="tools_expert">
        					<div className="skill_main">
								<div className="skill_item">
									<h4>JavaScript - React, Node <span className="counter float-right">80%</span></h4>
									<div>
										<div>
                    <Progress percent={80} color="green" />
										</div>
									</div>
								</div>
								<div className="skill_item">
									<h4>SQL <span className="counter float-right">80%</span></h4>
									<div>
										<div>
                    <Progress percent={80} color="green" />											
										</div>
									</div>
								</div>
								<div className="skill_item">
									<h4>C# - .Net Core <span className="counter float-right">60%</span></h4>
									<div>
										<div>
                    <Progress percent={60} color="blue"/>
										</div>
									</div>
								</div>
								<div className="skill_item">
									<h4>Scrum Methodology <span className="counter float-right">85%</span></h4>
									<div>
										<div>
                    <Progress percent={85} color="green" />
										</div>
									</div>
								</div>
								<div className="skill_item">
									<h4>TypeScript - Angular 2 <span className="counter float-right">70%</span></h4>
									<div>
										<div>
                    <Progress percent={70} color="blue" />
										</div>
									</div>
								</div>
							</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>


          </div>
        </div>
            <Title name="My" title="Activity" />
        <div className="newSegment">
          <div className="ui three column grid middle aligned stackable container">
            <div className="column ">
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
        <Footer top="/" />
      </div>
    )
  }
}