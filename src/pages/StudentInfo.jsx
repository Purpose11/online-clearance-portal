import { useParams } from "react-router-dom";
const StudentInfo = () => {
  const { id } = useParams();

  return <div>student {id} info</div>;
};

export default StudentInfo;
