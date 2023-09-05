import { useParams } from "react-router-dom";
import { getData } from "../assets/projects";
import Content from "./components/content";
export default function Home() {
  const { name } = useParams();
  const data = getData();
  const project = data.filter((item) => {
    if(item.slug == name) return item
  });
  console.log(project);
  return (
    <>
      {project[0] && (
        <Content
          title={project[0].name}
          url={project[0].url}
          description={project[0].description}
          used={project[0].tech}
        />
      )}
    </>
  );
}
