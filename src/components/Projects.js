import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";

export const Projects = () => {

    const project_gisspecialist = [
        {
            title: "A",
            description: "Potential Value of Corporate Asset Liabilities to the Government in Jakarta",
            imgUrl: projImg1,
          },
          {
            title: "B",
            description: "Storing and Utility Excavation Survey",
            imgUrl: projImg1,
          },
          {
            title: "C",
            description: "Government Asset Survey",
            imgUrl: projImg1,
          },
          {
            title: "D",
            description: "Permit Consultation for Housing",
            imgUrl: projImg1,
          },
          {
            title: "E",
            description: "City Plan Information Program",
            imgUrl: projImg1,
          },
          {
            title: "F",
            description: "3D Building Permit",
            imgUrl: projImg1,
          },
    ];

    const project_systemanalyst = [
        {
            title: "A",
            description: "Business and Building Permits Compliance Monitoring",
            imgUrl: projImg1,
          },
          {
            title: "B",
            description: "Building Permit for Micro and Small Business",
            imgUrl: projImg1,
          },
          {
            title: "C",
            description: "Building Permit Program",
            imgUrl: projImg1,
          },
          {
            title: "D",
            description: "Ease of Doing Business : Building Function Permit",
            imgUrl: projImg1,
          },
          {
            title: "E",
            description: "Ease of Doing Business : Convenience Store Permit",
            imgUrl: projImg1,
          },
          {
            title: "F",
            description: "Micro and Small Business Permit",
            imgUrl: projImg1,
          },
    ];

    const project_dataanalyst = [
        {
            title: "A",
            description: "Impact of SIKM on COVID-19 Cases and Jakarta Economic Growth",
            imgUrl: projImg1,
          },
          {
            title: "B",
            description: "Investment Potential in DKI Jakarta",
            imgUrl: projImg1,
          },
          {
            title: "C",
            description: "Potential Location Analysis of ToD Area",
            imgUrl: projImg1,
          },
          {
            title: "D",
            description: "Bike-Sharing Station Analysis",
            imgUrl: projImg1,
          },
          {
            title: "E",
            description: "Building Permit Fluctuation Dashboard",
            imgUrl: projImg1,
          },
    ];

    const project_other = [
            {
                title: "IOP Conference Series (Scopus Proceeding)",
                description: "As-built Drawing Generation of LFM Building ITB using Terrestrial Laser Scanner",
                imgUrl: projImg1,
              },
              {
                title: "IOP Conference Series (Scopus Proceeding)",
                description: "Discovering Hidden Pattern in COVID-19 Prevention through Exit-Entry Permit Letter (SIKM) System using Geospatial Analysis",
                imgUrl: projImg1,
              },
              {
                title: "Social Activity in Tanah Merah, North Jakarta",
                description: "Building Map of Tanah Merah Village",
                imgUrl: projImg1,
              },
              {
                title: "Social Activities in Dago Datar Village, Subang",
                description: "Medical Check Up and Assets Mapping",
                imgUrl: projImg1,
              },
              {
                title: "Supporting the Growth of Franchise Business",
                description: "Digital Techonology for Es Teh Manis Jumbo",
                imgUrl: projImg1,
              },
              {
                title: "Smart Data Smart Cities & 3D Geoinfo",
                description: "Participant in 7th Smart Data Smart Cities & 3D Geoinfo in Sydney, Australia.",
                imgUrl: projImg1,
              },
        ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">GIS SPECIALIST</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">SYSTEM ANALYST</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">DATA ANALYST</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">OTHERS</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        project_gisspecialist.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        project_systemanalyst.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        project_dataanalyst.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <Row>
                                    {
                                        project_other.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}