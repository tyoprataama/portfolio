import ExperienceProps from "@/css/Props/ExperienceProps";
import fga from "@/assets/fga.png";
import ss from "@/assets/ss.png"

export default function Experience() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Bagian Pertama */}
      <div className="w-full bg-linear-to-b from-[#181C14] to-[#002744] grid justify-center items-start py-10 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-extrabold text-white inline-block relative">
            💼{" "}
            <span className="relative inline-block px-3">
              <span className="relative z-10">My Experiences</span>
              <span className="absolute inset-0 -skew-y-3 bg-blue-400/40 rounded-md z-0"></span>
            </span>
          </h2>

          <p className="py-3 text-white/70 text-sm md:text-2xl max-w-2xl mx-auto leading-relaxed">
            I have previsously worked on web application development projects as a front-end developer and data management. 💅
          </p>

          <span className="block text-sm md:text-2xl max-w-2xl mx-auto text-[#181C14] underline decoration-wavy decoration-3 md:decoration-1 decoration-blue-400 py-3">
            ---------------
          </span>
        </div>

        <div className="w-full flex justify-center">
          <ExperienceProps
            logo={fga}
            company="Fresh Graduate Academy"
            color="blue"
            username="digitalent.kemkomdigi"
            roles={[
              {
                title: "Power BI Data Analyst",
                date: "Apr – May 2024",
                description:
                  [
                    "Developed data models and visual reports to support strategic planning initiatives",
                    "Utilized data analytics to optimize business operations and resource management",
                    "Adapted quickly to new tools, enhancing efficiency in fast-paced environments"
                  ]
              },
              {
                title: "Data Engineer",
                date: "May – June 2022",
                description:
                  [
                    "Managed data projects critical to business forecasting and planning.",
                    "Ensured data accuracy and reliability for informed decision-making processes.",
                    "Applied advanced data handling techniques to support large-scale operations."
                  ]
              },
              {
                title: "Backend Engineer",
                date: "Mar – May 2022",
                description:
                  [
                    "Designed and optimized systems to improve data flow and operational efficiency.",
                    "Integrated cloud-based solutions (AWS) for scalable planning tools.",
                    "Enhanced system reliability and performance through process optimization."
                  ]
              },
            ]}
          />
        </div>
      </div>

      {/* Bagian Kedua */}
      <div className = "w-full bg-linear-to-b from-[#002744] to-[#0f3543] grid justify-center items-start py-5 px-4 sm:px-6" >
        <div className="w-full flex justify-center">
          <ExperienceProps
            company="SoftwareSeni"
            logo={ss}
            color="green"
            username="softwareseni_"
            roles={[
              {
                title: "React Developer Intern",
                date: "Aug – Oct 2022",
                description:
                  [
                    "Developed user friendly resource management systems to optimize company operations.",
                    "Collaborated cross functionally to align project goals with organizational planning objectives.",
                    "Collaborated with the team projects using SCRUM methodologies to ensure timely project completion."
                  ]
              },
              
            ]}
          />
        </div>
      </div>
    </section>
  );
}
