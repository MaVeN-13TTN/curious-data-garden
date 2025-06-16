import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { SectionHeading } from '../components/ui/section-heading';
import { ScrollToTop } from '../components/ui/scroll-to-top';
import { Calendar, Award, ExternalLink, CheckCircle, Zap, Database, Clock, Target, BookOpen } from 'lucide-react';

// Certification data
const certifications = [
  {
    id: 'aws-ccp',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issueDate: 'June 2024',
    expiryDate: 'June 2027',
    credentialId: 'AWS-CCP-98765',
    status: 'completed',
    description: 'Validates foundational understanding of AWS Cloud concepts, services, and terminology.',
    skills: ['Cloud Concepts', 'AWS Core Services', 'Security & Compliance', 'Billing & Pricing'],
    badgeUrl: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    verifyUrl: 'https://www.credly.com/badges/example-ccp'
  },
  {
    id: 'aws-sa-associate',
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    issueDate: 'March 2024',
    expiryDate: 'March 2027',
    credentialId: 'AWS-SAA-67890',
    status: 'completed',
    description: 'Validates ability to design and deploy secure, robust, and scalable applications on AWS technologies.',
    skills: ['Architecture Design', 'AWS Services', 'Security', 'Networking', 'Cost Optimization'],
    badgeUrl: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
    verifyUrl: 'https://www.credly.com/badges/example-saa'
  },
  {
    id: 'aws-aip',
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    issueDate: null,
    expiryDate: null,
    credentialId: null,
    status: 'in-progress',
    description: 'Validates knowledge of AI and ML fundamentals and how to apply them using AWS services.',
    skills: ['AI Fundamentals', 'ML Basics', 'AWS AI Services', 'Responsible AI'],
    badgeUrl: 'https://images.credly.com/size/340x340/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png',
    verifyUrl: null,
    targetDate: 'Q3 2025'
  },
  {
    id: 'aws-ml-engineer',
    name: 'AWS Certified Machine Learning Engineer – Associate',
    issuer: 'Amazon Web Services',
    issueDate: null,
    expiryDate: null,
    credentialId: null,
    status: 'in-progress',
    description: 'Validates expertise in building, deploying, and maintaining ML solutions on AWS.',
    skills: ['ML Engineering', 'Model Deployment', 'MLOps', 'Monitoring', 'Optimization'],
    badgeUrl: 'https://images.credly.com/size/340x340/images/1a634b4e-3d6b-4a74-b118-c0dcb429e8d2/image.png',
    verifyUrl: null,
    targetDate: 'Q4 2025'
  },
  {
    id: 'aws-data-engineer',
    name: 'AWS Certified Data Engineer – Associate',
    issuer: 'Amazon Web Services',
    issueDate: null,
    expiryDate: null,
    credentialId: null,
    status: 'planned',
    description: 'Validates expertise in designing and maintaining data engineering solutions on AWS.',
    skills: ['Data Pipeline', 'ETL/ELT', 'Data Storage', 'Analytics', 'Data Governance'],
    badgeUrl: 'https://images.credly.com/size/340x340/images/e5c85d7f-4e50-431e-b5af-fa9d9b0596e7/image.png',
    verifyUrl: null,
    targetDate: 'Q1 2026'
  },
  {
    id: 'aws-ml-specialty',
    name: 'AWS Certified Machine Learning – Specialty',
    issuer: 'Amazon Web Services',
    issueDate: null,
    expiryDate: null,
    credentialId: null,
    status: 'planned',
    description: 'Validates expertise in designing, implementing, and maintaining machine learning solutions on AWS.',
    skills: ['Machine Learning', 'Data Engineering', 'Model Training', 'Implementation', 'Operations'],
    badgeUrl: 'https://images.credly.com/size/340x340/images/778bde6c-ad1c-4312-ac33-2fa40d50a147/image.png',
    verifyUrl: null,
    targetDate: 'Q2 2026'
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'planned':
        return <Target className="w-4 h-4 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completed
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
            <Clock className="w-3 h-3 mr-1" />
            In Progress
          </span>
        );
      case 'planned':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            <Target className="w-3 h-3 mr-1" />
            Planned
          </span>
        );
      default:
        return null;
    }
  };

  const getCardBorderClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-600';
      case 'in-progress':
        return 'border-yellow-200 dark:border-yellow-800 hover:border-yellow-300 dark:hover:border-yellow-600';
      case 'planned':
        return 'border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-600';
      default:
        return 'border-border hover:border-primary';
    }
  };

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
            
            {/* Status Overview */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl p-6 text-center border border-green-200 dark:border-green-800">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                    {certifications.filter(cert => cert.status === 'completed').length}
                  </div>
                  <div className="text-sm font-medium text-green-700 dark:text-green-300">Completed</div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/10 dark:to-amber-900/10 rounded-xl p-6 text-center border border-yellow-200 dark:border-yellow-800">
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">
                    {certifications.filter(cert => cert.status === 'in-progress').length}
                  </div>
                  <div className="text-sm font-medium text-yellow-700 dark:text-yellow-300">In Progress</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-xl p-6 text-center border border-blue-200 dark:border-blue-800">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    {certifications.filter(cert => cert.status === 'planned').length}
                  </div>
                  <div className="text-sm font-medium text-blue-700 dark:text-blue-300">Planned</div>
                </div>
              </div>
            </div>
            
            {/* Certifications organized by status */}
            <div className="max-w-5xl mx-auto space-y-12">
              {/* Completed Certifications */}
              {certifications.filter(cert => cert.status === 'completed').length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    Completed Certifications
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {certifications.filter(cert => cert.status === 'completed').map((cert) => (
                      <div 
                        key={cert.id}
                        className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border ${getCardBorderClass(cert.status)} hover:shadow-xl transition-all duration-300 group`}
                      >
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(cert.status)}
                              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                {cert.name}
                              </h3>
                            </div>
                            {getStatusBadge(cert.status)}
                          </div>
                          
                          <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                            <div className="relative">
                              <img 
                                src={cert.badgeUrl} 
                                alt={`${cert.name} Badge`} 
                                className="w-32 h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            
                            <div className="flex-1">
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
                            <h4 className="text-sm font-medium text-foreground mb-2">Skills</h4>
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
                </div>
              )}

              {/* In Progress Certifications */}
              {certifications.filter(cert => cert.status === 'in-progress').length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                    <Clock className="w-6 h-6 text-yellow-500 mr-2" />
                    Currently Pursuing
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {certifications.filter(cert => cert.status === 'in-progress').map((cert) => (
                      <div 
                        key={cert.id}
                        className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border ${getCardBorderClass(cert.status)} hover:shadow-xl transition-all duration-300 group`}
                      >
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(cert.status)}
                              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                {cert.name}
                              </h3>
                            </div>
                            {getStatusBadge(cert.status)}
                          </div>
                          
                          <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                            <div className="relative">
                              <img 
                                src={cert.badgeUrl} 
                                alt={`${cert.name} Badge`} 
                                className="w-32 h-32 object-contain group-hover:scale-105 transition-transform duration-300 opacity-80"
                              />
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                                <Clock className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                              
                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Target className="h-4 w-4 mr-1" />
                                  Target: {cert.targetDate}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">
                            {cert.description}
                          </p>
                          
                          <div className="mb-6">
                            <h4 className="text-sm font-medium text-foreground mb-2">Skills</h4>
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
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                              Currently studying
                            </div>
                            <div className="inline-flex items-center text-sm text-muted-foreground">
                              <BookOpen className="h-4 w-4 mr-1" />
                              Preparing
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Planned Certifications */}
              {certifications.filter(cert => cert.status === 'planned').length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                    <Target className="w-6 h-6 text-blue-500 mr-2" />
                    Future Goals
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {certifications.filter(cert => cert.status === 'planned').map((cert) => (
                      <div 
                        key={cert.id}
                        className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border ${getCardBorderClass(cert.status)} hover:shadow-xl transition-all duration-300 group opacity-80`}
                      >
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(cert.status)}
                              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                {cert.name}
                              </h3>
                            </div>
                            {getStatusBadge(cert.status)}
                          </div>
                          
                          <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                            <div className="relative">
                              <img 
                                src={cert.badgeUrl} 
                                alt={`${cert.name} Badge`} 
                                className="w-32 h-32 object-contain group-hover:scale-105 transition-transform duration-300 grayscale opacity-60"
                              />
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                <Target className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                              
                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Target className="h-4 w-4 mr-1" />
                                  Target: {cert.targetDate}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">
                            {cert.description}
                          </p>
                          
                          <div className="mb-6">
                            <h4 className="text-sm font-medium text-foreground mb-2">Skills</h4>
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
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                              Future goal
                            </div>
                            <div className="inline-flex items-center text-sm text-muted-foreground">
                              <BookOpen className="h-4 w-4 mr-1" />
                              Planning
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Certifications;