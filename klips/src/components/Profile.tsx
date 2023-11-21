import { Avatar, Box, Container, Grid, Toolbar, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';

const Profile = () => {
    return (        
        <Container maxWidth='xl'>   
            <Grid container spacing={6} sx={{ justifyContent: 'center' }}>
                <Grid item >
                    <Avatar src="/broken-image.jpg" sx={{ width: 300, height: 300 }} />
                </Grid>
                <Grid item sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}> 
                        <div>UrineBigTrouble</div>
                        <div>Games on Rotation: League of Legends, Valorant, Fortnite</div>
                        <div>Trying to hit diamond 4 on league!</div>
                    </Box>
                </Grid>

            </Grid>
        </Container>   
    )
}

export default Profile
