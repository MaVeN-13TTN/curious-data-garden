
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-light text-gray-900 tracking-wide">
            AWS Data Scientist
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Data Scientist + AWS = Scalable Insights
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Designing and deploying scalable machine learning solutions using AWS services. 
            Transforming raw data into actionable insights in production-ready cloud environments.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* AWS Certifications */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-8">
            AWS Certified
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white p-4 rounded border border-gray-200 text-sm">
              AWS Certified Machine Learning – Specialty
            </div>
            <div className="bg-white p-4 rounded border border-gray-200 text-sm">
              AWS Certified Solutions Architect – Associate
            </div>
            <div className="bg-white p-4 rounded border border-gray-200 text-sm">
              AWS Certified Data Analytics – Specialty
            </div>
          </div>
        </div>
      </section>

      {/* Core AWS Skills */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-center text-gray-900 mb-12">
            AWS Cloud Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Machine Learning</h3>
              <p className="text-gray-600 text-sm">SageMaker, Lambda, ECR, Model Endpoints</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Data Analytics</h3>
              <p className="text-gray-600 text-sm">S3, Athena, Glue, Redshift, Kinesis</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-xl">⚙️</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">MLOps & DevOps</h3>
              <p className="text-gray-600 text-sm">CodePipeline, CloudWatch, IAM, Terraform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-center text-gray-900 mb-12">
            Featured AWS Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Customer Churn Prediction
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                End-to-end ML pipeline using SageMaker for model training and Lambda for real-time inference, 
                achieving 94% accuracy in production.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">SageMaker</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">Lambda</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">S3</span>
              </div>
              <Link to="/projects/churn-prediction-aws" className="text-gray-900 text-sm font-medium hover:underline">
                View Project →
              </Link>
            </div>
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Real-time Fraud Detection
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Streaming data pipeline with Kinesis and Lambda for real-time fraud detection, 
                processing 100K+ transactions per minute.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">Kinesis</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">Lambda</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">DynamoDB</span>
              </div>
              <Link to="/projects/fraud-detection" className="text-gray-900 text-sm font-medium hover:underline">
                View Project →
              </Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/projects" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-light text-gray-900">
            Ready to Scale Your Data?
          </h2>
          <p className="text-gray-600">
            Available for AWS ML consulting, workshops, and cloud architecture design
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start a Project
            </Link>
            <a href="#" className="btn-secondary">
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
