import Image from "next/image";

/* =========================================================
   DATA
========================================================= */

const projects = [
  {
    number: "01",
    title: "AI-Based Power System Monitor and Protection",
    date: "Apr 2026",
    tags: ["Machine Learning", "ESP32", "Sensors", "Relay"],
    description:
      "Developed an intelligent fault identification system for detecting abnormal operating conditions and classifying different faults in an electrical power network using measured electrical parameters.",
    points: [
      "Collected and processed voltage and current parameters for electrical fault analysis.",
      "Developed a data-driven classification framework to distinguish normal and fault conditions.",
      "Demonstrated AI-based fault identification for faster analysis and improved power-system reliability.",
    ],
  },
  {
    number: "02",
    title: "BI-Copter",
    date: "Jun 2025",
    tags: ["Arduino", "BLDC Motors", "ESC", "PID Control"],
    description:
      "Designed and developed a two-rotor aerial vehicle capable of maintaining balance, stable flight and controlled movement using continuous feedback-based correction.",
    points: [
      "Integrated BLDC motors, ESCs, propellers, Arduino and orientation sensors.",
      "Implemented and tuned a PID algorithm for real-time motor-speed adjustment.",
      "Worked on hardware integration, vibration issues, alignment and flight stability.",
    ],
  },
];

const skillGroups = [
  {
    icon: "⚡",
    title: "Electrical Engineering",
    description:
      "Core electrical engineering knowledge focused on power, energy and electrical systems.",
    skills: [
      "Power Systems",
      "Electrical Machines",
      "Power Electronics",
      "Power Generation",
      "Protection Systems",
    ],
  },
  {
    icon: "</>",
    title: "Programming",
    description:
      "Programming fundamentals used for engineering analysis, automation and problem solving.",
    skills: ["C", "C++", "Python"],
  },
  {
    icon: "◈",
    title: "Engineering Tools",
    description:
      "Software and development platforms used for simulation, analysis and practical projects.",
    skills: ["MATLAB", "Simulink", "Proteus", "Arduino IDE"],
  },
  {
    icon: "✦",
    title: "Professional Skills",
    description:
      "Professional capabilities developed through academic work, projects and technical activities.",
    skills: [
      "Problem-Solving",
      "Analytical Thinking",
      "Teamwork",
      "Communication",
      "Adaptability",
    ],
  },
];

/* =========================================================
   CERTIFICATIONS
   Latest → Oldest
========================================================= */

const certifications = [
  {
    number: "01",
    title: "Cybersecurity Analyst Job Simulation",
    organization: "Tata Group | Forage",
    date: "Jul 2026",
    category: "Professional",
    link: "https://drive.google.com/file/d/1y_pNOOls2qlNeOJgDgv31pXiTS30mM51/view",
  },
  {
    number: "02",
    title: "LPU Hackathon 2.0",
    organization: "Lovely Professional University",
    date: "Apr 2026",
    category: "Hackathon",
    link: "https://drive.google.com/file/d/1UBmEy84REl8fpYgw9EDszzn2vWKu1XlO/view?usp=drive_link",
  },
  {
    number: "03",
    title: "MATLAB Onramp",
    organization: "MathWorks Training Services",
    date: "Jan 2026",
    category: "Technical",
    link: "https://drive.google.com/file/d/1SqMAwKXvoHOkgj80YRVP7hbVrQWHXdO_/view",
  },
  {
    number: "04",
    title: "Programming in C",
    organization: "Infosys Springboard",
    date: "Jan 2026",
    category: "Technical",
    link: "https://drive.google.com/file/d/1ls78Z1YZ6DC1un4pAIcKwXSgKMbtX-if/view",
  },
];

