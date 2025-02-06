//Boards detail
import Container from '@mui/material/Container'
import AppBar from '../../components/AppBar/index'
import BoardBar from './BoardBar/index'
import BoardContent from './BoardContent/index'
function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar></AppBar>
      <BoardBar></BoardBar>
      <BoardContent></BoardContent>
    </Container>
  )
}

export default Board

