var newImage, showImg;

function loadFile(event) {
    showImg = document.getElementById('showImg');
    showImg.src = URL.createObjectURL(event.target.files[0]);

    newImage = document.createElement('img');
    newImage.src = URL.createObjectURL(event.target.files[0]);

    showImg.onload = function() {
        URL.revokeObjectURL(showImg.src); // free memory
    }
}

async function pdfDown() {
    const { jsPDF } = window.jspdf;
    var doc = new jsPDF();
    var img = new Image();
    img.src = newImage.src;
    img.onload = function() {
        doc.addImage(img, 'PNG', 10, 10, 180, 160);
        doc.save('ImgToPDF.pdf');
    };
}
