import { useEffect, useRef, useState } from 'react';
import { 
  // Cloud Computing
  Cloud, CloudCog, Database, Server,
  // Cybersecurity
  Shield, ShieldCheck, Lock, Key,
  // AI & Machine Learning
  Brain, Cpu, CircuitBoard, Network,
  // Software Development
  Code, CodeSquare, GitBranch, Terminal,
  // Additional Tech Icons
  Globe, Wifi, Settings
} from 'lucide-react';

const icons = [
  // Cloud Computing
  { size: "lg", type: "fill", Icon: Cloud },
  { size: "md", type: "outline", Icon: CloudCog },
  { size: "lg", type: "fill", Icon: Database },
  { size: "sm", type: "outline", Icon: Server },
  
  // Cybersecurity
  { size: "lg", type: "fill", Icon: Shield },
  { size: "sm", type: "fill", Icon: ShieldCheck },
  { size: "lg", type: "outline", Icon: Lock },
  { size: "md", type: "fill", Icon: Key },
  
  // AI & Machine Learning
  { size: "lg", type: "fill", Icon: Brain },
  { size: "md", type: "outline", Icon: Cpu },
  { size: "lg", type: "fill", Icon: CircuitBoard },
  { size: "md", type: "fill", Icon: Network },
  
  // Software Development
  { size: "md", type: "fill", Icon: Code },
  { size: "lg", type: "outline", Icon: CodeSquare },
  { size: "sm", type: "fill", Icon: GitBranch },
  { size: "md", type: "outline", Icon: Terminal },
  
  // Additional Tech Icons
  { size: "lg", type: "fill", Icon: Globe },
  { size: "md", type: "outline", Icon: Wifi },
  { size: "sm", type: "outline", Icon: Settings }
] as const;

interface DynamicBackgroundProps {
  children: React.ReactNode;
}

const DynamicBackground = ({ children }: DynamicBackgroundProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setHasMounted(true);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const containerElement = containerRef.current;
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      
      iconsRef.current.forEach((icon, index) => {
        if (!icon) return;
        const speed = (index % 5 + 1) * 0.03;
        const x = (clientX - dimensions.width / 2) * speed;
        const y = (clientY - dimensions.height / 2) * speed;
        icon.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    containerElement.addEventListener('mousemove', handleMouseMove);
    return () => containerElement.removeEventListener('mousemove', handleMouseMove);
  }, [dimensions]);

  const getIconSize = (size: "lg" | "md" | "sm") => {
    switch (size) {
      case 'lg': return 'w-12 h-12';
      case 'md': return 'w-8 h-8';
      case 'sm': return 'w-6 h-6';
      default: return 'w-8 h-8';
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background" ref={containerRef}>
      {hasMounted && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {icons.map(({ size, type, Icon }, i) => (
            <div
              key={i}
              ref={(el: HTMLDivElement | null) => {
                if (iconsRef.current) {
                  iconsRef.current[i] = el;
                }
              }}
              className={`absolute transition-transform duration-300 ease-out ${getIconSize(size)}`}
              style={{
                top: `${Math.random() * dimensions.height}px`,
                left: `${Math.random() * dimensions.width}px`,
                opacity: type === 'fill' ? 0.1 : 0.05,
              }}
            >
              <Icon 
                className={`w-full h-full ${type === 'fill' ? 'text-primary' : 'text-secondary'}`}
                strokeWidth={type === 'outline' ? 1 : 2}
              />
            </div>
          ))}
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DynamicBackground;