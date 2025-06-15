
import Navigation from '../components/Navigation';

const Contact = () => {
  const services = [
    "AWS ML Architecture & Implementation",
    "Data Pipeline Development",
    "MLOps & CI/CD Setup",
    "Cloud Cost Optimization",
    "Team Training & Workshops",
    "Technical Consulting"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto py-16 px-8">
        <h1 className="text-4xl font-light text-gray-900 mb-8">Contact</h1>
        <p className="text-gray-600 mb-12 text-lg">
          Let's discuss how we can scale your data science initiatives with AWS
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Get In Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-gray-400"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-gray-400"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-gray-400"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-gray-700 mb-2">Project Type</label>
                <select
                  id="project"
                  className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-gray-400"
                >
                  <option value="">Select project type</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="implementation">ML Implementation</option>
                  <option value="training">Team Training</option>
                  <option value="optimization">Cost Optimization</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-gray-400"
                  placeholder="Tell me about your project or question..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Services */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Services Offered</h2>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-gray-600">
                    • {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Connect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                  <a href="mailto:hello@example.com" className="text-gray-600 hover:underline">
                    hello@example.com
                  </a>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">LinkedIn</h3>
                  <a href="#" className="text-gray-600 hover:underline">
                    linkedin.com/in/aws-data-scientist
                  </a>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">GitHub</h3>
                  <a href="#" className="text-gray-600 hover:underline">
                    github.com/aws-data-scientist
                  </a>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Twitter</h3>
                  <a href="#" className="text-gray-600 hover:underline">
                    @aws_data_scientist
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Availability</h2>
              <p className="text-gray-600 mb-4">
                Currently accepting new projects and consulting engagements.
              </p>
              <p className="text-gray-600 text-sm">
                Response time: Within 24 hours on weekdays
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
