import "./my-philosophy.css";

const principles = [
  {
    number: "01",
    title: "CURIOSITY",
    description: "Keep exploring. Stay open to new ideas and possibilities.",
    color: "blue",
  },
  {
    number: "02",
    title: "CONSISTENCY",
    description: "Keep showing up, learning and improving with every experience.",
    color: "gold",
  },
  {
    number: "03",
    title: "ATTENTION TO DETAIL",
    description: "Give every element the thought and care it deserves.",
    color: "silver",
  },
  {
    number: "04",
    title: "CONTINUOUS LEARNING",
    description: "Ask better questions and never stop finding ways to improve.",
    color: "red",
  },
];

export default function MyPhilosophy() {
  return (
    <section className="my-philosophy-section" id="my-philosophy">
      <div className="my-philosophy-container">

        {/* Top divider */}
        <div className="my-philosophy-divider">
          <span />
        </div>

        {/* Heading */}
        <header className="my-philosophy-heading">
          <h2>
            MY PHILOSOPHY<span>.</span>
          </h2>

          <p>
            THINK WITH CURIOSITY. CREATE WITH PURPOSE.
          </p>
        </header>

        {/* Two-column philosophy layout */}
        <div className="my-philosophy-layout">

          {/* Left: Personal philosophy */}
          <div className="my-philosophy-copy">
            <p className="my-philosophy-lead">
              I believe good work begins with understanding the idea behind it.
            </p>

            <p>
              For me, creativity isn't just about making something look good,
              and development isn't just about making something work. The real
              value comes from bringing both together.
            </p>

            <p>
              I value curiosity, consistency, attention to detail and the
              willingness to learn from every experience.
            </p>

            <p>
              I also believe that even the smallest improvements can make a meaningful difference in the final outcome.
            </p>

            <div className="my-philosophy-closing">
              <span className="my-philosophy-closing-line" />
              <p>
                I don't expect to know everything. I'd rather keep exploring,
                ask better questions and improve with every project.
              </p>
            </div>
          </div>

          {/* Right: Core principles */}
          <div className="my-philosophy-principles">
            {principles.map((principle) => (
              <article
                className={`my-philosophy-principle philosophy-${principle.color}`}
                key={principle.number}
              >
                <span className="my-philosophy-number">
                  {principle.number}
                </span>

                <div className="my-philosophy-principle-copy">
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>

                <span className="my-philosophy-indicator" />
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}