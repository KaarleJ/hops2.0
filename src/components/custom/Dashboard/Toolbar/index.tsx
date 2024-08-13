import { Button } from "@/components/ui/button";
import { Move } from "lucide-react";
import AddCourseModal from "../../modals/AddCourseModal";
import { useParams } from "@/hooks/useParams";

export default function Toolbar() {
  const { setParam, search } = useParams();

  function toggleDrag() {
    const current = search.get("drag") === "true";
    setParam("drag", !current);
  }

  return (
    <div className="absolute bottom-12 right-2 flex flex-col items-center justify-between">
      <Button
        size="circle"
        variant="outline"
        className="m-2"
        onClick={toggleDrag}
      >
        <Move size={22} />
      </Button>
      <AddCourseModal />
    </div>
  );
}
