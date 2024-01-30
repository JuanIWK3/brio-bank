import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Notes() {
  const [notes, setNotes] = useState<string[]>([]);
  const [note, setNote] = useState<string>("");

  function addNote(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setNotes((prev) => [note, ...prev]);

    setNote("");

    // scrooll to bottom
    const notesDiv = document.querySelector(".notes");
    notesDiv?.scrollTo(0, 0);
  }

  return (
    <div className="flex flex-col h-full overflow-auto max-h-full justify-between">
      <h1 className="font-bold">Notes</h1>

      <div className="flex  p-2 flex-col max-h-full overflow-auto">
        <form action="" onSubmit={(e) => addNote(e)} className="h-fit">
          <Input
            className="border-gray-300"
            placeholder="Add a note"
            value={note}
            onChange={(e) => setNote(e.currentTarget.value)}
          />
        </form>
        <div className="notes flex flex-col overflow-auto mt-4 max-h-full gap-2 h-full">
          {notes.map((note, i) => (
            <p key={i} className="px-4 py-2 bg-gray-200 w-fit rounded-lg">
              {note}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
