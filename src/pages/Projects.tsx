
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Projects = () => {
  const projects = [
    {
      id: 'churn-prediction-aws',
      title: 'Customer Churn Prediction on AWS',
      description: 'End-to-end ML pipeline using SageMaker for training and Lambda for real-time inference',
      technologies: ['SageMaker', 'Lambda', 'S3', 'API Gateway'],
      impact: '94% accuracy, reduced churn by 23%'
    },
    {
      id: 'fraud-detection',
      title: 'Real-time Fraud Detection Pipeline',
      description: 'Streaming data pipeline with Kinesis and Lambda for real-time fraud detection',
      technologies: ['Kinesis', 'Lambda', 'DynamoDB', 'CloudWatch'],
      impact: 'Processing 100K+ transactions/minute'
    },
    {
      id: 'sentiment-analysis',
      title: 'NLP Sentiment Analysis with SageMaker',
      description: 'BERT-based sentiment analysis model deployed on SageMaker endpoints',
      technologies: ['SageMaker', 'PyTorch', 'Lambda', 'ECR'],
      impact: '91% accuracy on social media data'
    },
    {
      id: 'data-lakehouse',
      title: 'Data Lakehouse with Glue + Athena',
      description: 'Serverless data lakehouse architecture for large-scale analytics',
      technologies: ['Glue', 'Athena', 'S3', 'QuickSight'],
      impact: '70% cost reduction vs traditional DW'
    },
    {
      id: 'forecasting-deepar',
      title: 'Forecasting with DeepAR in SageMaker',
      description: 'Time series forecasting for demand planning using AWS DeepAR algorithm',
      technologies: ['SageMaker', 'DeepAR', 'S3', 'Lambda'],
      impact: '15% improvement in forecast accuracy'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-5xl mx-auto py-16 px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-charcoal mb-4">AWS ML Projects</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Production-ready machine learning solutions built on AWS cloud infrastructure
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 hover:border-aws-blue/20">
              <h2 className="text-xl font-semibold text-charcoal mb-3">{project.title}</h2>
              <p className="text-muted mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex gap-2 flex-wrap mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-cloud-gray text-aws-blue text-sm font-medium rounded-full border border-aws-blue/20">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mb-4 p-3 bg-teal/5 border border-teal/20 rounded-lg">
                <p className="text-sm text-teal font-medium">
                  <span className="text-charcoal">Impact:</span> {project.impact}
                </p>
              </div>
              
              <Link 
                to={`/projects/${project.id}`} 
                className="inline-flex items-center text-aws-blue text-sm font-medium hover:text-aws-blue/80 transition-colors"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-golden/10 rounded-full flex items-center justify-center">
              <span className="text-golden text-xl">🚀</span>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-charcoal">Ready to collaborate?</h3>
              <p className="text-muted text-sm">Let's discuss your next ML project</p>
            </div>
            <Link to="/contact" className="btn-secondary ml-4">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
