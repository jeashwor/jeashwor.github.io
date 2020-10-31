import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    return (
        <div>
            <div className="text-center">
                <a href="/JacobAshworthResume.pdf" download>Download Link</a>
            </div>
            <div className="d-flex justify-content-center">
                <Document file="/JacobAshworthResume.pdf">
                    <Page pageNumber={1} />
                </Document>
            </div>
        </div>

    )
}

export default Resume
