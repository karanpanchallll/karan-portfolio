
import { Code, Database, BarChart3, Brain, MessageSquare, Lightbulb, Zap, Star } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Tools",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "SQL", "Excel", "VS Code", "Jupyter Notebook", "Google Colab", "Power BI"],
      color: "from-blue-400 to-blue-600",
      bgGlow: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Libraries & Frameworks",
      icon: <Database className="h-6 w-6" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "FastAPI", "Airflow","React.js","Node.js"],
      color: "from-cyan-400 to-cyan-600",
      bgGlow: "from-cyan-500/20 to-cyan-600/20"
    },
    {
      title: "Platforms & Services",
      icon: <Brain className="h-6 w-6" />,
      skills: ["LLMs", "IBM Cognos"],
      color: "from-purple-400 to-purple-600",
      bgGlow: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Soft Skills",
      icon: <MessageSquare className="h-6 w-6" />,
      skills: ["Communication", "Problem Solving"],
      color: "from-green-400 to-green-600",
      bgGlow: "from-green-500/20 to-green-600/20"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-card/30 to-purple-950/20"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6">
            <Zap className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-sm text-cyan-400 font-medium">Technical Expertise</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto rounded-full mb-4"></div>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for modern data science and AI development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="group relative">
              {/* Enhanced glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.bgGlow} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000`}></div>
              
              <div className="relative glass-card p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-3 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill relative px-3 py-2 bg-background/30 backdrop-blur-sm rounded-lg text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 cursor-default border border-transparent hover:border-blue-400/30"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill}</span>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skill count badge */}
                <div className="mt-4 flex justify-end">
                  <span className={`px-2 py-1 text-xs font-medium bg-gradient-to-r ${category.color} text-white rounded-full`}>
                    {category.skills.length} skills
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom section */}
        <div className="text-center">
          <div className="group relative inline-flex items-center px-8 py-4 glass-card rounded-full border border-white/10 hover:border-yellow-400/30 transition-all duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative flex items-center">
              <div className="p-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 mr-3 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-5 w-5 text-background" />
              </div>
              <span className="text-gray-300 group-hover:text-yellow-400 transition-colors font-medium">
                Always learning and adapting to new technologies
              </span>
              <div className="ml-3 flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 200}ms`}} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
