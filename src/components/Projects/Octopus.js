import { useEffect, useState } from "react";
import Particle from "../Particle";
import { fetchAndParseMarkdown } from "./markdownParser";
import { Container } from "react-bootstrap";

function Octopus() {
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetchAndParseMarkdown(
            'https://raw.githubusercontent.com/MBrahim/Portfolio/main/src/Assets/Projects/Octopus/Readme.md',
            {
                header: { color: '#00FFFF', textAlign: 'left' },
                paragraph: { color: 'white', textAlign: 'left' },
            },
            setContent
        );
    }, []);

    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <div style={{position: 'relative', width: '100%', textAlign: 'center'}}>
                    <h1 style={{ margin: 0, padding: 0 }}>
                        <strong className="main-name">Project Octopus</strong>
                    </h1>
                </div>
                <div className="markdown-content">
                    {content}
                </div>
            </Container>
        </Container>
    );
}

export default Octopus;