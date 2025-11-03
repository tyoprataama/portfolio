export default function ExperienceProps({
  logo,
  company,
  username,
  roles = [],
  color = "blue",
}) {
  const colors = {
    blue: {
      bg: "bg-blue-400/10",
      border: "border-blue-300/20",
      text: "text-blue-100",
      subtext: "text-blue-200",
    },
    orange: {
      bg: "bg-orange-400/10",
      border: "border-orange-300/20",
      text: "text-orange-100",
      subtext: "text-orange-200",
    },
    green: {
      bg: "bg-[#B9E3C6]/10",
      border: "border-green-300/20",
      text: "text-green-100",
      subtext: "text-green-200",
    },
    purple: {
      bg: "bg-purple-400/10",
      border: "border-purple-300/20",
      text: "text-purple-100",
      subtext: "text-purple-200",
    },
  };

  const c = colors[color] || colors.blue;

  return (
    <div
      className={`w-full max-w-3xl mx-auto my-6 p-6 rounded-2xl backdrop-blur-md shadow-lg ${c.bg} ${c.border}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={logo}
          alt={company}
          className={`w-14 h-14 rounded-4xl object-cover border ${c.border}`}
        />
        <div>
          <h3 className={`text-xl font-semibold ${c.text}`}>{company}</h3>
          <p className={`text-sm ${c.subtext}`}>@{username}</p>
        </div>
      </div>

      <div className="space-y-5 py-4">
        {roles.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div
                className={`px-4 py-2 rounded-xl shadow-inner font-medium backdrop-blur-lg border ${c.border} ${c.text} ${c.bg}`}
              >
                {item.title}
              </div>
              <p className={`text-sm font-medium ${c.subtext}`}>{item.date}</p>
            </div>

            {Array.isArray(item.description) ? (
              <ul className={`mt-3 list-disc list-inside space-y-1 px-5 ${c.text}`}>
                {item.description.map((desc, i) => (
                  <li key={i} className="text-sm md:text-base leading-relaxed">
                    {desc}
                  </li>
                ))}
              </ul>
            ) : (
              <p
                className={`mt-2 ${c.text} text-sm md:text-base leading-relaxed py-3`}
              >
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
