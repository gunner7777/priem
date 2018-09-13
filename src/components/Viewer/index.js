import React from 'react';
import FileViewer from '../FileViewer';
import Typography from '../lib/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Viewer.css';

const Viewer = props => {
  return (
    <div className='Viewer'>
      <div className='Viewer-Header Flex Flex_AiC'>
        <FontAwesomeIcon
          className='Viewer-Icon'
          icon={faArrowLeft}
          onClick={props.goBack}
        />
        <Typography
          variant='title'
          tag='h4'
          modClass='Typography_SubTitle Typography_NoMargin'
        >
          {props.name}
        </Typography>
      </div>
      <div>
        <FileViewer
          filePath={props.path}
          fileType={props.type} />
      </div>
    </div>
  )
};

export default Viewer;