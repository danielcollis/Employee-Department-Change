import React, { useRef } from "react";

// Real employee journeys based on the data
const journeys = [
  {
    title: "Project Manager",
    steps: [
      "Design Specialist",
      "Senior Design Specialist", 
      "Junior Project Manager",
      "Assistant Project Manager",
      "Project Manager",
    ],
  },
  {
    title: "Director of Manufacturing",
    steps: [
      "Production",
      "CPS Shop Foreman",
      "CPS Production Manager", 
      "Operations Manager",
      "Director of Manufacturing & Field Operations",
      "Director of Manufacturing",
    ],
  },
  {
    title: "Director of Field Operations",
    steps: [
      "Junior Project Manager",
      "Senior Project Manager",
      "Field Operations Manager",
      "Director of Field Operations",
    ],
  },
  {
    title: "Director of Project Management",
    steps: [
      "Project Manager",
      "Project Director",
      "Director of Project Management",
    ],
  },
  {
    title: "Lead Software Engineer",
    steps: [
      "Metal Shop",
      "IT Software Developer",
      "IT",
      "Software Developer",
      "Lead Software Engineer",
    ],
  },
  {
    title: "WPS Production Manager",
    steps: [
      "Production",
      "CPS Supervisor",
      "CPS Production Manager",
      "Project Manager",
      "Field Measuring Manager",
      "WPS Production Manager",
    ],
  },
  {
    title: "Director of Finance",
    steps: [
      "Administrative Assistant",
      "Office Manager",
      "CFO",
      "Controller",
      "Director of Finance",
    ],
  },
  {
    title: "Director of Business Improvement",
    steps: [
      "Data Analyst",
      "Continuous Improvement Manager",
      "Director of Business Operations",
    ],
  },
];

function EmployeeJourneyCarousel() {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        🚀 Success Stories - Real Employee Journeys
      </h2>
      <div className="relative flex items-center">
        {/* Prev Button */}
        <button
          onClick={() => scroll(-320)}
          className="absolute left-0 z-10 bg-white rounded-full shadow p-2 -ml-3 hover:bg-gray-100"
          aria-label="Scroll left"
        >
          &larr;
        </button>

        {/* Carousel Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar px-8 py-2 snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {journeys.map((journey, idx) => (
                         <div
               key={idx}
               className="min-w-[280px] max-w-xs bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center snap-center transition hover:shadow-xl"
             >
               <h3 className="text-lg font-bold mb-2 text-center">{journey.title}</h3>
                              <div className="text-sm text-gray-700 space-y-1 text-center">
                 {journey.steps.map((step, stepIdx) => (
                   <div key={stepIdx} className="flex flex-col items-center">
                     <div className={stepIdx === journey.steps.length - 1 ? "font-semibold text-green-600" : ""}>
                       {step}
                     </div>
                     {stepIdx < journey.steps.length - 1 && (
                       <div className="text-gray-400 text-xs my-1">↓</div>
                     )}
                   </div>
                 ))}
               </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => scroll(320)}
          className="absolute right-0 z-10 bg-white rounded-full shadow p-2 -mr-3 hover:bg-gray-100"
          aria-label="Scroll right"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default EmployeeJourneyCarousel;
