/**
 * MLOps & Cloud Architecture Page
 * 
 * Comprehensive overview of MLOps practices and AWS cloud architecture
 * for enterprise machine learning operations.
 * 
 * Sections:
 * - Hero & Introduction
 * - MLOps Pipeline (Zigzag Layout)
 * - Best Practices
 */

import { useRef, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { BadgeAws } from '../components/ui/badge-aws';
import { ScrollToTop } from '../components/ui/scroll-to-top';
import { Shield, Zap, GitBranch, Monitor, Database, Code, Settings } from 'lucide-react';

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
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              MLOps & Cloud Architecture
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Production-Ready <span className="text-primary">ML Systems</span> on AWS
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Scalable, automated, and secure machine learning operations that deliver business value at enterprise scale
            </p>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      </section>
      
      {/* Introduction */}
      <section className="py-12 px-4 sm:px-6">
        <div className="container-custom">
          <div 
            ref={introRef}
            className="max-w-6xl mx-auto opacity-0"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">What is MLOps?</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  MLOps bridges the gap between machine learning experimentation and production deployment. It combines ML, DevOps, and data engineering to create automated, scalable, and reliable ML systems that deliver consistent business value.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">Accelerated model deployment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">Enhanced reliability & monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <GitBranch className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">Streamlined collaboration</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">MLOps Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">90%</div>
                    <div className="text-sm text-muted-foreground">Faster Deployment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">75%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">5x</div>
                    <div className="text-sm text-muted-foreground">ROI Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Pipeline Section */}
      <section className="py-16 px-4 sm:px-6 bg-muted">
        <div className="container-custom">
          <div 
            ref={pipelineRef}
            className="max-w-6xl mx-auto opacity-0"
          >
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Complete MLOps Pipeline</h2>
            
            {/* Pipeline Visualization - Zigzag Layout */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-border mb-12">
              {/* Top Row - Steps 1, 3, 5 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Step 1 - Data Ingestion */}
                <div className="text-center group relative p-6 rounded-xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-900/10 dark:to-blue-800/20 hover:border-blue-500/60 transition-all duration-300">
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                    1
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Data Ingestion</h4>
                  <p className="text-xs text-muted-foreground mb-3">S3, Kinesis, Glue</p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div>• Batch & Stream</div>
                    <div>• Data Validation</div>
                    <div>• Schema Evolution</div>
                  </div>
                </div>
                
                {/* Step 3 - Model Training */}
                <div className="text-center group relative p-6 rounded-xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-900/10 dark:to-purple-800/20 hover:border-purple-500/60 transition-all duration-300">
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                    3
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Model Training</h4>
                  <p className="text-xs text-muted-foreground mb-3">SageMaker, Experiments</p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div>• Auto ML</div>
                    <div>• Hyperparameter Tuning</div>
                    <div>• Model Registry</div>
                  </div>
                </div>
                
                {/* Step 5 - Monitoring */}
                <div className="text-center group relative p-6 rounded-xl border-2 border-teal-500/30 bg-gradient-to-br from-teal-50/50 to-cyan-100/30 dark:from-teal-900/10 dark:to-cyan-800/20 hover:border-teal-500/60 transition-all duration-300">
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                    5
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Monitoring</h4>
                  <p className="text-xs text-muted-foreground mb-3">CloudWatch, Dashboards</p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div>• Model Drift</div>
                    <div>• Performance Metrics</div>
                    <div>• Data Quality</div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Row - Steps 2, 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {/* Step 2 - Feature Engineering */}
                <div className="text-center group relative p-6 rounded-xl border-2 border-green-500/30 bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-900/10 dark:to-green-800/20 hover:border-green-500/60 transition-all duration-300">
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                    2
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Feature Engineering</h4>
                  <p className="text-xs text-muted-foreground mb-3">Feature Store, Processing</p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div>• Feature Pipeline</div>
                    <div>• Transformations</div>
                    <div>• Feature Serving</div>
                  </div>
                </div>
                
                {/* Step 4 - Model Deployment */}
                <div className="text-center group relative p-6 rounded-xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-50/50 to-red-100/30 dark:from-orange-900/10 dark:to-red-800/20 hover:border-orange-500/60 transition-all duration-300">
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                    4
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Deployment</h4>
                  <p className="text-xs text-muted-foreground mb-3">Endpoints, Lambda, Batch</p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div>• A/B Testing</div>
                    <div>• Canary Deployment</div>
                    <div>• Auto Scaling</div>
                  </div>
                </div>
              </div>
              
              {/* Flow Indicator */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Pipeline Flow: 1 → 2 → 3 → 4 → 5
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                </div>
              </div>
              
              {/* AWS Services */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-semibold text-foreground mb-4 text-center">AWS Services & Tools</h4>
                <div className="space-y-3">
                  {/* Row 1 - Core AWS Services */}
                  <div className="flex flex-wrap justify-center gap-3">
                    <BadgeAws service="SageMaker" />
                    <BadgeAws service="Lambda" />
                    <BadgeAws service="S3" />
                    <BadgeAws service="CodePipeline" />
                    <BadgeAws service="CloudWatch" />
                    <BadgeAws service="ECR" />
                    <BadgeAws service="Glue" />
                  </div>
                  
                  {/* Row 2 - Additional Services & Tools */}
                  <div className="flex flex-wrap justify-center gap-3">
                    <BadgeAws service="Kinesis" />
                    <BadgeAws service="CloudFormation" />
                    <BadgeAws service="IAM" />
                    <BadgeAws service="Terraform" />
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium">Docker</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium">Kubernetes</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pipeline Benefits */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Automated Workflows</h3>
                <p className="text-sm text-muted-foreground">End-to-end automation from data ingestion to model deployment with minimal manual intervention</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Enterprise Security</h3>
                <p className="text-sm text-muted-foreground">Built-in security, compliance, and governance with AWS IAM, VPC, and encryption</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitBranch className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Scalable Architecture</h3>
                <p className="text-sm text-muted-foreground">Auto-scaling infrastructure that adapts to workload demands and optimizes costs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Best Practices */}
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
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default MLOps;
