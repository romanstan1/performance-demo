
import React, {Fragment} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const styles = {
  list: {
    width: 250,
  },
  heading: {
    color: '#414b56',
    display: 'inline-block',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '48px',
  },
}

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({left: open})
  }

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <div>Some text</div>
        <Divider />
        <div>Some text</div>
      </div>
    )
    const heading = (
      <h1 className={classes.heading}>
        The Spectacle Store
      </h1>
    )

    return (
      <Fragment>
        <IconButton onClick={this.toggleDrawer(true)}>
          <MenuIcon style={{ fontSize: 32, fill:'#414b56'}}/>
        </IconButton>

        {heading}

        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
        <IconButton onClick={this.toggleDrawer(true)}>
          <ShoppingBasket style={{ fontSize: 32, fill:'#414b56'}}/>
        </IconButton>
      </Fragment>
    )
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SwipeableTemporaryDrawer)
