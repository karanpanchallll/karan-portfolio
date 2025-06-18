import { Award } from "lucide-react";

const HackathonCard = () => {
  return (
    <div className="group relative">
      {/* Outer Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

      {/* Card Content */}
      <div className="relative glass-card p-6 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:transform hover:scale-[1.02]">
        <div className="flex items-start">
          {/* Icon */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 mr-4 group-hover:scale-110 transition-transform duration-300">
            <Award className="h-6 w-6 text-white" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
              Hackathon Participation
            </h3>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                I’m passionate about solving real-world problems through collaboration and rapid innovation. My hackathon journey has helped me apply technical knowledge under pressure and push creative boundaries. Here are some highlights:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  🛠️ Participated in <span className="text-blue-400 font-medium">HackScript</span>, where I worked in a fast-paced team environment to build a working prototype within tight deadlines.
                </li>
                <li>
                  🤖 Competed in <span className="text-blue-400 font-medium">Code Automata</span>, gaining valuable experience in building intelligent and scalable solutions through teamwork.
                </li>
                <li>
                  ☁️ Took part in <span className="text-blue-400 font-medium">Code the Cloud</span> by <span className="text-purple-400 font-medium">Google Developers Group</span>, where my team secured the <span className="text-cyan-400 font-semibold">2nd position</span> among 100+ participants and 30+ finalist teams. We also presented our solution at <span className="text-blue-300 font-medium">Cloud Community Days 2025</span>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
