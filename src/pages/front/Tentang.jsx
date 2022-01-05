/* eslint-disable react/no-danger-with-children */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, {useEffect} from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../../assets/front/tentang/own.css';

// TEMPLATES
import HeaderFront from '../../templates/front/Header';
import FooterFront from '../../templates/front/Footer';

// images
import centos from '../../assets/front/tentang/centos.png'
import codeIgniter from '../../assets/front/tentang/codeIgniter.png'
import expressjs from '../../assets/front/tentang/expressjs.png'
import firebase from '../../assets/front/tentang/firebase.png'
import flutter from '../../assets/front/tentang/flutter.png'
import git from '../../assets/front/tentang/git.png'
import github from '../../assets/front/tentang/github.png'
import gitlab from '../../assets/front/tentang/gitlab.png'
import laravel from '../../assets/front/tentang/laravel.png'
import linux from '../../assets/front/tentang/linux.png'
import mariadb from '../../assets/front/tentang/mariadb.png'
import mongodb from '../../assets/front/tentang/mongodb.png'
import mysql from '../../assets/front/tentang/mysql.png'
import nodejs from '../../assets/front/tentang/nodejs.png'
import php from '../../assets/front/tentang/php.png'
import proxmox from '../../assets/front/tentang/proxmox.png'
import reactJs from '../../assets/front/tentang/react-js.png'
import reactNative from '../../assets/front/tentang/react-native.png'
import redis from '../../assets/front/tentang/redis.png'
import springBoot from '../../assets/front/tentang/spring-boot.png'
import bootstrap from '../../assets/front/tentang/bootstrap.png'
import web from '../../assets/front/tentang/web.png'
import golang from '../../assets/front/tentang/golang.png'
import restapi from '../../assets/front/tentang/restapi.png'

import sosGithub from '../../assets/front/tentang/sosial/github.png'
import sosGitlab from '../../assets/front/tentang/sosial/gitlab.png'
import sosGuru from '../../assets/front/tentang/sosial/gurushoot.png'
import sosIg from '../../assets/front/tentang/sosial/instagram.png'
import sosYt from '../../assets/front/tentang/sosial/youtube.png'
import sosLinkedin from '../../assets/front/tentang/sosial/linkedin.png'

const Tentang = () => {

    useEffect(() => {
        document.title = "About Juri Pebrianto"
    }, []);

    return (
        <>
        <HeaderFront />
            <div className="container">
                <article className="article-post" style={{textAlign: "justify"}}>
                    Hi... Welcome to my website, the Juri Pebrianto website. I'm currently enjoying learning ReactJS, Go-Lang, and other programming-related stuff.
                    <br />
                    <br />
                    Oh ya, from 2014 until now, I have experience in the IT and software developer fields, I focus on Backend Developers with the longest experience with the PHP (Web) programming language, as I said above, I open myself up to new technologies about programming languages, databases and everything related to programming or software development.
                    <br />
                    <br />
                    I have a new experience for React-Js, React-Native, Go-Lang, by the way, this website juripebrianto.my.id is made with React-Js technology as the frontend and Go-Lang as the API and CMS and uses MongoDB as the database.
                    <br />
                    <br />
                    I've made approximately 4 applications using Flutter/Dart plus Firebase, I also made the API, I made it using Codeigneter (PHP) with a MySql database.
                    <br />
                    <br />
                    PHP and MySql are a combination that I often use to create WEB applications or APIs because these two are the ones I usually use, but I've also run projects using Spring Boot (Java), Express (NodeJs), I do the work as I wish. from the client, from the design to the programming language.
                    <br />
                    <br />
                    The databases that I use are also quite diverse depending on the client's wishes too, so far I have made applications using MySql, MongoDB, and Redis databases.
                    <br />
                    <br />
                    All applications that I make usually deploy or publish at the same time, I am familiar with cPanel/WHM and also the Centos/Linux operating system that runs on a Virtual Private Server (VPS), but I still use a VPS that is generally built using Proxmox, I haven't I've used AWS, GCP and the like, due to the habit of working where the company I currently work for already has a physical server placed in the data center.
                    <br />
                    <br />
                    In creating applications or projects, I always use GIT, either GitHub or Gitlab as a place where I and my team can work on projects together without fear of losing files or data.
                    <br />
                    <br />
                    More or less the activities or whatever I do, if I have free time I usually like to travel or attend seminars/workshops/meetups related to programming or software development.
                    <br />
                    <br />
                    Thank you for taking the time to read this article, have a nice and healthy day.
                </article>
                <hr />
                <Container>
                    <Row>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={flutter} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={reactNative} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={firebase} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={springBoot} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={php} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={codeIgniter} thumbnail />
                        </Col>
                    {/* </Row>
                    <br />
                    <br />
                    <Row> */}
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={bootstrap} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={nodejs} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={expressjs} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={laravel} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={web} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={mysql} thumbnail />
                        </Col>
                    {/* </Row>
                    <br />
                    <br />
                    <Row> */}
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={mariadb} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={mongodb} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={redis} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={proxmox} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={git} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={github} thumbnail />
                        </Col>
                    {/* </Row>
                    <br />
                    <br />
                    <Row> */}
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={restapi} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={gitlab} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={centos} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={reactJs} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={linux} thumbnail />
                        </Col>
                        <Col className="padingThumb" xs={6} md={2}>
                            <Image style={{ width: 200 }} src={golang} thumbnail />
                        </Col>
                    </Row>
                    <hr />
                    {/* SOSIAL */}
                    <Container>
                    <h5 style={{ textAlign: 'center' }}>network</h5>
                        <Row>
                            <Col md={2}></Col>

                            <Col md={8}>
                                <Row>
                                    <Col xs={2} md={2}>
                                        <a href="http://bit.ly/GitPebri" target="_blank" rel="noreferrer">
                                            <Image style={{ width: 40 }} src={sosGithub} thumbnail />
                                        </a>
                                    </Col>
                                    <Col xs={2} md={2}>
                                        <a href="http://bit.ly/GitlabPebr" target="_blank" rel="noreferrer">
                                            <Image style={{ width: 40 }} src={sosGitlab} thumbnail />
                                        </a>
                                    </Col>
                                    <Col xs={2} md={2}>
                                        <a href="http://bit.ly/GuruShoot" target="_blank" rel="noreferrer">
                                            <Image style={{ width: 40 }} src={sosGuru} thumbnail />
                                        </a>
                                    </Col>
                                    <Col xs={2} md={2}>
                                        <a href="https://bit.ly/IgPebri" target="_blank" rel="noreferrer">
                                            <Image style={{ width: 40 }} src={sosIg} thumbnail />
                                        </a>
                                    </Col>
                                    <Col xs={2} md={2}>
                                        <a href="https://bit.ly/CnlYtb" target="_blank" rel="noreferrer">
                                            <Image style={{ width: 40 }} src={sosYt} thumbnail />
                                        </a>
                                    </Col>
                                    <Col xs={2} md={2}>
                                        <a href="https://bit.ly/LinkedInPebri" target="_blank" rel="noreferrer">
                                            <Image style={{ width: 40 }} src={sosLinkedin} thumbnail />
                                        </a>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={2}></Col>
                        </Row>
                        <hr />
                        <br />
                        <br />
                    </Container>
                </Container>
            </div>
            <FooterFront />
        </>
    );
}

export default Tentang;