import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Typography } from '@material-ui/core';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const CheckoutForm = (props) => {
  const [ordered, setOrdered] = useState(false);

  return (
    <>
      <Grid container spacing={3}>
        <Grid container item spacing={3} xs={12} md={6}>
          <Grid item xs={12}>
            <Typography variant='h6'>Payment Info</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='cardName'
              label='Name on card'
              fullWidth
              autoComplete='cc-name'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='cardNumber'
              label='Card number'
              fullWidth
              autoComplete='cc-number'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='expDate'
              label='Expiry date'
              fullWidth
              autoComplete='cc-exp'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='cvv'
              label='CVV'
              helperText='Last three digits on signature strip'
              fullWidth
              autoComplete='cc-csc'
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color='secondary' name='saveCard' value='yes' />
              }
              label='Remember credit card details for next time'
            />
          </Grid>
        </Grid>
        <hr />
        <Grid container item spacing={3} xs={12} md={6}>
          <Grid item xs={12}>
            <Typography variant='h6'>Billing Address</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='firstName'
              name='firstName'
              label='First name'
              fullWidth
              autoComplete='given-name'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='lastName'
              name='lastName'
              label='Last name'
              fullWidth
              autoComplete='family-name'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='address1'
              name='address1'
              label='Address line 1'
              fullWidth
              autoComplete='shipping address-line1'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='address2'
              name='address2'
              label='Address line 2'
              fullWidth
              autoComplete='shipping address-line2'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='city'
              name='city'
              label='City'
              fullWidth
              autoComplete='shipping address-level2'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='state'
              name='state'
              label='State/Province/Region'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='zip'
              name='zip'
              label='Zip / Postal code'
              fullWidth
              autoComplete='shipping postal-code'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='country'
              name='country'
              label='Country'
              fullWidth
              autoComplete='shipping country'
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color='secondary' name='saveAddress' value='yes' />
              }
              label='Use this address for payment details'
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            color='primary'
            variant='contained'
            fullWidth
            onClick={() => setOrdered(true)}
          >
            Place My Order
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={ordered}
        autoHideDuration={6000}
        onClose={() => setOrdered(false)}
      >
        <Alert onClose={() => setOrdered(false)} severity='success'>
          Your order has been recieved!
        </Alert>
      </Snackbar>
    </>
  );
};

export default CheckoutForm;