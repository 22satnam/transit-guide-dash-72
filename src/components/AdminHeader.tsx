import { Search, Download, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";

export function AdminHeader() {
  return (
    <div className="bg-card border-b border-border p-6">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search by Country, Passport Number, Username, or Reference ID..."
            className="pl-10 h-11"
          />
        </div>
      </div>

      {/* Action Buttons and Status Badges */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Status Badges */}
        <div className="flex flex-wrap gap-3">
          <StatusBadge status="pending" count={12} />
          <StatusBadge status="approved" count={8} />
          <StatusBadge status="rejected" count={3} />
          <StatusBadge status="in-progress" count={15} />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Data
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Audit Logs
          </Button>
        </div>
      </div>
    </div>
  );
}