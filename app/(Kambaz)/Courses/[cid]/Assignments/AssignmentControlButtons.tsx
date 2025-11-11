import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa6";

export default function AssignmentControlButtons({
  assignmentId, 
  deleteAssignment
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => { type: string; payload: string };
}) {
  const dispatch = useDispatch();
  return (
    <div className="ms-auto">
      <FaTrash
        className="text-danger me-3 mt-1"
        onClick={() => {
          if(confirm("Are you sure you want to delete?")){
            dispatch(deleteAssignment(assignmentId));
          }
        }}
        style={{cursor: "pointer"}}
      />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
