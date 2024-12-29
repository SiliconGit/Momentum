import { FaTasks, FaBell, FaSyncAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-8 relative h-screen">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 lexend-500">
          Manage Your <span className="text-blue-500">Tasks</span> with Ease
        </h1>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mb-10 lexend-200">
          Your productivity companion designed to help you stay on top of tasks.
          Add, track, and complete your to-dos seamlessly.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium">
            <Link href="/todo">Get Started</Link>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-medium">
            <Link href="/about">Learn More</Link>
          </button>
        </div>
      </main>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-gray-800 text-center text-gray-300"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <FaTasks className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-4">Task Management</h3>
            <p>Effortlessly organize your tasks and priorities.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <FaBell className="text-yellow-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-4">Reminders</h3>
            <p>Get notified about important deadlines and events.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <FaSyncAlt className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-4">Cross-Platform</h3>
            <p>Access your tasks anywhere, anytime on any device.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gray-900 text-center text-gray-300"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 lexend-600">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-8 lexend-400">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-md">
            <p>
              "This app has changed the way I organize my day. It’s super
              intuitive and easy to use!"
            </p>
            <h3 className="text-xl font-semibold mt-4">John Doe</h3>
            <p>Productivity Expert</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-md">
            <p>
              "I love the reminders feature. I never miss a deadline anymore!"
            </p>
            <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
            <p>Freelancer</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 bg-gray-800 text-center text-gray-300"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 lexend-600">
          Pricing
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 px-4 sm:px-8 lexend-400">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg line-through">
            <h3 className="text-xl font-semibold mb-4 line-through">
              Basic Plan
            </h3>
            <p>$9.99/month</p>
            <ul className="mt-4">
              <li>Task Management</li>
              <li>Email Reminders</li>
              <li>Cross-Platform Sync</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg line-through">
            <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
            <p>$19.99/month</p>
            <ul className="mt-4">
              <li>Task Management</li>
              <li>Push Notifications</li>
              <li>Advanced Analytics</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg line-through">
            <h3 className="text-xl font-semibold mb-4">Enterprise Plan</h3>
            <p>Custom Pricing</p>
            <ul className="mt-4">
              <li>Custom Features</li>
              <li>Dedicated Support</li>
              <li>Team Collaboration Tools</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              BEST PLAN!!
            </h3>
            <p className="text-lg text-white">Completely free</p>
            <ul className="mt-4 text-gray-300">
              <li className="mb-2">WE ARE NOT LIKE OTHERS</li>
              <li className="mb-2">IT IS OPEN-SOURCE</li>
              <li className="mb-2">& WELL TESTED</li>
              <li className="text-2xl font-semibold text-center mt-4 text-blue-500">
                Enjoy our product
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gray-900 text-center text-gray-300"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact Us</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-8 px-4 sm:px-8">
          <div className="flex items-center justify-center">
            <MdOutlineEmail className="text-xl text-blue-500" />
            <p className="mx-1">Staticcodersilicon@gmail.com</p>
          </div>
          <div className="flex items-center justify-center">
            <AiFillPhone className="text-xl text-blue-500" />
            <p className="mx-1">**********</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
