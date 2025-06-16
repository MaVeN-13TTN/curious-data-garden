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
    <div className="min-h-screen bg-background">
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
            className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 opacity-0 stagger-animation"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-border card-hover">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Programming</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">Python, SQL, PySpark, R</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium">Python</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium">SQL</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium">PySpark</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-border card-hover">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-secondary text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">ML Tools</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">Scikit-learn, TensorFlow, PyTorch, Pandas</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">TensorFlow</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">PyTorch</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">Pandas</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-border card-hover">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-xl">☁️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">AWS Services</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">SageMaker, S3, Lambda, Glue, Athena, Redshift</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <BadgeAws service="SageMaker" />
                  <BadgeAws service="Lambda" />
                  <BadgeAws service="S3" />
                  <BadgeAws service="Glue" />
                </div>
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