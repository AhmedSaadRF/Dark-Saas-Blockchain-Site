import { Circle } from "../components/Circle"
import { CutCornerButton } from "../components/CutCornerButton"
import { Hexagon } from "../components/Hexagon"

export const CallToAction = () => {
  return (
    <section>
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
              <img src="/assets/images/cuboid.png" alt="Cuboid 3D image" />
            </Circle>
          </div>
          <div>
            <Circle>
              <img src="/assets/images/cylinder.png" alt="Cylinder 3D image" />
            </Circle>
          </div>
          <h2>
            Ready to
            <span>get started?</span>
          </h2>
          <p>Start building using blockchain technology, with Blockforge.</p>
          <div>
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
        </div>
      </div>
    </section>
  )
}

