import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Reviews() {
  return (
    <>
    <Box sx={{ width: '100%' }} mt={3}>
        <Card variant="outlined">
            <List  component="nav" aria-label="mailbox folders">
                <ListItem> 
                    <Typography variant="h6" component="div">
                        Reviews
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem divider>
                    <ListItemText primary="Sam" secondary="'Nice Keyboard!'" />
                </ListItem>
                <ListItem >
                    <ListItemText primary="Jellie" secondary="'I love this'" />
                </ListItem>
                <Divider/>
                <ListItem >
                    <ListItemText primary="Roy" secondary="'This is a very well designed'" />
                </ListItem>
                
            </List>
        </Card>
    </Box>
    </>
  )
}

export default Reviews
