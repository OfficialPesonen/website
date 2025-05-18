import Link from "next/link";
import { Card } from "@/components/Card";
import Image, { ImageProps } from "next/image";
import { cn } from "@/utils/tailwind";

interface ProjectCardProps {
  title: string;
  description: string;
  role?: string;
  href: string;
  logo: ImageProps["src"];
  logoClassName?: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Link href={props.href} target="_blank" rel="noreferrer">
      <Card className="p-5 hover:opacity-85">
        <Image
          src={props.logo}
          alt={`${props.title} logo`}
          className={cn("h-7 w-auto mb-3", props.logoClassName)}
        />
        {props.role && <p className="text-muted mb-2">{props.role}</p>}
        <p>{props.description}</p>
      </Card>
    </Link>
  );
};
