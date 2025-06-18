
import { useState, useEffect } from "react";
import { Github, Linkedin, Download, ChevronDown, Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Adapting fast. Learning faster. Building smarter.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-background to-purple-950/20"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000 opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-500 opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-700 opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-300 opacity-40"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Profile Section with actual photo */}
        <div className="mb-12 flex justify-center animate-fade-in">
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Profile container with photo */}
            <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 p-1 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full overflow-hidden backdrop-blur-sm">
                <img 
                  src="https://i.postimg.cc/c4gj5zCc/Whats-App-Image-2025-06-17-at-22-33-17-3d8f9471.jpg" 
                  alt="Karan Gautam Panchal" 
                  className="w-full h-full object-cover rounded-full"
                />
                <Sparkles className="absolute top-2 right-2 h-4 w-4 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-in space-y-8">
          {/* Enhanced Name with better typography */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-sm">
                Karan Gautam
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Panchal
              </span>
            </h1>
            
            {/* Enhanced subtitle with icons */}
            <div className="flex items-center justify-center gap-3 text-xl sm:text-2xl lg:text-3xl font-medium text-blue-400">
              <Code2 className="h-6 w-6 sm:h-8 sm:w-8 animate-pulse" />
              <span>Data Science Enthusiast</span>
              <span className="text-gray-500">|</span>
              <span>AI/ML Explorer</span>
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 animate-pulse delay-500" />
            </div>
          </div>

          {/* Enhanced typewriter text */}
          <div className="h-20 flex items-center justify-center">
            <div className="max-w-3xl">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                {displayText}
                <span className="animate-pulse text-blue-400 font-bold">|</span>
              </p>
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button 
              size="lg" 
              className="relative group bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center">
                Explore My Work
                <ChevronDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-md blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </Button>
            
            <a
  href="/karan_resume-dsw.pdf"
  download
  className="relative group rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0 flex items-center h-[52px]"
>
  <span className="relative z-10 flex items-center">
    <Download className="mr-2 h-5 w-5" />
    Download CV
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
</a>


          </div>

          {/* Enhanced social links */}
          <div className="flex justify-center space-x-8">
            <a
              href="https://linkedin.com/in/karan-panchal-"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:border-blue-400/50"
            >
              <Linkedin className="h-7 w-7" />
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://github.com/karanpanchallll"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:border-purple-400/50"
            >
              <Github className="h-7 w-7" />
              <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
