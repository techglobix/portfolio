import Rating from "@/components/tech-stacks/rating";
import { TechStackInterface } from "@/config/tech-stacks";

interface TechStacksCardProps {
  techStacks: TechStackInterface[];
}

export default function TechStacksCard({ techStacks }: TechStacksCardProps) {
  return (
    <div className="grid justify-center gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
      {techStacks.map((techStack, id) => (
        <div
          key={id}
          className="relative p-2 overflow-hidden border rounded-lg bg-background"
        >
          <div className="flex h-[230px] flex-col justify-between rounded-md p-6 sm:h-[230px]">
            <techStack.icon size={50} />
            <div className="space-y-2">
              <h3 className="font-bold">{techStack.name}</h3>
              <p className="text-sm text-muted-foreground">
                {techStack.description}
              </p>
              <Rating stars={techStack.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
