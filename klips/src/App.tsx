import { Box, Container } from '@mui/material'
import Header from './components/Header'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <Box maxWidth= 'xl' sx={{ width: '100%' }}>
        <Header />
        <Profile />
        <video width={800} height={500} controls loop autoPlay muted>
            <source 
              src="https://d28qrcxpk14omv.cloudfront.net/League%20of%20Legends%202022.11.17%20-%2023.15.11.09.mp4"
              type="video/mp4"
            />
        </video>
      </Box>
      
    </>
  )
}

export default App
