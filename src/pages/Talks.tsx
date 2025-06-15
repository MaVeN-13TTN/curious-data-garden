
import Navigation from '../components/Navigation';

const Talks = () => {
  const talks = [
    {
      title: "Scaling ML Pipelines with AWS SageMaker",
      event: "AWS re:Invent 2023",
      date: "November 2023",
      type: "Conference Talk",
      description: "Demonstrated how to build and scale machine learning pipelines using SageMaker Pipelines and Step Functions.",
      audience: "500+ attendees",
      materials: ["Slides", "Recording", "Demo Code"]
    },
    {
      title: "Real-time Analytics with Kinesis and Lambda",
      event: "Data Engineering Summit",
      date: "September 2023",
      type: "Workshop",
      description: "Hands-on workshop covering real-time data processing and analytics using AWS streaming services.",
      audience: "50 participants",
      materials: ["Workshop Materials", "GitHub Repo"]
    },
    {
      title: "MLOps Best Practices for Startups",
      event: "AI/ML Meetup SF",
      date: "July 2023",
      type: "Meetup Talk",
      description: "Practical guide to implementing MLOps practices in resource-constrained startup environments.",
      audience: "80 attendees",
      materials: ["Slides", "Recording"]
    },
    {
      title: "The Data Engineer Podcast",
      event: "Podcast Interview",
      date: "May 2023",
      type: "Podcast",
      description: "Discussed the evolution of data science tools and the importance of cloud-native ML solutions.",
      audience: "10K+ downloads",
      materials: ["Podcast Link", "Transcript"]
    }
  ];

  const upcomingTalks = [
    {
      title: "Serverless ML: The Future of Model Deployment",
      event: "CloudNative Con 2024",
      date: "April 2024",
      status: "Accepted"
    },
    {
      title: "Cost-Effective ML on AWS",
      event: "DataOps Summit",
      date: "June 2024",
      status: "Proposed"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto py-16 px-8">
        <h1 className="text-4xl font-light text-gray-900 mb-8">Talks & Publications</h1>
        <p className="text-gray-600 mb-12 text-lg">
          Sharing knowledge through conferences, workshops, and media appearances
        </p>

        {/* Past Talks */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Recent Talks</h2>
          <div className="space-y-8">
            {talks.map((talk, index) => (
              <div key={index} className="border border-gray-200 p-6">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">
                    {talk.type}
                  </span>
                  <span className="text-gray-500 text-sm">{talk.date}</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{talk.audience}</span>
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-2">{talk.title}</h3>
                <p className="text-gray-600 font-medium mb-3">{talk.event}</p>
                <p className="text-gray-600 mb-4">{talk.description}</p>
                
                <div className="flex gap-2 flex-wrap">
                  {talk.materials.map((material) => (
                    <a key={material} href="#" className="text-gray-900 text-sm hover:underline">
                      {material} →
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Talks */}
        <section>
          <h2 className="text-3xl font-light text-gray-900 mb-8">Upcoming Talks</h2>
          <div className="space-y-4">
            {upcomingTalks.map((talk, index) => (
              <div key={index} className="border border-gray-200 p-6 bg-gray-50">
                <div className="flex items-center gap-4 mb-2">
                  <span className={`px-2 py-1 text-xs ${
                    talk.status === 'Accepted' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {talk.status}
                  </span>
                  <span className="text-gray-500 text-sm">{talk.date}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">{talk.title}</h3>
                <p className="text-gray-600">{talk.event}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Interested in having me speak at your event?
          </p>
          <a href="/contact" className="btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Talks;
