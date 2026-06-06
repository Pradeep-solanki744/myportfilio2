import {
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import { CONTACT_INFO } from "../constants/data";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSend = async (method) => {
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    const messageContent = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(messageContent);
    const phoneNumber = "917895490297";

    try {
      if (method === "direct") {
        // Trigger WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
        
        setSubmitStatus({
          type: "success",
          message: "Opening WhatsApp...",
        });
      }

      // Keep form data for reference if needed, or clear it if successful
      // setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus({
        type: "error",
        message: err.message || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-secondary-foreground text-xs omd:text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground leading-tight">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground animate-fade-in animation-delay-200 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="glass p-6 md:p-10 rounded-3xl border border-primary/20 animate-fade-in animation-delay-300">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium ml-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name..."
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-surface/50 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm md:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    type="email"
                    className="block text-sm font-medium ml-1"
                  >
                    Email
                  </label>
                  <input
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-surface/50 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium ml-1"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface/50 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-sm md:text-base"
                />
              </div>

              <div className="flex justify-center md:justify-start pt-2">
                <Button
                  type="button"
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                  onClick={() => handleSend("direct")}
                  disabled={isLoading || !formData.name || !formData.message}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Message via WhatsApp
                </Button>
              </div>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-3 md:p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  )}
                  <p className="text-xs md:text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-6 md:p-10 border border-primary/10">
              <h3 className="text-lg md:text-xl font-bold mb-8 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary" />
                Contact Information
              </h3>
              <div className="space-y-4">
                {CONTACT_INFO.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-surface/30 hover:bg-surface/50 border border-transparent hover:border-primary/20 transition-all group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs text-muted-foreground font-medium mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-sm md:text-base font-semibold text-foreground truncate">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-6 md:p-10 border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-sm md:text-base font-bold uppercase tracking-wider text-green-500">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk about how I can help your team!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
