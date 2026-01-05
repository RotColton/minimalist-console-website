const downloadFile = () => {
  const url = `${process.env.REACT_APP_WEB_SERVICE}${process.env.REACT_APP_DOWNLOAD_RESUME}`;
  window.location.href = url;
};

export default downloadFile;
