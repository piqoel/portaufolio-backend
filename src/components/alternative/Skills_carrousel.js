import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import qgisImg from "../assets/img/skills/qgis.png";
import postgisImg from "../assets/img/skills/postgis.png";
import mapboxImg from "../assets/img/skills/mapbox.png";
import cesiumImg from "../assets/img/skills/cesium.png";
import arcgisproImg from "../assets/img/skills/arcgis-pro.png";
import arcgisolImg from "../assets/img/skills/arcgis-online.png";
import arcgisexpImg from "../assets/img/skills/arcgis-exp.png";
import arcgisdashboardImg from "../assets/img/skills/arcgis-dashboards.png";
import fieldmapsImg from "../assets/img/skills/arcgis-field-maps.png";
import quickcaptureImg from "../assets/img/skills/arcgis-quickcapture.png";
import survey123Img from "../assets/img/skills/arcgis-survey123.png";
import mysqlImg from "../assets/img/skills/mysql.svg";
import postgreImg from "../assets/img/skills/postgresql.svg";
import pythonImg from "../assets/img/skills/python.svg";
import tableauImg from "../assets/img/skills/tableau.svg";
import excelImg from "../assets/img/skills/excel.png";
import htmlImg from "../assets/img/skills/html.png";
import cssImg from "../assets/img/skills/css.png";
import jsImg from "../assets/img/skills/javascript.png";
import reactImg from "../assets/img/skills/react.png";
import vscodeImg from "../assets/img/skills/vscode.png";
import githubImg from "../assets/img/skills/github.png";
import figmaImg from "../assets/img/skills/figma.png";
import trelloImg from "../assets/img/skills/trello.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const skills = [
        {
            category: "GIS Analytics",
            tools: [
                {
                    title: "QGIS",
                    imgUrl: qgisImg,
                },
                {
                    title: "PostGIS",
                    imgUrl: postgisImg,
                },
                {
                    title: "Mapbox",
                    imgUrl: mapboxImg,
                },
                {
                    title: "Cesium",
                    imgUrl: cesiumImg,
                },
                {
                    title: "ArcGIS Pro",
                    imgUrl: arcgisproImg,
                },
                {
                    title: "ArcGIS Online",
                    imgUrl: arcgisolImg,
                },
                {
                    title: "ArcGIS Experience",
                    imgUrl: arcgisexpImg,
                },
                {
                    title: "ArcGIS Dashboard",
                    imgUrl: arcgisdashboardImg,
                },
                {
                    title: "ArcGIS Field Maps",
                    imgUrl: fieldmapsImg,
                },
                {
                    title: "ArcGIS Quick Capture",
                    imgUrl: quickcaptureImg,
                },
                {
                    title: "ArcGIS Survey123",
                    imgUrl: survey123Img,
                },
            ],
        },
        {
            category: "Data Analytics",
            tools: [
                {
                    title: "MySQL",
                    imgUrl: mysqlImg,
                },
                {
                    title: "PostgreSQL",
                    imgUrl: postgreImg,
                },
                {
                    title: "Python",
                    imgUrl: pythonImg,
                },
                {
                    title: "Tableau",
                    imgUrl: tableauImg,
                },
                {
                    title: "Microsoft Excel",
                    imgUrl: excelImg,
                },
            ],
        },
        {
            category: "Others",
            tools: [
                {
                    title: "HTML",
                    imgUrl: htmlImg,
                },
                {
                    title: "CSS",
                    imgUrl: cssImg,
                },
                {
                    title: "Javascript",
                    imgUrl: jsImg,
                },
                {
                    title: "ReactJS",
                    imgUrl: reactImg,
                },
                {
                    title: "VS Code",
                    imgUrl: vscodeImg,
                },
                {
                    title: "Github",
                    imgUrl: githubImg,
                },
                {
                    title: "Figma",
                    imgUrl: figmaImg,
                },
                {
                    title: "Trello",
                    imgUrl: trelloImg,
                },
            ],
        },
    ];

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <h2>Skills</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>}
                    </TrackVisibility>
                        <div className="skill-bx">    
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}