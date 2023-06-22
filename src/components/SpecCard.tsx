import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function SpecCard() {
  return (
    <>
    <Box sx={{ width: 500 }}>
        <Card variant="outlined">
            <List  component="nav" aria-label="mailbox folders">
                <ListItem> 
                    <Typography variant="h6" component="div">
                        Specifications
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem divider>
                    <Typography variant="body1" color="text.secondary">
                        Layout: 65% (ANSI)
                    </Typography>
                </ListItem>
                <ListItem >
                    <Typography variant="body1" color="text.secondary">
                        68 keys
                    </Typography>
                </ListItem>
                <Divider/>
                <ListItem >
                    <Typography variant="body1" color="text.secondary">
                        PBT dye-sublimated keycaps
                    </Typography>
                </ListItem>
                <Divider/>
                <ListItem >
                    <Typography variant="body1" color="text.secondary">
                        Gateron Red Switches (Linear)
                    </Typography>
                </ListItem>
                <Divider/>
                <ListItem >
                    <Typography variant="body1" color="text.secondary">
                        Kailh hot-swappable switch sockets
                    </Typography>   
                </ListItem>
                <Divider/>
                <ListItem >
                    <Typography variant="body1" color="text.secondary">
                        Case material: semi-translucent ABS
                    </Typography>
                </ListItem>
                
                
            </List>
        </Card>
    </Box>
    </>
  )
}

export default SpecCard