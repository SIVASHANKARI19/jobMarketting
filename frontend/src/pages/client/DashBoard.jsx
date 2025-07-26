import { useRef } from "react";
import jobimg from "../../assets/jobRole.jpg";
import TopNavbar from "../../components/TopNavBar/TopNavBar";
import SmallCard from "../../components/smallCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import JobCard from '../../components/Card'

const Dashboard = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth", // keep this, or rely on `scroll-smooth`
      });
    }
  };

  const jobs = [
    {
      title: "Frontend Developer",
      avgSalary: "$80,000",
      tags: ["React", "JavaScript", "CSS","React"],
      imageSrc: jobimg,
      company: "Infosys",
      location: "Bangalore",
      postedTime: "3 days ago",
      applicants: "99",
      rating: 4.2,
      onCheckReadiness: () => alert("Check readiness!"),
      onKnowMore: () => alert("Know more!"),
    },
    {
      title: "Frontend Developer",
      avgSalary: "$80,000",
      tags: ["React", "JavaScript", "CSS"],
      imageSrc: jobimg,
      company: "Infosys",
      location: "Bangalore",
      postedTime: "3 days ago",
      applicants: "99",
      rating: 4.2,
      onCheckReadiness: () => alert("Check readiness!"),
      onKnowMore: () => alert("Know more!"),
    },
    {
      title: "Frontend Developer",
      avgSalary: "$80,000",
      tags: ["React", "JavaScript", "CSS"],
      imageSrc: jobimg,
      company: "Infosys",
      location: "Bangalore",
      postedTime: "3 days ago",
      applicants: "99",
      rating: 4.2,
      onCheckReadiness: () => alert("Check readiness!"),
      onKnowMore: () => alert("Know more!"),
    },
    {
      title: "Frontend Developer",
      avgSalary: "$80,000",
      tags: ["React", "JavaScript", "CSS"],
      imageSrc: jobimg,
      company: "Infosys",
      location: "Bangalore",
      postedTime: "3 days ago",
      applicants: "99",
      rating: 4.2,
      onCheckReadiness: () => alert("Check readiness!"),
      onKnowMore: () => alert("Know more!"),
    },
    {
      title: "Frontend Developer",
      avgSalary: "$80,000",
      tags: ["React", "JavaScript", "CSS"],
      imageSrc: jobimg,
      company: "Infosys",
      location: "Bangalore",
      postedTime: "3 days ago",
      applicants: "99",
      rating: 4.2,
      onCheckReadiness: () => alert("Check readiness!"),
      onKnowMore: () => alert("Know more!"),
    },
    {
      title: "Frontend Developer",
      avgSalary: "$80,000",
      tags: ["React", "JavaScript", "CSS"],
      imageSrc: jobimg,
      company: "Infosys",
      location: "Bangalore",
      postedTime: "3 days ago",
      applicants: "99",
      rating: 4.2,
      onCheckReadiness: () => alert("Check readiness!"),
      onKnowMore: () => alert("Know more!"),
    },
  ];

  return (
    <div>
      <div className="fixed ">
        <TopNavbar />
      </div>
      <div className="absolute top-[10%] w-full">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
        >
          <FaArrowRight />
        </button>

        {/* Cards container */}
        <div
          ref={scrollRef}
          className="flex flex-nowrap overflow-x-scroll gap-4 px-10 hide-scrollbar scroll-smooth"
        >
          {jobs.map((job, index) => (
            <div key={index} className="flex-shrink-0">
              <JobCard
                title={job.title}
                avgSalary={job.avgSalary}
                tags={job.tags}
                imageSrc={job.imageSrc}
                onCheckReadiness={job.onCheckReadiness}
                onKnowMore={job.onKnowMore}
              />
            </div>
          ))}
          {/* <SmallCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
