"use client";

import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";

const projects = [
  {
    title: "AI-Based Power System Monitor and Protection",
    subtitle: "Intelligent electrical fault monitoring",
    date: "Apr 2026",
    category: "Power Systems · AI",
    technologies: ["Machine Learning", "ESP32", "Sensors", "Relay"],
    description:
      "An intelligent power-system monitoring and protection project designed to identify abnormal electrical operating conditions using measured parameters.",
    highlights: [
      "Worked with voltage and current parameters for electrical condition monitoring.",
      "Explored data preprocessing and machine-learning-based fault classification.",
      "Focused on fault identification and improved power-system reliability.",
    ],
    details:
      "The project explores how measured electrical data can help distinguish normal operating conditions from fault conditions. The objective is to demonstrate how intelligent monitoring can support electrical protection and analysis.",
  },
  {
    title: "BI-Copter",
    subtitle: "Two-rotor aerial vehicle",
    date: "Jun 2025",
    category: "Embedded Systems · Control",
    technologies: [
      "Arduino",
      "BLDC Motors",
      "ESC",
      "MPU6050",
      "PID Control",
    ],
    description:
      "A two-rotor aerial vehicle project focused on balancing, orientation sensing, and motor-speed control using embedded electronics.",
    highlights: [
      "Integrated BLDC motors, electronic speed controllers, and Arduino.",
      "Used orientation feedback to study balance and flight control.",
      "Worked on PID tuning, hardware integration, and troubleshooting.",
    ],
    details:
      "The project involved integrating electronic and mechanical components and studying feedback-based motor-speed adjustment for stability and movement control.",
  },
  {
    title: "Voice-Controlled Home Automation Without Wi-Fi",
    subtitle: "Offline voice recognition and appliance switching",
    date: "Jun 2025",
    category: "Electrical Engineering · Home Automation",
    technologies: [
      "Ai-Thinker VC-02",
      "Offline Voice Recognition",
      "4-Channel Relay",
      "GPIO Control",
      "Electrical Wiring",
    ],
    description:
      "Developed a voice-controlled home automation prototype using the Ai-Thinker VC-02 offline speech-recognition module and a four-channel relay module to operate electrical appliances without Wi-Fi or internet connectivity.",
    highlights: [
      "Configured predefined voice commands to control connected appliances.",
      "Connected VC-02 GPIO outputs directly to relay inputs for appliance switching.",
      "Tested light ON/OFF commands and checked responses to invalid commands.",
    ],
    details:
      "The VC-02 processes trained voice commands locally and activates the corresponding GPIO output. The relay module then switches the connected appliance. The project report records successful command tests, control of up to four appliance channels, a response time below one second, and reported recognition accuracy above 95% in a quiet environment.",
  },
];

const experiences = [
  {
    type: "INDUSTRIAL INTERNSHIP",
    organization: "Tenughat Thermal Power Station (TTPS)",
    role: "Electrical Engineering Intern",
    date: "22 Jun 2026 – 28 Jul 2026",
    location: "Lalpania, Bokaro, Jharkhand",
    description:
      "Gained practical exposure to thermal power generation, electrical equipment, plant operations, and the role of electrical systems in power production.",
    skills: [
      "Generators",
      "Transformers",
      "Switchgear",
      "Protection Systems",
      "Power Generation",
      "Boilers & Turbines",
    ],
    certificate:
      "https://drive.google.com/file/d/1P-PDspGKozfOhcC-hJa5OQrwcEE-qHA6/view",
  },
  {
    type: "TECHNICAL TRAINING",
    organization: "Electric Loco Shed, Bokaro",
    role: "Electrical Maintenance Trainee",
    date: "26 Aug 2024 – 25 Sept 2024",
    location: "Bokaro, Jharkhand",
    description:
      "Gained practical exposure to electric locomotive equipment, maintenance practices, inspection procedures, and electrical safety.",
    skills: [
      "Traction Motors",
      "Transformers",
      "Converters",
      "Circuit Breakers",
      "Pantographs",
      "Braking Systems",
    ],
    certificate:
      "https://drive.google.com/file/d/14hAO30T5URP18BkkUP_-7eyz0Bsp88qT/view",
  },
];

