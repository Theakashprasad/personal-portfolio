import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resumeImage from "../../Assets/Projects/resume.jpeg";

function ResumeNew() {


  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="/Akashres.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <img
          src={resumeImage}
          alt="Resume Preview"
          className="w-full max-w-3xl border rounded shadow-lg"
        />
      </Container>
    </div>
  );
}

export default ResumeNew;