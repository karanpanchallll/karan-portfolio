import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });

  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_5tim9hr", // Your service ID
        "template_wckzedu", // Your template ID
        formData,
        "CIJ0ysxCgUVGMAimK" // Your public key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="glass-card p-8 rounded-2xl glow-on-hover">
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            <div className="space-y-4">
              <a
                href="mailto:panchalkaran677@gmail.com"
                className="flex items-center p-4 rounded-lg bg-background/50 hover:bg-blue-400/10 transition-all duration-300 group"
              >
                <Mail className="h-6 w-6 text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-gray-300 text-sm">panchalkaran677@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/karan-panchal-"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-lg bg-background/50 hover:bg-blue-400/10 transition-all duration-300 group"
              >
                <Linkedin className="h-6 w-6 text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-white">LinkedIn</p>
                  <p className="text-gray-300 text-sm">karan-panchal</p>
                </div>
              </a>

              <a
                href="https://github.com/karanpanchallll"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-lg bg-background/50 hover:bg-blue-400/10 transition-all duration-300 group"
              >
                <Github className="h-6 w-6 text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-white">GitHub</p>
                  <p className="text-gray-300 text-sm">karanpanchallll</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl glow-on-hover">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="bg-background/50 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
              />

              <Input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={handleChange}
                required
                className="bg-background/50 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
              />

              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-background/50 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 glow-on-hover group"
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
