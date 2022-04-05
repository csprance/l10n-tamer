import styled from '@emotion/styled';
import Link from 'next/link';
import * as React from 'react';

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
  slug: string;
}
const ProjectListItem: React.FC<Props> = ({
  id,
  name,
  description,
  total_lines,
  total_translation,
  slug,
}) => {
  return (
    <Wrapper key={id}>
      <Link passHref href={`/project/${slug}`}>
        <a>
          <h2>{name}</h2> <p>{description}</p>{' '}
          <p>
            {total_translation} / {total_lines}
          </p>
        </a>
      </Link>
    </Wrapper>
  );
};

export default ProjectListItem;
