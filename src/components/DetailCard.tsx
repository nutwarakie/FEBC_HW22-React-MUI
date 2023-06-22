import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

//Detail of product
const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Discord Go Nitro
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Strap rocket boosters to your setup with <br/>the Official Discord Go Nitro Keyboard
        </Typography>
        <Typography variant="h6" color="text.primary" mt={2}>
          Price : $160.00
        </Typography>
        <Typography variant="body1" color="text.primary">
          Quantity
        </Typography>
        <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
            <TextField
            id="outlined-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue="1"
            size="small"
          />
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="contained" startIcon={<ShoppingCartIcon />}><Link to={`/checkout`} className='textbtn'>Add to cart</Link></Button>
      </CardActions>
    </React.Fragment>
  );

  


function DetailCard() {
  return (
    <>
        <Box sx={{ width: 500}} mb={2}>
            <Card variant="outlined">{card}</Card>
        </Box>
    </>
  )
}

export default DetailCard