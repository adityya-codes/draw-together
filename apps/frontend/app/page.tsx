
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-100 via-pink-100 to-blue-100">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-800">Draw Together</h1>

        <div className="space-x-4">
          <Link
            href="/signin"
            className="text-gray-700 hover:text-black transition"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-80 transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 mt-24">

        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl">
          Collaborate and Create in Real-Time
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Draw Together lets you sketch, brainstorm, and design live with friends
          or teammates — instantly and beautifully.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/signup"
            className="bg-black text-white px-6 py-3 rounded-xl text-lg font-medium shadow-lg hover:scale-105 transition"
          >
            Start Drawing 
          </Link>

          <Link
            href="/signin"
            className="px-6 py-3 rounded-xl text-lg font-medium border border-gray-300 hover:bg-white transition text-black"
          >
            Sign In
          </Link>
          
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-32 px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-black">

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Real-Time Sync</h3>
            <p className="text-gray-600">
              See strokes appear instantly across all connected users.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Smooth Canvas</h3>
            <p className="text-gray-600">
              A responsive drawing experience built for creativity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Private Rooms</h3>
            <p className="text-gray-600">
              Create secure drawing rooms for friends or teams.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}