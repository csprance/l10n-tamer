import * as React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

interface Props {
  id: number;
  name: string;
  description: string;
  total_lines: number;
  total_translation: number;
}
const ProjectListItem: React.FC<Props> = ({
  id,
  name,
  description,
  total_lines,
  total_translation,
}) => {
  return (
    <Wrapper key={id}>
      <h2>{name}</h2> <p>{description}</p>{' '}
      <p>
         {total_translation} / {total_lines}
      </p>
    </Wrapper>
  );
};

export default ProjectListItem;
