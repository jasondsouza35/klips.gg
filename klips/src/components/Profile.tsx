import { Avatar, Box, Container, Toolbar, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';

const Profile = () => {
    return (        
        <Container maxWidth='xl'>    
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Box><AdbIcon /></Box>
                <Box>hiasodfi</Box> 
            </Box>         
        </Container>   
    )
}

export default Profile
