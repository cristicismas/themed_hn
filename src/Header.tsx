import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

class Header extends Component {
  render() {
    return (
      <StyledHeader id='header'>
        <Link to='/' className='title'>
          ThemedHN
        </Link>
        <nav>
          <Link to='/'>top</Link>
          <Link to='/news'>new</Link>
          <Link to='/ask'>ask</Link>
          <Link to='/show'>show</Link>
          <Link to='/jobs'>jobs</Link>
        </nav>
      </StyledHeader>
    );
  }
}

export default Header;
