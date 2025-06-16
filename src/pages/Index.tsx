
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';

const Index = () => {
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const certRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
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
    
    const elements = [heroRef.current, certRef.current, skillsRef.current, projectsRef.current];
    elements.forEach(el => el && observer.observe(el));
    
    return () => elements.forEach(el => el && observer.unobserve(el));
  }, []);
  
  // Scroll to next section
  const scrollToNextSection = () => {
    certRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div 
          ref={heroRef}
          className="container-custom opacity-0"
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              AWS Cloud & Machine Learning Expert
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
              Transforming Data into <span className="text-primary">Intelligent Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building scalable machine learning pipelines and data architectures on AWS
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link to="/projects" className="btn-primary group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-pulse-slow" onClick={scrollToNextSection}>
            <ChevronDown className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"></div>
      </section>

      {/* AWS Certifications */}
      <section ref={certRef} className="section bg-muted px-4 sm:px-6 opacity-0">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              AWS Certified Professional
            </h2>
            <div className="flex flex-wrap justify-center gap-6 stagger-animation">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-border hover:border-primary transition-colors card-hover">
                <div className="text-primary text-3xl mb-3">🏆</div>
                <div className="font-medium">AWS Certified Machine Learning – Specialty</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-border hover:border-primary transition-colors card-hover">
                <div className="text-primary text-3xl mb-3">🏆</div>
                <div className="font-medium">AWS Certified Solutions Architect – Associate</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-border hover:border-primary transition-colors card-hover">
                <div className="text-primary text-3xl mb-3">🏆</div>
                <div className="font-medium">AWS Certified Data Analytics – Specialty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core AWS Skills */}
      <section ref={skillsRef} className="section px-4 sm:px-6 opacity-0">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            AWS Cloud Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8 stagger-animation">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-border text-center space-y-4 card-hover">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Machine Learning</h3>
              <p className="text-muted-foreground">Building end-to-end ML pipelines with SageMaker, Lambda, ECR, and custom model endpoints</p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">SageMaker</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Lambda</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">ECR</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-border text-center space-y-4 card-hover">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Data Analytics</h3>
              <p className="text-muted-foreground">Creating scalable data lakes and warehouses with S3, Athena, Glue, Redshift, and Kinesis</p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">S3</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">Athena</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">Redshift</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-border text-center space-y-4 card-hover">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">MLOps & DevOps</h3>
              <p className="text-muted-foreground">Automating ML workflows with CodePipeline, CloudWatch, IAM, and infrastructure as code</p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium">CodePipeline</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium">Terraform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section ref={projectsRef} className="section bg-muted px-4 sm:px-6 opacity-0">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Featured AWS Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 stagger-animation">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-border hover:border-primary transition-colors card-hover">
              <div className="h-48 bg-gradient-to-r from-primary/30 to-secondary/30 flex items-center justify-center">
                <div className="text-4xl">📈</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Customer Churn Prediction
                </h3>
                <p className="text-muted-foreground mb-4">
                  End-to-end ML pipeline using SageMaker for model training and Lambda for real-time inference, 
                  achieving 94% accuracy in production.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">SageMaker</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Lambda</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">S3</span>
                </div>
                <Link to="/projects/churn-prediction-aws" className="text-primary font-medium inline-flex items-center group">
                  View Project 
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-border hover:border-primary transition-colors card-hover">
              <div className="h-48 bg-gradient-to-r from-secondary/30 to-primary/30 flex items-center justify-center">
                <div className="text-4xl">🛡️</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Real-time Fraud Detection
                </h3>
                <p className="text-muted-foreground mb-4">
                  Streaming data pipeline with Kinesis and Lambda for real-time fraud detection, 
                  processing 100K+ transactions per minute.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">Kinesis</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">Lambda</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">DynamoDB</span>
                </div>
                <Link to="/projects/fraud-detection" className="text-primary font-medium inline-flex items-center group">
                  View Project 
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-secondary inline-flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section px-4 sm:px-6 relative">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-xl border border-border relative z-10">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Scale Your Data?
              </h2>
              <p className="text-muted-foreground text-lg">
                Available for AWS ML consulting, workshops, and cloud architecture design
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Link to="/contact" className="btn-primary">
                  Start a Project
                </Link>
                <a href="/resume.pdf" className="btn-secondary inline-flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-20 left-20 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl"></div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900 border-t border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} DS Portfolio. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
