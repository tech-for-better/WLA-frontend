import React from 'react';
import ReactMarkdown from 'react-markdown';

interface CareerPath {
  color: string;
  description: string;
  icon_url: string;
  lmi_code: string;
  name: string;
  strapiId: number;
  video_url: string;
}

const CareerPathDetail: React.FC<CareerPath> = ({ path: { description, name } }) => {
  return (
    <article>
      <h2>{name}</h2>
      <ReactMarkdown source={description} />
    </article>
  );
};

export default CareerPathDetail;
