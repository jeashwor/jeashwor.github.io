import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// import PDF from "./JacobAshworthResume.pdf";

function Resume() {
    return (
        <div>
            <Document file="/JacobAshworthResume.pdf">
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}

export default Resume
