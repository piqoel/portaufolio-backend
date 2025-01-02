import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import iopImg from "../assets/img/projects/iop-publishing.png";
import sdscImg from "../assets/img/projects/sdsc-3dgeoinfo.png";
import jumboImg from "../assets/img/projects/jumbo.png";
import cimeuhmal from "../assets/img/projects/cimeuhmal.png";
import jakartaImg from "../assets/img/projects/jakarta.png";
import dpmptspImg from "../assets/img/projects/dpmptsp.png";
import sikmImg from "../assets/img/projects/sikm.png";
import iumkImg from "../assets/img/projects/iumk.png";
import imbImg from "../assets/img/projects/imb.png";
import slfImg from "../assets/img/projects/slf.png";
import bikesImg from "../assets/img/projects/bike-sharing.png";
import buildingImg from "../assets/img/projects/building-permit.png";
import buildingdbImg from "../assets/img/projects/building_permit-db.png";
import building3dImg from "../assets/img/projects/building-permit-3d.png";
import buildingmseImg from "../assets/img/projects/building-permit-mse.png";
import cityplanImg from "../assets/img/projects/city-plan.png";
import buildingfuncImg from "../assets/img/projects/buildingfunc-permit.png";
import manholeImg from "../assets/img/projects/manhole.png";
import govassetImg from "../assets/img/projects/gov-assets.png";
import convenienceImg from "../assets/img/projects/convenience-permit.png";
import mseImg from "../assets/img/projects/mse-permit.png";
import houseconImg from "../assets/img/projects/house-consult.png";
import investImg from "../assets/img/projects/invest_potent.png";
import complianceImg from "../assets/img/projects/permit-compliance.png";
import corpliabilitiesImg from "../assets/img/projects/corp-liabilities.png";
import todareaImg from "../assets/img/projects/tod-area.png";

