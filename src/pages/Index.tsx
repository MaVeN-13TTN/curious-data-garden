
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-semibold text-charcoal tracking-wide">
            AWS Data Scientist
          </h1>
          <p className="text-xl text-aws-blue max-w-2xl mx-auto leading-relaxed font-medium">
            Data Scientist + AWS = Scalable Insights
          </p>
          <p className="text-lg text-muted max-w-3xl mx-auto">
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
      <section className="py-16 px-8 bg-cloud-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-medium text-charcoal mb-8">
            AWS Certified
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-aws-blue rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl font-bold">ML</span>
              </div>
              AWS Certified Machine Learning – Specialty
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-aws-blue rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl font-bold">SA</span>
              </div>
              AWS Certified Solutions Architect – Associate
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl font-bold">DA</span>
              </div>
              AWS Certified Data Analytics – Specialty
            </div>
          </div>
        </div>
      </section>

      {/* Core AWS Skills */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-medium text-center text-charcoal mb-12">
            AWS Cloud Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-teal rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h3 className="text-lg font-medium text-charcoal">Machine Learning</h3>
              <p className="text-muted text-sm">SageMaker, Lambda, ECR, Model Endpoints</p>
            </div>
            <div className="text-center space-y-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-aws-blue rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-lg font-medium text-charcoal">Data Analytics</h3>
              <p className="text-muted text-sm">S3, Athena, Glue, Redshift, Kinesis</p>
            </div>
            <div className="text-center space-y-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-charcoal rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-xl">⚙️</span>
              </div>
              <h3 className="text-lg font-medium text-charcoal">MLOps & DevOps</h3>
              <p className="text-muted text-sm">CodePipeline, CloudWatch, IAM, Terraform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 px-8 bg-cloud-gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-medium text-center text-charcoal mb-12">
            Featured AWS Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow rounded-lg">
              <h3 className="text-xl font-medium text-charcoal mb-2">
                Customer Churn Prediction
              </h3>
              <p className="text-muted text-sm mb-4">
                End-to-end ML pipeline using SageMaker for model training and Lambda for real-time inference, 
                achieving 94% accuracy in production.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="px-3 py-1 bg-aws-blue text-white text-xs rounded-full">SageMaker</span>
                <span className="px-3 py-1 bg-teal text-white text-xs rounded-full">Lambda</span>
                <span className="px-3 py-1 bg-charcoal text-white text-xs rounded-full">S3</span>
              </div>
              <Link to="/projects" className="text-aws-blue text-sm font-medium hover:underline">
                View Project →
              </Link>
            </div>
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow rounded-lg">
              <h3 className="text-xl font-medium text-charcoal mb-2">
                Real-time Fraud Detection
              </h3>
              <p className="text-muted text-sm mb-4">
                Streaming data pipeline with Kinesis and Lambda for real-time fraud detection, 
                processing 100K+ transactions per minute.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="px-3 py-1 bg-aws-blue text-white text-xs rounded-full">Kinesis</span>
                <span className="px-3 py-1 bg-teal text-white text-xs rounded-full">Lambda</span>
                <span className="px-3 py-1 bg-charcoal text-white text-xs rounded-full">DynamoDB</span>
              </div>
              <Link to="/projects" className="text-aws-blue text-sm font-medium hover:underline">
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
          <h2 className="text-3xl font-medium text-charcoal">
            Ready to Scale Your Data?
          </h2>
          <p className="text-muted">
            Available for AWS ML consulting, workshops, and cloud architecture design
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Start a Project
            </Link>
            <Link to="/contact" className="btn-secondary">
              Download Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
