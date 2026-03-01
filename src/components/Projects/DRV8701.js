import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { fetchAndParseMarkdown } from "./markdownParser";


function DRV8701() {
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetchAndParseMarkdown(
            'https://raw.githubusercontent.com/MBrahim/DRV8701/main/README.md',
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
                <div className="markdown-content">
                    {content}
                </div>
            </Container>
        </Container>
    );
}

export default DRV8701;