const downloadFile = () => {
  window.open(
    `${process.env.REACT_APP_WEB_SERVICE}${process.env.REACT_APP_DOWNLOAD_RESUME}`,
    '_blank'
  );
};

export default downloadFile;
