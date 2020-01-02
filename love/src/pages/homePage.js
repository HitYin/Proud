import React, { Component } from 'react';
import styled from 'styled-components';
import Fullscreen from '../components/common/Fullscreen';
import Relative from '../components/common/Relative';
import Centered from '../components/common/Center';
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  flex: auto;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;
const Message = styled.h2`
  text-align: center;
  font-weight: 200;
  color: black;
  font-size: 2.5rem;
  max-width: 1000px;
  line-height: 1.2;
  margin-bottom: 3rem;
  margin-top: 3rem;
  margin-right: 2rem;
  margin-left: 2rem;
`;
class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }
    render() {
      return (
        <Relative>
            <Fullscreen>
                {/* <Background
                    templateIndex={this.state.templateIndex}
                    template={template}
                    setCanvas={this.setCanvas}
                /> */}
                <Container horizontal>
                    1
                </Container>
            </Fullscreen>
            <Centered horizontal>
                <Message>
                    CodeSandbox is an online editor that helps you create web
                    applications, from prototype to deployment.
                </Message>
            </Centered>
        </Relative>
      );
    }
}    
export default HomePage;