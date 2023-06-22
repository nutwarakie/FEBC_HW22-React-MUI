import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

function Rate() {
  return (
    <>
    <Box sx={{ width: '100%' }} mt={4}>
        <Card variant="outlined">
            <List  component="nav" aria-label="mailbox folders">
                <ListItem> 
                    <Typography variant="h6" component="div">
                        Rate this Product
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="1" control={<Radio />} label="1" />
                            <FormControlLabel value="2" control={<Radio />} label="2" />
                            <FormControlLabel value="3" control={<Radio />} label="3" />
                            <FormControlLabel value="4" control={<Radio />} label="4" />
                            <FormControlLabel value="5" control={<Radio />} label="5" />
                            <Button variant="contained" >Submit Rating</Button>
                        </RadioGroup>
                    </FormControl>
                </ListItem>
            </List>
        </Card>
    </Box>
    </>
  )
}

export default Rate