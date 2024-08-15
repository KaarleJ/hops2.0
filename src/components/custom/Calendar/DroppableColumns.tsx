"use client";

import { useDroppable } from "@dnd-kit/core";

function Droppable({
  id,
}: {
  id: string;
}) {
  const { setNodeRef } = useDroppable({
    id: id,
    data: {
      accepts: ["course"],
      data: {
        id,
      },
    }
  });

  return (
    <div ref={setNodeRef} className={`bg-secondary opacity-10 animate-pulse col-start-${id}`}>
    </div>
  );
}

export default function MultipleDroppables({ show5th }: { show5th?: boolean }) {
  const droppables = ["1", "2", "3", "4"];

  show5th && droppables.push("5");

  return (
    <div data-show={show5th} className="absolute top-0 left-0 w-full h-full hidden md:grid grid-cols-4 data-[show=true]:grid-cols-5 gap-4 px-4">
      {droppables.map((id) => (
        <Droppable id={id} key={id} />
      ))}
    </div>
  );
}
