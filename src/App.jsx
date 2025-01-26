import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import Typography from '@mui/material/Typography'
function App() {
  return (
    <>
      <div>hoangphucdev</div>
      <Typography variant="body2" color="text.secondary">Test Typo</Typography>
      <Typography>body1</Typography>
      <Button>Button</Button>
      <Button variant="contained">Hello world</Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  )
}

export default App
