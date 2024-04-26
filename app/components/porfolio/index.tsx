import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <section>
      <div>
        <div>
          <h3>Wordpress Project</h3>
        </div>
        <div>
          <Image
            src="/wordpress.jpg"
            alt="Hero Image"
            width={350}
            height={100}
          />
          <p>Lovelyn Travel and Tours</p>
          <button>
            <Link href="https://lovelyntravelandtours.com/">Details</Link>
          </button>
        </div>
      </div>
      <div>
        <div>
          <h3>React Project</h3>
        </div>
        <div>
          <Image
            src="/react-project.jpg"
            alt="Hero Image"
            width={350}
            height={100}
          />
          <p>Evently</p>
          <button>
            <Link href="https://tegingl.vercel.app/">Details</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
