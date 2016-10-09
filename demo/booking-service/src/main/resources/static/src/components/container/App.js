import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * @author Dave Townsend
 */
class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Booking Service"
            style={{backgroundColor: '#0C63AA'}}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={<IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
              <MenuItem><Link to="/search">Search</Link></MenuItem>
              <MenuItem><Link to="/">Home</Link></MenuItem>
            </IconMenu>
            }
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  };
}

export default App;