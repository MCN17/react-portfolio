import React from "react";
import "./projects.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

//import pictures
import retroClassics from "../../assets/retroClassics.png"
import cct from "../../assets/cct.png"
import bookList from "../../assets/bookList.png"
import topStocksPic from "../../assets/topStocks-pic2.png"
import gameOn from "../../assets/gameOn.png";
import weatherDashboard from "../../assets/weatherDashboard.png";
import workDayScheduler from "../../assets/workDayScheduler.png";
import teamProfileGenerator from "../../assets/teamProfileGenerator.png";
import codeQuiz from "../../assets/codeQuiz.png";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons/lib";


function Projects() {
    return (
        <Container>
            <Row className="projects">
            <Col className="project-card col-lg-4 col-sm-12 mt-5">
                <Card className="card-content h-100" style={{ }}>
                    <a href="https://thawing-headland-75590.herokuapp.com/" target="_blank" rel="noreferrer"><Card.Img className="project-pic" variant="top" src={retroClassics} /></a>
                    <Card.Body className="card-body">
                        <Card.Title className="text-center">Retro Classics</Card.Title>
                        <Card.Text className="card-body">
                        Retro Classics is an e-commerce web application where users can create an account and then shop for classic games from consoles such as Nintendo, Super Nintendo, N64, Playstation, and Playstation 2.
                        Members are able to save items to their shopping cart and then checkout and pay using Stripe.
                        </Card.Text>
                        <Card.Text className="card-body">
                            Technologies: HTML5, JavaScript, React, MongoDB, Redux, Stripe, Node.js, Express.js CSS, Bootstrap
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <IconContext.Provider className="github-repo" value={{ size:"3em"}}>
                                                <a  href="https://thawing-headland-75590.herokuapp.com/" target="_blank" rel="noreferrer"><Button className="live-button" variant="dark">Live App</Button>{' '}</a>
                                                <a  href="https://github.com/MCN17/retro-classics" target="_blank" rel="noreferrer"><FaGithub className="project-icons"/></a>
                        </IconContext.Provider>
                    </Card.Body>
                </Card>
                </Col>
            <Col className="project-card col-lg-4 col-sm-12 mt-5">
                <Card className="card-content h-100" style={{ }}>
                    <a href="https://damp-reef-37984.herokuapp.com/" target="_blank" rel="noreferrer"><Card.Img className="project-pic" variant="top" src={cct} /></a>
                    <Card.Body className="card-body">
                        <Card.Title className="text-center">Cap City Trotters</Card.Title>
                        <Card.Text className="card-body">
                        Cap City Trotters is a social media web application where members of the bike group can post about previous or upcoming rides.
                        Once you have created an account, you are also able to add friends and comment on each other's posts.
                        </Card.Text>
                        <Card.Text className="card-body">
                            Technologies: HTML5, JavaScript, React, MongoDB, Node.js, Express.js CSS, Material UI
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <IconContext.Provider className="github-repo" value={{ size:"3em"}}>
                                                <a  href="https://damp-reef-37984.herokuapp.com/" target="_blank" rel="noreferrer"><Button className="live-button" variant="dark">Live App</Button>{' '}</a>
                                                <a  href="https://github.com/MCN17/cct" target="_blank" rel="noreferrer"><FaGithub className="project-icons"/></a>
                        </IconContext.Provider>
                    </Card.Body>
                </Card>
                </Col>
                <Col className="project-card col-lg-4 col-sm-12 mt-5">
                <Card className="card-content h-100" style={{ }}>
                    <a href="https://mcn17.github.io/TopStocks2.0/" target="_blank" rel="noreferrer"><Card.Img className="project-pic" variant="top" src={topStocksPic} /></a>
                    <Card.Body className="card-body">
                        <Card.Title className="text-center">Top Stocks</Card.Title>
                        <Card.Text className="card-body">
                        Top Stocks is a basic stock scanner where users can search for any stock they are interested in to get information and news on that stock.
                        </Card.Text>
                        <Card.Text className="card-body">
                            Technologies: HTML5, JavaScript, CSS, Bootstrap
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <IconContext.Provider className="github-repo" value={{ size:"3em"}}>
                                                <a  href="https://mcn17.github.io/TopStocks2.0/" target="_blank" rel="noreferrer"><Button className="live-button" variant="dark">Live App</Button>{' '}</a>
                                                <a  href="https://github.com/MCN17/TopStocks" target="_blank" rel="noreferrer"><FaGithub className="project-icons"/></a>
                        </IconContext.Provider>
                    </Card.Body>
                </Card>
                </Col>
                <Col className="project-card col-lg-4 col-sm-12 mt-5">
                <Card className="card-content h-100" style={{ }}>
                    <a href="https://mcn17.github.io/book-list/" target="_blank" rel="noreferrer"><Card.Img className="project-pic" variant="top" src={bookList} /></a>
                    <Card.Body className="card-body">
                        <Card.Title className="text-center">My Book List</Card.Title>
                        <Card.Text className="card-body">
                        My Book List is a web application where users can keep track of and rate the books that they have read.
                        </Card.Text>
                        <Card.Text className="card-body">
                            Technologies: HTML5, JavaScript, CSS.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <IconContext.Provider className="github-repo" value={{ size:"3em"}}>
                                                <a  href="https://mcn17.github.io/book-list/" target="_blank" rel="noreferrer"><Button className="live-button" variant="dark">Live App</Button>{' '}</a>
                                                <a  href="https://github.com/MCN17/book-list" target="_blank" rel="noreferrer"><FaGithub className="project-icons"/></a>
                        </IconContext.Provider>
                    </Card.Body>
                </Card>
                </Col>
                <Col className="project-card col-lg-4 col-sm-12 mt-5">
                <Card className="card-content h-100" style={{ }}>
                    <a href="https://floating-gorge-96818.herokuapp.com/" target="_blank" rel="noreferrer"><Card.Img className="project-pic" variant="top" src={gameOn} /></a>
                    <Card.Body>
                        <Card.Title className="text-center">Game On!</Card.Title>
                        <Card.Text className="card-body">
                        Game On is a sports forum where users can express their opinions and discuss the latest news in the sports world.
                        </Card.Text>
                        <Card.Text className="card-body">
                            Technologies: HTML5, JavaScript, CSS, Bootstrap, Socket.io, Node.js, Express.js Handlebars.js
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <IconContext.Provider className="github-repo" value={{ size:"3em"}}>
                                            <a  href="https://floating-gorge-96818.herokuapp.com/" target="_blank" rel="noreferrer"><Button className="live-button" variant="dark">Live App</Button>{' '}</a>  
                                            <a  href="https://github.com/MCN17/GameOn" target="_blank" rel="noreferrer"><FaGithub className="project-icons"/></a>
                        </IconContext.Provider>
                    </Card.Body>
                </Card>
                </Col>
                
                <Col className="project-card col-lg-4 col-sm-12 mt-5">
                <Card className="card-content h-100" style={{ }}>
                    <a href="https://mcn17.github.io/weather-dashboard/" target="_blank" rel="noreferrer"><Card.Img className="project-pic" variant="top" src={weatherDashboard} /></a>
                    <Card.Body>
                        <Card.Title className="text-center">Weather Dashboard</Card.Title>
                        <Card.Text className="card-body">
                        Weather Dashboard is a basic weather app that displays the current weather as well as the 5 day forecast for a city that is searched by the user. 
                        This app is perfect for anyone that might be going on a trip for the weekend or traveling to another country.
                        </Card.Text>
                        <Card.Text className="card-body">
                            Technologies: HTML5, JavaScript, CSS, Bootstrap
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <IconContext.Provider className="github-repo" value={{ size:"3em"}}>
                                        <a  href="https://mcn17.github.io/weather-dashboard/" target="_blank" rel="noreferrer"><Button className="live-button" variant="dark">Live App</Button>{' '}</a>
                                        <a  href="https://github.com/MCN17/weather-dashboard" target="_blank" rel="noreferrer"><FaGithub className="project-icons"/></a>
                        </IconContext.Provider>
                    </Card.Body>
                </Card>
                </Col>
                
                <Col className="project-card col-lg-4 col-sm-12 mt-3">
                <Card className="card-content h-100" style={{ }}>
                    <a href="https://mcn17.github.io/work-day-scheduler/" target="_blank" rel="noreferrer"><Card.Img className="project-pic" variant="top" src={workDayScheduler} /></a>
                    <Card.Body>
                        <Card.Title className="text-center">Work Day Scheduler</Card.Title>
                        <Card.Text className="card-body">
                        This planner will let the user know which events are coming up in the day so they are able to prepare for each one.
                        The user will also not have to worry about accidentally closing the browser and losing the information in their planner because they are able to save each task and it will remain in the browser when it is brought back up.
                        </Card.Text>
                        <Card.Text className="card-body">
                            Technologies: HTML5, CSS, JavaScript, jQuery, Bootstrap
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <IconContext.Provider className="github-repo" value={{ size:"3em"}}>
                                    <a  href="https://mcn17.github.io/work-day-scheduler/" target="_blank" rel="noreferrer"><Button className="live-button" variant="dark">Live App</Button>{' '}</a>
                                    <a  href="https://github.com/MCN17/work-day-scheduler" target="_blank" rel="noreferrer"><FaGithub className="project-icons"/></a>
                        </IconContext.Provider>
                    </Card.Body>
                </Card>
                </Col>
                
                <Col className="project-card col-lg-4 col-sm-12 mt-3">
                <Card className="card-content h-100" style={{}}>
                    <a href="https://drive.google.com/file/d/1BkOUjm0eZGTNXGn33mcyrW7PM4wrZxgC/view?usp=sharing" target="_blank" rel="noreferrer"><Card.Img className="project-pic" variant="top" src={teamProfileGenerator} /></a>
                    <Card.Body>
                        <Card.Title className="text-center">Team Profile Generator</Card.Title>
                        <Card.Text className="card-body">
                        Team Profile Generator uses node.js to generate a webpage with basic information about the company's employees based on user input.
                        It's perfect for an owner who wants quick access to information about his/her employees.
                        </Card.Text>
                        <Card.Text className="card-body">
                            Technologies: HTML5, CSS, JavaScript, Node.js, Inquirer, Bootstrap
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <IconContext.Provider className="github-repo" value={{ size:"3em"}}>
                                <a  href="https://drive.google.com/file/d/1BkOUjm0eZGTNXGn33mcyrW7PM4wrZxgC/view?usp=sharing" target="_blank" rel="noreferrer"><Button className="live-button" variant="dark">Demo</Button>{' '}</a>
                                <a  href="https://github.com/MCN17/team-profile-generator" target="_blank" rel="noreferrer"><FaGithub className="project-icons"/></a>
                        </IconContext.Provider>
                    </Card.Body>
                </Card>
                </Col>
                
                <Col className="project-card col-lg-4 col-sm-12 mt-3">
                <Card className="card-content h-100" style={{ }}>
                    <a href="https://mcn17.github.io/code-quiz/" target="_blank" rel="noreferrer"><Card.Img className="project-pic" variant="top" src={codeQuiz} /></a>
                    <Card.Body>
                        <Card.Title className="text-center">Code Quiz</Card.Title>
                        <Card.Text className="card-body">
                        The purpose of this code quiz is to assess the knowledge a student has gained in this course so far and to help them prepare 
                        for any interviews they may have where their knowledge is tested by having to answer technical coding questions.
                        </Card.Text>
                        <Card.Text className="card-body">
                            Technologies: HTML5, CSS, JavaScript
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className="text-center">
                        <IconContext.Provider className="github-repo" value={{ size:"3em"}}>
                            <a  href="https://mcn17.github.io/code-quiz/" target="_blank" rel="noreferrer"><Button className="live-button" variant="dark">Live App</Button>{' '}</a>
                            <a  href="https://github.com/MCN17/code-quiz" target="_blank" rel="noreferrer"><FaGithub className="project-icons"/></a>
                        </IconContext.Provider>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;

