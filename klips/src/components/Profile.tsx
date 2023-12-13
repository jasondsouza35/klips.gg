import { Avatar, Box, Container, Grid, Toolbar, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';

const ProfileHeader = () => {
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
                                fontWeight: 700,
                                color: "#EA3F3F",
                            }}
                        >
                                UrineBigTrouble
                        </Typography>
                        <Box columnGap={0.5} sx={{ display: 'inline-flex', paddingX: 1 }}>
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

const VideoCard = () => {
    return (
        <Box sx = {{m: 1}}>
            <video width={480} height={300} controls loop muted>
            <source 
              src="https://d28qrcxpk14omv.cloudfront.net/League%20of%20Legends%202022.11.17%20-%2023.15.11.09.mp4"
              type="video/mp4"
            />
             </video>
        </Box>
    )
}

const ProfileContent = () => {
    return (
        <Grid container justifyContent="space-evenly" sx={{ mt: 8, mb: 4, borderTop: 1, borderColor: '#8E8E8E'}}>
            {[...Array(9)].map((_, index) => (
                <VideoCard key={index} />
            ))}
        </Grid>
    )
}

const Profile = () => {

    return ( 
        <>
            <ProfileHeader />
            <ProfileContent />
        </>       
    )
}

export default Profile
