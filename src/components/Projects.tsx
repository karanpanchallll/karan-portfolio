import { Github, Sparkles, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Cricket Analysis & Dashboard",
      description: "Power BI dashboard analyzing match trends and player performance using Python, Pandas, Seaborn.",
      tech: ["Python", "Pandas", "Seaborn", "Power BI"],
      image: "https://i.postimg.cc/nhXtt12H/Whats-App-Image-2025-06-17-at-23-30-49-2eb77d2b.jpg",
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "blue",
      link: "https://github.com/karanpanchallll/Cricket_Analysis"
    },
    {
      title: "EchoSentinal",
      description: "Real-time sentiment & profanity detection tool using FastAPI, LSTM, NLTK, WebSockets, and React.js.",
      tech: ["FastAPI", "LSTM", "NLTK", "WebSockets", "React.js"],
      image: "https://i.postimg.cc/T3j2s03p/Whats-App-Image-2025-06-17-at-23-39-44-8384129c.jpg",
      gradient: "from-purple-500 to-pink-500",
      glowColor: "purple",
      link: "https://github.com/karanpanchallll/EchoSentinel"
    },
    {
      title: "Climate Data Analysis & Prediction",
      description: "Regression-based temperature prediction using historical climate datasets, ML models, and Plotly visualizations.",
      tech: ["Python", "ML Models", "Plotly", "Regression"],
      image: "https://i.postimg.cc/P5dnCjd5/Whats-App-Image-2025-06-17-at-23-37-33-2933eb9f.jpg",
      gradient: "from-green-500 to-blue-500",
      glowColor: "green",
      link: "https://github.com/karanpanchallll/Carbon-emission-analysis"
    },
    {
      title: "aSkQL",
      description: "AI-powered SQL query generator and explainer with FastAPI, Pandas, and LLMs for CSV-based insights.",
      tech: ["FastAPI", "Pandas", "LLMs", "SQL"],
      image: "https://i.postimg.cc/L8cGFFhT/Whats-App-Image-2025-06-17-at-23-34-24-27ddc0f0.jpg",
      gradient: "from-yellow-500 to-orange-500",
      glowColor: "yellow",
      link: "https://github.com/karanpanchallll/aSkQL"
    },
    {
      title: "BazaarBataye",
      description: "AI-powered agri-intelligence platform with Gemini-based crop forecast, multilingual chatbot, and CNN-based image classifier.",
      tech: ["Gemini", "CNN", "AI", "Agriculture"],
      image: "https://i.postimg.cc/xTyP1rs5/Whats-App-Image-2025-06-17-at-23-35-33-bca5bd24.jpg",
      gradient: "from-emerald-500 to-teal-500",
      glowColor: "emerald",
      link: "https://github.com/karanpanchallll/BazaarBataye"
    },
    {
      title: "SnapShare",
      description: "A simple file-sharing app built with React.js, Node.js, and Express.js, using AWS S3 for storage and hosted on EC2. Files can be shared via QR code or direct download link.",
      tech: ["AWS EC2", "Express.js", "React.js", "Node.js", "AWS S3"],
      image: "https://i.postimg.cc/76kWW1bY/Whats-App-Image-2025-06-17-at-23-44-11-9b7bf54e.jpg",
      gradient: "from-rose-500 to-yellow-500",
      glowColor: "rose",
      link: "https://github.com/karanpanchallll/SnapShare"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-background to-pink-950/20"></div>
        <div className="absolute top-40 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-indigo-500/20 mb-6">
            <Code2 className="h-4 w-4 text-indigo-400 mr-2" />
            <span className="text-sm text-indigo-400 font-medium">Portfolio Showcase</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Exploring data science, AI, and web development through innovative projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000`}></div>
              <div className="relative glass-card rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500 hover:scale-[1.02]">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  {/* Only Code Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="bg-black/30 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover:scale-110 transition-all duration-300">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </a>
                  </div>

                  {/* Project number */}
                  <div className="absolute top-4 left-4">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                      {index + 1}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <Sparkles className="h-5 w-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-default`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Status: Completed</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-400 mr-1"></div>
                        <span>Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All on GitHub CTA */}
        <div className="text-center">
          <div className="group relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <a href="https://github.com/karanpanchallll?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="relative bg-transparent border-2 border-gradient text-white hover:text-black hover:bg-gradient-to-r hover:from-indigo-400 hover:to-pink-400 hover:border-transparent transition-all duration-500 px-8 py-4 text-lg font-semibold"
              >
                <Github className="mr-3 h-5 w-5" />
                <span>View All Projects on GitHub</span>
                <Zap className="ml-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
