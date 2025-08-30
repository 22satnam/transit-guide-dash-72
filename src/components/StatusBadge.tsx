import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "pending" | "approved" | "rejected" | "in-progress";
  count: number;
  className?: string;
}

const statusConfig = {
  pending: {
    label: "Pending",
    bgColor: "bg-status-pending/10",
    textColor: "text-status-pending",
    borderColor: "border-status-pending/20",
  },
  approved: {
    label: "Approved",
    bgColor: "bg-status-success/10",
    textColor: "text-status-success",
    borderColor: "border-status-success/20",
  },
  rejected: {
    label: "Rejected",
    bgColor: "bg-status-danger/10",
    textColor: "text-status-danger",
    borderColor: "border-status-danger/20",
  },
  "in-progress": {
    label: "In Progress",
    bgColor: "bg-status-info/10",
    textColor: "text-status-info",
    borderColor: "border-status-info/20",
  },
};

export function StatusBadge({ status, count, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-2 rounded-lg border",
      config.bgColor,
      config.borderColor,
      className
    )}>
      <div className={cn("w-2 h-2 rounded-full", config.bgColor.replace("/10", ""))} />
      <span className={cn("font-medium text-sm", config.textColor)}>
        {config.label}
      </span>
      <span className={cn("font-semibold text-sm", config.textColor)}>
        {count}
      </span>
    </div>
  );
}