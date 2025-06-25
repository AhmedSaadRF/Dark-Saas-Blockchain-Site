import { CutCornerButton } from "../components/CutCornerButton";
import { TextButton } from "../components/TextButton";

const listItems = [
  "Experience unparalleled security and scalability",
  "Fully benefit from scalable network effects",
  "Unlock the potential of decentralized networks",
]

export const FeaturesGrid = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <div>
              <h2>Empowering the future of blockchain.</h2>
              <p>Blockforge provides robust and secure infrastructure to support the next generation of decentralized applications.</p>
              <ul>
                {listItems.map((item) => (
                  <li key={item}>
                    <div>
                      <div></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
            <div>
              <div>
                <img src="/assets/images/torus-knot.png" alt="Torus Knot 3D image" />
                <img src="/assets/images/hemisphere.png" alt="Hemisphere 3D shape" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <img src="/assets/images/cone.png" alt="Cone 3D shape" />
                <img src="/assets/images/hemisphere.png" alt="Hemisphere 3D shape" />
              </div>
            </div>
            <div>
              <h2>Blockforge leads the way.</h2>
              <div>
                <p>Blockforge is dedicated to supporting the evolution of Web3 applications by delivering the necessary infrastructure and security for Web3.</p>
                <p>Blockforge champions Web3 for everyone. As a decentralized blockchain scaling platform, Blockforge enables developers to create scalable, user-friendly dApps with low transaction costs, all while ensuring robust security.</p>
              </div>
              <div>
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