const certifications = [
  {
    title: "Cybersecurity Analyst Job Simulation",
    organization: "Tata Group | Forage",
    date: "Jul 2026",
    category: "Professional",
    link: "https://drive.google.com/file/d/1y_pNOOls2qlNeOJgDgv31pXiTS30mM51/view",
    symbol: "CY",
  },
  {
    title: "LPU Hackathon 2.0",
    organization: "Lovely Professional University",
    date: "Apr 2026",
    category: "Hackathon",
    link: "https://drive.google.com/file/d/1UBmEy84REl8fpYgw9EDszzn2vWKu1XlO/view?usp=drive_link",
    symbol: "LPU",
  },
  {
    title: "MATLAB Onramp",
    organization: "MathWorks Training Services",
    date: "Jan 2026",
    category: "Technical",
    link: "https://drive.google.com/file/d/1SqMAwKXvoHOkgj80YRVP7hbVrQWHXdO_/view",
    symbol: "MAT",
  },
  {
    title: "Programming in C",
    organization: "Infosys Springboard",
    date: "Jan 2026",
    category: "Technical",
    link: "https://drive.google.com/file/d/1ls78Z1YZ6DC1un4pAIcKwXSgKMbtX-if/view",
    symbol: "C",
  },
];

const education = [
  {
    degree: "B.Tech in Electrical Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    date: "Aug 2025 – Present",
    result: "CGPA: 8.53",
  },
  {
    degree: "Diploma in Electrical Engineering",
    institution: "Silli Polytechnic",
    location: "Silli, Ranchi, Jharkhand",
    date: "Sep 2022 – Jun 2025",
    result: "80.44%",
  },
  {
    degree: "Matriculation",
    institution: "Krishna Sudarsan Central School (CCL)",
    location: "Bokaro, Jharkhand",
    date: "Mar 2021 – Apr 2022",
    result: "87.4%",
  },
];

const achievements = [
  {
    
    date: "23 SEP 2026",
    title: "First Prize Winner",
    subtitle: "Latest Trends in Clean Energy Vehicles",
    description:
      "Received first prize at an event focused on emerging developments in clean energy vehicles.",
    type: "image" as const,
    image: "/achievements/clean-energy-prize.jpg",
    link: "/achievements/clean-energy-prize.jpg",
    button: "View Achievement Photo",
  },
  {
   
    date: "DEC 2025",
    title: "Patent Published",
    subtitle: "BI-COPTER",
    description:
      "Patent-related achievement associated with the BI-COPTER project.",
    type: "drive" as const,
    preview:
      "https://drive.google.com/file/d/1S3cCfgLQdm725tJ9thmndDsDpdiySz2l/preview",
    link:
      "https://drive.google.com/file/d/1S3cCfgLQdm725tJ9thmndDsDpdiySz2l/view",
    button: "View Patent Certificate",
  },
  {

    date: "DEC 2022",
    title: "Third Prize Winner",
    subtitle: "Mathematics Quiz — Silli Polytechnic",
    description:
      "Secured third prize in a Mathematics Quiz at Silli Polytechnic.",
    type: "drive" as const,
    preview:
      "https://drive.google.com/file/d/1wAaMJPtP0-kgA3Vxt7Yyf57plKew-hfq/preview",
    link:
      "https://drive.google.com/file/d/1wAaMJPtP0-kgA3Vxt7Yyf57plKew-hfq/view",
    button: "View Quiz Certificate",
  },
];

