
import { React } from "react"
import './albums.css'
import { Card, Button, Row, Col } from 'react-bootstrap'

const Concerts = () => {

    return (

        <section id="concerts">

            <p className="prox-concerts">Próximos conciertos</p>

            <div className="list-concerts">
                <Row xs={1} md={2} className="g-4">

                    <Col style={{ display: 'flex', justifyContent: 'center'}}>
                        <Card className="text-center" style={{ width: '15rem', height: 'fit-content', backgroundColor: '#f1f3f4'}}>
                            <Card.Img style={{ height: '150px', width: '250px'}} variant="top" src="https://www.fulanitadetal.es/wp-content/uploads/2019/12/1-fulanita-bar-min.jpg" />
                            <Card.Body>
                                <Card.Title >Fulanita de tal</Card.Title>
                                <Card.Text >
                                    8 de Febrero 20:00H
                                </Card.Text>
                                <a href="https://www.fulanitadetal.es/fulanita-en-vivo-2/">
                                    <Button variant="danger">Comprar Entradas</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ display: 'flex', justifyContent: 'center'}}>
                        <Card className="text-center" style={{ width: '15rem', height: 'fit-content', backgroundColor: '#f1f3f4'}}>
                            <Card.Img style={{ height: '150px', width: '250px'}} variant="top" src="https://www.vayaentradas.com/files/images/crops/img6750-5-2.png" />
                            <Card.Body>
                                <Card.Title>Búho real</Card.Title>
                                <Card.Text>
                                    28 de Febrero 20:00H
                                </Card.Text>
                                <a href="http://www.buhoreal.com">
                                    <Button variant="danger">Comprar Entradas</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>


        </section>



    )
}

export default Concerts