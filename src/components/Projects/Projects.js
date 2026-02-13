import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import nexus from "../../Assets/Projects/nexus.png";
import chat from "../../Assets/Projects/chat.png";
import proco from "../../Assets/Projects/proco.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nexus}
              isBlog={false}
              title="NEXUS"
description="Footwear aggregation platform that brings multiple brands into one seamless shopping experience. Built with React.js, Node.js, Express, and MongoDB. Includes product listings, secure Razorpay payments, order management, and a scalable architecture designed for future AI assistance and live tracking features."
              ghLink="https://github.com/Theakashprasad/Nexus"
              demoLink="https://nexus-ausn.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proco}
              isBlog={false}
              title="ProCo"
description="A professional call and collaboration platform built with React.js and Firebase that enables seamless real-time communication. Supports video calls, instant messaging, secure authentication, and responsive UI design for smooth virtual meetings and team collaboration."
              ghLink="https://github.com/Theakashprasad/ProCo_Frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Task Manager"
description="Web-based Task Management platform built with React.js, Node.js, and MongoDB. Allows users to create, update, track, and manage tasks efficiently with a clean and responsive interface. Supports real-time collaboration using Socket.IO with instant task synchronization across sessions and persistent data storage for seamless productivity."
              ghLink="https://github.com/Theakashprasad/taskmanager_frontend"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Hub"
description="Built a full-stack blogging platform using the MERN stack that allows users to create, edit, and manage blog posts efficiently. Implemented secure authentication, role-based access control, and dynamic content rendering with Redux for state management. Integrated RESTful APIs and MongoDB for scalable data handling, achieving smooth performance and responsive user experience across devices."
              ghLink="https://github.com/Theakashprasad/BlogHub_frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat App"
description="Built a real-time chat application using React.js, Node.js, Express, and MongoDB that enables users to send and receive instant messages seamlessly. Implemented Socket.IO for real-time communication, JWT-based authentication for secure access, and dynamic UI updates for smooth user interaction across multiple sessions."
              ghLink="https://github.com/Theakashprasad/Chat_app"
            />
          </Col>

 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
