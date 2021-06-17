

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';


export const Navbar = () => {
  return (
    <div>
    <ListItem button>
 
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
 
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
     
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

 

}