import { Bot, Zap, Calendar, BarChart3 } from "lucide-react";

// Simplified to 3 core services as recommended
export const servicesData = [
  {
    icon: Bot,
    titleKey: "services.aiAgents.title",
    descriptionKey: "services.aiAgents.description",
    color: "primary" as const
  },
  {
    icon: Zap,
    titleKey: "services.workflows.title",
    descriptionKey: "services.workflows.description",
    color: "secondary" as const
  },
  {
    icon: BarChart3,
    titleKey: "services.optimization.title",
    descriptionKey: "services.optimization.description",
    color: "primary" as const
  }
];
