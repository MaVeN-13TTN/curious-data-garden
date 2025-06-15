
import Navigation from '../components/Navigation';

const MLOps = () => {
  const tools = [
    {
      category: "CI/CD Pipeline",
      items: ["AWS CodePipeline", "AWS CodeBuild", "GitHub Actions", "SageMaker Pipelines"]
    },
    {
      category: "Model Deployment",
      items: ["SageMaker Endpoints", "Lambda Functions", "ECS/Fargate", "Batch Transform"]
    },
    {
      category: "Monitoring & Logging",
      items: ["CloudWatch", "SageMaker Model Monitor", "X-Ray", "CloudTrail"]
    },
    {
      category: "Infrastructure as Code",
      items: ["AWS CDK", "Terraform", "CloudFormation", "Docker/ECR"]
    }
  ];

  const pipeline = [
    { step: "Data Ingestion", description: "S3, Kinesis, Glue ETL jobs" },
    { step: "Model Training", description: "SageMaker training jobs with hyperparameter tuning" },
    { step: "Model Validation", description: "Automated testing and validation pipelines" },
    { step: "Model Deployment", description: "Blue/green deployments with SageMaker endpoints" },
    { step: "Monitoring", description: "Real-time monitoring and alerting" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto py-16 px-8">
        <h1 className="text-4xl font-light text-gray-900 mb-8">MLOps & Cloud Architecture</h1>
        <p className="text-gray-600 mb-12 text-lg">
          End-to-end machine learning operations using AWS cloud services for scalable, 
          production-ready ML systems.
        </p>

        {/* Pipeline Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-8">ML Pipeline Architecture</h2>
          <div className="space-y-6">
            {pipeline.map((item, index) => (
              <div key={index} className="flex items-start gap-6 p-6 border border-gray-200">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{item.step}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Tools & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <div key={tool.category} className="border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">{tool.category}</h3>
                <ul className="space-y-2">
                  {tool.items.map((item) => (
                    <li key={item} className="text-gray-600 text-sm">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-3xl font-light text-gray-900 mb-8">MLOps Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Model Versioning</h3>
              <p className="text-gray-600 text-sm">
                Track model artifacts, hyperparameters, and metadata using SageMaker 
                Model Registry and S3 versioning.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Automated Testing</h3>
              <p className="text-gray-600 text-sm">
                Implement unit tests, integration tests, and data validation 
                checks in the CI/CD pipeline.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Model Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Monitor model performance, data drift, and concept drift using 
                CloudWatch and SageMaker Model Monitor.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Cost Optimization</h3>
              <p className="text-gray-600 text-sm">
                Use Spot instances for training, auto-scaling for inference, 
                and lifecycle policies for S3 storage.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MLOps;
