// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';

// const generatePDF = (elemID) => {
//     const pdfElement = document.getElementById(elemID);
//     html2canvas(pdfElement, {
//         onrendered: (canvas) => {
//             const pdf = new jsPDF('p', 'pt', 'letter');
//             for (let i = 0; i <= pdfElement.clientHeight / 980; i++) {
//                 let srcImg = canvas;
//                 let sX = 0;
//                 let sY = 980 * i; // start 980 pixels down for every new page
//                 let sWidth = 900;
//                 let sHeight = 980;
//                 let dX = 0;
//                 let dY = 0;
//                 let dWidth = 900;
//                 let dHeight = 980;
//                 window.onePageCanvas = document.createElement('canvas');
//                 onePageCanvas.setAttribute('width', 900);
//                 onePageCanvas.setAttribute('height', 980);
//                 const ctx = onePageCanvas.getContext('2d');
//                 ctx.drawImage(
//                     srcImg,
//                     sX,
//                     sY,
//                     sWidth,
//                     sHeight,
//                     dX,
//                     dY,
//                     dWidth,
//                     dHeight
//                 );
//                 const canvasDataURL = onePageCanvas.toDataURL('image/png', 1.0);
//                 const width = onePageCanvas.width;
//                 const height = onePageCanvas.clientHeight;
//                 if (i > 0) {
//                     pdf.addPage(612, 791); //8.5" x 11" in pts (in*72)
//                 }
//                 pdf.setPage(i + 1);
//                 pdf.addImage(
//                     canvasDataURL,
//                     'PNG',
//                     20,
//                     40,
//                     width * 0.62,
//                     height * 0.62
//                 );
//             }
//             pdf.save('Test.pdf');
//         },
//     });
// };

// const generatePDF = (elemID) => {
//     const pdfElement = document.getElementById(elemID);
//     html2canvas(pdfElement).then((canvas) => {
//         let dataURL = canvas.toDataURL('image/png');
//         const pdf = new jsPDF();
//         const imgProps = pdf.getImageProperties(dataURL);
//         const pdfWidth = imgProps.width;
//         const pdfHeight = imgProps.height;
//         pdf.addImage(dataURL, 'PNG', 0, 0, pdfWidth, pdfHeight);
//         pdf.save('madeleine_aleman_cv.pdf');
//     });
// };

const generatePDF = (elemID) => {
    const pdfElement = document.getElementById(elemID).innerHTML;
    // console.log(pdfElement);
    const pdf = window.open(
        '',
        '',
        'left=0, top=0, height=500, width=500, toolbar=0, scrollbars=0, status=0'
    );
    pdf.document.write(pdfElement);
    pdf.document.close();
    pdf.print();
};

// const generatePDF = (elemID) => {
//     const doc = new jsPDF({
//         unit: 'pt',
//         format: 'a4',
//         orientation: 'portrait',
//     });
//     doc.setFontSize(16);
//     const pdfElement = document.getElementById(elemID);
//     doc.html(pdfElement, {
//         callback: (pdf) => {
//             pdf.save('madeleine_aleman_cv.pdf');
//         },
//         margin: 32,
//         autoPaging: 'text',
//     });
// };

export { generatePDF };
