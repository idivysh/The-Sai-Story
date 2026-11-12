
import "./skills.css";

import Image from "next/image";

const developmentGroups = [
  {
    number: "01",
    title: "PROGRAMMING LANGUAGES",
    skills: [
      { name: "Python", icon: "python.svg" },
      { name: "Java", icon: "java.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "SQL", icon: "sql.svg" },
      { name: "HTML5", icon: "html-5.svg" },
      { name: "CSS3", icon: "css-3.svg" },
    ],
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    skills: [
      { name: "React", icon: "react.svg" },
      { name: "Next.js", icon: "next-js.svg" },
      { name: "Node.js", icon: "node-js.svg" },
      { name: "FastAPI", icon: "fastapi.svg" },
      { name: "Tailwind CSS", icon: "tailwind-css.svg" },
      { name: "Material UI", icon: "material-ui.svg" },
      { name: "shadcn/ui", icon: "shadcn-ui.svg", invert: true },
    ],
  },
  {
    number: "03",
    title: "APP DEVELOPMENT",
    skills: [
      { name: "React Native", icon: "react-native.svg" },
      { name: "Expo", icon: "expo.svg", invert: true },
      { name: "Android Studio", icon: "android-studio.svg" },
    ],
  },
  {
    number: "04",
    title: "DATABASES & BACKEND SERVICES",
    skills: [
      { name: "MySQL", icon: "sql.svg" },
      { name: "MongoDB", icon: "mongodb.svg" },
      { name: "Firebase Firestore", icon: "firebase-firestore.svg" },
      { name: "Firebase Realtime Database", icon: "firebase-database.svg" },
      { name: "Firebase Authentication", icon: "firebase-authentication.svg" },
      { name: "Supabase", icon: "supabase.svg" },
      { name: "Prisma ORM", icon: "prisma.svg", invert: true },
      { name: "PostgreSQL", icon: "postgressql.svg" },
    ],
  },
];


const aiDataGroups = [
  {
    number: "01",
    title: "AI & MACHINE LEARNING",
    skills: [
      { name: "TensorFlow", icon: "tensorflow.svg" },
      { name: "PyTorch", icon: "pytorch.svg" },
      { name: "Scikit-learn", icon: "scikit-learn.svg" },
      { name: "OpenCV", icon: "opencv.svg" },
    ],
  },
  {
    number: "02",
    title: "DATA SCIENCE & ANALYTICS",
    skills: [
      { name: "Pandas", icon: "pandas.svg" },
      { name: "NumPy", icon: "numpy.svg" },
      { name: "Matplotlib", icon: "matplotlib.svg" },
      { name: "Seaborn", icon: "seaborn.svg" },
      { name: "Jupyter Notebook", icon: "jupyter.svg" },
      { name: "Power BI", icon: "powerbi.svg" },
    ],
  },
];


const creativeGroups = [
  {
    number: "01",
    title: "GRAPHIC DESIGN SOFTWARE",
    skills: [
      { name: "Adobe Photoshop", icon: "adobe-photoshop.svg" },
      { name: "Adobe Illustrator", icon: "adobe-illustrator.svg" },
      { name: "Adobe InDesign", icon: "adobe-indesign.svg" },
      { name: "CorelDRAW", icon: "coreldraw.svg" },
      { name: "Canva", icon: "canva.svg" },
      { name: "Figma", icon: "figma.svg" },
    ],
  },
  {
    number: "02",
    title: "VIDEO EDITING SOFTWARE",
    skills: [
      { name: "Adobe Premiere Pro", icon: "adobe-premiere-pro.svg" },
      { name: "Adobe After Effects", icon: "adobe-after-effects.svg" },
      { name: "CapCut", icon: "capcut.svg", invert: true },
    ],
  },
];


const toolsGroups = [
  {
    number: "01",
    title: "DEVELOPER TOOLS",
    skills: [
      { name: "Git", icon: "git.svg" },
      { name: "GitHub", icon: "github.svg", invert: true },
      { name: "VS Code", icon: "vscode.svg" },
      { name: "Visual Studio", icon: "visual-studio.svg", },
      { name: "Postman", icon: "postman.svg" },
      { name: "npm", icon: "npm.svg" },
      { name: "Yarn", icon: "yarn.svg" },
      { name: "pnpm", icon: "pnpm.svg" },
      { name: "PowerShell", icon: "powershell.svg" },
      { name: "Terminal", icon: "terminal.svg" },
      { name: "Bash", icon: "bash.svg", invert: true },
    ],
  },
  {
    number: "02",
    title: "CLOUD & DEPLOYMENT PLATFORMS",
    skills: [
      { name: "Vercel", icon: "vercel.svg" },
      { name: "Netlify", icon: "netlify.svg" },
      { name: "Hostinger", icon: "hostinger.svg" },
      { name: "GoDaddy", icon: "godaddy.svg" },
      { name: "Firebase Hosting", icon: "firebase-hosting.svg" },
    ],
  },
  {
    number: "03",
    title: "BLOCKCHAIN TECHNOLOGIES",
    skills: [
      { name: "Ganache", icon: "ganache.svg" },
      { name: "Web3.js", icon: "web3dotjs.svg" },
      { name: "Ethers.js", icon: "ethersdotjs.svg" },
    ],
  },
  {
    number: "04",
    title: "OFFICE & PRODUCTIVITY SOFTWARE",
    skills: [
      { name: "Microsoft Word", icon: "microsoft-word.svg" },
      { name: "Microsoft Excel", icon: "microsoft-excel.svg" },
      { name: "Microsoft PowerPoint", icon: "microsoft-powerpoint.svg" },
      { name: "Google Docs", icon: "google-docs.svg" },
      { name: "Google Sheets", icon: "google-sheets.svg" },
      { name: "Google Slides", icon: "google-slides.svg" },
      { name: "Notion", icon: "notion.svg" },
    ],
  },
];


const codingProfiles = [
  {
    name: "LeetCode",
    icon: "leetcode.svg",
    username: "divuuuuuu7",
    url: "https://leetcode.com/u/divuuuuuu7/",
  },
  {
    name: "HackerRank",
    icon: "hackerrank.svg",
    username: "divuuuuuu7",
    url: "https://www.hackerrank.com/profile/divuuuuuu7",
  },
  {
    name: "CodeForces",
    icon: "codeforces.svg",
    username: "divuuuuuu.-.7",
    url: "https://codeforces.com/profile/divuuuuuu.-.7",
  },
];



export default function SkillsPage() {
  return (
    <main className="skills-page">
      {/* INTRODUCTION */}
      <section className="skills-intro">
        <div className="skills-intro-topline">
          <span>THE KNOWLEDGE & TOOLKIT</span>
        </div>

        <h1>
          SKILLS &amp; EXPERTISE<span>.</span>
        </h1>

        <p>
          A blend of technical knowledge, creative thinking, and practical
          tools that shape the way I build, design, explore, and create.
        </p>

        <div className="skills-intro-bottom">
          <span>TECHNICAL</span>
          <span className="skills-intro-dot"></span>
          <span>CREATIVE</span>
          <span className="skills-intro-dot"></span>
          <span>CONTINUOUS LEARNING</span>
        </div>
      </section>

        {/* DEVELOPMENT */}
        <section className="skills-category-section">
            <div className="skills-category-heading">
                <span className="skills-section-number">01</span>
                <h2>DEVELOPMENT<span>.</span></h2>
            </div>

            <div className="skills-groups">
            {developmentGroups.map((group) => (
                <div className="skills-group" key={group.number}>
                <div className="skills-group-heading">
                    <span>{group.number}</span>
                    <h3>{group.title}</h3>
                </div>

                <div className="skills-items">
                    {group.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                        <div className="skill-icon">
                        <Image
                            src={`/assets/skills/${skill.icon}`}
                            alt={skill.name}
                            width={32}
                            height={32}
                            className={skill.invert ? "skill-icon-invert" : ""}
                        />
                        </div>

                        <span>{skill.name}</span>
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </section>


        {/* AI & DATA */}
        <section className="skills-category-section">
        <div className="skills-category-heading">
            <span className="skills-section-number">02</span>

            <h2>
            AI &amp; DATA<span>.</span>
            </h2>
        </div>

        <div className="skills-groups">
            {aiDataGroups.map((group) => (
            <div className="skills-group" key={group.number}>
                <div className="skills-group-heading">
                <span>{group.number}</span>
                <h3>{group.title}</h3>
                </div>

                <div className="skills-items">
                {group.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                    <div className="skill-icon">
                        <Image
                        src={`/assets/skills/${skill.icon}`}
                        alt={skill.name}
                        width={32}
                        height={32}
                        />
                    </div>

                    <span>{skill.name}</span>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
        </section>


        {/* CREATIVE DESIGN */}
        <section className="skills-category-section">
        <div className="skills-category-heading">
            <span className="skills-section-number">03</span>
            <h2>
            CREATIVE DESIGN<span>.</span>
            </h2>
        </div>

        <div className="skills-groups">
            {creativeGroups.map((group) => (
            <div className="skills-group" key={group.number}>
                <div className="skills-group-heading">
                <span>{group.number}</span>
                <h3>{group.title}</h3>
                </div>

                <div className="skills-items">
                {group.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                    <div className="skill-icon">
                        <Image
                        src={`/assets/skills/${skill.icon}`}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className={skill.invert ? "skill-icon-invert" : ""}
                        />
                    </div>

                    <span>{skill.name}</span>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
        </section>


        {/* TOOLS & TECHNOLOGIES */}
        <section className="skills-category-section">
        <div className="skills-category-heading">
            <span className="skills-section-number">04</span>

            <h2>
            TOOLS &amp; TECHNOLOGIES<span>.</span>
            </h2>
        </div>

        <div className="skills-groups">
            {toolsGroups.map((group) => (
            <div className="skills-group" key={group.number}>
                <div className="skills-group-heading">
                <span>{group.number}</span>
                <h3>{group.title}</h3>
                </div>

                <div className="skills-items">
                {group.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                    <div className="skill-icon">
                        <Image
                        src={`/assets/skills/${skill.icon}`}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className={skill.invert ? "skill-icon-invert" : ""}
                        />
                    </div>

                    <span>{skill.name}</span>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
        </section>


        {/* CODING PROFILES */}
        <section className="skills-category-section">
        <div className="skills-category-heading">
            <span className="skills-section-number">05</span>

            <h2>
            CODING PROFILES<span>.</span>
            </h2>
        </div>

        <div className="coding-profiles-grid">
            {codingProfiles.map((profile, index) => (
            <article className="coding-profile-card" key={profile.name}>
                <div className="coding-profile-top">
                <span className="coding-profile-number">
                    0{index + 1}
                </span>

                <div className="coding-profile-icon">
                    <Image
                    src={`/assets/skills/${profile.icon}`}
                    alt={profile.name}
                    width={42}
                    height={42}
                    />
                </div>
                </div>

                <div className="coding-profile-info">
                <h3>{profile.name}</h3>
                <p>{profile.username}</p>
                </div>

                {profile.url && (
                <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coding-profile-link"
                >
                    VIEW PROFILE
                </a>
                )}
            </article>
            ))}
        </div>
        </section>

    </main>
  );
}
