document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace 'path_to_your_pdf_file.pdf' with the actual path to your PDF file
    var resumeUrl = './assets/Resume/Ansh_Resume.pdf';
    
    // Create a link element
    var link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ansh_Resume.pdf'; // Change 'your_file_name.pdf' to the desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
