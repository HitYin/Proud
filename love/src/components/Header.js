import React,{ Component } from 'react';
import {
    Link
  } from "react-router-dom";
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
                    <ul>
                        <li>
                            <Link to="/index">page</Link>
                        </li>
                        <li>
                            <Link to="/record">record</Link>
                        </li>
                    </ul>
            </Container>
        )
    }
}
export default Header