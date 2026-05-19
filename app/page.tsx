import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function ResumePage() {
  const skills = [
    "Next.js",
    "React.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Java",
    "Python",
    "TypeScript",
  ];

  const projects = [
    {
      title: "Online Rental Car Booking System",
      description:
        "Built a responsive car booking platform with vehicle listing, booking management, and user-friendly UI using Next.js and Tailwind CSS.",
    },
    {
      title: "E-Commerce Website",
      description:
        "Developed a modern shopping website with product pages, cart functionality, and responsive layouts.",
    },
  ];

  return (
    <main
      className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-100 to-gray-200 py-10 px-4`}
    >
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 text-white p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
                Bhuaneswari
              </h1>

              <p className="text-lg text-gray-300 mt-3">
                Full Stack Developer / Student
              </p>
            </div>

            <div className="space-y-2 text-sm md:text-base">
              <p>📍 Namakkal, Tamil Nadu, India</p>
              <p>📧 gowthambhuaneswari3194@gmail.com</p>
              <p>📞 +91 7358791857</p>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-3">
          {/* Sidebar */}
          <aside className="bg-gray-50 p-8 border-r">
            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-5 border-b pb-2">
                Skills
              </h2>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-700 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-5 border-b pb-2">
                Education
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    Diploma in Computer Science
                  </h3>

                  <p className="text-gray-600 text-sm mt-1">
                    Information Technology
                  </p>

                  <p className="text-gray-500 text-sm">
                    2023 - Present
                  </p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-5 border-b pb-2">
                Languages
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  ✅ English
                </li>

                <li className="flex items-center gap-2">
                  ✅ Tamil
                </li>
              </ul>
            </section>
          </aside>

          {/* Main Content */}
          <section className="md:col-span-2 p-8 md:p-10">
            {/* Profile */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">
                Profile
              </h2>

              <p className="text-gray-700 leading-8 text-justify">
                Passionate and motivated student with strong interest in
                full-stack web development and modern frontend technologies.
                Skilled in building responsive web applications using Next.js,
                React.js, Tailwind CSS, and TypeScript. Eager to learn new
                technologies, solve real-world problems, and contribute to
                innovative software projects.
              </p>
            </section>

            {/* Experience */}
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Experience
              </h2>

              <div className="bg-gray-50 border rounded-2xl p-6 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800">
                      Next.js Developer Intern
                    </h3>

                    <p className="text-blue-600 font-medium mt-1">
                      Internship
                    </p>
                  </div>

                  <span className="text-sm text-gray-500">
                    2025 - Present
                  </span>
                </div>

                <ul className="list-disc ml-6 mt-5 text-gray-700 space-y-3 leading-7">
                  <li>
                    Built responsive web applications using Next.js and
                    Tailwind CSS.
                  </li>

                  <li>
                    Developed e-commerce features including product listings,
                    shopping cart, and UI components.
                  </li>

                  <li>
                    Learned API integration, component-based architecture, and
                    frontend optimization techniques.
                  </li>

                  <li>
                    Improved problem-solving and teamwork skills through
                    project-based development.
                  </li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Projects
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300"
                  >
                    <h3 className="text-xl font-semibold text-slate-800">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mt-3 leading-7 text-sm">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}