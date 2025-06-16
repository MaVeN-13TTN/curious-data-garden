import { useRef, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { Download, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/ui/section-heading';
import { BadgeAws } from '../components/ui/badge-aws';

const About = () => {
  // Refs for scroll animations
  const bioRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  
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
    
    const elements = [bioRef.current, skillsRef.current, experienceRef.current];
    elements.forEach(el => el && observer.observe(el));
    
    return () => elements.forEach(el => el && observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              About Me
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              AWS Data Scientist with a passion for <span className="text-primary">scalable ML solutions</span>
            </h1>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      </section>
      
      {/* Bio Section */}
      <section className="py-12 px-4 sm:px-6">
        <div className="container-custom">
          <div 
            ref={bioRef}
            className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 opacity-0"
          >
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Background</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Data scientist with 5+ years of experience building scalable machine learning 
                  solutions on AWS. Passionate about transforming complex data into actionable 
                  business insights using cloud-native technologies.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-border">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Education</h2>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">M.S. Data Science</p>
                    <p className="text-muted-foreground">University of Technology, 2018</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">B.S. Computer Science</p>
                    <p className="text-muted-foreground">State University, 2016</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl h-full flex items-center justify-center p-8">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Professional headshot" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-12 px-4 sm:px-6 bg-muted">
        <div className="container-custom">
          <SectionHeading 
            title="Technical Expertise" 
            subtitle="Specialized in AWS cloud services and machine learning technologies"
          />
          
          <div 
            ref={skillsRef}
            className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 opacity-0 stagger-animation"
          >
            {/* Programming & Languages */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl shadow-lg border border-blue-200/50 dark:border-blue-700/30 card-hover group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-blue-600 transition-colors">Programming</h3>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">Python</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">SQL</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">PySpark</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">R</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">Scala</span>
                </div>
                <p className="text-xs text-muted-foreground">Expert in data processing & analysis</p>
              </div>
            </div>
            
            {/* Machine Learning & AI */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl shadow-lg border border-primary/20 card-hover group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">ML & AI</h3>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">TensorFlow</span>
                  <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">PyTorch</span>
                  <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">Scikit-learn</span>
                  <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">XGBoost</span>
                  <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">LangChain</span>
                  <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">Transformers</span>
                </div>
                <p className="text-xs text-muted-foreground">Deep learning & generative AI</p>
              </div>
            </div>
            
            {/* AWS Cloud Services */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-6 rounded-xl shadow-lg border border-orange-200/50 dark:border-orange-700/30 card-hover group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.5 2c0 1.5-1.5 3-3 3s-3-1.5-3-3c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2zM7.5 6c0 1.5-1.5 3-3 3s-3-1.5-3-3c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2zm13 0c0 1.5-1.5 3-3 3s-3-1.5-3-3c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2zM7.5 18c0 1.5-1.5 3-3 3s-3-1.5-3-3c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2zm13 0c0 1.5-1.5 3-3 3s-3-1.5-3-3c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-orange-600 transition-colors">AWS Services</h3>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <BadgeAws service="SageMaker" />
                  <BadgeAws service="Bedrock" />
                  <BadgeAws service="Lambda" />
                  <BadgeAws service="S3" />
                  <BadgeAws service="Glue" />
                  <BadgeAws service="Athena" />
                  <BadgeAws service="Kinesis" />
                  <BadgeAws service="Redshift" />
                </div>
                <p className="text-xs text-muted-foreground">Cloud-native ML solutions</p>
              </div>
            </div>

            {/* DevOps & Infrastructure */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-xl shadow-lg border border-purple-200/50 dark:border-purple-700/30 card-hover group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18L19 6.3v4.7c0 4.52-3.05 8.64-7 9.66-3.95-1.02-7-5.14-7-9.66V6.3l7-3.12z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-purple-600 transition-colors">DevOps & IaC</h3>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">Docker</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">Kubernetes</span>
                  <BadgeAws service="Terraform" />
                  <BadgeAws service="CloudFormation" />
                  <BadgeAws service="CodePipeline" />
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">GitLab CI</span>
                </div>
                <p className="text-xs text-muted-foreground">MLOps & automation</p>
              </div>
            </div>
          </div>
          
          {/* Additional Skills Section */}
          <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Methodologies & Practices
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">Agile/Scrum</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">MLOps</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">CI/CD</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">A/B Testing</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">Model Monitoring</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">Data Governance</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Visualization & Analytics
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Tableau</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Power BI</span>
                <BadgeAws service="QuickSight" />
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Plotly</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Streamlit</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Grafana</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-12 px-4 sm:px-6">
        <div className="container-custom">
          <SectionHeading 
            title="Professional Experience" 
            subtitle="Building and deploying ML solutions at scale"
          />
          
          <div 
            ref={experienceRef}
            className="max-w-4xl mx-auto space-y-8 opacity-0"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-border">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Senior Data Scientist</h3>
                  <p className="text-primary font-medium">Cloud Solutions Inc.</p>
                </div>
                <span className="text-sm text-muted-foreground">2020 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Led development of real-time fraud detection system using AWS Kinesis and SageMaker</li>
                <li>Architected data lake solution processing 5TB+ daily using S3, Glue, and Athena</li>
                <li>Mentored junior data scientists on AWS best practices and MLOps workflows</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-border">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Data Scientist</h3>
                  <p className="text-primary font-medium">Tech Innovations Ltd.</p>
                </div>
                <span className="text-sm text-muted-foreground">2018 - 2020</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Developed customer churn prediction model with 94% accuracy using SageMaker</li>
                <li>Built ETL pipelines using AWS Glue and Lambda for automated data processing</li>
                <li>Implemented CI/CD for ML models using AWS CodePipeline and CloudFormation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-xl border border-border text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Let's Connect
            </h2>
            <p className="text-muted-foreground mb-8">
              Interested in working together? Check out my projects or get in touch to discuss how I can help with your data challenges.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/resume.pdf" className="btn-primary inline-flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
              <a href="/contact" className="btn-secondary inline-flex items-center">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;