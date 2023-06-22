import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }} mb={10}>
        <AppBar position="absolute">
            <Toolbar>
                
                    <Typography variant="h6" component="div">
                        Keyboard Store
                    </Typography>
                    <Stack direction='row' spacing={2} ml={3}>
                        <Button color='inherit'><Link to={`/`} className='textbtn'>Home</Link></Button>
                        <Button color='inherit'><Link to={`/`} className='textbtn'> Product</Link></Button>
                        <Button color='inherit'>Contact Us</Button>
                    </Stack>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default NavBar