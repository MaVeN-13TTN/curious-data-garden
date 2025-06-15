
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto py-16 px-8">
        <h1 className="text-4xl font-light text-gray-900 mb-8">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">Background</h2>
              <p className="text-gray-600 leading-relaxed">
                Data scientist with 5+ years of experience building scalable machine learning 
                solutions on AWS. Passionate about transforming complex data into actionable 
                business insights using cloud-native technologies.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">Education</h2>
              <p className="text-gray-600">
                M.S. Data Science, University of Technology<br />
                B.S. Computer Science, State University
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">Technical Skills</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Programming</h3>
                  <p className="text-gray-600 text-sm">Python, SQL, PySpark, R</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">ML Tools</h3>
                  <p className="text-gray-600 text-sm">Scikit-learn, TensorFlow, PyTorch, Pandas</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">AWS Services</h3>
                  <p className="text-gray-600 text-sm">SageMaker, S3, Lambda, Glue, Athena, Redshift, Kinesis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn-primary">
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
