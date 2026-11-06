
import "./beyond-work.css";

const interests = [
  {
    number: "01",
    title: "COOKING",
    description:
      "Cooking gives me the freedom to experiment with different ingredients, explore flavours and try new combinations. I enjoy every part of the process, from preparing everything to creating something with care. For me, it is about creativity, patience and enjoying what I make.",
  },
  {
    number: "02",
    title: "MUSIC",
    description:
      "Music is one of the ways I disconnect from everyday distractions and recharge my mind. Whether I am listening to my favourite tracks or discovering something new, it gives me a different perspective. It helps me relax, find my rhythm and stay inspired.",
  },
  {
    number: "03",
    title: "REFLECTION",
    description:
      "Visiting temples gives me an opportunity to slow down, find calm and spend some time reflecting. It allows me to step away from the everyday rush and appreciate the quieter moments. These experiences remind me to maintain balance and stay grounded.",
  },
];

export default function BeyondWork() {
  return (
    <section className="beyond-work-section" id="beyond-work">
      <div className="beyond-work-container">

        {/* Top divider */}
        <div className="beyond-work-divider">
          <span />
        </div>

        {/* Heading */}
        <header className="beyond-work-heading">
          <h2>
            BEYOND WORK<span>.</span>
          </h2>
          <p>THERE'S MORE TO THE STORY.</p>
        </header>

        {/* Introduction */}
        <p className="beyond-work-intro">
          Outside development and design, I enjoy the little things
          that keep me inspired.
        </p>

        {/* Personal interests */}
        <div className="beyond-work-grid">
          {interests.map((interest) => (
            <article
              className="beyond-work-card"
              key={interest.number}
            >
              <span className="beyond-work-number">
                {interest.number}
              </span>

              <div className="beyond-work-card-content">
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* More about personal interests */}
        <div className="beyond-work-extra">
          <p>
            I also enjoy exploring new ideas, creating content and
            documenting different parts of my journey.
          </p>
        </div>

        {/* Closing thought */}
        <div className="beyond-work-closing">
          <span />
          <p>
            These experiences are part of who I am, not just what I do
            professionally.
          </p>
        </div>

      </div>
    </section>
  );
}
