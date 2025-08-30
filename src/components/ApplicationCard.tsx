import { Mail, Phone, Globe, Key } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";

interface ApplicationCardProps {
  userEmail: string;
  phoneNumber: string;
  countryAppliedFor: string;
  referenceId: string;
  status: "pending" | "approved" | "rejected" | "in-progress";
}

export function ApplicationCard({ 
  userEmail, 
  phoneNumber, 
  countryAppliedFor, 
  referenceId, 
  status 
}: ApplicationCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Application Info</CardTitle>
          <StatusBadge status={status} count={1} className="px-2 py-1" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p className="text-sm font-semibold">{userEmail}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Phone</p>
              <p className="text-sm font-semibold">{phoneNumber}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Globe className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Country</p>
              <p className="text-sm font-semibold">{countryAppliedFor}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Key className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Reference ID</p>
              <p className="text-sm font-semibold font-mono">{referenceId}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}