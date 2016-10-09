import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { Link } from 'react-router';

/**
 * @author Dave Townsend
 */
class Home extends Component {

  render() {
    return (
      <div>
        <Card style={styles.card}>
          <CardHeader
            title="Booking Service"
            titleStyle={{fontSize: '15pt', color: '#FFF', marginTop: 10}}
            style={{backgroundColor: '#6CB8F0', height: 50, paddingTop: 2}}
          />
          />
          <CardText style={styles.text}>
            <h2 style={{color: '#333'}}>Welcome to the Booking Service</h2>
            <div><Link to="/search"><b>Search for bookings</b><ActionSearch /></Link></div>
          </CardText>
        </Card>
      </div>
    )
  }
}

const styles = {
  card: {
    width: "40%",
    height: "100%",
    margin: '100px 0px 0px 500px',
    padding: "0px",
  },
  text: {
    height: '200px'
  }
};

export default Home;
