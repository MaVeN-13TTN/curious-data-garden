import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { SectionHeading } from '../components/ui/section-heading';
import { Calendar, Award, ExternalLink } from 'lucide-react';

// Certification data
const certifications = [
  {
    id: 'aws-ml-specialty',
    name: 'AWS Certified Machine Learning – Specialty',
    issuer: 'Amazon Web Services',
    issueDate: 'January 2023',
    expiryDate: 'January 2026',
    credentialId: 'AWS-ML-12345',
    description: 'Validates expertise in designing, implementing, and maintaining machine learning solutions on AWS.',
    skills: ['Machine Learning', 'Data Engineering', 'Model Training', 'Implementation', 'Operations'],
    badgeUrl: 'https://images.credly.com/size/340x340/images/778bde6c-ad1c-4312-ac33-2fa40d50a147/image.png',
    verifyUrl: 'https://www.credly.com/badges/example1'
  },
  {
    id: 'aws-sa-associate',
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    issueDate: 'March 2022',
    expiryDate: 'March 2025',
    credentialId: 'AWS-SAA-67890',
    description: 'Validates ability to design and deploy secure, robust, and scalable applications on AWS technologies.',
    skills: ['Architecture Design', 'AWS Services', 'Security', 'Networking', 'Cost Optimization'],
    badgeUrl: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
    verifyUrl: 'https://www.credly.com/badges/example2'
  },
  {
    id: 'aws-data-analytics',
    name: 'AWS Certified Data Analytics – Specialty',
    issuer: 'Amazon Web Services',
    issueDate: 'June 2022',
    expiryDate: 'June 2025',
    credentialId: 'AWS-DAS-54321',
    description: 'Validates expertise in AWS data lakes, analytics services, and best practices for designing data analytics solutions.',
    skills: ['Data Collection', 'Storage', 'Processing', 'Analysis', 'Visualization'],
    badgeUrl: 'https://images.credly.com/size/340x340/images/46defa53-a922-47bd-94ea-b43488f5cd8a/image.png',
    verifyUrl: 'https://www.credly.com/badges/example3'
  }
];

const Certifications = () => {
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
              title="AWS Certifications"
              subtitle="Professional credentials validating AWS expertise"
            />
            
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-border hover:border-primary transition-colors card-hover"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                      <img 
                        src={cert.badgeUrl} 
                        alt={`${cert.name} Badge`} 
                        className="w-32 h-32 object-contain"
                      />
                      
                      <div>
                        <h2 className="text-xl font-semibold text-foreground mb-2">
                          {cert.name}
                        </h2>
                        <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Issued: {cert.issueDate}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Expires: {cert.expiryDate}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {cert.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-foreground mb-2">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">
                        ID: {cert.credentialId}
                      </div>
                      
                      <a 
                        href={cert.verifyUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <Award className="h-4 w-4 mr-1" />
                        Verify Credential
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional certifications section */}
            <div className="max-w-5xl mx-auto mt-16">
              <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Additional Credentials</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-xl">🎓</span>
                  </div>
                  <h3 className="font-medium text-foreground mb-2">TensorFlow Developer Certificate</h3>
                  <p className="text-sm text-muted-foreground">Google, 2022</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-xl">🎓</span>
                  </div>
                  <h3 className="font-medium text-foreground mb-2">Microsoft Certified: Azure Data Scientist</h3>
                  <p className="text-sm text-muted-foreground">Microsoft, 2021</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-border text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-xl">🎓</span>
                  </div>
                  <h3 className="font-medium text-foreground mb-2">Databricks Certified Associate Developer</h3>
                  <p className="text-sm text-muted-foreground">Databricks, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;