import { FaBrain, FaHammer, FaRocket } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  return (
    <div className="text-white min-h-screen flex flex-col bg-gray-900">
      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 relative h-auto">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-6 lexend-500">
          The <span className="text-blue-500">Epic</span> Journey of Building
          This App
        </h1>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mb-10 lexend-200">
          From sleepless nights to questionable decisions, this app didn’t just
          come to life—it was **born** out of sheer willpower, caffeine, and
          some very serious AI consultations.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 justify-center sm:space-y-0">
          <Link href="#process">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium">
              ME Struggle was Real!
            </button>
          </Link>
          <Link href="#ai">
            <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-medium">
              How almost I gave
            </button>
          </Link>
        </div>
      </main>

      {/* The Process Section */}
      <section
        id="process"
        className="py-20 bg-gray-800 text-center text-gray-300"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          The Process (A.k.a. The Struggle)
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <FaBrain className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-4">Idea Phase</h3>
            <p>
              Waking up at 3 AM with an idea so brilliant, it felt like I
              invented Wi-Fi.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <FaHammer className="text-yellow-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-4">Development</h3>
            <p>
              Endless lines of code, broken keyboards, and a couple of minor
              nervous breakdowns.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <FaRocket className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-4">Launch</h3>
            <p>
              Like a rocket to the moon... or maybe just a small sparkler on
              Earth. Who cares, it worked!
            </p>
          </div>
        </div>
      </section>

      {/* AI Collaboration Section */}
      <section id="ai" className="py-20 bg-gray-900 text-center text-gray-300">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          How AI Helped (Or Didn't)
        </h2>
        <p className="text-base sm:text-lg mx-4 max-w-2xl">
          There were days I’d ask AI, "What’s wrong with my code?" and the
          answer was always, "Error 404: I don't know either." But then, like a
          true champion, AI provided solutions that were... let’s just say "very
          interesting." It got me here, so I’m thankful—sort of.
        </p>
      </section>

      {/* Conclusion Section */}
      <section
        id="conclusion"
        className="py-20 bg-gray-800 text-center text-gray-300"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          The Final Verdict
        </h2>
        <p className="text-lg sm:text-xl mb-4 mx-4">
          Despite all odds, caffeine, and AI-induced confusion, **Momentum** is
          here, and it’s ready to help you organize your life. Or at least make
          it look like you have your life together.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium">
          <Link href="/todo">
            Start Using Momentum (Or Not, I’m Not Your Boss)
          </Link>
        </button>
      </section>
    </div>
  );
}
