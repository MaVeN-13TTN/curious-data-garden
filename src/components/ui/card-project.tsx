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
  category?: string;
  categoryColor?: string;
  metric?: string;
  metricIcon?: string;
  timeline?: string;
}

const getColorClasses = (color: string) => {
  switch (color) {
    case 'primary':
      return {
        border: 'hover:border-primary',
        badge: 'bg-primary/90 text-white',
        metric: 'text-primary',
        title: 'group-hover:text-primary',
        icon: 'text-primary'
      };
    case 'secondary':
      return {
        border: 'hover:border-secondary',
        badge: 'bg-secondary/90 text-white',
        metric: 'text-secondary',
        title: 'group-hover:text-secondary',
        icon: 'text-secondary'
      };
    case 'purple':
      return {
        border: 'hover:border-purple-500',
        badge: 'bg-purple-600/90 text-white',
        metric: 'text-purple-600',
        title: 'group-hover:text-purple-600',
        icon: 'text-purple-600'
      };
    case 'green':
      return {
        border: 'hover:border-green-500',
        badge: 'bg-green-600/90 text-white',
        metric: 'text-green-600',
        title: 'group-hover:text-green-600',
        icon: 'text-green-600'
      };
    case 'pink':
      return {
        border: 'hover:border-pink-500',
        badge: 'bg-pink-600/90 text-white',
        metric: 'text-pink-600',
        title: 'group-hover:text-pink-600',
        icon: 'text-pink-600'
      };
    case 'blue':
      return {
        border: 'hover:border-blue-500',
        badge: 'bg-blue-600/90 text-white',
        metric: 'text-blue-600',
        title: 'group-hover:text-blue-600',
        icon: 'text-blue-600'
      };
    default:
      return {
        border: 'hover:border-primary',
        badge: 'bg-primary/90 text-white',
        metric: 'text-primary',
        title: 'group-hover:text-primary',
        icon: 'text-primary'
      };
  }
};

const getMetricIcon = (icon: string, colorClasses: ReturnType<typeof getColorClasses>) => {
  switch (icon) {
    case 'check':
      return (
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      );
    case 'lightning':
      return (
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
        </svg>
      );
    case 'database':
      return (
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
        </svg>
      );
    case 'trending':
      return (
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586L14.586 7H12z" clipRule="evenodd"/>
        </svg>
      );
    default:
      return (
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      );
  }
};

const getCategoryIcon = (category: string, colorClasses: ReturnType<typeof getColorClasses>) => {
  switch (category) {
    case 'Machine Learning':
      return (
        <svg className={`w-12 h-12 ${colorClasses.icon} group-hover:scale-110 transition-transform duration-300`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
        </svg>
      );
    case 'Real-time Analytics':
      return (
        <svg className={`w-12 h-12 ${colorClasses.icon} group-hover:scale-110 transition-transform duration-300`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18L19 6.3v4.7c0 4.52-3.05 8.64-7 9.66-3.95-1.02-7-5.14-7-9.66V6.3l7-3.12z"/>
        </svg>
      );
    case 'Data Engineering':
      return (
        <svg className={`w-12 h-12 ${colorClasses.icon} group-hover:scale-110 transition-transform duration-300`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
        </svg>
      );
    case 'Natural Language Processing':
      return (
        <svg className={`w-12 h-12 ${colorClasses.icon} group-hover:scale-110 transition-transform duration-300`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      );
    case 'Time Series Analysis':
      return (
        <svg className={`w-12 h-12 ${colorClasses.icon} group-hover:scale-110 transition-transform duration-300`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      );
    case 'Computer Vision':
      return (
        <svg className={`w-12 h-12 ${colorClasses.icon} group-hover:scale-110 transition-transform duration-300`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
      );
    default:
      return (
        <svg className={`w-12 h-12 ${colorClasses.icon} group-hover:scale-110 transition-transform duration-300`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 12h2v5H7v-5zm4-3h2v8h-2V9zm4-3h2v11h-2V6z"/>
        </svg>
      );
  }
};

export function ProjectCard({
  title,
  description,
  services,
  slug,
  image,
  gradient = "from-primary/30 to-secondary/30",
  category = "Project",
  categoryColor = "primary",
  metric,
  metricIcon = "check",
  timeline,
}: ProjectCardProps) {
  const colorClasses = getColorClasses(categoryColor);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-border ${colorClasses.border} hover:shadow-xl transition-all duration-300 card-hover group`}>
      <div className={`h-48 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 ${colorClasses.badge} rounded-full text-xs font-medium`}>
            {category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
          <svg className={`w-16 h-16 ${colorClasses.icon.replace('group-hover:scale-110 transition-transform duration-300', '')}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
          </svg>
        </div>
        <div className="flex items-center justify-center h-full">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            getCategoryIcon(category, colorClasses)
          )}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className={`text-xl font-semibold text-foreground ${colorClasses.title} transition-colors`}>
            {title}
          </h3>
          {metric && (
            <div className={`flex items-center ${colorClasses.metric} text-sm font-medium`}>
              {getMetricIcon(metricIcon, colorClasses)}
              {metric}
            </div>
          )}
        </div>
        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="flex gap-2 flex-wrap mb-4">
          {services.map((service) => (
            <BadgeAws key={service} service={service} />
          ))}
        </div>
        <div className="flex items-center justify-between pt-2">
          {timeline && (
            <div className="text-xs text-muted-foreground">
              <span className="inline-flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                {timeline}
              </span>
            </div>
          )}
          <Link 
            to={`/projects/${slug}`} 
            className="text-primary font-medium inline-flex items-center group/link hover:text-primary/80"
            aria-label={`View ${title} project details`}
          >
            View Project 
            <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}