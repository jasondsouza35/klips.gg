import { Box, Container } from '@mui/material'
import Header from './components/Header'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <Box maxWidth= 'xl' sx={{ width: '100%' }}>
        <Header />
        <Profile />
      </Box>
      
    </>
  )
}

export default App
