import { Circle } from "../components/Circle";
import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagon } from "../components/Hexagon";


export const HeroSection = () => {
  return (
    <section>
      <div>
        <p>Introducing Blockforge</p>
        <h1>The Future of Blockchain is Hero.</h1>
        <p>Blockforge is pioneering smart contract integrity with cutting-edge data solutions.</p>
        <div>
          <CutCornerButton>Get Started</CutCornerButton>
        </div>
        <div>
          <div>
            <div>
              <Hexagon />
            </div>
            <div>
              <Hexagon />
            </div>
            <div>
              <Circle>
                <img src="/assets/images/cube.png" alt="Cube 3D image" />
              </Circle>
            </div>
            <div>
              <Circle>
                <img src="/assets/images/cuboid.png" alt="Cuboid 3D image" />
              </Circle>
            </div>
            <div>
              <Circle>
                <img src="/assets/images/torus.png" alt="Torus 3D image" />
              </Circle>
            </div>
            <img src="/assets/images/icosahedron.png" alt="" />
            <img src="/assets/images/icosahedron.png" alt="Icosahedron 3D Image" />
          </div>
        </div>
        <div>
          <div>
            <div></div>
          </div>
          <p>Scroll to learn more</p>
        </div>
      </div>
    </section>
  );
}
