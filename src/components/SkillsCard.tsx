import { Card } from "@/components/Card";

interface SkillsCardProps {
  title: string;
  description: string;
  icon: any;
}

export const SkillsCard = (props: SkillsCardProps) => {
  return (
    <Card className="flex items-start gap-4 p-5">
      <props.icon className="flex-shrink-0 size-9" />
      <div className="flex-1">
        <p className="text-xl font-medium mb-2">{props.title}</p>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};
