import Image from "next/image";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { XPlatform } from "@/components/Icons";
import { ProjectCard } from "@/components/ProjectCard";
import profileImage from "@/assets/profile.png";
import tilitImage from "@/assets/tilit.png";
import codetumImage from "@/assets/codetum.png";
import contzaImage from "@/assets/contza.png";

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
              href="https://tilit.ai"
              logo={tilitImage}
            />
            <ProjectCard
              title="Codetum"
              description="Codetum is a modern software development company that develops performant applications andlightning-fast websites."
              href="https://codetum.com"
              logo={codetumImage}
            />
          </div>
        </section>
        <section>
          <h2 className="mb-3">Previous projects</h2>
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
        {/*<section>
          <h2 className="mb-2">Life is great</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "https://cdn.britannica.com/26/189726-050-7F7ECA2A/city-Croatia-Dubrovnik-Adriatic-Sea.jpg",
              "https://cdn.britannica.com/26/189726-050-7F7ECA2A/city-Croatia-Dubrovnik-Adriatic-Sea.jpg",
              "https://cdn.britannica.com/26/189726-050-7F7ECA2A/city-Croatia-Dubrovnik-Adriatic-Sea.jpg",
              "https://cdn.britannica.com/26/189726-050-7F7ECA2A/city-Croatia-Dubrovnik-Adriatic-Sea.jpg",
              "https://cdn.britannica.com/26/189726-050-7F7ECA2A/city-Croatia-Dubrovnik-Adriatic-Sea.jpg",
              "https://cdn.britannica.com/26/189726-050-7F7ECA2A/city-Croatia-Dubrovnik-Adriatic-Sea.jpg",
            ].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full aspect-square object-cover rounded-2xl"
              />
            ))}
          </div>
        </section>*/}
      </main>
    </div>
  );
};

export default Home;
