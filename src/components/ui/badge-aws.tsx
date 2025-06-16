import { cn } from "@/lib/utils";

interface BadgeAwsProps {
  service: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const serviceColors: Record<string, { bg: string; text: string }> = {
  SageMaker: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-800 dark:text-orange-300" },
  Lambda: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-800 dark:text-orange-300" },
  S3: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-800 dark:text-red-300" },
  EC2: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-800 dark:text-orange-300" },
  ECR: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-800 dark:text-blue-300" },
  Glue: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-800 dark:text-green-300" },
  Athena: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-800 dark:text-blue-300" },
  Redshift: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-800 dark:text-red-300" },
  Kinesis: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-800 dark:text-blue-300" },
  DynamoDB: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-800 dark:text-blue-300" },
  CloudWatch: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-800 dark:text-orange-300" },
  IAM: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-800 dark:text-red-300" },
  CodePipeline: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-800 dark:text-blue-300" },
  Terraform: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-800 dark:text-purple-300" },
};

export function BadgeAws({ service, variant = "primary", className }: BadgeAwsProps) {
  const colors = serviceColors[service] || { bg: "bg-gray-100 dark:bg-gray-800", text: "text-gray-800 dark:text-gray-300" };
  
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return `${colors.bg} ${colors.text}`;
      case "secondary":
        return "bg-secondary text-secondary-foreground";
      case "outline":
        return `border border-current ${colors.text} bg-transparent`;
      default:
        return `${colors.bg} ${colors.text}`;
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        getVariantClasses(),
        className
      )}
    >
      {service}
    </span>
  );
}