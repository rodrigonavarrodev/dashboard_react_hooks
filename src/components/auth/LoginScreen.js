import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";
import { useForm } from '../../hooks/useForm'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(./illustrations-login_animated.svg)',
 
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    image: 'url(./logo-ap-b.svg)',
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const LoginScreen = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

      const [ formLoginValues, handleLoginInputChange ] = useForm({
        email: '',
        password: ''
      });


      const { email, password } = formLoginValues;

      const handleLogin = ( e ) => {
        e.preventDefault();
        dispatch( startLogin(email, password) )
      }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src="./logo-ap-b.svg" className="mb-5"></img>
       
          <form className={classes.form} onSubmit={ handleLogin } noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value= { email }
              onChange= { handleLoginInputChange }
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value= { password }
              name="password"
              value= { password }
              onChange= { handleLoginInputChange }
              type="password"
              label="Password"
       
            />
    
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvidaste tu datos?
                </Link>
              </Grid>
            
            </Grid>
 
          </form>
        </div>
      </Grid>
    </Grid>
  );
}