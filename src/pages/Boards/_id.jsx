//Boards detail
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/index'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'
function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{
      height: '100vh', display: 'flex',
      flexDirection: 'column'
    }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board

