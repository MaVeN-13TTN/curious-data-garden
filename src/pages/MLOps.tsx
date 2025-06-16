import { useRef, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { SectionHeading } from '../components/ui/section-heading';
import { BadgeAws } from '../components/ui/badge-aws';

const MLOps = () => {
  // Refs for scroll animations
  const introRef = useRef<HTMLDivElement>(null);
  const pipelineRef = useRef<HTMLDivElement>(null);
  
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
    
    const elements = [introRef.current, pipelineRef.current];
    elements.forEach(el => el && observer.observe(el));
    
    return () => elements.forEach(el => el && observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
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
      
      <section className="py-16 px-4 sm:px-6 bg-muted">
        <div className="container-custom">
          <div 
            ref={pipelineRef}
            className="max-w-5xl mx-auto opacity-0"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">AWS MLOps Pipeline</h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-border">
              {/* Pipeline visualization */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="font-medium">Data Ingestion</p>
                </div>
                <div className="hidden md:block">→</div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="font-medium">Preprocessing</p>
                </div>
                <div className="hidden md:block">→</div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="font-medium">Training</p>
                </div>
                <div className="hidden md:block">→</div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="font-medium">Deployment</p>
                </div>
                <div className="hidden md:block">→</div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="font-medium">Monitoring</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">AWS Services Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <BadgeAws service="SageMaker" />
                <BadgeAws service="Lambda" />
                <BadgeAws service="S3" />
                <BadgeAws service="CodePipeline" />
                <BadgeAws service="CloudWatch" />
                <BadgeAws service="ECR" />
              </div>
              
              <p className="text-muted-foreground">
                This end-to-end MLOps pipeline automates the entire machine learning lifecycle from data ingestion to model monitoring, ensuring reproducibility, scalability, and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 sm:px-6">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">AWS MLOps Best Practices</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-medium">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Infrastructure as Code</h3>
                  <p className="text-muted-foreground text-sm">Use CloudFormation or Terraform to define and provision ML infrastructure</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-medium">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Containerization</h3>
                  <p className="text-muted-foreground text-sm">Package ML models and dependencies in Docker containers for consistent deployment</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-medium">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Automated Testing</h3>
                  <p className="text-muted-foreground text-sm">Implement unit, integration, and model quality tests in CI/CD pipelines</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-medium">4</span>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Model Versioning</h3>
                  <p className="text-muted-foreground text-sm">Track model versions, parameters, and metrics with SageMaker Model Registry</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-medium">5</span>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Monitoring & Alerting</h3>
                  <p className="text-muted-foreground text-sm">Set up CloudWatch dashboards and alarms for model performance and drift detection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MLOps;