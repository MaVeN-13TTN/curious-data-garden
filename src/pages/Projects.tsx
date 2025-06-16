import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ProjectCard } from '../components/ui/card-project';
import { SectionHeading } from '../components/ui/section-heading';
import { BadgeAws } from '../components/ui/badge-aws';
import { ArrowLeft } from 'lucide-react';

// Project data
const projectsData = [
  {
    id: 'churn-prediction-aws',
    title: 'Customer Churn Prediction on AWS',
    description: 'End-to-end ML pipeline using SageMaker for training and Lambda for real-time inference. This solution helped reduce customer churn by 23% through early intervention strategies.',
    technologies: ['SageMaker', 'Lambda', 'S3', 'API Gateway'],
    impact: '94% accuracy, reduced churn by 23%',
    emoji: '📊',
    gradient: 'from-orange-100/50 to-red-100/50 dark:from-orange-900/20 dark:to-red-900/20',
    fullDescription: `
      <p>This project involved building an end-to-end machine learning pipeline to predict customer churn for a subscription-based service. The solution uses AWS SageMaker for model training and Lambda for real-time inference.</p>
      
      <h3>Technical Implementation</h3>
      <ul>
        <li>Data preprocessing with AWS Glue and feature engineering</li>
        <li>Model training using XGBoost in SageMaker with hyperparameter optimization</li>
        <li>Real-time inference API using Lambda and API Gateway</li>
        <li>Automated retraining pipeline triggered by CloudWatch Events</li>
      </ul>
      
      <h3>Business Impact</h3>
      <p>The model achieved 94% accuracy in predicting customers likely to churn within the next 30 days. By implementing targeted retention strategies for these customers, the business reduced overall churn by 23%, resulting in approximately $1.2M in retained annual revenue.</p>
    `
  },
  {
    id: 'fraud-detection',
    title: 'Real-time Fraud Detection Pipeline',
    description: 'Streaming data pipeline with Kinesis and Lambda for real-time fraud detection, processing over 100,000 transactions per minute with sub-second latency.',
    technologies: ['Kinesis', 'Lambda', 'DynamoDB', 'CloudWatch'],
    impact: 'Processing 100K+ transactions/minute',
    emoji: '🛡️',
    gradient: 'from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20',
    fullDescription: `
      <p>This project implemented a real-time fraud detection system for financial transactions using AWS streaming services. The system can process over 100,000 transactions per minute with sub-second latency.</p>
      
      <h3>Technical Implementation</h3>
      <ul>
        <li>Transaction data ingestion using Kinesis Data Streams</li>
        <li>Real-time processing with Kinesis Data Analytics</li>
        <li>ML model deployment in Lambda for scoring transactions</li>
        <li>Suspicious transaction storage in DynamoDB with alerting via SNS</li>
      </ul>
      
      <h3>Business Impact</h3>
      <p>The system reduced fraudulent transactions by 87% while maintaining a false positive rate below 0.1%. This resulted in savings of approximately $3.5M annually in fraud prevention.</p>
    `
  },
  {
    id: 'sentiment-analysis',
    title: 'NLP Sentiment Analysis with SageMaker',
    description: 'BERT-based sentiment analysis model deployed on SageMaker endpoints for real-time customer feedback analysis across multiple channels.',
    technologies: ['SageMaker', 'PyTorch', 'Lambda', 'ECR'],
    impact: '91% accuracy on social media data',
    emoji: '💬',
    gradient: 'from-green-100/50 to-teal-100/50 dark:from-green-900/20 dark:to-teal-900/20',
    fullDescription: `
      <p>This project involved developing a BERT-based sentiment analysis model for analyzing customer feedback across social media, support tickets, and product reviews.</p>
      
      <h3>Technical Implementation</h3>
      <ul>
        <li>Fine-tuned BERT model using PyTorch and SageMaker</li>
        <li>Custom container deployment via ECR</li>
        <li>Batch and real-time inference endpoints</li>
        <li>Integration with data sources via Lambda functions</li>
      </ul>
      
      <h3>Business Impact</h3>
      <p>The model achieved 91% accuracy on diverse text sources, enabling the business to respond to negative sentiment 5x faster than before. This improved overall customer satisfaction scores by 18%.</p>
    `
  },
  {
    id: 'data-lakehouse',
    title: 'Data Lakehouse with Glue + Athena',
    description: 'Serverless data lakehouse architecture for large-scale analytics, combining the flexibility of data lakes with the query performance of data warehouses.',
    technologies: ['Glue', 'Athena', 'S3', 'QuickSight'],
    impact: '70% cost reduction vs traditional DW',
    emoji: '🏗️',
    gradient: 'from-yellow-100/50 to-amber-100/50 dark:from-yellow-900/20 dark:to-amber-900/20',
    fullDescription: `
      <p>This project implemented a serverless data lakehouse architecture for a retail client, processing over 5TB of daily data while reducing costs by 70% compared to their previous data warehouse solution.</p>
      
      <h3>Technical Implementation</h3>
      <ul>
        <li>S3-based data lake with partitioning and compression</li>
        <li>AWS Glue for ETL and metadata catalog</li>
        <li>Athena for SQL-based analytics</li>
        <li>QuickSight dashboards for business intelligence</li>
      </ul>
      
      <h3>Business Impact</h3>
      <p>The solution reduced data warehouse costs by 70% while improving query performance by 40% for common analytics workloads. The business gained the ability to analyze previously siloed data sources, leading to new customer insights.</p>
    `
  },
  {
    id: 'forecasting-deepar',
    title: 'Forecasting with DeepAR in SageMaker',
    description: 'Time series forecasting for demand planning using AWS DeepAR algorithm, enabling more accurate inventory management and resource allocation.',
    technologies: ['SageMaker', 'DeepAR', 'S3', 'Lambda'],
    impact: '15% improvement in forecast accuracy',
    emoji: '📈',
    gradient: 'from-pink-100/50 to-rose-100/50 dark:from-pink-900/20 dark:to-rose-900/20',
    fullDescription: `
      <p>This project implemented time series forecasting for a manufacturing client to optimize inventory management and production planning using AWS SageMaker's DeepAR algorithm.</p>
      
      <h3>Technical Implementation</h3>
      <ul>
        <li>Data preparation pipeline for multiple time series</li>
        <li>DeepAR model training and hyperparameter tuning</li>
        <li>Automated weekly forecasts with Lambda</li>
        <li>Integration with inventory management system</li>
      </ul>
      
      <h3>Business Impact</h3>
      <p>The solution improved forecast accuracy by 15% compared to previous statistical methods, resulting in a 22% reduction in excess inventory costs and a 35% reduction in stockouts.</p>
    `
  }
];

