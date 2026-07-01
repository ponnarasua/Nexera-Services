export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}



export interface TimelineStep {
  phase: string;
  title: string;
  duration: string;
  description: string;
  bullets: string[];
}

