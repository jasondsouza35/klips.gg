import { Avatar, Box, Container, Grid, Toolbar, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';

const Profile = () => {

    return (        
        <Container maxWidth='xl'>   
            <Grid container spacing={6} sx={{  }}>
                <Grid item >
                    <Avatar src="/broken-image.jpg" sx={{ width: 300, height: 300 }} />
                </Grid>
                <Grid item rowSpacing={1} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    {/* <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>  */}
                        <Typography 
                            variant="h1"
                            sx={{
                                display: { xs: "none", md: "flex" },
                                fontWeight: 700,
                                color: "#EA3F3F",
                                textDecoration: "none",
                            }}
                        >
                                UrineBigTrouble
                        </Typography>
                        <Box sx={{ display: 'inline-flex', paddingX: 1 }}>
                            <Typography 
                                sx={{
                                    color: "#EA3F3F",
                                }}
                            >
                                    Games on Rotation:  
                            </Typography>
                            <Typography>League of Legends, Valorant, Fortnite</Typography>
                        </Box>
                        <Box sx={{paddingX: 1}}>Trying to hit diamond 4 on league!</Box>
                    {/* </Box> */}
                </Grid>

            </Grid>
        </Container>   
    )
}

export default Profile
