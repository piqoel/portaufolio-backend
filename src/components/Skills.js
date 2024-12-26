import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import qgisImg from "../assets/img/skills/qgis.png";
import postgisImg from "../assets/img/skills/postgis.png";
import mapboxImg from "../assets/img/skills/mapbox-2.svg";
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
import tableauImg from "../assets/img/skills/tableau-software.svg";
import excelImg from "../assets/img/skills/excel.png";
import spssImg from "../assets/img/skills/spss.png";
import htmlImg from "../assets/img/skills/html.png";
import cssImg from "../assets/img/skills/css.png";
import jsImg from "../assets/img/skills/javascript.png";
import reactImg from "../assets/img/skills/react.png";
import vscodeImg from "../assets/img/skills/vscode.png";
import githubImg from "../assets/img/skills/github.png";
import figmaImg from "../assets/img/skills/figma.png";
import trelloImg from "../assets/img/skills/trello.png";
import lumionImg from "../assets/img/skills/lumion.png";
import maptekImg from "../assets/img/skills/maptek.svg";
import magnetcollageImg from "../assets/img/skills/magnet-collage.png";
import revitImg from "../assets/img/skills/revit.png";
import cycloneImg from "../assets/img/skills/cyclone.png";
import canvaImg from "../assets/img/skills/canva.png";


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
            category: "GIS Specialist",
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
                    title: "Field Maps",
                    imgUrl: fieldmapsImg,
                },
                {
                    title: "Quick Capture",
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
                {
                    title: "SPSS",
                    imgUrl: spssImg,
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
                {
                    title: "Canva",
                    imgUrl: canvaImg,
                },
                // {
                //     title: "Lumion",
                //     imgUrl: lumionImg,
                // },
                // {
                //     title: "I-Site Studio",
                //     imgUrl: maptekImg,
                // },
                // {
                //     title: "Magnet Collage",
                //     imgUrl: magnetcollageImg,
                // },
                // {
                //     title: "Revit",
                //     imgUrl: revitImg,
                // },
                // {
                //     title: "Cyclone",
                //     imgUrl: cycloneImg,
                // },
            ],
        },
    ];

    return (
        <section className="skill" id="skills">
            <div className="container">
                <TrackVisibility>
                    {({isVisible}) =>
                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                    <h2>SKILLS</h2>
                    <p>Proficient in conducting advanced spatial analysis, managing geospatial data, and creating interactive dashboards. Skilled in leveraging data analytics for visualization, predictive modeling, and process optimization. Experienced in building intuitive web applications, integrating development tools, and enhancing user experiences. Adept at simplifying workflows and improving project outcomes through effective collaboration and design strategies.</p>
                    </div>}
                </TrackVisibility>
                <div className="skills-columns">
                    {skills.map((category) => (
                        <div key={category.category} className="skills-column">
                            <h3 className="skills-category-title">{category.category}</h3>
                            <div className="skills-tools">
                                {category.tools.map((tool) => (
                                    <div key={tool.title} className="tool-card">
                                        <img src={tool.imgUrl} alt={tool.title} className="tool-image" />
                                        <h4 className="tool-title">{tool.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}