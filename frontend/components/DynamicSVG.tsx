import BrokenImage from '@mui/icons-material/BrokenImage';
import * as React from 'react';

interface Props {
  // a string making up an SVG
  svg: string;
}
const DynamicSVG: React.FC<Props> = ({ svg }) => {
  return svg.length > 0 ? (
    <div
      id="svg-preview"
      style={{ width: '32px', height: '32px' }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  ) : (
    <div id="svg-preview" style={{ width: '32px', height: '32px' }}>
      <BrokenImage sx={{ opacity: 0.25 }} />
    </div>
  );
};

export default DynamicSVG;
