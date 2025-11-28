// DownloadCV.js

import axios from 'axios';

const downloadFile = async () => {
  try {   
    const response = await axios.get(`${process.env.REACT_APP_WEB_SERVICE}${process.env.REACT_APP_DOWNLOAD_RESUME}`, {
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'resume.pdf');

    document.body.appendChild(link);
    link.click();

    link.parentNode.removeChild(link);
  } catch (error) {
    console.error('Error al descargar el CV:', error);
  }
};

export default downloadFile;
