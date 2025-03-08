import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={{ height: "380px", width: "519px" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/><br/>
          <Button>Project link</Button>
        </div>
      </div>
    </Col>
  )
}
