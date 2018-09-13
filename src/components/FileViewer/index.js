import React from 'react';
import PropTypes from 'prop-types';
import './FileViewer.css';

const FileViewer = (props) => {
  return (
    <div className='FileViewer-Outer'>
      <object
        data={`${props.filePath}#toolbar=0`}
        type={props.fileType}
        className='FileViewer'>
        <p>Не удалось отобразить файл</p>
        <p><a href={props.filePath}>Скачать файл</a></p>
      </object>
    </div>
  );
}

FileViewer.propTypes = {
  filePath: PropTypes.string,
  fileType: PropTypes.string
}

export default FileViewer;