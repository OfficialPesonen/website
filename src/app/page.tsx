import Image from "next/image";
import {
  Code,
  Database,
  FlaskConical,
  Frame,
  GithubIcon,
  Hammer,
  InstagramIcon,
  LayoutPanelTop,
  LinkedinIcon,
  Server,
} from "lucide-react";
import Link from "next/link";
import { XPlatform } from "@/components/Icons";
import { ProjectCard } from "@/components/ProjectCard";
import profileImage from "@/assets/profile.png";
import tilitImage from "@/assets/tilit.png";
import codetumImage from "@/assets/codetum.png";
import contzaImage from "@/assets/contza.png";
import { SkillsCard } from "@/components/SkillsCard";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 xl:p-10 space-y-8">
      <header className="max-w-xl mx-auto text-center">
        <Image
          src={profileImage}
          alt="Arttu Pesonen"
          className="w-1/3 mx-auto gradient-border rounded-full mb-4"
          priority={true}
        />
        <h1 className="mb-1">Arttu Pesonen</h1>
        <p className="mb-6">
          Passionate entrepreneur and programmer. Sworn to stay top of the development. Always learning
          something new from every project.
        </p>
        <div className="flex justify-center items-center gap-4">
          <Link
            href="https://www.instagram.com/officialpesonen"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:opacity-70"
          >
            <InstagramIcon className="w-8 h-8" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/arttupesonen/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-70"
          >
            <LinkedinIcon className="w-8 h-8" />
          </Link>
          <Link
            href="https://x.com/officialpesonen"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="hover:opacity-70"
          >
            <XPlatform className="size-7 fill-foreground" />
          </Link>
          <Link
            href="https://github.com/officialpesonen"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
            className="hover:opacity-70"
          >
            <GithubIcon className="w-8 h-8" />
          </Link>
        </div>
      </header>
      <main className="space-y-8">
        <section>
          <h2 className="mb-3">Currently working on</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard
              title="Tilit"
              description="Tilit revolutionises the way bookkeeping is done for both sides of the coin - small to mid-size businesses and their bookkeepers."
              role="Senior Full-stack Developer (2023 - Present)"
              href="https://tilit.ai"
              logo={tilitImage}
            />
            <ProjectCard
              title="Codetum"
              description="Codetum is a modern software development company that develops performant applications andlightning-fast websites."
              role="Entrepreneur (2020 - Present)"
              href="https://codetum.com"
              logo={codetumImage}
            />
          </div>
        </section>
        <section>
          <h2 className="mb-3">Side projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard
              title="Contza"
              description="Contza is a developer-first CMS platform. Add CMS with visual editing to your website only in a minute."
              href="https://contza.com/"
              logo={contzaImage}
              logoClassName="h-8"
            />
          </div>
        </section>
        <section>
          <h2 className="mb-3">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillsCard title="Languages" description="Javascript, Typescript, PHP, C#" icon={Code} />
            <SkillsCard
              title="Frameworks"
              description="React, Vue.js, Next.js, Nuxt, Laravel, React Native"
              icon={LayoutPanelTop}
            />
            <SkillsCard
              title="Databases"
              description="PostgreSQL, MySQL, MongoDB, Redis, Firestore"
              icon={Database}
            />
            <SkillsCard
              title="Cloud & DevOps"
              description="Google Cloud Platform, Self-hosting, Docker, CI/CD pipelines"
              icon={Server}
            />
            <SkillsCard title="Testing" description="Vitest, Jest, Playwright, Cypress" icon={FlaskConical} />
            <SkillsCard title="UI/UX" description="Tailwind, Shadcn, Material UI" icon={Frame} />
            <SkillsCard title="Tools" description="Git, Figma, Linear, Photoshop, CapCut" icon={Hammer} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
