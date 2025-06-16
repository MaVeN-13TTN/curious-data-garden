import { useRef, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { SectionHeading } from '../components/ui/section-heading';
import { BadgeAws } from '../components/ui/badge-aws';

const MLOps = () => {
  // Refs for scroll animations
  const introRef = useRef<HTMLDivElement>(null);
  const pipelineRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const architectureRef = useRef<HTMLDivElement>(null);

  // Handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [introRef.current, pipelineRef.current, toolsRef.current, architectureRef.current];
    elements.forEach(el => el && observer.observe(el));

    return () => elements.forEach(el => el && observer.unobserve(el));
  }, []);

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
    { step: "Data Ingestion", description: "S3, Kinesis, Glue ETL jobs", icon: "📥" },
    { step: "Model Training", description: "SageMaker training jobs with hyperparameter tuning", icon: "🤖" },
    { step: "Model Validation", description: "Automated testing and validation pipelines", icon: "✅" },
    { step: "Model Deployment", description: "Blue/green deployments with SageMaker endpoints", icon: "🚀" },
    { step: "Monitoring", description: "Real-time monitoring and alerting", icon: "📊" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="container-custom">
          <SectionHeading
            title="MLOps & Cloud Architecture"
            subtitle="Building scalable, production-ready machine learning systems on AWS"
          />

          <div
            ref={introRef}
            className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-border opacity-0"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">What is MLOps?</h2>
            <p className="text-muted-foreground mb-6">
              MLOps combines machine learning, DevOps, and data engineering to deploy and maintain ML models in production reliably and efficiently. It focuses on automation, monitoring, and governance of the entire ML lifecycle.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-xl">🔄</span>
                </div>
                <h3 className="font-medium text-foreground mb-2">Continuous Integration</h3>
                <p className="text-sm text-muted-foreground">Automated testing and validation of ML models</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-xl">🚀</span>
                </div>
                <h3 className="font-medium text-foreground mb-2">Continuous Deployment</h3>
                <p className="text-sm text-muted-foreground">Automated model deployment to production</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-xl">📊</span>
                </div>
                <h3 className="font-medium text-foreground mb-2">Monitoring</h3>
                <p className="text-sm text-muted-foreground">Real-time tracking of model performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Overview */}
      <section className="py-16 px-4 sm:px-6 bg-muted">
        <div className="container-custom">
          <div
            ref={pipelineRef}
            className="max-w-5xl mx-auto opacity-0"
          >
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">ML Pipeline Architecture</h2>

            <div className="space-y-6">
              {pipeline.map((item, index) => (
                <div key={index} className="flex items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-6">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.step}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="flex-shrink-0 text-primary font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container-custom">
          <div
            ref={toolsRef}
            className="max-w-6xl mx-auto opacity-0"
          >
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">MLOps Toolkit</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((category, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{category.category}</h3>
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AWS Architecture */}
      <section className="py-16 px-4 sm:px-6 bg-muted">
        <div className="container-custom">
          <div
            ref={architectureRef}
            className="max-w-5xl mx-auto opacity-0"
          >
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">AWS MLOps Architecture</h2>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-border">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Core AWS Services</h3>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <BadgeAws service="SageMaker" />
                  <BadgeAws service="Lambda" />
                  <BadgeAws service="S3" />
                  <BadgeAws service="CodePipeline" />
                  <BadgeAws service="CloudWatch" />
                  <BadgeAws service="ECR" />
                  <BadgeAws service="Kinesis" />
                  <BadgeAws service="Glue" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 text-xl">🗄️</span>
                  </div>
                  <h4 className="font-medium text-foreground mb-2">Data Layer</h4>
                  <p className="text-sm text-muted-foreground">S3 data lakes, Glue ETL, data cataloging</p>
                </div>

                <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-xl">⚙️</span>
                  </div>
                  <h4 className="font-medium text-foreground mb-2">Processing Layer</h4>
                  <p className="text-sm text-muted-foreground">SageMaker training, Lambda functions, batch processing</p>
                </div>

                <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-xl">🔍</span>
                  </div>
                  <h4 className="font-medium text-foreground mb-2">Monitoring Layer</h4>
                  <p className="text-sm text-muted-foreground">CloudWatch metrics, model monitoring, alerting</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                <h4 className="font-medium text-foreground mb-3">Key Benefits</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Automated model deployment
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Scalable infrastructure
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Real-time monitoring
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Cost optimization
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Version control for models
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Compliance and governance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MLOps;
