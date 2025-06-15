
const Index = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-light text-gray-900 tracking-wide">
            Welcome
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            A simple, clean interface for your project
          </p>
        </div>
        
        <div className="space-y-3">
          <button className="w-full py-3 px-6 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">
            Get Started
          </button>
          <button className="w-full py-3 px-6 border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
