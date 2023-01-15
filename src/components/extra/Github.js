import GitHubCalendar from 'react-github-calendar';
import {Row} from 'react-bootstrap';



const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="" style={{ paddingBottom: "20px" }}>
        Days I Code
      </h1>
      <GitHubCalendar
        username="valkim55"
        blockSize={15}
        blockMargin={5}
        color="#68B984"
        fontSize={16}

      />
    </Row>
  )
}

export default Github