import React, { Component } from 'react'
import { Transition, Progress } from 'semantic-ui-react'
import Title from '../Util/Title';

export default class SkillsCard extends Component {
  state = { visible: true }

  render() {
    const { visible } = this.state
    return (
      <Transition animation="fly right" duration={1000} visible={visible} transitionOnMount={true} >
        <div className="ui padded text container segment bannerCard" >
        <div className='float-right text-muted'>*Proficiency</div>
        <Title title="Skills" />
        <div>
            <div className="tools_expert">
                <div className="skill_main">
                    <div className="skill_item">
                        <h4>JavaScript - React, Node <span className="counter float-right">80%</span></h4>
                        <div>
                            <div>
        <Progress percent={80} color="green" active/>
                            </div>
                        </div>
                    </div>
                    <div className="skill_item">
                        <h4>SQL <span className="counter float-right">80%</span></h4>
                        <div>
                            <div>
        <Progress percent={80} color="green" active/>											
                            </div>
                        </div>
                    </div>
                    <div className="skill_item">
                        <h4>C# - .Net Core <span className="counter float-right">60%</span></h4>
                        <div>
                            <div>
        <Progress percent={60} color="blue" active/>
                            </div>
                        </div>
                    </div>
                    <div className="skill_item">
                        <h4>Scrum Methodology <span className="counter float-right">85%</span></h4>
                        <div>
                            <div>
        <Progress percent={85} color="green" active/>
                            </div>
                        </div>
                    </div>
                    <div className="skill_item">
                        <h4>TypeScript - Angular 2 <span className="counter float-right">70%</span></h4>
                        <div>
                            <div>
        <Progress percent={70} color="blue" active/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </Transition>
    )
  }
}