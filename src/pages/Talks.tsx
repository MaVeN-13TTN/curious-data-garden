import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { SectionHeading } from '../components/ui/section-heading';
import { BadgeAws } from '../components/ui/badge-aws';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

// Talks data
const talksData = [
  {
    id: 'reinvent-2023',
    title: 'Building Production-Ready ML Pipelines on AWS',
    event: 'AWS re:Invent 2023',
    date: 'November 28, 2023',
    location: 'Las Vegas, NV',
    description: 'A deep dive into architecting scalable and reliable machine learning pipelines using SageMaker, Step Functions, and Lambda.',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    slidesUrl: 'https://slideshare.net/example1',
    tags: ['SageMaker', 'Step Functions', 'MLOps']
  },
  {
    id: 'data-science-summit',
    title: 'Real-time ML Inference at Scale',
    event: 'Data Science Summit 2023',
    date: 'September 15, 2023',
    location: 'San Francisco, CA',
    description: 'How to deploy and optimize machine learning models for real-time inference using AWS services like Lambda, API Gateway, and ElastiCache.',
    videoUrl: 'https://www.youtube.com/watch?v=example2',
    slidesUrl: 'https://slideshare.net/example2',
    tags: ['Lambda', 'API Gateway', 'ElastiCache']
  },
  {
    id: 'cloud-conf',
    title: 'Cost-Effective Data Lakes on AWS',
    event: 'Cloud Conference 2023',
    date: 'July 22, 2023',
    location: 'Virtual',
    description: 'Strategies for building and optimizing data lakes on AWS using S3, Glue, and Athena while keeping costs under control.',
    videoUrl: 'https://www.youtube.com/watch?v=example3',
    slidesUrl: 'https://slideshare.net/example3',
    tags: ['S3', 'Glue', 'Athena']
  },
  {
    id: 'ml-workshop',
    title: 'Hands-on Workshop: ML Model Deployment',
    event: 'ML Practitioners Meetup',
    date: 'May 10, 2023',
    location: 'Seattle, WA',
    description: 'A practical workshop on deploying machine learning models to production using AWS SageMaker and monitoring their performance.',
    videoUrl: 'https://www.youtube.com/watch?v=example4',
    slidesUrl: 'https://slideshare.net/example4',
    tags: ['SageMaker', 'CloudWatch', 'Workshop']
  }
];

const Talks = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="container-custom">
          <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <SectionHeading
              title="Talks & Presentations"
              subtitle="Sharing knowledge about AWS, machine learning, and data science"
            />
            
            <div className="max-w-5xl mx-auto space-y-8">
              {talksData.map((talk) => (
                <div 
                  key={talk.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-border hover:border-primary transition-colors card-hover"
                >
                  <div className="p-6">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <h2 className="text-xl font-semibold text-foreground mb-2">
                        {talk.title}
                      </h2>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {talk.event}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {talk.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {talk.location}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      {talk.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {talk.tags.map(tag => (
                        <BadgeAws key={tag} service={tag} />
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href={talk.videoUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Watch Video
                      </a>
                      <a 
                        href={talk.slidesUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Slides
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Upcoming talks section */}
            <div className="max-w-5xl mx-auto mt-16">
              <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Upcoming Talks</h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-border text-center">
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Interested in having me speak at your event?
                </h3>
                <p className="text-muted-foreground mb-6">
                  I regularly speak at conferences and meetups about AWS, machine learning, MLOps, and data science.
                </p>
                <a 
                  href="/contact" 
                  className="btn-primary inline-flex items-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Talks;