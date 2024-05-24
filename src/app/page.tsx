import Image from "next/image";
import { Card } from "@/components/Card";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import profileImage from "@/assets/profile.png";
import tilitImage from "@/assets/tilit.png";
import codetumImage from "@/assets/codetum.png";

const Home = () => {
  return (
    <div className="max-w-xl mx-auto p-4 md:p-8 xl:p-10 space-y-6">
      <header className="relative text-center">
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
      <main className="space-y-6">
        <section>
          <h2 className="mb-2">Currently working on</h2>
          <div className="grid grid-cols-1 gap-3">
            <Link href="https://tilit.ai" target="_blank" rel="noreferrer">
              <Card className="p-5 hover:opacity-85">
                <Image src={tilitImage} alt="tilit.ai logo" className="h-7 w-auto mb-4" />
                <p>
                  Tilit revolutionises the way bookkeeping is done for both sides of the coin - small to
                  mid-size businesses and their bookkeepers.
                </p>
              </Card>
            </Link>
            <Link href="https://codetum.com" target="_blank" rel="noreferrer">
              <Card className="p-5 hover:opacity-85">
                <Image src={codetumImage} alt="tilit.ai logo" className="h-6 w-auto mb-4" />
                <p>
                  Codetum is a modern software development company that develops performant applications and
                  lightning-fast websites.
                </p>
              </Card>
            </Link>
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
