import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BadgeAws } from './badge-aws';

interface ProjectCardProps {
  title: string;
  description: string;
  services: string[];
  slug: string;
  image?: string;
  gradient?: string;
  emoji?: string;
}

export function ProjectCard({
  title,
  description,
  services,
  slug,
  image,
  gradient = "from-primary/30 to-secondary/30",
  emoji = "📊",
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-border hover:border-primary transition-colors card-hover">
      <div 
        className={`h-48 bg-gradient-to-r ${gradient} flex items-center justify-center relative`}
      >
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="text-4xl">{emoji}</div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex gap-2 flex-wrap mb-6">
          {services.map((service) => (
            <BadgeAws key={service} service={service} />
          ))}
        </div>
        <Link 
          to={`/projects/${slug}`} 
          className="text-primary font-medium inline-flex items-center group"
          aria-label={`View ${title} project details`}
        >
          View Project 
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}