const Projects = () => {
  const { projectId } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Find the selected project if projectId is provided
  const selectedProject = projectId 
    ? projectsData.find(project => project.id === projectId) 
    : null;

  // If a specific project is selected, show its details
  if (selectedProject) {
    return (
      <div className="min-h-screen bg-transparent">
        <Navigation />
        
        <div className="pt-32 pb-16 px-4 sm:px-6">
          <div className="container-custom">
            <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <a 
                href="/projects" 
                className="inline-flex items-center text-primary hover:underline mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to all projects
              </a>
              
              <div className="max-w-4xl mx-auto">
                <div className={`h-64 bg-gradient-to-r ${selectedProject.gradient} rounded-xl flex items-center justify-center mb-8`}>
                  <div className="text-6xl">{selectedProject.emoji}</div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h1>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <BadgeAws key={tech} service={tech} />
                  ))}
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border mb-8">
                  <h2 className="text-xl font-semibold text-foreground mb-2">Impact</h2>
                  <p className="text-primary font-medium">{selectedProject.impact}</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border prose dark:prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: selectedProject.fullDescription }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Otherwise, show the list of projects
  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="container-custom">
          <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <SectionHeading
              title="AWS ML Projects"
              subtitle="Production-ready machine learning solutions built on AWS cloud infrastructure"
            />
            
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {projectsData.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  services={project.technologies}
                  slug={project.id}
                  emoji={project.emoji}
                  gradient={project.gradient}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;