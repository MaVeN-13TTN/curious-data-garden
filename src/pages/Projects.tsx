
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto py-16 px-8">
        <h1 className="text-4xl font-light text-gray-900 mb-8">AWS ML Projects</h1>
        <p className="text-gray-600 mb-12 text-lg">
          Production-ready machine learning solutions built on AWS cloud infrastructure
        </p>
        
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex gap-2 flex-wrap mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-sm text-gray-500 mb-4">
                <strong>Impact:</strong> {project.impact}
              </p>
              
              <Link 
                to={`/projects/${project.id}`} 
                className="text-gray-900 text-sm font-medium hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
