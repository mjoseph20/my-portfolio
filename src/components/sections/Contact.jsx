import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => alert("Failed to send the message, please try again"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent text-center">
            Let's Build Together
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative flex justify-center">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-1/3 md:w-full bg-white/5 border border-white rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative flex justify-center">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-1/3 md:w-full bg-white/5 border border-white rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@mail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative flex justify-center">
              <textarea
                id="messsage"
                name="messsage"
                required
                rows={5}
                value={formData.message}
                className="w-1/3 md:w-full bg-white/5 border border-white rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="drop your message here — i’ll get back to you soon...."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <div className="relative flex justify-center">
              <button
                type="submit"
                className="w-1/3 md:w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
