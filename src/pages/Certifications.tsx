import Navigation from '../components/Navigation';

const Certifications = () => {
  const awsCertifications = [
    {
      title: "AWS Certified Machine Learning – Specialty",
      issuer: "Amazon Web Services",
      date: "Valid until Dec 2025",
      level: "Specialty",
      description: "Validates expertise in building, training, tuning, and deploying ML models on AWS."
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "Valid until Sep 2025",
      level: "Associate",
      description: "Demonstrates knowledge of AWS services and designing distributed systems on AWS."
    },
    {
      title: "AWS Certified Data Analytics – Specialty",
      issuer: "Amazon Web Services",
      date: "Valid until Jun 2025",
      level: "Specialty",
      description: "Validates expertise in designing and implementing AWS data analytics solutions."
    }
  ];

  const otherCertifications = [
    {
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "Valid until Mar 2025",
      description: "Demonstrates ability to design and build data processing systems on GCP."
    },
    {
      title: "Microsoft Azure Data Scientist Associate",
      issuer: "Microsoft",
      date: "Valid until Jan 2025",
      description: "Validates skills in implementing and running machine learning workloads on Azure."
    },
    {
      title: "Certified Kubernetes Application Developer (CKAD)",
      issuer: "Cloud Native Computing Foundation",
      date: "Valid until Aug 2024",
      description: "Demonstrates ability to design, build, and deploy cloud-native applications for Kubernetes."
    }
  ];

  const courses = [
    {
      title: "Deep Learning Specialization",
      provider: "Coursera (deeplearning.ai)",
      completed: "2023",
      skills: ["Neural Networks", "CNNs", "RNNs", "Transformers"]
    },
    {
      title: "AWS Machine Learning Engineer Path",
      provider: "A Cloud Guru",
      completed: "2023",
      skills: ["SageMaker", "MLOps", "Model Deployment"]
    },
    {
      title: "Data Engineering with Python",
      provider: "DataCamp",
      completed: "2022",
      skills: ["Apache Airflow", "Spark", "Data Pipelines"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto py-16 px-8">
        <h1 className="text-4xl font-light text-gray-900 mb-8">Certifications</h1>
        <p className="text-gray-600 mb-12 text-lg">
          Professional certifications and continuous learning achievements
        </p>

        {/* AWS Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-8">AWS Certifications</h2>
          <div className="space-y-6">
            {awsCertifications.map((cert, index) => (
              <div key={index} className="border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-gray-600 font-medium">{cert.issuer}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 text-xs font-medium rounded ${
                      cert.level === 'Specialty' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {cert.level}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{cert.description}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other Cloud Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Other Professional Certifications</h2>
          <div className="space-y-6">
            {otherCertifications.map((cert, index) => (
              <div key={index} className="border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 font-medium mb-3">{cert.issuer}</p>
                <p className="text-gray-600 mb-3">{cert.description}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Courses & Training */}
        <section>
          <h2 className="text-3xl font-light text-gray-900 mb-8">Courses & Training</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 font-medium mb-3">{course.provider}</p>
                <p className="text-gray-500 text-sm mb-3">Completed: {course.completed}</p>
                <div className="flex gap-2 flex-wrap">
                  {course.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Certifications verified on Credly and vendor platforms
          </p>
          <a href="#" className="btn-secondary">
            View Digital Badges
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
