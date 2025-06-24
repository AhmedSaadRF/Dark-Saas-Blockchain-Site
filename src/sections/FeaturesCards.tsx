import { twMerge } from "tailwind-merge";

const cardData = [
  {
    image: "/assets/images/pill.png",
    title: "Revolutionary Blockchain API",
    description:
      "Effortlessly integrate and manage blockchain data with our cutting-edge API, designed for seamless connectivity.",
    color: "fuchsia",
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Decentralized Data Solutions",
    description:
      "Empower your applications with decentralized data solutions, ensuring security and transparency at every step.",
    color: "lime",
  },
  {
    image: "/assets/images/cone.png",
    title: "Next-Gen Smart Contracts",
    description:
      "Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs.",
    color: "cyan",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Seamless Blockchain Integration",
    description:
      "Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.",
    color: "violet",
  },
];

export const FeaturesCardsSection = () => {
  return (
    <section>
      <div>
        <h2>
          Discover the future of blockchain with Blockforge.
        </h2>
        <div>
          <div>
            {cardData.map(({ image, title, description, color }) => (
              <div
                key={title}
              >
                <div></div>
                <div></div>
                <div></div>
                <div>
                  <div>
                    <div></div>
                    <img
                      src={image}
                      alt="Pill image"
                    />
                  </div>
                </div>
                <h3>
                  {title}
                </h3>
                <p>{description}</p>
                <div>
                  <button>
                    Learn More
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            {[
              cardData.map(({ title }) => (
                <div
                  key={title}
                ></div>
              )),
            ]}
          </div>
        </div>
      </div>
    </section>
  );
};