const skillGroups = [
  {
    title: "Electrical Engineering",
    icon: "ϟ",
    skills: [
      "Power Systems",
      "Electrical Machines",
      "Power Electronics",
      "Electrical Protection",
      "Transformers",
      "Switchgear",
    ],
  },
  {
    title: "Engineering Software",
    icon: "⌘",
    skills: ["MATLAB", "Simulink", "Proteus", "Arduino IDE"],
  },
  {
    title: "Programming",
    icon: "</>",
    skills: ["C", "C++", "Python"],
  },
  {
    title: "Embedded Systems",
    icon: "▣",
    skills: ["Arduino", "ESP32", "Sensors", "Relay Control"],
  },
  {
    title: "Areas of Interest",
    icon: "↗",
    skills: [
      "Smart Grid",
      "Renewable Energy",
      "Electric Vehicles",
      "Power Generation",
    ],
  },
  {
    title: "Professional Skills",
    icon: "◎",
    skills: [
      "Problem Solving",
      "Teamwork",
      "Analytical Thinking",
      "Adaptability",
    ],
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#c84b08]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#666157] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-[#ddd5c8] px-3 py-1.5 text-xs font-medium text-[#514b42]">
      {children}
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Certifications", "#certifications"],
    ["Education", "#education"],
    ["Achievements", "#achievements"],
    ["Contact", "#contact"],
  ];

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href =
      `mailto:sonupandit6200@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-[#f5f2ea] text-[#171717]">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#dfd8cb] bg-[#f5f2ea]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a
            href="#home"
            className="shrink-0 text-xl font-extrabold tracking-tight sm:text-2xl"
          >
            Sonu Pandit
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-[#d8d0c3] px-3 py-2 text-sm font-semibold md:hidden"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute left-0 right-0 top-full flex-col gap-1 border-b border-[#dfd8cb] bg-[#f5f2ea] p-5 md:static md:flex md:flex-row md:items-center md:gap-3 md:border-0 md:bg-transparent md:p-0`}
          >
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-2 text-sm font-medium text-[#514b42] transition hover:bg-[#eae5da] hover:text-[#c84b08]"
              >
                {label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-xl bg-[#171717] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#c84b08] md:mt-0"
            >
              View CV ↗
            </a>
          </nav>
        </div>
      </header>

      {/* HOME */}
      <section
        id="home"
        className="scroll-mt-24 px-5 py-16 sm:px-8 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#c84b08] sm:text-sm">
              Electrical Engineering Student
            </p>

            <h1 className="whitespace-nowrap text-4xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Sonu Pandit
            </h1>

            <h2 className="mt-7 max-w-2xl text-xl font-bold leading-snug sm:text-2xl md:text-3xl">
              Electrical Engineer{" "}
              <span className="text-[#c84b08]">|</span> Power Systems
              Engineer <span className="text-[#c84b08]">|</span> EV Engineer
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#625c52] sm:text-lg">
              I am <strong className="text-[#171717]">Sonu Pandit</strong>,
              currently pursuing my B.Tech in Electrical Engineering at{" "}
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

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-[#171717] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#c84b08]"
              >
                Explore Projects ↘
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#8c8375] px-6 py-4 text-sm font-bold transition hover:bg-white"
              >
                Download CV ↗
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-[#d8d0c3] bg-white px-6 py-4 text-sm font-bold transition hover:border-[#c84b08]"
              >
                Let&apos;s Connect →
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#625c52]">
              <a
                href="mailto:sonupandit6200@gmail.com"
                className="hover:text-[#c84b08]"
              >
                ✉ Email
              </a>
              <a
                href="tel:+916200424968"
                className="hover:text-[#c84b08]"
              >
                ☎ Phone
              </a>
              <a
                href="https://www.linkedin.com/in/sonu-pan2"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c84b08]"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/sonupandit"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c84b08]"
              >
                GitHub ↗
              </a>
            </div>
          </div>

       {/* PROFILE PHOTO */}
<div className="profile-animation mx-auto w-full max-w-md">
  <div className="rounded-[2rem] border border-[#ddd4c5] p-3">
    <div className="rounded-[1.6rem] border border-[#e8b99b] p-2">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-[#e8e3d9]">
        <Image
          src="/profile_square.png"
          alt="Sonu Pandit"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 400px"
          className="object-cover object-[50%_18%]"
        />
      </div>
    </div>
  </div>

  <p className="mt-5 text-center text-sm font-semibold text-[#625c52]">
    B.Tech Electrical Engineering
  </p>
</div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-24 border-y border-[#e3dccf] bg-[#eeece5] px-5 py-20 sm:px-8 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="A little about me"
            title="Engineering with purpose."
            description="Building a strong foundation in electrical engineering through academic learning, practical projects, and technical training."
          />

          <div>
            <p className="text-lg leading-8 text-[#625c52]">
              I am an Electrical Engineering student interested in
              understanding how electrical systems are designed, operated,
              monitored, and protected. My academic background and hands-on
              project work have helped me explore embedded systems, power
              systems, and electrical control.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#625c52]">
              I aim to keep developing practical skills and apply engineering
              concepts to real-world challenges in power generation, smart
              grids, renewable energy, and electric mobility.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Power Systems",
                "Smart Grid",
                "Renewable Energy",
                "Electric Vehicles",
              ].map((interest) => (
                <div
                  key={interest}
                  className="flex items-center gap-3 rounded-xl border border-[#dcd4c6] bg-[#f8f6f0] p-4 transition hover:-translate-y-1 hover:border-[#c84b08]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#171717] text-sm font-bold text-white">
                    ↗
                  </span>
                  <span className="font-semibold">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Technical capabilities"
            title="Skills & tools."
            description="Core electrical engineering knowledge combined with programming, embedded systems, and engineering software."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-[#ded7cb] bg-[#f8f6f0] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#c84b08]/60 hover:shadow-lg hover:shadow-[#171717]/5"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9e0d2] text-lg font-bold text-[#c84b08]">
                    {group.icon}
                  </span>
                  <h3 className="text-lg font-bold">{group.title}</h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-24 border-y border-[#e3dccf] bg-[#eeece5] px-5 py-20 sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects."
            description="Electrical and embedded-system projects exploring monitoring, control, and practical engineering applications."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-[1.5rem] border border-[#dcd4c7] bg-[#f8f6f0] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#c84b08]/60 hover:shadow-lg hover:shadow-[#171717]/5 sm:p-8"
              >
                <div className="flex items-start justify-end">
                  <span className="rounded-full bg-[#e9e0d2] px-3 py-1.5 text-xs font-semibold text-[#76513b]">
                    {project.date}
                  </span>
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#c84b08]">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-2 font-semibold text-[#514b42]">
                  {project.subtitle}
                </p>

                <p className="mt-5 leading-7 text-[#625c52]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Tag key={technology}>{technology}</Tag>
                  ))}
                </div>

                <ul className="mt-6 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 leading-6 text-[#514b42]"
                    >
                      <span className="mt-1 text-lg font-bold text-[#c84b08]">
                        •
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <details className="group mt-6 border-t border-[#ded7cb] pt-5">
                  <summary className="cursor-pointer list-none font-bold">
                    <span className="flex items-center justify-between gap-4">
                      View project details
                      <span className="text-xl text-[#c84b08] transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>

                  <p className="mt-4 leading-7 text-[#625c52]">
                    {project.details}
                  </p>
                </details>

                <div className="mt-auto border-t border-[#ded7cb] pt-5">
                  <a
                    href="#contact"
                    className="inline-flex rounded-xl bg-[#171717] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c84b08]"
                  >
                    Discuss Project ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Industrial exposure"
            title="Experience."
            description="Learning through real-world exposure to power generation, electrical equipment, and maintenance practices."
          />

          <div className="relative ml-3 space-y-8 border-l-2 border-[#d8c9b4] pl-7 sm:ml-5 sm:pl-10">
            {experiences.map((experience) => (
              <article key={experience.organization} className="relative">
                <span className="absolute -left-[37px] top-7 h-5 w-5 rounded-full border-4 border-[#f5f2ea] bg-[#c84b08] sm:-left-[50px]" />

                <div className="rounded-[1.5rem] border border-[#ded7cb] bg-[#f8f6f0] p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#c84b08]">
                      {experience.type}
                    </span>
                    <span className="rounded-full bg-[#e9e0d2] px-3 py-1.5 text-xs font-semibold">
                      {experience.date}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold sm:text-3xl">
                    {experience.role}
                  </h3>

                  <p className="mt-2 text-lg font-semibold text-[#514b42]">
                    {experience.organization}
                  </p>

                  <p className="mt-2 text-sm text-[#82786a]">
                    {experience.location}
                  </p>

                  <p className="mt-5 max-w-4xl leading-7 text-[#625c52]">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>

                  <div className="mt-7 border-t border-[#ded7cb] pt-5">
                    <a
                      href={experience.certificate}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#171717] px-5 py-3 text-sm font-bold transition hover:bg-[#171717] hover:text-white"
                    >
                      View Training Certificate ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section
        id="certifications"
        className="scroll-mt-24 border-y border-[#e3dccf] bg-[#f5f2ea] px-5 py-20 sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Learning & development"
            title="Certifications."
            description="Open a certificate to view it online, or open the original document."
          />

          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certificate) => {
              const fileId = certificate.link.match(/\/d\/([^/]+)/)?.[1];
              const previewUrl = fileId
                ? `https://drive.google.com/file/d/${fileId}/preview`
                : certificate.link;

              return (
                <article
                  key={certificate.title}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-[1.6rem] border border-[#ded7cb] bg-[#f8f6f0] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c84b08]/70 hover:shadow-xl hover:shadow-[#171717]/10"
                >
                  {/* Certificate preview panel */}
                  <div className="relative h-56 overflow-hidden border-b border-[#ded7cb] bg-white sm:h-60">
                    <iframe
                      src={previewUrl}
                      title={`${certificate.title} certificate preview`}
                      loading="lazy"
                      className="h-full w-full bg-white"
                    />
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${certificate.title} certificate`}
                      className="absolute inset-0 flex items-center justify-center bg-[#171717]/0 opacity-0 transition duration-300 hover:bg-[#171717]/10 group-hover:opacity-100"
                    >
                      <span className="rounded-full bg-[#171717] px-4 py-2 text-sm font-bold text-white shadow-lg">
                        Open certificate ↗
                      </span>
                    </a>
                  </div>

                  {/* Certificate details */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-bold text-[#c84b08]">
                        {certificate.category} · {certificate.date}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-extrabold leading-snug tracking-tight text-[#171717] sm:text-2xl">
                      {certificate.title}
                    </h3>

                    <p className="mt-2 text-base text-[#625c52]">
                      {certificate.organization}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-3 pt-6">
                      <a
                        href={certificate.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#171717] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#c84b08]"
                      >
                        <span aria-hidden="true">◉</span> View Certificate
                      </a>

                      <a
                        href={certificate.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d8d0c3] px-4 py-3 text-sm font-bold text-[#171717] transition hover:border-[#c84b08] hover:bg-white"
                      >
                        ↗ PDF
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Academic background"
            title="Education."
            description="My academic journey in electrical engineering and foundational education."
          />

          <div className="space-y-4">
            {education.map((item) => (
              <article
                key={item.degree}
                className="grid gap-5 rounded-2xl border border-[#ded7cb] bg-[#f8f6f0] p-6 transition hover:-translate-y-1 hover:border-[#c84b08]/60 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8"
              >
                <div>
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <p className="mt-2 font-medium text-[#514b42]">
                    {item.institution}
                  </p>
                  <p className="mt-1 text-sm text-[#82786a]">
                    {item.location}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-sm font-semibold">{item.date}</p>
                  <p className="mt-2 inline-block rounded-full bg-[#e9e0d2] px-3 py-1.5 text-sm font-bold text-[#76513b]">
                    {item.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

   {/* ACHIEVEMENTS */}
<section
  id="achievements"
  className="scroll-mt-24 border-y border-[#e3dccf] bg-[#eeece5] px-5 py-20 sm:px-8 md:py-24"
>
  <div className="mx-auto max-w-7xl">
    <SectionHeading
      eyebrow="Milestones & recognition"
      title="Achievements."
      description="Awards and milestones that reflect my interest in engineering, innovation, and continuous learning."
    />

    <div className="grid items-start gap-7 md:grid-cols-2 xl:grid-cols-3">
      {/* ACHIEVEMENT 1 */}
      <article className="overflow-hidden rounded-[1.5rem] border border-[#dcd4c7] bg-[#f8f6f0] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Display the image directly without any button or zoom controls */}
        <div className="h-[320px] overflow-hidden bg-[#e9e0d2]">
<img
  src="/achievements/clean-energy-prize.png"
  alt="First Prize - Latest Trends in Clean Energy Vehicles"
  className="h-full w-full object-cover object-[center_20%]"
/>
</div>

        <div className="p-7 md:p-8">
          <p className="mb-5 text-sm font-semibold text-[#c84b08]">
            Achievement · Sep 2026
          </p>

          <h3 className="text-2xl font-bold leading-snug text-[#171717]">
            First Prize Winner
          </h3>

          <p className="mt-3 text-base leading-relaxed text-[#625c52]">
            Latest Trends in Clean Energy Vehicles
          </p>

          <p className="mt-4 text-sm leading-7 text-[#625c52]">
            Received first prize for presenting work related to emerging
            technologies and innovations in clean energy vehicles.
          </p>
        </div>
      </article>

      {/* ACHIEVEMENT 2 */}
      <article className="overflow-hidden rounded-[1.5rem] border border-[#dcd4c7] bg-[#f8f6f0] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Static document preview; no zoom controls */}
        <div className="h-[320px] overflow-hidden bg-[#e9e0d2] p-4">
          <iframe
            src="https://drive.google.com/file/d/1S3cCfgLQdm725tJ9thmndDsDpdiySz2l/preview?rm=minimal"
            title="BI-COPTER patent document"
            loading="lazy"
            tabIndex={-1}
            className="pointer-events-none h-full w-full border-0 bg-white"
          />
        </div>

        <div className="p-7 md:p-8">
          <p className="mb-5 text-sm font-semibold text-[#c84b08]">
            Innovation · Dec 2025
          </p>

          <h3 className="text-2xl font-bold leading-snug text-[#171717]">
            Patent Published
          </h3>

          <p className="mt-3 text-base leading-relaxed text-[#625c52]">
            BI-COPTER
          </p>

          <p className="mt-4 text-sm leading-7 text-[#625c52]">
            Patent publication associated with the BI-COPTER project.
          </p>

          <a
            href="https://drive.google.com/file/d/1S3cCfgLQdm725tJ9thmndDsDpdiySz2l/view"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#171717] px-6 py-3 font-semibold text-white transition hover:bg-[#c84b08]"
          >
            View Patent ↗
          </a>
        </div>
      </article>

      {/* ACHIEVEMENT 3 */}
      <article className="overflow-hidden rounded-[1.5rem] border border-[#dcd4c7] bg-[#f8f6f0] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Static document preview; no zoom controls */}
        <div className="h-[320px] overflow-hidden bg-[#e9e0d2] p-4">
          <iframe
            src="https://drive.google.com/file/d/1wAaMJPtP0-kgA3Vxt7Yyf57plKew-hfq/preview?rm=minimal"
            title="Mathematics Quiz certificate"
            loading="lazy"
            tabIndex={-1}
            className="pointer-events-none h-full w-full border-0 bg-white"
          />
        </div>

        <div className="p-7 md:p-8">
          <p className="mb-5 text-sm font-semibold text-[#c84b08]">
            Academic · Dec 2022
          </p>

          <h3 className="text-2xl font-bold leading-snug text-[#171717]">
            Third Prize Winner
          </h3>

          <p className="mt-3 text-base leading-relaxed text-[#625c52]">
            Mathematics Quiz · Silli Polytechnic
          </p>

          <p className="mt-4 text-sm leading-7 text-[#625c52]">
            Secured third prize in a Mathematics Quiz organized at Silli
            Polytechnic.
          </p>

          <a
            href="https://drive.google.com/file/d/1wAaMJPtP0-kgA3Vxt7Yyf57plKew-hfq/view"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#171717] px-6 py-3 font-semibold text-white transition hover:bg-[#c84b08]"
          >
            View Certificate ↗
          </a>
        </div>
      </article>
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 bg-[#171717] px-5 py-20 text-[#f8f6f0] sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Get in touch"
            title="Let's connect."
            description="I'm open to discussing electrical engineering projects, internships, and career opportunities. Feel free to reach out."
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <h3 className="mb-6 text-xl font-bold">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:sonupandit6200@gmail.com"
                  className="flex items-center gap-4 rounded-2xl bg-[#f8f6f0] p-5 text-[#171717] transition hover:bg-[#e9e0d2]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e9e0d2] text-xl">
                    ✉
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-[#82786a]">
                      Email
                    </span>
                    <span className="mt-1 block break-all font-semibold">
                      sonupandit6200@gmail.com
                    </span>
                  </span>
                </a>

                <a
                  href="tel:+916200424968"
                  className="flex items-center gap-4 rounded-2xl bg-[#f8f6f0] p-5 text-[#171717] transition hover:bg-[#e9e0d2]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e9e0d2] text-xl">
                    ☎
                  </span>
                  <span>
                    <span className="block text-sm text-[#82786a]">
                      Phone
                    </span>
                    <span className="mt-1 block font-semibold">
                      +91 62004 24968
                    </span>
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/sonu-pan2"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-[#f8f6f0] p-5 text-[#171717] transition hover:bg-[#e9e0d2]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e9e0d2] text-lg font-black">
                    in
                  </span>
                  <span>
                    <span className="block text-sm text-[#82786a]">
                      LinkedIn
                    </span>
                    <span className="mt-1 block font-semibold">
                      Sonu Pandit ↗
                    </span>
                  </span>
                </a>

                <a
                  href="https://github.com/sonupandit"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-[#f8f6f0] p-5 text-[#171717] transition hover:bg-[#e9e0d2]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e9e0d2] text-sm font-black">
                    GH
                  </span>
                  <span>
                    <span className="block text-sm text-[#82786a]">
                      GitHub
                    </span>
                    <span className="mt-1 block font-semibold">
                      sonupandit ↗
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-[#f8f6f0] p-6 text-[#171717] sm:p-8">
              <h3 className="text-2xl font-bold">Send a Message</h3>

              <p className="mt-2 leading-6 text-[#625c52]">
                Complete the form below. Your email application will open with
                the message details ready to send.
              </p>

              <form onSubmit={handleContactSubmit} className="mt-7 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#d8d0c3] bg-white px-4 py-3.5 outline-none transition focus:border-[#c84b08] focus:ring-2 focus:ring-[#c84b08]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#d8d0c3] bg-white px-4 py-3.5 outline-none transition focus:border-[#c84b08] focus:ring-2 focus:ring-[#c84b08]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full resize-y rounded-xl border border-[#d8d0c3] bg-white px-4 py-3.5 outline-none transition focus:border-[#c84b08] focus:ring-2 focus:ring-[#c84b08]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#171717] px-5 py-4 font-bold text-white transition hover:bg-[#c84b08]"
                >
                  Send Message ↗
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#171717] px-5 pb-8 text-[#f8f6f0] sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="text-lg font-bold">
            Sonu Pandit
          </a>

          <p className="text-sm text-white/60">
            © 2026 Sonu Pandit. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-sm font-semibold transition hover:text-[#e9a27c]"
          >
            Back to top ↑
          </a>
        </div>

        <p className="mx-auto mt-4 max-w-7xl text-xs text-white/45">
          Electrical Engineering · Power Systems · Smart Grid · Renewable
          Energy · Electric Vehicles
        </p>
      </footer>
    </main>
  );
}