export const Projects = () => {

    const project_gisspecialist = [
        {
            title: "Potential Value of Corporate Asset Liabilities to the Government in Jakarta",
            description: "Developed a geospatial data platform featuring interactive maps and a dashboard to analyze investment potential and assess the value of Jakarta government assets, utilizing the distribution data of integrated business land areas and corporate asset liabilities.",
            imgUrl: corpliabilitiesImg,
          },
          {
            title: "Storing and Utility Excavation Survey",
            description: "Developed a mobile survey application to collect data on utility storage and excavation locations and status, along with a dashboard and interactive map to effectively display real-time survey and permit data.",
            imgUrl: manholeImg,
          },
          {
            title: "Government Assets Survey",
            description: "Developed a survey application for government assets accessible on mobile and desktop platforms, and analyzed the results to estimate potential investment value by evaluating land and building valuations.",
            imgUrl: govassetImg,
          },
          {
            title: "Permit Consultation for Housing",
            description: "Developed an effective GIS environment using the ESRI platform (Survey123, ArcGIS Online, and ArcGIS Dashboard) for the Permit Consultation for Housing program, facilitating the validation of completeness and compliance of requirements for residential building permits.",
            imgUrl: houseconImg,
          },
          {
            title: "City Plan Information Program",
            description: "Developed an effective GIS environment for the City Plan Information program, integrating real-time data from Jakartasatu and the Jakarta National Land Agency.",
            imgUrl: cityplanImg,
          },
          {
            title: "3D Building Permit",
            description: "Developed an innovation system for implementing 3D existing building models (LOD 3) in the building permit process.",
            imgUrl: building3dImg,
          },
    ];

    const project_systemanalyst = [
        {
            title: "Business and Building Permits Compliance Monitoring",
            description: "Developed a geospatial data platform (maps and dashboard) for business permit compliance monitoring by integrating business land area, corporate asset liabilities, building, and business point data.",
            imgUrl: complianceImg,
          },
          {
            title: "Building Permit for Micro and Small Business",
            description: "Simplified the building permit process for micro and small businesses by integrating GIS technology and automation, reducing processing time to as fast as one day. Analyzed data on business owners, property ownership, and building sizes to prioritize permit assistance and improve service efficiency.",
            imgUrl: buildingmseImg,
          },
          {
            title: "Building Permit Program",
            description: "Redesigned the building permit process by simplifying the process and requirements, integrating data, and implementing 2D and 3D GIS methods, reducing permit processing time from 42 to 14 workdays and enhancing monitoring efficiency",
            imgUrl: buildingImg,
          },
          {
            title: "Ease of Doing Business : Building Function Permit",
            description: "Redesigned the building function permit process by implementing a self-assessment method and focusing on post-permit monitoring and utilizing a 3D model for more effective oversight.",
            imgUrl: buildingfuncImg,
          },
          {
            title: "Ease of Doing Business : Convenience Store Permit",
            description: "Developed an innovative business permit system by integrating convenience store and building functional permits, simplifying processes to enhance collaboration with micro and small businesses and implemented a spatial analysis system to ensure regulatory compliance for distance requirements between convenience stores.",
            imgUrl: convenienceImg,
          },
          {
            title: "Micro and Small Business Permit",
            description: "Led the development and implementation innovation of a micro and small business permit program, redesigning processes to enable one-day completion with a 'reversible process' method to support economic recovery during the COVID-19 pandemic.",
            imgUrl: mseImg,
          },
    ];

    const project_dataanalyst = [
        {
            title: "Impact of SIKM on COVID-19 Cases and Jakarta Economic Growth",
            description: "Evaluated the impact of the SIKM system on the COVID-19 Pandemic by analyzing SIKM permit data, COVID-19 cases and economic growth.",
            imgUrl: sikmImg,
          },
          {
            title: "Investment Potential in DKI Jakarta",
            description: "Explore investment possibilities through maps using land use data, land cover, land value, building use and elevation, bathymetric maps, livability index, and environment carrying capacity index.",
            imgUrl: investImg,
          },
          {
            title: "Potential Location Analysis of ToD Area",
            description: "Identified strategic locations for Transit-Oriented Development (TOD) near MRT stations, leveraging insights from land use, integrated business land area, environmental carrying capacity and livability index.",
            imgUrl: todareaImg,
          },
          {
            title: "Bike-Sharing Station Analysis",
            description: "Identified optimal locations for bike-sharing stations through an investment map, leveraging insights from land use data, tourist attractions, and public transportation usage.",
            imgUrl: bikesImg,
          },
          {
            title: "Building Permit Fluctuation Dashboard",
            description: "Developed a dashboard visualizing building permit trends from 2018 to 2022, providing insights into the progress of innovation programs to support policymakers.",
            imgUrl: buildingdbImg,
          },
    ];

    const project_other = [
            {
                title: "IOP Conference Series (Scopus Proceeding)",
                description: "As-built Drawing Generation of LFM Building ITB using Terrestrial Laser Scanner",
                imgUrl: iopImg,
              },
              {
                title: "IOP Conference Series (Scopus Proceeding)",
                description: "Discovering Hidden Pattern in COVID-19 Prevention through Exit-Entry Permit Letter (SIKM) System using Geospatial Analysis",
                imgUrl: iopImg,
              },
              {
                title: "Social Activity in Tanah Merah, North Jakarta",
                description: "Building Map of Tanah Merah Village",
                imgUrl: jakartaImg,
              },
              {
                title: "Social Activities in Dago Datar Village, Subang",
                description: "Medical Check Up and Assets Mapping",
                imgUrl: cimeuhmal,
              },
              {
                title: "Supporting the Growth of Franchise Business",
                description: "Digital Techonology for Es Teh Manis Jumbo",
                imgUrl: jumboImg,
              },
              {
                title: "Smart Data Smart Cities & 3D Geoinfo",
                description: "Participant in 7th Smart Data Smart Cities & 3D Geoinfo in Sydney, Australia.",
                imgUrl: sdscImg,
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
                        <h2>PROJECTS</h2>
                        <p>Each project in my portfolio is a testament to my dedication to innovation, technical excellence, and problem-solving. Here’s a closer look at the challenges I tackled and the solutions I delivered.</p>
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
                                <Nav.Link eventKey="fourth">OTHER PROJECTS</Nav.Link>
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