import Image from "next/image";
import profileImage from "@/app/profile.png";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="max-w-xl mx-auto p-4 md:p-8 xl:p-10">
      <header className="text-center py-3">
        <Image
          src={profileImage}
          alt="Arttu Pesonen"
          className="w-1/3 mx-auto rounded-full mb-4 border-4 border-purple-600"
        />
        <h1 className="text-2xl font-medium">Arttu Pesonen</h1>
        <p className="opacity-80 mb-3">Programmer | Entrepreneur</p>
        <p className="mb-6">
          I am an entrepreneur and a programmer, sworn to stay top of the development. Learning something new
          from every project.
        </p>
        <div className="flex justify-center items-center gap-4">
          <Link
            href="https://www.instagram.com/officialpesonen"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-8 h-8" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/arttupesonen/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-8 h-8" />
          </Link>
          <Link
            href="https://github.com/officialpesonen"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <GithubIcon className="w-8 h-8" />
          </Link>
        </div>
      </header>
      <main></main>
    </div>
  );
};

export default Home;
