import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      
      <div className="container-custom pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="text-9xl font-bold text-primary mb-6">404</div>
          
          <h1 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
          
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Link to="/" className="btn-primary inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;