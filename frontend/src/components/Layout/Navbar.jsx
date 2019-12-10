import React from 'react';
import {Link} from 'react-router-dom';
/* import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'; */

const Navbar = (props) => {
  const { children, value, index, ...other } = props;

  /*   return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }
  
  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={event => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }; */

  return (

      <nav className="nav-wrapper deep-purple black">
      
          <div className="container">
          <Link to="/" className="brand-logo">IP2Geo</Link>
          {/* <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li 
          </ul> */} 
        </div>
      </nav>
     
  
    /*  <div className={classes.root}>
       <AppBar position="static">
         <Tabs
           variant="fullWidth"
           value={value}
           onChange={handleChange}
           aria-label="nav tabs example"
         >
           <LinkTab label="Page One" href="/drafts" {...a11yProps(0)} />
           <LinkTab label="Page Two" href="/trash" {...a11yProps(1)} />
           <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} />
         </Tabs>
       </AppBar>
       <TabPanel value={value} index={0}>
         Page One
       </TabPanel>
       <TabPanel value={value} index={1}>
         Page Two
       </TabPanel>
       <TabPanel value={value} index={2}>
         Page Three
       </TabPanel>
     </div> 
   );*/
  )
}

export default Navbar;
