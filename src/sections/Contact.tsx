import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Copy, Check } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const email = "francisjoel2907@gmail.com";
  const phone = "0618353861";

  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Contact
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Let’s Work Together
          </h2>

          <p className="mt-6 text-[var(--text2)] max-w-2xl mx-auto leading-8">
            Have a project idea, business system, or website you want to build?
            Let’s connect and create something amazing.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {/* EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              bg-black/20
              border border-white/10
              rounded-3xl
              p-8
              backdrop-blur-sm
              hover:border-cyan-400/40
              transition-all
            "
          >
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-cyan-500/10
                flex
                items-center
                justify-center
              "
            >
              <Mail className="text-cyan-400" size={30} />
            </div>

            <h3 className="text-2xl font-bold mt-6">Email</h3>

            <p className="text-[var(--text2)] mt-4 break-all">{email}</p>

            <button
              onClick={copyEmail}
              className="
                mt-6
                flex
                items-center
                gap-2
                text-cyan-400
                hover:text-cyan-300
                transition
              "
            >
              {copied ? (
                <>
                  <Check size={18} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy Email
                </>
              )}
            </button>
          </motion.div>

          {/* PHONE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              bg-black/20
              border border-white/10
              rounded-3xl
              p-8
              backdrop-blur-sm
              hover:border-cyan-400/40
              transition-all
            "
          >
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-cyan-500/10
                flex
                items-center
                justify-center
              "
            >
              <Phone className="text-cyan-400" size={30} />
            </div>

            <h3 className="text-2xl font-bold mt-6">Phone</h3>

            <p className="text-[var(--text2)] mt-4">{phone}</p>

            <a
              href={`tel:${phone}`}
              className="
                inline-block
                mt-6
                text-cyan-400
                hover:text-cyan-300
                transition
              "
            >
              Call Now →
            </a>
          </motion.div>

          {/* WHATSAPP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              bg-black/20
              border border-white/10
              rounded-3xl
              p-8
              backdrop-blur-sm
              hover:border-cyan-400/40
              transition-all
            "
          >
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-cyan-500/10
                flex
                items-center
                justify-center
              "
            >
              <MessageCircle className="text-cyan-400" size={30} />
            </div>

            <h3 className="text-2xl font-bold mt-6">WhatsApp</h3>

            <p className="text-[var(--text2)] mt-4">
              Fast response for clients
            </p>

            <a
              href="https://wa.me/255618353861"
              target="_blank"
              rel="noreferrer"
              className="
                inline-block
                mt-6
                bg-cyan-500
                hover:bg-cyan-400
                text-black
                font-semibold
                px-6
                py-3
                rounded-xl
                transition-all
                hover:scale-105
              "
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mt-24
            max-w-4xl
            mx-auto
            bg-black/20
            border border-white/10
            rounded-3xl
            p-8 md:p-12
            backdrop-blur-sm
          "
        >
          <h3 className="text-3xl font-bold mb-8">Send a Message</h3>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                bg-transparent
                border border-white/10
                rounded-2xl
                px-6
                py-4
                outline-none
                focus:border-cyan-400
                transition
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                bg-transparent
                border border-white/10
                rounded-2xl
                px-6
                py-4
                outline-none
                focus:border-cyan-400
                transition
              "
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="
                w-full
                bg-transparent
                border border-white/10
                rounded-2xl
                px-6
                py-4
                outline-none
                focus:border-cyan-400
                transition
                resize-none
              "
            />

            <button
              type="submit"
              className="
                bg-cyan-500
                hover:bg-cyan-400
                text-black
                font-bold
                px-8
                py-4
                rounded-2xl
                transition-all
                hover:scale-105
              "
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
