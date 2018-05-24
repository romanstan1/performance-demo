import React from 'react';
import Button from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import Drawer from './Drawer'

const Header = styled.div`
  background: #fff;
  padding: 8px 8px;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
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
  padding: 0px 0px;
`;

const WhiteBox = styled.div`
  background: #fff;
  width: 32px;
  height: 32px;
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
        <Drawer></Drawer>
      </Header>
    )
  }
}






// {/* <div><img src={logo} alt=""/></div> */}
// {/* <WhiteBox onClick={this.handleClick} />
// <Button focusRipple={true} onClick={this.handleClick}>
// <WhiteBox onClick={this.handleClick} />
// </Button>
// <Logo width={100} height={40}/>
//
//
//
//
//
//
//
//
//
//
// <Menu
// id="simple-menu"
// anchorEl={anchorEl}
// open={Boolean(anchorEl)}
// onClose={this.handleClose}
// >
// <MenuLink onClick={this.handleClose} data-value='Home' to='/'>Home</MenuLink>
// <MenuLink onClick={this.handleClose} data-value='Plain Socks' to='/plain'>Plain Socks</MenuLink>
// <MenuLink onClick={this.handleClose} data-value='Striped Socks' to='/striped'>Striped Socks</MenuLink>
// <MenuLink onClick={this.handleClose} data-value='Basket' to='/basket'>Basket</MenuLink>
//
// </Menu>
// <WhiteBox /> */}
export default SimpleMenu
