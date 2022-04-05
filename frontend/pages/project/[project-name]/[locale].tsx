import { NextPage } from 'next';
import {useRouter} from "next/router";

interface Props {}
const ProjectLocale: NextPage<Props> = ({}) => {
  const {query} = useRouter();

  return <div>{query.locale}</div>;
};

export default ProjectLocale;
