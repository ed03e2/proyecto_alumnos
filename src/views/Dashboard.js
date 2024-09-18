/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import hombre from "hombre.jpg";
import hombre1 from "Campagne.jpg";
import hombre2 from "castañeda.jpg";
import hombre3 from "GurrolaAntuna.jpg";
import hombre4 from "manzanilla.jpg";
import hombre5 from "Marlenne.png";
import hombre6 from "soto cervantes.jpg";
import hombre7 from "SotoGraciano.jpg";
import hombre8 from "IMG_20240912_164657-transformed.jpeg"
import hombre9 from "20240912_170420.png"
import hombre10 from "Herrera_Ortiz.jpg"
import hombre11 from "Leon_Quintana.png"
import hombre12 from "luna.jpeg"
import hombre13 from "ontiveros.png"
import hombre14 from "reyna.jpg"
import hombre15 from "Sanchez_Daniel.jpeg"
import hombre16 from "zaldivar.jpeg"
import hombre17 from "GonzálezHerrera.png"
// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 1</p>
                      <CardTitle tag="p">EDGAR VALLEJO</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 2</p>
                      <CardTitle tag="p">GUSTAVO CAMPAGNE</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre1} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 3</p>
                      <CardTitle tag="p">JONATHAN GURROLA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre3} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 4</p>
                      <CardTitle tag="p">MIGUEL MANZANILLA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre4} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 5</p>
                      <CardTitle tag="p">MARLENNE IBARRA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre5} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 6</p>
                      <CardTitle tag="p">ALMA CERVANTAES</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre6} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 7</p>
                      <CardTitle tag="p">VICTOR GRACIANO</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre7} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 8</p>
                      <CardTitle tag="p">DIEGO RIOS</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre8} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 9</p>
                      <CardTitle tag="p">DIEGO HERRERA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre9} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 9</p>
                      <CardTitle tag="p">DIEGO HERRERA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre9} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 10</p>
                      <CardTitle tag="p">PAOLA HERRERA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre10} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 11</p>
                      <CardTitle tag="p">IRENE QUINTANA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre11} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 12</p>
                      <CardTitle tag="p">LUIS LUNA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre12} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 13</p>
                      <CardTitle tag="p">LUIS ONTIVEROS</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre13} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 14</p>
                      <CardTitle tag="p">SAMUEL REYNA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre14} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 15</p>
                      <CardTitle tag="p">DANIEL SANCHEZ</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre15} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 16</p>
                      <CardTitle tag="p">MAURO ZALDIVAR</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre16} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 17</p>
                      <CardTitle tag="p">DIEGO GONZALES</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre17} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 10</p>
                      <CardTitle tag="p">BERNARDO RIOS</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={hombre2} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>         
        </Row>
        <Row>
          
          
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
