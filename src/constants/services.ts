import { Bot, Calendar, Heart, Database, Lightbulb } from "lucide-react";

export const servicesData = [
  {
    icon: Bot,
    titleKey: "services.aiAssistant.title",
    descriptionKey: "services.aiAssistant.description",
    color: "primary" as const
  },
  {
    icon: Calendar,
    titleKey: "services.booking.title",
    descriptionKey: "services.booking.description",
    color: "secondary" as const
  },
  {
    icon: Heart,
    titleKey: "services.postSale.title",
    descriptionKey: "services.postSale.description",
    color: "primary" as const
  },
  {
    icon: Database,
    titleKey: "services.crm.title",
    descriptionKey: "services.crm.description",
    color: "secondary" as const
  },
  {
    icon: Lightbulb,
    titleKey: "services.consulting.title",
    descriptionKey: "services.consulting.description",
    color: "primary" as const
  }
];
