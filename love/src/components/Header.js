import React,{ Component } from 'react';
import styled from 'styled-components'
const Container = styled.div`
  width: 100%;
  height: 64px;
  background:gray;
`;

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            data() {
                return {
                    
                }
            },
        }
    }
    render(){
        return(
            <Container>
                
            </Container>
        )
    }
}
export default Header