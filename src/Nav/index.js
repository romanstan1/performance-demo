import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Header = styled.div`
  background: #08167c;
  padding: 15px 10px;
  button {
    span {
      color: white;
    }
  }
`;



const MenuLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: block;
  line-height: 24px;
  outline: none;
  padding: 18px 10px;
`;


class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
    route: 'Home'
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = (e) => {
    this.setState({ anchorEl: null, route: e.target.dataset.value})
  }

  render() {
    const { anchorEl } = this.state
    return (
      <Header>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {this.state.route}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuLink onClick={this.handleClose} data-value='Home' to='/'>Home</MenuLink>
          <MenuLink onClick={this.handleClose} data-value='Plain Socks' to='/plain'>Plain Socks</MenuLink>
          <MenuLink onClick={this.handleClose} data-value='Striped Socks' to='/striped'>Striped Socks</MenuLink>
          <MenuLink onClick={this.handleClose} data-value='Basket' to='/basket'>Basket</MenuLink>

        </Menu>
      </Header>
    )
  }
}

export default SimpleMenu
