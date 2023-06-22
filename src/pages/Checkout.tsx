
import NavBar from "../components/NavBar"
import Grid from '@mui/material/Grid';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const country = [
  {
    value: 'none',
    label: 'Choose..',
  },
  {
    value: 'US',
    label: 'United States',
  },
  {
    value: 'TH',
    label: 'Thailand',
  },
  {
    value: 'JP',
    label: 'Japan',
  },
];
const state = [
  {
    value: 'none',
    label: 'Choose..',
  },
  {
    value: 'CA',
    label: 'California',
  },
  {
    value: 'BKK',
    label: 'Bangkok',
  },
  {
    value: 'TYO',
    label: 'Tokyo',
  },
];

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));




function Checkout() {
  return (
    <>
        <NavBar/>
        <h1>Checkout form</h1>
        <Grid container spacing={2}>
          <Grid item xs={9}>
          <Typography variant="h5" component="div" color="text.primary" mb={2}>
            Billing address
          </Typography>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2}>
              <TextField required fullWidth label="First name" id="fullWidth" />
              <TextField required fullWidth label="Last name" id="fullWidth" />
            </Stack>
            <TextField required InputProps={{
            startAdornment: <InputAdornment position="start">@</InputAdornment>,
          }} fullWidth label="Username" id="fullWidth" />
            <TextField fullWidth label="E-mail (Optional)" id="fullWidth" />
            <TextField required fullWidth label="Address" id="fullWidth" />
            <TextField fullWidth label="Address 2 (Optional)" id="fullWidth" />
            <Stack direction="row" spacing={1}>
                <TextField required
                  id="outlined-select-currency-native"
                  select
                  label="Country"
                  defaultValue="none"
                  SelectProps={{
                    native: true,
                  }}
                >
                  {country.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>

                <TextField required
                  id="outlined-select-currency-native"
                  select
                  label="State"
                  defaultValue="none"
                  SelectProps={{
                    native: true,
                  }}
                >
                  {state.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>

              <TextField required id="outlined-basic" label="Zip" variant="outlined" />
            </Stack>
            <Divider/>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Shipping address is the same as my billing address" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Save this information for next time" />
          </FormGroup>
          <Divider/>

          <Typography variant="h5" component="div" color="text.primary" mb={2}>
            Payment
          </Typography>
          <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel value="credit card" control={<Radio size="small"/>} label="Credit card" />
                <FormControlLabel value="debit card" control={<Radio size="small"/>} label="Debit card" />
                <FormControlLabel value="paypal" control={<Radio size="small"/>} label="Paypal" />
              </RadioGroup>
          </FormControl>
          <Stack spacing={2}>
            <Stack direction={"row"} spacing={1}>
              <TextField fullWidth label="Name on card" id="fullWidth" helperText="Full name as displayed on card"/>
              <TextField fullWidth label="Credit card number" id="fullWidth" />
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <TextField id="outlined-basic" label="Expiration" variant="outlined" />
              <TextField id="outlined-basic" label="CVV" variant="outlined" />
            </Stack>
          </Stack>
          <Divider/>
          <Button variant="contained" fullWidth>Checkout</Button>
          </Stack>
          
          
          </Grid>


          <Grid item xs={3}>
            <Stack direction="row">
                <Typography variant="h5" component="div" color="text.secondary">
                Your cart
              </Typography>
              <IconButton aria-label="cart">
              <StyledBadge badgeContent={3} color="primary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Stack>
         
            <Box sx={{ width: 300 }}>
              <Card variant="outlined">
                  <List  component="nav" aria-label="mailbox folders">
                      <ListItem> 
                        <ListItemText primary="First product" secondary="Brief description" sx={{ flexGrow: 1 }}/>
                        <Typography variant="body1" component="div">
                          $15
                        </Typography>
                      </ListItem>
                      <Divider />
                      <ListItem divider>
                        <ListItemText primary="Second product" secondary="Brief description" sx={{ flexGrow: 1 }}/>
                        <Typography variant="body1" component="div">
                          $18
                        </Typography>
                      </ListItem>
                      <ListItem >
                        <ListItemText primary="Third product" secondary="Brief description" sx={{ flexGrow: 1 }}/>
                        <Typography variant="body1" component="div">
                          $30
                        </Typography>
                      </ListItem>
                      <Divider/>
                      <ListItem >
                        <ListItemText primary="Promo code" secondary="EXAMPLECODE" />
                        <Typography variant="body1" component="div">
                          -$5
                        </Typography>
                      </ListItem>
                      <Divider/>
                      <ListItem >
                      <Typography variant="h6" sx={{ flexGrow: 1 }}>
                          Total (USD)
                      </Typography>
                      <Typography variant="h6" component="div">
                          $58
                        </Typography>
                      </ListItem>
                  </List>
              </Card>
          </Box>
          </Grid>
          
        </Grid>
    </>
  )
}

export default Checkout