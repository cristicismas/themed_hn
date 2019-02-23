import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: orangered;
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
  color: #222;

  a {
    text-decoration: none;
    color: #333;
  }

  .title {
    margin: 10px;
    font-size: 30px;
    font-weight: bold;
  }

  > nav {
    display: flex;

    > a {
      padding: 15px 10px;
      margin: 2px;
      font-size: 20px;
      transition: all 0.2s;
      border-radius: 2px;

      :hover {
        background-color: #eee;
      }
    }
  }
`;

export class Header extends Component {
  render() {
    return (
      <StyledHeader id='header'>
        <a href='#' className='title'>
          ThemedHN
        </a>
        <nav>
          <a href='#'>new</a>
          <a href='#'>more</a>
          <a href='#'>comments</a>
          <a href='#'>ask</a>
          <a href='#'>show</a>
          <a href='#'>jobs</a>
          <a href='#'>submit</a>
        </nav>
      </StyledHeader>
    );
  }
}

export default Header;
