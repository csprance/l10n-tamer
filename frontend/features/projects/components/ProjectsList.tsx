import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useThrottle } from 'react-use';

import useNotifications from '@/features/notifications/useNotifications';
import ProjectListItem from '@/features/projects/components/ProjectListItem';
import {useAllProjectsListQuery} from "@/graphql/graphql";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  padding: 25px;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

interface Props {}
const ProjectsList: React.FC<Props> = ({}) => {
  const { addError } = useNotifications();
  const [searchText, setSearchText] = React.useState('');
  const throttledSearchText = useThrottle(searchText, 3333);

  const { data, loading, error } = useAllProjectsListQuery({
    variables: {
      name_regex: throttledSearchText.length > 0 ? throttledSearchText : '.*',
    },
  });

  if (error) {
    addError(error.stack as string);
  }
  return (
    <Container>
      <Wrapper>
        <TextField
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          fullWidth
        />

        {loading && <div>Loading...</div>}

        {data &&
          data.project.map((project) => (
            <ProjectListItem
              key={project.id}
              id={project.id}
              total_lines={project.lines_aggregate.aggregate?.count!}
              total_translation={project.translations_aggregate.aggregate?.count!}
              name={project.name}
              description={project.description}
            />
          ))}
      </Wrapper>
    </Container>
  );
};

export default ProjectsList;
