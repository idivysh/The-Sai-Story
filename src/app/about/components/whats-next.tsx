
import Image from "next/image";
import "./whats-next.css";

export default function WhatsNext() {
  return (
    <section className="whats-next-section">
      <div className="whats-next-container">

        {/* Top Divider */}
        <div className="whats-next-divider">
          <span />
        </div>

        <div className="whats-next-layout">

            {/* Left: Heading and Background Image */}
            <div className="whats-next-visual">

            <div className="whats-next-image">
                <Image
                src="/assets/whats-next-journey.png"
                alt="A journey towards new horizons"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            <span className="whats-next-overline">
                THE JOURNEY CONTINUES
            </span>

            <h2>
                WHAT'S NEXT<span className="whats-next-dot">.</span>
            </h2>

            <p className="whats-next-tagline">
                THE STORY DOESN'T END HERE.
            </p>

            </div>

          {/* Right: Story */}
          <div className="whats-next-story">

            <span className="whats-next-index">
              THE JOURNEY AHEAD
            </span>

            <p>
              I'm at a stage where every experience is an opportunity to
              grow, every challenge is a chance to improve and every new
              idea opens another possibility.
            </p>

            <p>
              I want to keep building meaningful digital experiences,
              explore creative opportunities, collaborate with interesting
              people and grow into someone whose work creates real value.
            </p>

            <p>
              There's a lot more to learn, a lot more to create and a
              long way to go.
            </p>

            {/* Closing Statement */}
            <div className="whats-next-closing">

              <span className="closing-line" />

              <h3>
                THIS IS ONLY
                <br />
                THE BEGINNING<span>.</span>
              </h3>

              <span className="closing-caption">
                MORE TO EXPLORE. MORE TO CREATE.
              </span>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
