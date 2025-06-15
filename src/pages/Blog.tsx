
import Navigation from '../components/Navigation';

const Blog = () => {
  const posts = [
    {
      title: "When to Use Athena vs Redshift for Data Analytics",
      date: "March 15, 2024",
      excerpt: "A comprehensive comparison of AWS Athena and Redshift for different data analytics use cases.",
      readTime: "8 min read",
      category: "Architecture"
    },
    {
      title: "Deploying Scikit-learn Models with SageMaker",
      date: "February 28, 2024",
      excerpt: "Step-by-step guide to deploying scikit-learn models using Amazon SageMaker endpoints.",
      readTime: "12 min read",
      category: "Tutorial"
    },
    {
      title: "Cost Optimization Strategies for ML Workloads on AWS",
      date: "February 10, 2024",
      excerpt: "Practical tips to reduce costs while maintaining performance for machine learning workloads.",
      readTime: "10 min read",
      category: "Cost Optimization"
    },
    {
      title: "Building Real-time ML Pipelines with Kinesis and Lambda",
      date: "January 22, 2024",
      excerpt: "How to build scalable real-time machine learning pipelines using AWS serverless services.",
      readTime: "15 min read",
      category: "Streaming"
    },
    {
      title: "MLflow + S3: Experiment Tracking at Scale",
      date: "January 8, 2024",
      excerpt: "Setting up MLflow with S3 backend for scalable machine learning experiment tracking.",
      readTime: "6 min read",
      category: "MLOps"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto py-16 px-8">
        <h1 className="text-4xl font-light text-gray-900 mb-8">Blog</h1>
        <p className="text-gray-600 mb-12 text-lg">
          Insights, tutorials, and best practices for data science and cloud computing
        </p>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <article key={index} className="border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-3">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.date}</span>
                <span className="text-gray-500 text-sm">•</span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              
              <h2 className="text-xl font-medium text-gray-900 mb-3">
                <a href="#" className="hover:underline">{post.title}</a>
              </h2>
              
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <a href="#" className="text-gray-900 text-sm font-medium hover:underline">
                Read More →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="btn-secondary">
            View All Posts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
