
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-light text-gray-900 tracking-wide">
            Data Scientist
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transforming complex data into actionable insights through machine learning, 
            statistical analysis, and compelling visualizations
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <button className="px-8 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">
              View Projects
            </button>
            <button className="px-8 py-3 border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-center text-gray-900 mb-12">
            Core Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Data Analysis</h3>
              <p className="text-gray-600 text-sm">Python, R, SQL, Pandas, NumPy</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Machine Learning</h3>
              <p className="text-gray-600 text-sm">Scikit-learn, TensorFlow, PyTorch</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-xl">📈</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Visualization</h3>
              <p className="text-gray-600 text-sm">Matplotlib, Seaborn, Plotly, Tableau</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-center text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop" 
                alt="Predictive Analytics Dashboard"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Predictive Analytics Dashboard
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Built a real-time dashboard to predict customer churn using ensemble methods, 
                achieving 94% accuracy and helping reduce churn by 23%.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">Python</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">Scikit-learn</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">Dash</span>
              </div>
            </div>
            <div className="border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop" 
                alt="NLP Sentiment Analysis"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                NLP Sentiment Analysis
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Developed a sentiment analysis model for social media data using BERT, 
                processing 1M+ tweets daily with 91% accuracy.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">Python</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">BERT</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs">PyTorch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-light text-gray-900">
            Let's Collaborate
          </h2>
          <p className="text-gray-600">
            Interested in working together or discussing data science opportunities?
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">
              Get In Touch
            </button>
            <button className="px-6 py-3 border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
              LinkedIn
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
