import { Team } from "@/types";

export function TeamInfo({ team }: { team: Team }) {
  return (
    <div className="flex gap-4">
      {team.members.map((member) => (
        <div
          key={member.id}
          className="flex flex-col gap-2 py-2 px-4 bg-blue-50 rounded-2xl"
        >
          <h3 className="font-bold text-md">{member.name[0]}</h3>
        </div>
      ))}
    </div>
  );
}