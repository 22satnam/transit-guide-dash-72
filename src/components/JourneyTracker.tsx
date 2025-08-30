import { Check, Clock, Circle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Step {
  id: number;
  title: string;
  status: "completed" | "in-progress" | "pending";
}

interface JourneyTrackerProps {
  steps?: Step[];
  onStepUpdate?: (stepId: number, status: Step["status"]) => void;
}

const defaultSteps: Step[] = [
  { id: 1, title: "Payment Done", status: "completed" },
  { id: 2, title: "Expert Connect", status: "in-progress" },
  { id: 3, title: "Appointment Booking", status: "pending" },
  { id: 4, title: "Documentation", status: "pending" },
  { id: 5, title: "Expert Review", status: "pending" },
  { id: 6, title: "Delivery of Docs", status: "pending" },
  { id: 7, title: "Ready for Submission", status: "pending" },
];

export function JourneyTracker({ steps = defaultSteps, onStepUpdate }: JourneyTrackerProps) {
  const getStepIcon = (status: Step["status"]) => {
    switch (status) {
      case "completed":
        return <Check className="w-5 h-5 text-white" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-white" />;
      default:
        return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStepStyles = (status: Step["status"]) => {
    switch (status) {
      case "completed":
        return "bg-status-success border-status-success";
      case "in-progress":
        return "bg-status-info border-status-info";
      default:
        return "bg-muted border-border";
    }
  };

  const handleStatusChange = (stepId: number, currentStatus: Step["status"]) => {
    let newStatus: Step["status"];
    if (currentStatus === "pending") {
      newStatus = "in-progress";
    } else if (currentStatus === "in-progress") {
      newStatus = "completed";
    } else {
      newStatus = "pending";
    }
    
    onStepUpdate?.(stepId, newStatus);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Journey Control (7-Step Tracker)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center space-x-4">
                {/* Step Circle */}
                <div className={cn(
                  "w-10 h-10 rounded-full border-2 flex items-center justify-center",
                  getStepStyles(step.status)
                )}>
                  {getStepIcon(step.status)}
                </div>
                
                {/* Step Info */}
                <div>
                  <h4 className="font-medium text-foreground">{step.title}</h4>
                  <p className="text-sm text-muted-foreground capitalize">{step.status.replace("-", " ")}</p>
                </div>
              </div>

              {/* Admin Control */}
              <Button
                onClick={() => handleStatusChange(step.id, step.status)}
                variant="outline"
                size="sm"
                className="ml-4"
              >
                {step.status === "pending" && "Mark In Progress"}
                {step.status === "in-progress" && "Mark Complete"}
                {step.status === "completed" && "Reset"}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}