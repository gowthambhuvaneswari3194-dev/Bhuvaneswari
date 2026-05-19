"use client";

import { motion } from "framer-motion";

export default function Home() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "API Integration",
    "VS Code",
    "Java",
    "Python",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white overflow-hidden relative">

      {/* Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <div className="flex flex-col md:flex-row items-center gap-10">

            <motion.img
              whileHover={{ scale: 1.08 }}
              src="/BHUVI.jpeg"
              alt="profile"
              className="w-44 h-44 rounded-full border-4 border-pink-500 shadow-2xl object-cover"
            />

            <div className="text-center md:text-left">

              <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Bhuvaneswari S
              </h1>

              <p className="text-2xl mt-3 text-gray-300">
                Frontend Developer | Next.js Developer
              </p>

              {/* Contact Details */}
              <div className="mt-6 space-y-2 text-gray-300 text-lg">
                <p>📍 Address: Namakkal</p>
                <p>📞 Phone:7358791857</p>
                <p>📧 Email: gowthambhuvaneswari3194@gmail.com</p>
                <p>🎓 College: Paavai Polytechnic College</p>
              </div>

            </div>

          </div>

        </motion.div>

        {/* About */}
        <motion.section
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            About Me
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-9">
            Passionate about building my tiny online shop.
            Starting small, growing with purpose every day.
            Focused on quality, creativity, and customer happiness ✨.
          </p>

        </motion.section>

        {/* Project Section */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            My Project
          </h2>

          <div className="mt-6 text-lg text-gray-300 leading-9">

            <h3 className="text-2xl font-semibold text-white mb-4">
              Tiny Online Shop
            </h3>

            <p>
              A small online shopping website where users can order
              daily small products like pencils, pens, colour crayons,
              A4 sheets, 1 rupee shampoo packets, rings, and many
              other useful items.
            </p>

          </div>

        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-5 rounded-2xl text-center text-lg font-semibold shadow-xl"
              >
                {skill}
              </motion.div>
            ))}

          </div>

        </motion.section>

      </div>

    </main>
  );
}