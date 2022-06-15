import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { data } from './datos.json';


function CardComponent() {
  const [dato, setDatos] = useState(data);
  console.log(dato)
    return (
      <>
        {dato.map(e => (
          <Card key={e.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={e.url} />
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

        ))}

      </>
    );
  };

export default CardComponent;