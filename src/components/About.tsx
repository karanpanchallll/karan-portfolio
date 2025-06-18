
import { GraduationCap, Briefcase, Award, MapPin, Calendar, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-background to-blue-950/20"></div>
        <div className="absolute top-40 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
            <Star className="h-4 w-4 text-blue-400 mr-2" />
            <span className="text-sm text-blue-400 font-medium">Get to know me</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Enhanced Bio Section */}
          <div className="space-y-8">
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              
              <div className="relative glass-card p-8 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-background">KP</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Introduction</h3>
                    <p className="text-blue-400 text-sm">Who I am</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Hi, I'm <span className="text-blue-400 font-semibold">Karan Gautam Panchal</span> — a tech-savvy and curious data science enthusiast currently pursuing a BE in Computer Engineering with Honors in AI/ML from the University of Mumbai.
                  </p>
                  <p className="text-lg">
                    I am passionate about adapting to new technologies and thrive in AI, data analysis, and data engineering.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">5+</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">2022</div>
                    <div className="text-sm text-gray-400">Started Journey</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Cards Section */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              
              <div className="relative glass-card p-6 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:transform hover:scale-[1.02]">
                <div className="flex items-start">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">Education</h3>
                      <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                        Current
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-blue-400">Bachelor of Engineering</h4>
                        <p className="text-cyan-400">Computer Engineering with Honors in AI/ML</p>
                        <div className="flex items-center text-gray-300 text-sm mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>University of Mumbai</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>Expected Graduation: 2026</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              
              <div className="relative glass-card p-6 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:transform hover:scale-[1.02]">
                <div className="flex items-start">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">Experience</h3>
                    
                    <div className="space-y-4">
                      <div className="relative pl-4 border-l-2 border-gradient">
                        <div className="absolute -left-2 top-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                        <h4 className="font-medium text-purple-400">Data Analyst Intern</h4>
                        <p className="text-blue-400 font-medium">Trainity</p>
                        <p className="text-gray-400 text-sm mb-2">Aug 2024 – Oct 2024</p>
                        <p className="text-gray-300 text-sm">Worked on data transformation, dashboards, and insights generation.</p>
                      </div>
                      
                      <div className="relative pl-4 border-l-2 border-white/20">
                        <div className="absolute -left-2 top-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                        <h4 className="font-medium text-cyan-400">Treasurer</h4>
                        <p className="text-blue-400 font-medium">Computer Student Association (CSA), APSIT</p>
                        <p className="text-gray-300 text-sm mt-1">Oversaw budgeting and event organization.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
