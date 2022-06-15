import CardComponent from "../components/CardComponent"
import Container from 'react-bootstrap/Container';
import Header from "../components/Header"
import Stack from 'react-bootstrap/Stack';
function HomePage() {
 

    return (
      <>
        <Header></Header>
        <Container>
        <Stack direction="horizontal" gap={3} className="my-md-5">
        <CardComponent></CardComponent>
    </Stack>
    </Container>

      

      </>
    )
  }
  
  export default HomePage