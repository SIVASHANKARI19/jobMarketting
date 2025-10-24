import React, { useState } from "react";

export default function App() {
  const [skills, setSkills] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecommendations = async () => {
    if (!skills.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:5000/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skills }),
      });
      const data = await res.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center text-white p-6">
      {/* Header */}
      <header className="mt-10 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2 text-[#144fed]">
          AI Course Recommender
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          Find the perfect course for your skillset
        </p>
      </header>

      {/* Input Section */}
      <div className="w-full max-w-3xl black flex items-center justify-center mb-10 rounded-2xl shadow-xl overflow-hidden border border-black/20">
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Type your skills (e.g. Python, SQL, Data Analysis)"
          className="flex-1 bg-transparent text-black placeholder-gray-400 px-6  text-lg outline-none"
        />
        <button
          onClick={fetchRecommendations}
          className="bg-[#144fed] hover:opacity-90 transition-all px-8 py-4 font-semibold"
        >
          {loading ? "Loading..." : "Recommend"}
        </button>
      </div>

      {/* Loader */}
      {loading && (
        <div className="flex flex-col items-center mt-10">
          <div className="w-10 h-10 border-4 border-t-transparent border-cyan-400 rounded-full animate-spin"></div>
          <p className="text-gray-300 mt-3">Fetching best matches...</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && courses.length === 0 && (
        <p className="text-gray-500 mt-10 text-center text-lg">
          No recommendations yet. Enter your skills above 👆
        </p>
      )}

      {/* Course Cards */}
      <div className="grid gap-10 mt-10 w-full max-w-6xl sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:scale-[1.03] hover:shadow-cyan-500/20 transition-all duration-300"
          >
            {/* Course Image */}
            {/* <div className="relative w-full h-40 overflow-hidden">
              <img
                src={`https://source.unsplash.com/random/600x400?education,technology,learning&sig=${index}`}
                alt="course thumbnail"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </div> */}

            {/* Course Info */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-cyan-300 mb-1">
                {course.course}
              </h2>
              <p className="text-gray-400 text-sm mb-3">
                Offered by <span className="text-gray-200">{course.partner}</span>
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  ⭐ {course.rating || "N/A"}
                </span>
                <span className="text-gray-400 text-sm">
                  {course.reviewcount || "0"} reviews
                </span>
              </div>

              {/* Other details */}
              <div className="text-gray-300 text-sm space-y-2">
                <p>
                  <span className="font-semibold text-white">Level:</span>{" "}
                  {course.level || "Not specified"}
                </p>
                <p>
                  <span className="font-semibold text-white">Duration:</span>{" "}
                  {course.duration || "N/A"}
                </p>
                <p>
                  <span className="font-semibold text-white">Certificate:</span>{" "}
                  {course.certificatetype || "N/A"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
    
    </div>
  );
}
