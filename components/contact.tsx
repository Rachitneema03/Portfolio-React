import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <section id="contacts" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500 mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600">Feel free to contact me for any work or suggestions</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-purple-600 mr-3" />
              <span>rachitneemawork@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-purple-600 mr-3" />
              <span>+91 9755241956</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-purple-600 mr-3" />
              <span>Indore , Madhya Pradesh , India</span>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">Social Links</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/Rachitneema03" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/rachit-neema/" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://x.com/rachitneema3" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-teal-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
