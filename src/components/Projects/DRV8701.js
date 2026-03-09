import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { fetchAndParseMarkdown } from "./markdownParser";
import ModelViewer from "../ModelViewer";

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
                <div style={{position: 'relative', width: '100%', textAlign: 'center'}}>
                    <h1 style={{ margin: 0, padding: 0 }}>
                        <strong className="main-name">DRV8701</strong>
                    </h1>
                    <h3 style={{ margin: 0, padding: 0 }}>
                        <strong style={{ color: 'white', textDecoration: 'underline' }}>3D Model</strong>
                    </h3>
                </div>
                <div className="markdown-content">
                {content}
                </div>
            </Container>
        </Container>
    );
}

export default DRV8701;