const education = [
  {
    degree: "Bachelor of Technology in Electrical Engineering",
    institute: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "Aug 2025 – Present",
    result: "CGPA: 8.53",
  },
  {
    degree: "Diploma in Electrical Engineering",
    institute: "Silli Polytechnic, Silli",
    location: "Ranchi, Jharkhand",
    period: "Sept 2022 – June 2025",
    result: "Percentage: 80.44%",
  },
  {
    degree: "Matriculation",
    institute: "Krishna Sudarsan Central School (CCL)",
    location: "Bokaro, Jharkhand",
    period: "Mar 2021 – Apr 2022",
    result: "Percentage: 87.4%",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f2ea] text-[#171717]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-[#ded9cf] bg-[#f5f2ea]/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex h-[74px] items-center justify-between">

            <a
              href="#home"
              className="text-2xl font-bold tracking-tight md:text-3xl"
            >
              Sonu Pandit
            </a>

            <div className="hidden items-center gap-7 text-[15px] font-medium lg:flex">
              <a href="#home" className="transition hover:text-[#c84b08]">
                Home
              </a>

              <a href="#about" className="transition hover:text-[#c84b08]">
                About
              </a>

              <a href="#skills" className="transition hover:text-[#c84b08]">
                Skills
              </a>

              <a href="#projects" className="transition hover:text-[#c84b08]">
                Projects
              </a>

              <a
                href="#experience"
                className="transition hover:text-[#c84b08]"
              >
                Experience
              </a>

              <a
                href="#certifications"
                className="transition hover:text-[#c84b08]"
              >
                Certifications
              </a>

              <a
                href="#education"
                className="transition hover:text-[#c84b08]"
              >
                Education
              </a>

              <a
                href="#achievements"
                className="transition hover:text-[#c84b08]"
              >
                Achievements
              </a>

              <a
                href="#contact"
                className="transition hover:text-[#c84b08]"
              >
                Contact
              </a>
            </div>

            <a
              href="/resume.pdf"
              download
              className="hidden items-center gap-2 rounded-xl bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c84b08] md:inline-flex"
            >
              View CV
            </a>

          </nav>
        </div>
      </header>

      {/* =====================================================
          1. HOME
      ===================================================== */}

      <section
        id="home"
        className="flex min-h-[calc(100vh-74px)] items-center py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT */}

            <div>

              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#c84b08]">
                Electrical Engineering Student
              </p>

              <h1 className="text-6xl font-bold leading-[0.92] tracking-[-0.055em] md:text-7xl lg:text-[88px]">
                Sonu Pandit
              </h1>

              <h2 className="mt-8 text-2xl font-semibold leading-tight md:text-3xl">
                Electrical Engineer
                <span className="text-[#c84b08]"> | </span>
                Power Systems Engineer
                <span className="text-[#c84b08]"> | </span>
                EV Engineer
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5d5953] md:text-xl">
                I am{" "}
                <strong className="text-[#171717]">
                  Sonu Pandit
                </strong>
                , currently pursuing my B.Tech in Electrical Engineering at{" "}
                <strong className="text-[#171717]">
                  Lovely Professional University
                </strong>
                . My interests include{" "}
                <span className="font-medium text-[#c84b08]">
                  Power Systems, Smart Grid, Renewable Energy and Electric
                  Vehicles
                </span>
                , with a focus on practical electrical engineering solutions.
              </p>

              {/* BUTTONS */}

              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="#projects"
                  className="rounded-xl bg-[#171717] px-7 py-4 font-semibold text-white transition hover:bg-[#c84b08]"
                >
                  View Projects
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="rounded-xl border border-[#171717] px-7 py-4 font-semibold transition hover:bg-[#171717] hover:text-white"
                >
                  Download CV
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border border-[#cfc8bc] bg-white px-7 py-4 font-semibold transition hover:border-[#c84b08] hover:text-[#c84b08]"
                >
                  Let&apos;s Connect →
                </a>

              </div>

              {/* SOCIAL LINKS */}

              <div className="mt-9 flex flex-wrap items-center gap-7 text-[#55514b]">

                <a
                  href="mailto:sonupandit6200@gmail.com"
                  className="transition hover:text-[#c84b08]"
                >
                  ✉ Email
                </a>

                <a
                  href="tel:+916200424968"
                  className="transition hover:text-[#c84b08]"
                >
                  ☎ Phone
                </a>

                <a
                  href="https://www.linkedin.com/in/sonu-pan2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#c84b08]"
                >
                  in LinkedIn
                </a>

                <a
                  href="https://github.com/sonupandit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#c84b08]"
                >
                  GitHub
                </a>

              </div>

            </div>

            {/* RIGHT — PHOTO */}

            <div className="flex justify-center lg:justify-end">

              <div className="relative">

  <div className="absolute -inset-5 rounded-[28px] border border-[#d7d0c3]" />

  <div className="absolute -inset-2 rounded-[22px] border border-[#c84b08]/30" />

  <div className="relative h-[310px] w-[310px] overflow-hidden rounded-[18px] border border-[#d4cec2] bg-white md:h-[390px] md:w-[390px]">

    <Image
      src="/profile.jpg"
      alt="Sonu Pandit"
      fill
      priority
      className="object-cover object-[90%_30%]"
    />

  </div>

  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-[#171717] px-6 py-3 text-sm font-semibold text-white">
  </div>

</div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          2. ABOUT + AREAS OF INTEREST
      ===================================================== */}

      <section id="about" className="bg-[#eeece5] py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

            {/* ABOUT */}

            <div>

              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#d9cdb6] bg-[#e8e2d5] px-5 py-2 text-sm font-medium text-[#c84b08]">
                <span>✦</span>
                <span>About Me</span>
              </div>

              <h2 className="text-5xl font-bold leading-[1.02] tracking-[-0.04em] md:text-6xl">
                Electrical
                <br />
                engineering
                <br />
                with practical
                <br />
                <span className="text-[#c84b08]">
                  thinking.
                </span>
              </h2>

              <div className="mt-9 max-w-xl space-y-6">

                <p className="text-lg leading-8 text-[#55514b]">
                  I am an Electrical Engineering student at{" "}
                  <strong className="text-[#171717]">
                    Lovely Professional University
                  </strong>
                  , with a Diploma background in Electrical Engineering and
                  practical exposure through industrial training, technical
                  projects and hands-on learning.
                </p>

                <p className="text-lg leading-8 text-[#55514b]">
                  My technical interests are centered around{" "}
                  <strong className="text-[#171717]">
                    Power Systems and Smart Grid technologies
                  </strong>
                  , where I am interested in modern power networks,
                  protection, grid automation and efficient energy management.
                </p>

                <p className="text-lg leading-8 text-[#55514b]">
                  I am also developing my understanding of{" "}
                  <span className="font-medium text-[#c84b08]">
                    Renewable Energy and Electric Vehicles
                  </span>
                  , particularly technologies that support cleaner, smarter
                  and more sustainable energy systems.
                </p>

              </div>

            </div>

            {/* AREAS OF INTEREST */}

            <div>

              <p className="mb-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#c84b08]">
                Areas of Interest
              </p>

              <div className="space-y-5">

                <div className="rounded-2xl border border-black/5 bg-white p-7 transition hover:-translate-y-1 hover:border-[#c84b08]/40">

                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#c84b08]/10 text-xl text-[#c84b08]">
                      ⚡
                    </div>

                    <div>

                      <p className="mb-1 text-sm font-medium text-[#99928a]">
                        01
                      </p>

                      <h3 className="text-2xl font-bold">
                        Power Systems
                      </h3>

                      <p className="mt-3 leading-7 text-[#66615b]">
                        Power generation, transmission, distribution,
                        protection and electrical power-system analysis.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="rounded-2xl border border-black/5 bg-white p-7 transition hover:-translate-y-1 hover:border-[#c84b08]/40">

                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#c84b08]/10 text-xl text-[#c84b08]">
                      ◈
                    </div>

                    <div>

                      <p className="mb-1 text-sm font-medium text-[#99928a]">
                        02
                      </p>

                      <h3 className="text-2xl font-bold">
                        Smart Grid
                      </h3>

                      <p className="mt-3 leading-7 text-[#66615b]">
                        Intelligent power networks, grid automation,
                        energy management and modern grid technologies.
                      </p>

                    </div>

                  </div>

                </div>

                <div className="rounded-2xl bg-[#171717] p-7 text-white">

                  <p className="text-sm font-semibold uppercase tracking-widest text-[#e88b5f]">
                    Exploring
                  </p>

                  <p className="mt-3 text-xl font-semibold leading-8">
                    Renewable Energy
                    <span className="text-[#e88b5f]"> • </span>
                    Electric Vehicles
                  </p>

                  <p className="mt-3 leading-7 text-gray-400">
                    Exploring sustainable energy technologies and electric
                    mobility as part of my broader electrical engineering
                    interests.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          3. TECHNICAL SKILLS
      ===================================================== */}

      <section id="skills" className="bg-[#f5f2ea] py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-3 rounded-full border border-[#ded2b9] bg-[#eee8da] px-5 py-2 text-sm font-medium text-[#c84b08]">
              <span>✦</span>
              <span>Core Competencies</span>
            </div>

            <h2 className="mt-7 text-5xl font-bold tracking-[-0.04em] md:text-6xl">
              Technical Skills
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#66615b]">
              Electrical engineering knowledge, programming capabilities
              and engineering tools developed through academic learning
              and practical projects.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {skillGroups.map((group) => (

              <div
                key={group.title}
                className="rounded-2xl border border-black/10 bg-white p-8 transition hover:-translate-y-1 hover:border-[#c84b08]/40"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eee7d8] text-xl font-semibold text-[#c84b08]">
                  {group.icon}
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  {group.title}
                </h3>

                <p className="mt-4 leading-7 text-[#66615b]">
                  {group.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-black/10 pt-6">

                  {group.skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-lg border border-[#dfd8ca] bg-[#f1eee7] px-3 py-2 text-sm text-[#55514b]"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          4. PROJECTS
      ===================================================== */}

      <section id="projects" className="bg-[#eeece5] py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14">

            <p className="text-sm font-semibold uppercase tracking-widest text-[#c84b08]">
              Selected Work
            </p>

            <h2 className="mt-3 text-5xl font-bold md:text-6xl">
              Projects
            </h2>

          </div>

          <div className="space-y-7">

            {projects.map((project) => (

              <article
                key={project.number}
                className="rounded-2xl border border-black/10 bg-white p-8 transition hover:border-[#c84b08]/40 md:p-10"
              >

                <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">

                  <div>

                    <p className="font-mono text-sm text-[#c84b08]">
                      {project.number}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold md:text-4xl">
                      {project.title}
                    </h3>

                  </div>

                  <span className="text-sm text-[#77716a]">
                    {project.date}
                  </span>

                </div>

                <p className="mt-6 max-w-5xl text-lg leading-8 text-[#55514b]">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tags.map((tag) => (

                    <span
                      key={tag}
                      className="rounded-lg border border-[#ddd6ca] bg-[#f1eee7] px-3 py-2 text-sm"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

                <ul className="mt-7 space-y-3">

                  {project.points.map((point) => (

                    <li
                      key={point}
                      className="flex gap-3 leading-7 text-[#66615b]"
                    >

                      <span className="mt-1 text-[#c84b08]">
                        •
                      </span>

                      <span>
                        {point}
                      </span>

                    </li>

                  ))}

                </ul>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          5. EXPERIENCE
      ===================================================== */}

      <section id="experience" className="bg-[#f5f2ea] py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16">

            <p className="text-sm font-semibold uppercase tracking-widest text-[#c84b08]">
              Industrial Exposure
            </p>

            <h2 className="mt-3 text-5xl font-bold md:text-6xl">
              Experience
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#66615b]">
              Practical exposure developed through industrial training,
              electrical systems and hands-on engineering environments.
            </p>

          </div>

          <div className="relative">

            <div className="absolute bottom-0 left-[18px] top-0 hidden w-px bg-[#d8d3c9] md:block" />

            <div className="space-y-10">

              {/* EXPERIENCE 01 */}

              <div className="relative md:pl-20">

                <div className="absolute left-0 top-8 hidden h-[37px] w-[37px] items-center justify-center rounded-full border border-[#c9c3b8] bg-[#f5f2ea] md:flex">
                  <div className="h-3 w-3 rounded-full bg-[#c84b08]" />
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-8 transition hover:border-[#c84b08]/40 md:p-10">

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                    <div>

                      <div className="mb-4 flex flex-wrap items-center gap-3">

                        <span className="rounded-md border border-[#e5d6bb] bg-[#f5eee1] px-3 py-1 text-xs font-medium text-[#c84b08]">
                          Power Generation
                        </span>

                        <span className="text-sm text-[#77716a]">
                          Tenughat Thermal Power Station
                        </span>

                      </div>

                      <h3 className="text-3xl font-bold md:text-4xl">
                        Electrical Engineering Intern
                      </h3>

                    </div>

                    <div className="whitespace-nowrap rounded-lg border border-black/10 px-4 py-2 text-sm text-[#55514b]">
                      22 Jun 2026 – 28 Jul 2026
                    </div>

                  </div>

                  <p className="mt-6 max-w-5xl text-lg leading-8 text-[#55514b]">
                    Worked as an intern in a thermal power plant, gaining
                    practical exposure to electricity generation, plant
                    operations, electrical equipment and power-system
                    processes.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {[
                      "Generators",
                      "Transformers",
                      "Switchgear",
                      "Protection Systems",
                      "Boilers & Turbines",
                    ].map((item) => (

                      <span
                        key={item}
                        className="rounded-lg border border-[#ddd6ca] bg-[#f1eee7] px-3 py-2 text-sm"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                  <div className="mt-7 border-t border-black/10 pt-7">

                    <p className="leading-7 text-[#66615b]">
                      Gained an understanding of boilers, turbines,
                      generators, transformers, switchgear and protection
                      systems, along with power generation, transmission
                      and maintenance practices.
                    </p>

                  </div>

                  <div className="mt-7">

                    <a
                      href="https://drive.google.com/file/d/1P-PDspGKozfOhcC-hJa5OQrwcEE-qHA6/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c84b08]"
                    >
                      Certificate ↗
                    </a>

                  </div>

                </div>

              </div>

              {/* EXPERIENCE 02 */}

              <div className="relative md:pl-20">

                <div className="absolute left-0 top-8 hidden h-[37px] w-[37px] items-center justify-center rounded-full border border-[#c9c3b8] bg-[#f5f2ea] md:flex">
                  <div className="h-3 w-3 rounded-full bg-[#c84b08]" />
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-8 transition hover:border-[#c84b08]/40 md:p-10">

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                    <div>

                      <div className="mb-4 flex flex-wrap items-center gap-3">

                        <span className="rounded-md border border-[#e5d6bb] bg-[#f5eee1] px-3 py-1 text-xs font-medium text-[#c84b08]">
                          Railway Electrical Systems
                        </span>

                        <span className="text-sm text-[#77716a]">
                          Electric Loco Shed, Bokaro
                        </span>

                      </div>

                      <h3 className="text-3xl font-bold md:text-4xl">
                        Electrical Maintenance Trainee
                      </h3>

                    </div>

                    <div className="whitespace-nowrap rounded-lg border border-black/10 px-4 py-2 text-sm text-[#55514b]">
                      26 Aug 2024 – 25 Sept 2024
                    </div>

                  </div>

                  <p className="mt-6 max-w-5xl text-lg leading-8 text-[#55514b]">
                    Worked as a trainee in electric locomotive maintenance,
                    gaining practical exposure to locomotive equipment,
                    inspection, safety procedures and basic maintenance
                    practices.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {[
                      "Traction Motors",
                      "Transformers",
                      "Converters",
                      "Circuit Breakers",
                      "Pantographs",
                      "Braking Systems",
                    ].map((item) => (

                      <span
                        key={item}
                        className="rounded-lg border border-[#ddd6ca] bg-[#f1eee7] px-3 py-2 text-sm"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                  <div className="mt-7 border-t border-black/10 pt-7">

                    <p className="leading-7 text-[#66615b]">
                      Gained knowledge about traction motors, transformers,
                      converters, circuit breakers, pantographs and braking
                      systems and their role in safe and efficient locomotive
                      operation.
                    </p>

                  </div>

                  <div className="mt-7">

                    <a
                      href="https://drive.google.com/file/d/14hAO30T5URP18BkkUP_-7eyz0Bsp88qT/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c84b08]"
                    >
                      Certificate ↗
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          6. CERTIFICATIONS
      ===================================================== */}

      <section
        id="certifications"
        className="bg-[#eeece5] py-28"
      >
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14">

            <div className="inline-flex items-center gap-3 rounded-full border border-[#d9cdb6] bg-[#e8e2d5] px-5 py-2 text-sm font-medium text-[#c84b08]">
              <span>✦</span>
              <span>Verified Credentials</span>
            </div>

            <h2 className="mt-6 text-5xl font-bold tracking-[-0.04em] md:text-6xl">
              Certifications
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#66615b]">
              Certifications and professional learning experiences that
              support my technical knowledge and continuous development in
              electrical engineering and technology.
            </p>

          </div>

          {/* CERTIFICATION CARDS */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {certifications.map((cert) => (

              <div
                key={cert.number}
                className="group flex min-h-[340px] flex-col justify-between rounded-3xl border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c84b08]/40 hover:shadow-xl"
              >

                <div>

                  {/* NUMBER + DATE */}

                  <div className="flex items-center justify-between">

                    <span className="text-sm font-semibold tracking-wider text-[#c84b08]">
                      {cert.number}
                    </span>

                    <span className="rounded-full bg-[#f5f2ea] px-4 py-2 text-xs font-semibold text-[#171717]/70">
                      {cert.date}
                    </span>

                  </div>

                  {/* CATEGORY */}

                  <div className="mt-7">

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#171717]/45">
                      {cert.category}
                    </span>

                  </div>

                  {/* TITLE */}

                  <h3 className="mt-4 text-2xl font-bold leading-tight text-[#171717]">
                    {cert.title}
                  </h3>

                </div>

                {/* ORGANIZATION + CERTIFICATE BUTTON */}

                <div className="mt-10 flex items-end justify-between gap-4 border-t border-black/10 pt-5">

                  <div>
                    <p className="text-sm font-medium leading-6 text-[#171717]/65">
                      {cert.organization}
                    </p>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.title} certificate`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-lg text-white transition-all duration-300 hover:bg-[#c84b08]"
                  >
                    ↗
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          7. EDUCATION
      ===================================================== */}

      <section id="education" className="bg-[#f5f2ea] py-28">
        <div className="mx-auto max-w-7xl px-6">

          <p className="text-sm font-semibold uppercase tracking-widest text-[#c84b08]">
            Academic Background
          </p>

          <h2 className="mt-3 text-5xl font-bold md:text-6xl">
            Education
          </h2>

          <div className="mt-14 space-y-5">

            {education.map((item, index) => (

              <div
                key={item.degree}
                className="rounded-2xl border border-black/10 bg-white p-7 transition hover:border-[#c84b08]/40 md:p-8"
              >

                <div className="grid items-start gap-6 md:grid-cols-[80px_1fr_auto]">

                  <span className="font-mono font-semibold text-[#c84b08]">
                    0{index + 1}
                  </span>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {item.degree}
                    </h3>

                    <p className="mt-2 font-medium text-[#55514b]">
                      {item.institute}
                    </p>

                    <p className="mt-1 text-[#77716a]">
                      {item.location}
                    </p>

                  </div>

                  <div className="md:text-right">

                    <p className="text-sm text-[#77716a]">
                      {item.period}
                    </p>

                    <p className="mt-2 font-semibold text-[#c84b08]">
                      {item.result}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          8. ACHIEVEMENTS
      ===================================================== */}

      <section id="achievements" className="bg-[#eeece5] py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14">

            <p className="text-sm font-semibold uppercase tracking-widest text-[#c84b08]">
              Recognition
            </p>

            <h2 className="mt-3 text-5xl font-bold md:text-6xl">
              Achievements
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* ACHIEVEMENT 01 */}

            <div className="rounded-2xl bg-[#171717] p-8 text-white transition hover:-translate-y-1">

              <div className="flex items-start justify-between">

                <span className="text-sm font-semibold text-[#e88b5f]">
                  01
                </span>

                <span className="text-sm text-gray-400">
                  23 Sept 2026
                </span>

              </div>

              <div className="mt-8 text-4xl">
                🏆
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                1st Prize Winner
              </h3>

              <p className="mt-2 font-semibold text-[#e88b5f]">
                Latest Trends in Clean Energy Vehicles
              </p>

              <p className="mt-4 leading-7 text-gray-400">
                Secured first position in a competition focused on emerging
                developments and trends in clean energy vehicles.
              </p>

            </div>

            {/* ACHIEVEMENT 02 */}

            <div className="rounded-2xl border border-black/10 bg-white p-8 transition hover:-translate-y-1">

              <div className="flex items-start justify-between">

                <span className="text-sm font-semibold text-[#c84b08]">
                  02
                </span>

                <span className="text-sm text-[#77716a]">
                  Dec 2025
                </span>

              </div>

              <div className="mt-8 text-4xl">
                ◇
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Patent Published
              </h3>

              <p className="mt-2 font-semibold text-[#c84b08]">
                BI-COPTER
              </p>

              <p className="mt-4 leading-7 text-[#66615b]">
                Published a patent based on the development of a two-rotor
                aerial vehicle.
              </p>

            </div>

            {/* ACHIEVEMENT 03 */}

            <div className="rounded-2xl border border-black/10 bg-white p-8 transition hover:-translate-y-1">

              <div className="flex items-start justify-between">

                <span className="text-sm font-semibold text-[#c84b08]">
                  03
                </span>

                <span className="text-sm text-[#77716a]">
                  Dec 2022
                </span>

              </div>

              <div className="mt-8 text-4xl">
                🥉
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Mathematics Quiz
              </h3>

              <p className="mt-2 font-semibold text-[#c84b08]">
                3rd Prize Winner
              </p>

              <p className="mt-4 leading-7 text-[#66615b]">
                Secured third prize in a Mathematics Quiz competition at
                Silli Polytechnic, Silli.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          9. CONTACT
      ===================================================== */}

      <section id="contact" className="bg-[#171717] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-[#e88b5f]">
                Get In Touch
              </p>

              <h2 className="mt-4 text-5xl font-bold tracking-[-0.04em] md:text-6xl">
                Let&apos;s connect.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
                I am open to opportunities, technical discussions,
                engineering projects and learning experiences related to
                electrical engineering and emerging energy technologies.
              </p>

              <div className="mt-10 space-y-5">

                <a
                  href="mailto:sonupandit6200@gmail.com"
                  className="flex items-center gap-4 text-gray-300 transition hover:text-[#e88b5f]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    ✉
                  </span>

                  sonupandit6200@gmail.com
                </a>

                <a
                  href="tel:+916200424968"
                  className="flex items-center gap-4 text-gray-300 transition hover:text-[#e88b5f]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    ☎
                  </span>

                  +91 62004 24968
                </a>

                <a
                  href="https://www.linkedin.com/in/sonu-pan2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 transition hover:text-[#e88b5f]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    in
                  </span>

                  LinkedIn
                </a>

                <a
                  href="https://github.com/sonupandit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 transition hover:text-[#e88b5f]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    &lt;/&gt;
                  </span>

                  GitHub
                </a>

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex items-center lg:justify-end">

              <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">

                <p className="text-sm font-semibold uppercase tracking-widest text-[#e88b5f]">
                  Areas of Interest
                </p>

                <div className="mt-7 space-y-4">

                  {[
                    "Power Systems",
                    "Smart Grid",
                    "Renewable Energy",
                    "Electric Vehicles",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0"
                    >

                      <span className="text-gray-300">
                        {item}
                      </span>

                      <span className="text-[#e88b5f]">
                        →
                      </span>

                    </div>

                  ))}

                </div>

                <a
                  href="mailto:sonupandit6200@gmail.com"
                  className="mt-8 inline-flex w-full justify-center rounded-xl bg-white px-6 py-4 font-semibold text-[#171717] transition hover:bg-[#e88b5f]"
                >
                  Send Me an Email
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/10 bg-[#171717]">

        <div className="mx-auto max-w-7xl px-6 py-7">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-gray-500">
              © 2026 Sonu Pandit. All rights reserved.
            </p>

            <p className="text-sm text-gray-500">
              Electrical Engineering • Power Systems • Smart Grid
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}