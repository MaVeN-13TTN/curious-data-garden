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
    title: 'Customer Churn Prediction',
    description: 'End-to-end ML pipeline with automated model training, hyperparameter tuning, and real-time inference serving 10K+ predictions daily.',
    technologies: ['SageMaker', 'Lambda', 'S3', 'CloudWatch'],
    impact: '94% accuracy, reduced churn by 23%',
    category: 'Machine Learning',
    categoryColor: 'primary',
    metric: '94% Accuracy',
    metricIcon: 'check',
    timeline: '3 months delivery',
    businessImpact: 'Reduced customer churn by 23%',
    gradient: 'from-primary/20 via-primary/10 to-secondary/20',
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
    title: 'Real-time Fraud Detection',
    description: 'High-throughput streaming pipeline processing transactions with sub-second latency, reducing fraud losses by 85%.',
    technologies: ['Kinesis', 'Lambda', 'DynamoDB', 'SNS'],
    impact: 'Processing 100K+ transactions/minute',
    category: 'Real-time Analytics',
    categoryColor: 'secondary',
    metric: '100K+ TPS',
    metricIcon: 'lightning',
    timeline: '4 months delivery',
    businessImpact: 'Reduced fraud losses by 85%',
    gradient: 'from-secondary/20 via-secondary/10 to-red-100/50',
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
    id: 'data-lake-platform',
    title: 'Data Lake Analytics Platform',
    description: 'Scalable data lake with automated ETL pipelines, enabling self-service analytics for 200+ business users.',
    technologies: ['S3', 'Glue', 'Athena', 'QuickSight'],
    impact: '500TB+ data processing capability',
    category: 'Data Engineering',
    categoryColor: 'purple',
    metric: '500TB+ Data',
    metricIcon: 'database',
    timeline: '6 months delivery',
    businessImpact: '70% cost reduction vs traditional DW',
    gradient: 'from-purple-100/50 via-indigo-50 to-blue-100/50',
    fullDescription: `
      <p>This project implemented a serverless data lake architecture for a retail client, processing over 500TB of data while reducing costs by 70% compared to their previous data warehouse solution.</p>
      
      <h3>Technical Implementation</h3>
      <ul>
        <li>S3-based data lake with intelligent tiering and lifecycle policies</li>
        <li>AWS Glue for automated ETL and metadata catalog</li>
        <li>Athena for SQL-based analytics with performance optimization</li>
        <li>QuickSight dashboards with embedded analytics</li>
      </ul>
      
      <h3>Business Impact</h3>
      <p>The solution reduced data warehouse costs by 70% while improving query performance by 40% for common analytics workloads. Enabled 200+ business users to perform self-service analytics, reducing dependency on IT teams.</p>
    `
  },
  {
    id: 'sentiment-analysis',
    title: 'NLP Sentiment Analysis',
    description: 'BERT-based sentiment analysis model deployed on SageMaker endpoints for real-time customer feedback analysis across multiple channels.',
    technologies: ['SageMaker', 'PyTorch', 'Lambda', 'Bedrock'],
    impact: '91% accuracy on social media data',
    category: 'Natural Language Processing',
    categoryColor: 'green',
    metric: '91% Accuracy',
    metricIcon: 'check',
    timeline: '2 months delivery',
    businessImpact: '18% improvement in customer satisfaction',
    gradient: 'from-green-100/50 to-teal-100/50',
    fullDescription: `
      <p>This project involved developing a BERT-based sentiment analysis model for analyzing customer feedback across social media, support tickets, and product reviews.</p>
      
      <h3>Technical Implementation</h3>
      <ul>
        <li>Fine-tuned BERT model using PyTorch and SageMaker</li>
        <li>Integration with Amazon Bedrock for enhanced text processing</li>
        <li>Batch and real-time inference endpoints</li>
        <li>Integration with data sources via Lambda functions</li>
      </ul>
      
      <h3>Business Impact</h3>
      <p>The model achieved 91% accuracy on diverse text sources, enabling the business to respond to negative sentiment 5x faster than before. This improved overall customer satisfaction scores by 18%.</p>
    `
  },
  {
    id: 'forecasting-deepar',
    title: 'Time Series Forecasting',
    description: 'Advanced forecasting solution using DeepAR and statistical models, enabling more accurate inventory management and resource allocation.',
    technologies: ['SageMaker', 'DeepAR', 'S3', 'Lambda'],
    impact: '15% improvement in forecast accuracy',
    category: 'Time Series Analysis',
    categoryColor: 'pink',
    metric: '15% Better',
    metricIcon: 'trending',
    timeline: '3 months delivery',
    businessImpact: '22% reduction in excess inventory',
    gradient: 'from-pink-100/50 to-rose-100/50',
    fullDescription: `
      <p>This project implemented time series forecasting for a manufacturing client to optimize inventory management and production planning using AWS SageMaker's DeepAR algorithm.</p>
      
      <h3>Technical Implementation</h3>
      <ul>
        <li>Data preparation pipeline for multiple time series</li>
        <li>DeepAR model training with cross-validation and hyperparameter tuning</li>
        <li>Automated weekly forecasts with Lambda and EventBridge</li>
        <li>Integration with inventory management system via APIs</li>
      </ul>
      
      <h3>Business Impact</h3>
      <p>The solution improved forecast accuracy by 15% compared to previous statistical methods, resulting in a 22% reduction in excess inventory costs and a 35% reduction in stockouts.</p>
    `
  },
  {
    id: 'computer-vision-quality',
    title: 'Computer Vision Quality Control',
    description: 'Automated visual inspection system using computer vision models to detect manufacturing defects with 99.2% accuracy.',
    technologies: ['SageMaker', 'Rekognition', 'Lambda', 'IoT Core'],
    impact: '99.2% defect detection accuracy',
    category: 'Computer Vision',
    categoryColor: 'blue',
    metric: '99.2% Accuracy',
    metricIcon: 'check',
    timeline: '5 months delivery',
    businessImpact: '40% reduction in quality issues',
    gradient: 'from-blue-100/50 to-cyan-100/50',
    fullDescription: `
      <p>This project developed an automated visual inspection system for a manufacturing facility, using computer vision to detect product defects in real-time on the production line.</p>
      
      <h3>Technical Implementation</h3>
      <ul>
        <li>Custom CNN model trained on defect images using SageMaker</li>
        <li>Integration with manufacturing equipment via AWS IoT Core</li>
        <li>Real-time image processing with Lambda and Rekognition</li>
        <li>Quality control dashboard with automated reporting</li>
      </ul>
      
      <h3>Business Impact</h3>
      <p>The system achieved 99.2% accuracy in defect detection, reducing manual inspection time by 80% and quality issues by 40%. This resulted in $2.1M annual savings in reduced waste and improved product quality.</p>
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
                  <svg className="w-20 h-20 text-primary opacity-60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 12h2v5H7v-5zm4-3h2v8h-2V9zm4-3h2v11h-2V6z"/>
                  </svg>
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
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  services={project.technologies}
                  slug={project.id}
                  gradient={project.gradient}
                  category={project.category}
                  categoryColor={project.categoryColor}
                  metric={project.metric}
                  metricIcon={project.metricIcon}
                  timeline={project.timeline}
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