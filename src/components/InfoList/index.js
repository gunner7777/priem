import React from 'react';
import PropTypes from 'prop-types';
import InfoItem from './InfoItem';
import Typography from '../lib/Typography';
import './InfoList.css';

/*
({ docs })
vo
  text
  link
spo
  text
  link
*/
const InfoList = props => {
  const { name, docs } = props.list;

  const infoList = docs.map((doc, index) => {
    let url = doc.link + '?version=' + props.version;
    return (
      <InfoItem
        key={index}
        link={url}
        getInfo={props.getFileInfo}>
        {doc.text}
      </InfoItem>
    )
  });

  return (
    <div className="InfoList">
      <Typography
        variant="title"
        tag="h4"
        modClass="Typography_SubTitle"
      >
        {name}
      </Typography>

      <div className="InfoList-List">
        {infoList}
      </div>
    </div>
  )
}

InfoList.propTypes = {
  docs: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  version: PropTypes.number,
  getFileInfo: PropTypes.func,
}

export default InfoList;