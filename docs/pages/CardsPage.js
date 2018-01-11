import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

const CardsPage = (props) => {
  return(
    <div className="container">
      <div className="row mt-5">
        <div className="col" style={{ maxWidth: '23rem' }}>
          <Card>
            <CardImage className="img-fluid" src="/docs/img/Photos/Others/img2.jpg" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
              <Button href="#">Button</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;