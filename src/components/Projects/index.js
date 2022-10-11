import React from "react";
import "./projects.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import topStocksPic from "../../assets/topStocks-pic1.png"
import gameOn from "../../assets/gameOn.png";
import weatherDashboard from "../../assets/weatherDashboard.png";
import workDayScheduler from "../../assets/workDayScheduler.png";
import teamProfileGenerator from "../../assets/teamProfileGenerator.png";
import codeQuiz from "../../assets/codeQuiz.png";

function Projects() {
    return (
        <Container>
            <Row className="projects">
                <Col className="project-card col-lg-4 col-sm-12">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={topStocksPic} />
                    <Card.Body>
                        <Card.Title className="text-center">Top Stocks</Card.Title>
                        <Card.Text>
                        Top Stocks is a basic stock scanner where users can search for any stock they are interested in to get information and news on that stock.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                    </ListGroup>
                    <Card.Body className="text-center">
                        <Card.Link href="https://willycoxy.github.io/TopStocks/">Top Stocks</Card.Link>
                        <Card.Link href="https://github.com/MCN17/TopStocks">GitHub Repo</Card.Link>
                    </Card.Body>
                </Card>
                </Col>

                <Col className="project-card col-lg-4 col-sm-12">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={gameOn} />
                    <Card.Body>
                        <Card.Title className="text-center">Game On!</Card.Title>
                        <Card.Text>
                        Game On is a sports forum where users can express their opinions and discuss the latest news in the sports world.
                        The feature that separates Game On from regular sports forums is the Live Chat page where users can join a live chat while watching a game of their choice.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                    </ListGroup>
                    <Card.Body className="text-center">
                        <Card.Link href="https://morning-sands-74627.herokuapp.com/">Game On</Card.Link>
                        <Card.Link href="https://github.com/MCN17/GameOn">GitHub Repo</Card.Link>
                    </Card.Body>
                </Card>
                </Col>

                <Col className="project-card col-lg-4 col-sm-12">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={weatherDashboard} />
                    <Card.Body>
                        <Card.Title className="text-center">Weather Dashboard</Card.Title>
                        <Card.Text>
                        Weather Dashboard is a basic weather app that displays the current weather as well as the 5 day forecast for a city that is searched by the user. 
                        This app is perfect for anyone that might be going on a trip for the weekend or traveling to another country.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                    </ListGroup>
                    <Card.Body className="text-center">
                        <Card.Link href="https://mcn17.github.io/weather-dashboard/">Weather Dashboard</Card.Link>
                        <Card.Link href="https://github.com/MCN17/weather-dashboard">GitHub Repo</Card.Link>
                    </Card.Body>
                </Card>
                </Col>

                <Col className="project-card col-lg-4 col-sm-12">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={workDayScheduler} />
                    <Card.Body>
                        <Card.Title className="text-center">Work Day Scheduler</Card.Title>
                        <Card.Text>
                        This planner will let the user know which events are coming up in the day so they are able to prepare for each one.
                        The user will also not have to worry about accidentally closing the browser and losing the information in their planner because they are able to save each task and it will remain in the browser when it is brought back up.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                    </ListGroup>
                    <Card.Body className="text-center">
                        <Card.Link href="https://mcn17.github.io/work-day-scheduler/">Work Day Scheduler</Card.Link>
                        <Card.Link href="https://github.com/MCN17/work-day-scheduler">GitHub Repo</Card.Link>
                    </Card.Body>
                </Card>
                </Col>

                <Col className="project-card col-lg-4 col-sm-12">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={teamProfileGenerator} />
                    <Card.Body>
                        <Card.Title className="text-center">Team Profile Generator</Card.Title>
                        <Card.Text>
                        Team Profile Generator uses node.js to generate a webpage with basic information about the company's employees based on user input.
                        It's perfect for an owner who wants quick access to information about his/her employees.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                    </ListGroup>
                    <Card.Body className="text-center">
                        <Card.Link href="https://drive.google.com/file/d/1BkOUjm0eZGTNXGn33mcyrW7PM4wrZxgC/view?usp=sharing">Team Profile Generator</Card.Link>
                        <Card.Link href="https://github.com/MCN17/team-profile-generator">GitHub Repo</Card.Link>
                    </Card.Body>
                </Card>
                </Col>

                <Col className="project-card col-lg-4 col-sm-12">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={codeQuiz} />
                    <Card.Body>
                        <Card.Title className="text-center">Code Quiz</Card.Title>
                        <Card.Text>
                        To assess the knowledge a student has gained in this course so far and to help them prepare 
                        for any interviews they may have where their knowledge is tested by having to answer technical coding questions.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                    </ListGroup>
                    <Card.Body className="text-center">
                        <Card.Link href="https://mcn17.github.io/code-quiz/">Code Quiz</Card.Link>
                        <Card.Link href="https://github.com/MCN17/code-quiz">GitHub Repo</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}




export default Projects;

