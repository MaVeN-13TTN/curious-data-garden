import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { BadgeAws } from '../components/ui/badge-aws';
import { ScrollToTop } from '../components/ui/scroll-to-top';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp } from 'lucide-react';

// Blog post data (in a real app, this would come from an API)
const blogPostsData = {
  'sagemaker-deployment': {
    title: 'Deploying ML Models with SageMaker: A Complete Guide',
    date: '2023-10-15',
    readTime: '8 min read',
    author: 'John Doe',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    category: 'MLOps',
    tags: ['SageMaker', 'Deployment', 'AWS'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: `
      <h2>Introduction to SageMaker Deployment</h2>
      <p>Amazon SageMaker provides a comprehensive set of tools for deploying machine learning models to production. In this guide, we'll walk through the entire process from model training to endpoint configuration and monitoring.</p>
      
      <h2>Preparing Your Model for Deployment</h2>
      <p>Before deploying a model to SageMaker, you need to ensure it's properly packaged and optimized. This involves serializing your model artifacts, creating inference code, and building a container image.</p>
      
      <pre><code>
import sagemaker
from sagemaker.model import Model

# Create a SageMaker model from trained artifacts
model = Model(
    image_uri='your-container-image',
    model_data='s3://your-bucket/model.tar.gz',
    role=role
)
      </code></pre>
      
      <h2>Deployment Options in SageMaker</h2>
      <p>SageMaker offers several deployment options to suit different use cases:</p>
      <ul>
        <li><strong>Real-time endpoints</strong>: For low-latency, synchronous predictions</li>
        <li><strong>Serverless endpoints</strong>: For intermittent traffic with automatic scaling</li>
        <li><strong>Batch transform</strong>: For asynchronous predictions on large datasets</li>
        <li><strong>Multi-model endpoints</strong>: For hosting multiple models on a single endpoint</li>
      </ul>
      
      <h2>Configuring Endpoints for Production</h2>
      <p>When deploying to production, it's important to configure your endpoints for optimal performance, cost, and reliability. This includes selecting the right instance type, setting up auto-scaling, and implementing high availability.</p>
      
      <pre><code>
# Deploy model to a real-time endpoint with auto-scaling
predictor = model.deploy(
    initial_instance_count=1,
    instance_type='ml.m5.xlarge',
    endpoint_name='my-model-endpoint',
    update_endpoint=True
)

# Configure auto-scaling
client = boto3.client('application-autoscaling')
client.register_scalable_target(
    ServiceNamespace='sagemaker',
    ResourceId=f'endpoint/my-model-endpoint/variant/AllTraffic',
    ScalableDimension='sagemaker:variant:DesiredInstanceCount',
    MinCapacity=1,
    MaxCapacity=5
)
      </code></pre>
      
      <h2>Monitoring and Maintenance</h2>
      <p>Once your model is deployed, it's crucial to monitor its performance and maintain it over time. SageMaker provides tools for monitoring model drift, capturing inference data, and setting up alerts.</p>
      
      <h2>Conclusion</h2>
      <p>Deploying ML models with SageMaker streamlines the process of taking models from development to production. By following the best practices outlined in this guide, you can ensure your deployments are robust, scalable, and cost-effective.</p>
    `
  },
  'data-lake-architecture': {
    title: 'Building a Modern Data Lake on AWS',
    date: '2023-09-22',
    readTime: '10 min read',
    author: 'Jane Smith',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    category: 'Data Engineering',
    tags: ['S3', 'Glue', 'Athena'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: `
      <h2>Introduction to AWS Data Lakes</h2>
      <p>A data lake is a centralized repository that allows you to store structured and unstructured data at any scale. In this article, we'll explore how to build a modern data lake architecture using AWS services.</p>
      
      <h2>Core Components of an AWS Data Lake</h2>
      <p>An effective AWS data lake architecture typically includes these key components:</p>
      <ul>
        <li><strong>Amazon S3</strong>: The foundation for storage</li>
        <li><strong>AWS Glue</strong>: For data cataloging and ETL</li>
        <li><strong>Amazon Athena</strong>: For SQL-based analytics</li>
        <li><strong>AWS Lake Formation</strong>: For security and governance</li>
      </ul>
      
      <h2>Data Organization Strategy</h2>
      <p>Organizing your data lake effectively is crucial for performance and usability. We recommend a multi-layer approach:</p>
      <ol>
        <li><strong>Raw Zone</strong>: Unmodified source data</li>
        <li><strong>Curated Zone</strong>: Cleaned and transformed data</li>
        <li><strong>Analytics Zone</strong>: Purpose-built datasets for specific use cases</li>
      </ol>
      
      <h2>Implementation Example</h2>
      <p>Here's a simplified example of setting up a data lake using AWS CDK:</p>
      
      <pre><code>
import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as glue from 'aws-cdk-lib/aws-glue';

export class DataLakeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create S3 bucket for data lake
    const dataBucket = new s3.Bucket(this, 'DataLakeBucket', {
      versioned: true,
      lifecycleRules: [
        {
          prefix: 'raw/',
          transitions: [
            {
              storageClass: s3.StorageClass.INTELLIGENT_TIERING,
              transitionAfter: cdk.Duration.days(90),
            },
          ],
        },
      ],
    });
    
    // Create Glue Database
    const database = new glue.CfnDatabase(this, 'DataLakeDatabase', {
      catalogId: this.account,
      databaseInput: {
        name: 'data_lake_db',
        description: 'Database for data lake tables',
      },
    });
  }
}
      </code></pre>
      
      <h2>Best Practices for Data Lakes</h2>
      <p>To ensure your data lake remains manageable and valuable:</p>
      <ul>
        <li>Implement a consistent data partitioning strategy</li>
        <li>Use compression and file formats appropriate for your workloads</li>
        <li>Establish data governance policies early</li>
        <li>Automate metadata management</li>
        <li>Plan for data lifecycle management</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>A well-designed data lake on AWS can transform how your organization stores, processes, and analyzes data. By following the architecture patterns and best practices outlined in this article, you can build a scalable, cost-effective data lake that meets your current and future needs.</p>
    `
  }
};

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const [isVisible, setIsVisible] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Get post data based on ID
  const post = postId && blogPostsData[postId as keyof typeof blogPostsData];
  
  // If post not found
  if (!post) {
    return (
      <div className="min-h-screen bg-transparent">
        <Navigation />
        
        <div className="container-custom pt-32 pb-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/blog" className="btn-primary inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      <article className="pt-32 pb-16 px-4 sm:px-6">
        <div className="container-custom">
          <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-3xl mx-auto">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-primary hover:underline mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to all articles
              </Link>
              
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  {post.tags.map(tag => (
                    <BadgeAws key={tag} service={tag} />
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {post.title}
                </h1>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={post.authorImage} 
                      alt={post.author} 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-foreground">{post.author}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date} • {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => setLiked(!liked)}
                      className={`p-2 rounded-full ${liked ? 'bg-primary/10 text-primary' : 'bg-gray-100 dark:bg-gray-800 text-muted-foreground'}`}
                      aria-label={liked ? "Unlike" : "Like"}
                    >
                      <ThumbsUp className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => setBookmarked(!bookmarked)}
                      className={`p-2 rounded-full ${bookmarked ? 'bg-primary/10 text-primary' : 'bg-gray-100 dark:bg-gray-800 text-muted-foreground'}`}
                      aria-label={bookmarked ? "Remove bookmark" : "Bookmark"}
                    >
                      <Bookmark className="h-4 w-4" />
                    </button>
                    <button 
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-muted-foreground"
                      aria-label="Share"
                    >
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              <div 
                className="prose dark:prose-invert max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </article>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;