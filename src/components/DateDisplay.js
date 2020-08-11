import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const DateDisplay = ({dateDisplay})=> {
  let dateString = dateDisplay && dateDisplay.date.split('-');
  return (<Paper className="container">
      <List>
          <ListItem>
<ListItemText>Day: {dateString[0]}</ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText>Month: {dateString[1]}</ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText>Year: {dateString[2]}</ListItemText>
      </ListItem>
      </List>
  </Paper>
)
};

DateDisplay.propTypes = {
  apiResponse: PropTypes.string
}

export default DateDisplay;