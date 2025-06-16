import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { SectionHeading } from '../components/ui/section-heading';
import { BadgeAws } from '../components/ui/badge-aws';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';

// Blog post data
const blogPosts = [
  {
    id: 'sagemaker-deployment',
    title: 'Deploying ML Models with SageMaker: A Complete Guide',
    excerpt: 'Learn how to deploy machine learning models to production using AWS SageMaker, from model training to endpoint configuration and monitoring.',
    date: '2023-10-15',
    readTime: '8 min read',
    category: 'MLOps',
    tags: ['SageMaker', 'Deployment', 'AWS'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'data-lake-architecture',
    title: 'Building a Modern Data Lake on AWS',
    excerpt: 'Explore the architecture and best practices for building a scalable data lake using S3, Glue, and Athena to handle petabytes of structured and unstructured data.',
    date: '2023-09-22',
    readTime: '10 min read',
    category: 'Data Engineering',
    tags: ['S3', 'Glue', 'Athena'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'serverless-ml-inference',
    title: 'Serverless Machine Learning Inference with AWS Lambda',
    excerpt: 'How to build cost-effective, scalable ML inference pipelines using AWS Lambda functions and API Gateway for real-time predictions.',
    date: '2023-08-05',
    readTime: '6 min read',
    category: 'Serverless',
    tags: ['Lambda', 'API Gateway', 'Serverless'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'ml-monitoring',
    title: 'Monitoring ML Models in Production with CloudWatch',
    excerpt: 'Best practices for setting up comprehensive monitoring for machine learning models using CloudWatch metrics, logs, and alarms.',
    date: '2023-07-18',
    readTime: '7 min read',
    category: 'MLOps',
    tags: ['CloudWatch', 'Monitoring', 'MLOps'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cost-optimization',
    title: 'Cost Optimization Strategies for AWS ML Workloads',
    excerpt: 'Learn how to reduce costs for your machine learning workloads on AWS while maintaining performance and reliability.',
    date: '2023-06-30',
    readTime: '9 min read',
    category: 'Cost Optimization',
    tags: ['SageMaker', 'EC2', 'Spot Instances'],
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  }
];

// Categories for filtering
const categories = ['All', 'MLOps', 'Data Engineering', 'Serverless', 'Cost Optimization'];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="container-custom">
          <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <SectionHeading
              title="Blog & Insights"
              subtitle="Thoughts on AWS, machine learning, and data science"
            />
            
            {/* Search and filter */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative w-full md:w-2/3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                  />
                </div>
                
                <div className="w-full md:w-1/3">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Blog posts */}
            <div className="max-w-5xl mx-auto">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No articles found matching your criteria.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredPosts.map((post, index) => (
                    <div 
                      key={post.id}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-border hover:border-primary transition-colors card-hover"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="h-48 md:h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                            {post.tags.map(tag => (
                              <BadgeAws key={tag} service={tag} />
                            ))}
                          </div>
                          
                          <h2 className="text-xl font-semibold text-foreground mb-3">
                            {post.title}
                          </h2>
                          
                          <p className="text-muted-foreground mb-4">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {post.date}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {post.readTime}
                              </div>
                            </div>
                            
                            <a 
                              href={`/blog/${post.id}`} 
                              className="text-primary font-medium inline-flex items-center group"
                            >
                              Read More
                              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;