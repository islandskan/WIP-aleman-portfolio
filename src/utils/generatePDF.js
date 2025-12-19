const generatePDF = (elemID) => {
    const pdfElement = document.getElementById(elemID).innerHTML;
    const pdf = window.open(
        '',
        '',
        'left=0, top=0, height=500, width=500, toolbar=0, scrollbars=0, status=0'
    );
    pdf.document.write(pdfElement);
    pdf.document.close();
    pdf.print();
};

export { generatePDF };
