import React from 'react';
import FileViewer from '../FileViewer';
import Typography from '../lib/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Viewer.css';

const Viewer = props => {
  return (
    <div className='Viewer'>
      <div className='Flex'>
        <FontAwesomeIcon
          icon={faArrowLeft}
        />
        <Typography
          variant="title"
          tag="h4"
          modClass="Typography_SubTitle"
        >
          Правила приема
        </Typography>
      </div>
      <div>
        <FileViewer
        filePath='http://vgsha.info/attachments/priem_kom/2018/Pravila_priema_29.09.2017.pdf?version=57503' />
      </div>
    </div>
  )
};

export default Viewer;