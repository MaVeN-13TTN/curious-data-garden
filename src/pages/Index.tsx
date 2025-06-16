import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import { ScrollToTop } from '../components/ui/scroll-to-top';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight, Download, ChevronDown } from 'lucide-react';

const Index = () => {
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const certRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  // Carousel API for autoplay
  const [api, setApi] = useState<CarouselApi>();
  
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
  
  // Autoplay effect for carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);
  
  // Scroll to next section
  const scrollToNextSection = () => {
    certRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
        <div 
          ref={heroRef}
          className="container-custom opacity-0 w-full"
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
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-pulse-slow" onClick={scrollToNextSection}>
          <ChevronDown className="h-8 w-8 text-primary" />
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
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto overflow-hidden"
            >
              <CarouselContent className="-ml-0">
                {[
                  { title: "Cloud Practitioner", level: "Foundational", badgeUrl: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" },
                  { title: "AI Practitioner", level: "Foundational", badgeUrl: "https://images.credly.com/size/340x340/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png" },
                  { title: "Solutions Architect", level: "Associate", badgeUrl: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" },
                  { title: "Machine Learning Engineer", level: "Associate", badgeUrl: "https://images.credly.com/size/340x340/images/1a634b4e-3d6b-4a74-b118-c0dcb429e8d2/image.png" },
                  { title: "Data Engineer", level: "Associate", badgeUrl: "https://images.credly.com/size/340x340/images/e5c85d7f-4e50-431e-b5af-fa9d9b0596e7/image.png" },
                  { title: "Machine Learning", level: "Specialty", badgeUrl: "https://images.credly.com/size/340x340/images/778bde6c-ad1c-4312-ac33-2fa40d50a147/image.png" },
                ].map((cert, index) => (
                  <CarouselItem key={index} className="basis-1/3 pl-0">
                    <div className="px-4">
                      <div className="flex flex-col items-center justify-center p-8 h-full">
                        <img 
                          src={cert.badgeUrl} 
                          alt={`${cert.title} Badge`} 
                          className="w-32 h-32 object-contain mb-6"
                        />
                        <span className="text-lg font-semibold text-primary text-center">{cert.title}</span>
                        <p className="text-sm text-muted-foreground mt-2">{cert.level}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
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
            {/* Machine Learning Card */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 shadow-lg border border-primary/20 text-center space-y-4 card-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Machine Learning</h3>
              <p className="text-muted-foreground">End-to-end ML pipelines achieving 95%+ accuracy in production environments</p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">SageMaker</span>
                <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">Lambda</span>
                <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">ECR</span>
                <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">Bedrock</span>
                <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">Textract</span>
              </div>
              <div className="pt-2 text-xs text-primary font-medium">
                <span className="inline-flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  15+ Production Models
                </span>
              </div>
            </div>

            {/* Data Analytics Card */}
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-8 shadow-lg border border-secondary/20 text-center space-y-4 card-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 12h2v5H7v-5zm4-3h2v8h-2V9zm4-3h2v11h-2V6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">Data Analytics</h3>
              <p className="text-muted-foreground">Scalable data lakes processing 100TB+ with real-time analytics capabilities</p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-secondary/15 text-secondary rounded-full text-xs font-medium">S3</span>
                <span className="px-3 py-1 bg-secondary/15 text-secondary rounded-full text-xs font-medium">Athena</span>
                <span className="px-3 py-1 bg-secondary/15 text-secondary rounded-full text-xs font-medium">Redshift</span>
                <span className="px-3 py-1 bg-secondary/15 text-secondary rounded-full text-xs font-medium">Glue</span>
                <span className="px-3 py-1 bg-secondary/15 text-secondary rounded-full text-xs font-medium">Kinesis</span>
                <span className="px-3 py-1 bg-secondary/15 text-secondary rounded-full text-xs font-medium">QuickSight</span>
              </div>
              <div className="pt-2 text-xs text-secondary font-medium">
                <span className="inline-flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Sub-second Query Performance
                </span>
              </div>
            </div>

            {/* MLOps & DevOps Card */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-xl p-8 shadow-lg border border-purple-200/50 dark:border-purple-700/30 text-center space-y-4 card-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18L19 6.3v4.7c0 4.52-3.05 8.64-7 9.66-3.95-1.02-7-5.14-7-9.66V6.3l7-3.12zm-1 5.82v8h2V9h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-purple-600 transition-colors">MLOps & DevOps</h3>
              <p className="text-muted-foreground">Automated CI/CD pipelines reducing deployment time by 90% with zero-downtime releases</p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">CodePipeline</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">CloudFormation</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">Terraform</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">Docker</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">CloudWatch</span>
              </div>
              <div className="pt-2 text-xs text-purple-600 dark:text-purple-400 font-medium">
                <span className="inline-flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  99.9% Uptime SLA
                </span>
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
          <div className="grid md:grid-cols-3 gap-8 stagger-animation">
            {/* Customer Churn Prediction */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-border hover:border-primary hover:shadow-xl transition-all duration-300 card-hover group">
              <div className="h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-white rounded-full text-xs font-medium">Machine Learning</span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 12h2v5H7v-5zm4-3h2v8h-2V9zm4-3h2v11h-2V6z"/>
                  </svg>
                </div>
                <div className="flex items-center justify-center h-full">
                  <svg className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    Customer Churn Prediction
                  </h3>
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    94% Accuracy
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  End-to-end ML pipeline with automated model training, hyperparameter tuning, and real-time inference serving 10K+ predictions daily.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">SageMaker</span>
                  <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">Lambda</span>
                  <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">S3</span>
                  <span className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium">CloudWatch</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-muted-foreground">
                    <span className="inline-flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      3 months delivery
                    </span>
                  </div>
                  <Link to="/projects/churn-prediction-aws" className="text-primary font-medium inline-flex items-center group/link hover:text-primary/80">
                    View Project 
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Real-time Fraud Detection */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-border hover:border-secondary hover:shadow-xl transition-all duration-300 card-hover group">
              <div className="h-48 bg-gradient-to-br from-secondary/20 via-secondary/10 to-red-100/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-secondary/90 text-white rounded-full text-xs font-medium">Real-time Analytics</span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <svg className="w-16 h-16 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <div className="flex items-center justify-center h-full">
                  <svg className="w-12 h-12 text-secondary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18L19 6.3v4.7c0 4.52-3.05 8.64-7 9.66-3.95-1.02-7-5.14-7-9.66V6.3l7-3.12z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                    Real-time Fraud Detection
                  </h3>
                  <div className="flex items-center text-blue-600 text-sm font-medium">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                    100K+ TPS
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  High-throughput streaming pipeline processing transactions with sub-second latency, reducing fraud losses by 85%.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-secondary/15 text-secondary rounded-full text-xs font-medium">Kinesis</span>
                  <span className="px-3 py-1 bg-secondary/15 text-secondary rounded-full text-xs font-medium">Lambda</span>
                  <span className="px-3 py-1 bg-secondary/15 text-secondary rounded-full text-xs font-medium">DynamoDB</span>
                  <span className="px-3 py-1 bg-secondary/15 text-secondary rounded-full text-xs font-medium">SNS</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-muted-foreground">
                    <span className="inline-flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      4 months delivery
                    </span>
                  </div>
                  <Link to="/projects/fraud-detection" className="text-primary font-medium inline-flex items-center group/link hover:text-primary/80">
                    View Project 
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Data Lake Analytics Platform */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-border hover:border-purple-500 hover:shadow-xl transition-all duration-300 card-hover group">
              <div className="h-48 bg-gradient-to-br from-purple-100/50 via-indigo-50 to-blue-100/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600/90 text-white rounded-full text-xs font-medium">Data Engineering</span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <svg className="w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                  </svg>
                </div>
                <div className="flex items-center justify-center h-full">
                  <svg className="w-12 h-12 text-purple-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-purple-600 transition-colors">
                    Data Lake Analytics Platform
                  </h3>
                  <div className="flex items-center text-purple-600 text-sm font-medium">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                    500TB+ Data
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Scalable data lake with automated ETL pipelines, enabling self-service analytics for 200+ business users.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">S3</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">Glue</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">Athena</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">QuickSight</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-muted-foreground">
                    <span className="inline-flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      6 months delivery
                    </span>
                  </div>
                  <Link to="/projects/data-lake-platform" className="text-primary font-medium inline-flex items-center group/link hover:text-primary/80">
                    View Project 
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-border">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <Link to="/" className="text-xl font-bold text-primary mb-4 block">
                Curious Data Garden
              </Link>
              <p className="text-muted-foreground text-sm mb-4">
                AWS Cloud & Machine Learning expert specializing in scalable data solutions and intelligent systems.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/your-username" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://linkedin.com/in/your-profile" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://twitter.com/your-handle" className="text-muted-foreground hover:text-primary transition-colors" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Me</Link></li>
                <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">Projects</Link></li>
                <li><Link to="/mlops" className="text-muted-foreground hover:text-primary transition-colors text-sm">MLOps & Cloud</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link></li>
                <li><Link to="/talks" className="text-muted-foreground hover:text-primary transition-colors text-sm">Talks</Link></li>
              </ul>
            </div>

            {/* Credentials */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Credentials</h3>
              <ul className="space-y-2">
                <li><Link to="/certifications" className="text-muted-foreground hover:text-primary transition-colors text-sm">AWS Certifications</Link></li>
                <li><a href="https://www.credly.com/users/your-profile" className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center" target="_blank" rel="noopener noreferrer">
                  Verify on Credly
                  <svg className="h-3 w-3 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </a></li>
                <li><a href="/resume.pdf" className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center">
                  Download Resume
                  <Download className="h-3 w-3 ml-1" />
                </a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Form</Link></li>
                <li><a href="mailto:contact@curiousdatagarden.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">contact@curiousdatagarden.com</a></li>
                <li><span className="text-muted-foreground text-sm">Available for consulting</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border bg-gray-100 dark:bg-gray-800">
          <div className="container-custom py-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <div className="mb-2 md:mb-0">
                © {new Date().getFullYear()} Curious Data Garden. All rights reserved.
              </div>
              <div className="flex space-x-4">
                <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
                <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
                <a href="/sitemap" className="hover:text-primary transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
