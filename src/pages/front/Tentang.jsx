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
            <div className="bg-light rounded">
                    <center><h1>I want to tell about me</h1></center>
                    <p className="pJst">Currently, I'm happy to learn Framework for creating mobile applications,
                        namely, <b>Flutter and ReactNative</b>, I'm new to ReactNative and for Flutter,
                        I've made approximately 4 applications assisted by <b>Firebase for Push Notifications</b>,
                        and I like to use <b>Spring Boot (Java Framework)</b> as the backend and this website is built using <b>ReactJS</b>.
                        <br />
                        <br />
                        I have experience with <b>PHP programming</b> language, <b>Codeigneter</b> Framework, <b>Bootstrap Css</b> for about 5 years,
                        I also have experience making 1 application using Java programming language with Springboot Framework,
                        1 application with <b>Nodejs with Express</b> Framework and have also used <b>Laravel</b>. In building a website, usually I need <b>HTML,
                            CSS and JavaScript,</b> I often also use jQuery and have also used Angular (version 1).
                        <br />
                        <br />
                        In making applications, usually a database is needed, usually I use <b>MySql or MariaDB</b>, I have also used <b>MongoDb and Redis</b>.
                        Software or tools in performing server and network needs, I use <b>Proxmox as virtual machine management</b> and in managing
                        the versions or margins of the codes that have been created as well as backups, I use <b>Git, either uploaded to Github or Gitlab</b>.
                        <br />
                        <br />
                        Most of the <b>Web applications and APIs</b> that I make, I deploy to a <b>VPS server</b> (made by Proxmox) using the <b>Centos operating system</b>,
                        I am familiar with versions 6 and 7. I've never used <b>Amazon Web Service (AWS) or Google Cloud</b> because I mostly deploy to VPS (Centos),
                        but I've taken an online study about AWS, I know little about <b>EC2 and CloudFront</b>.
                    </p>
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
                            <Col className="padingThumb" xs={6} md={2}>
                                <Image style={{ width: 200 }} src={restapi} thumbnail />
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
            </div>
            <FooterFront />
        </>
    );
}

export default Tentang;