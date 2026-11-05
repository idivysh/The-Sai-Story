import "./my-story.css";

export default function MyStory() {
  return (
    <section className="my-story-section" id="my-story">
      <div className="my-story-container">

        {/* Top divider */}
        <div className="my-story-divider">
          <span />
        </div>

        {/* Section heading */}
        <div className="my-story-heading">
          <h2>
            MY STORY<span>.</span>
          </h2>

          <p className="my-story-tagline">
            EVERY JOURNEY BEGINS WITH CURIOSITY.
          </p>
        </div>

        {/* Story content */}
        <div className="my-story-content">
          <p>
            My journey started with curiosity — a desire to understand
            how things work, how ideas take shape and how technology
            can turn imagination into something real.
          </p>

          <p>
            Over time, that curiosity grew into an interest in both
            development and design. I found myself drawn to two
            different yet connected worlds: the logic of building
            things and the creativity of presenting them.
          </p>

          <p>
            As I explored these areas, I began taking on new challenges,
            learning through experiences and discovering the kind of
            work I genuinely enjoy.
          </p>

          <p>
            I'm still evolving, experimenting and finding new ways to
            turn ideas into meaningful creations.
          </p>
        </div>

        {/* Bottom accent */}
        <div className="my-story-bottom-accent">
          <span />
        </div>

      </div>
    </section>
  );
}