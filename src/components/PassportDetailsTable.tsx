import { Copy, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface PassportDetailsProps {
  passportNumber: string;
  fullName: string;
  dateOfBirth: string;
  issueDate: string;
  expiryDate: string;
  placeOfIssue: string;
  preferredCity: string;
  preferredDate: string;
}

export function PassportDetailsTable({
  passportNumber,
  fullName,
  dateOfBirth,
  issueDate,
  expiryDate,
  placeOfIssue,
  preferredCity,
  preferredDate
}: PassportDetailsProps) {
  const { toast } = useToast();

  const copyPassportInfo = () => {
    const info = `Passport Number: ${passportNumber}\nFull Name: ${fullName}\nDate of Birth: ${dateOfBirth}\nIssue Date: ${issueDate}\nExpiry Date: ${expiryDate}\nPlace of Issue: ${placeOfIssue}`;
    
    navigator.clipboard.writeText(info).then(() => {
      toast({
        title: "Copied!",
        description: "Passport information copied to clipboard",
      });
    });
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Passport Details</CardTitle>
          <Button onClick={copyPassportInfo} variant="outline" size="sm" className="flex items-center gap-2">
            <Copy className="w-4 h-4" />
            Copy Info
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 px-4 font-medium text-muted-foreground">Passport Number</td>
                <td className="py-3 px-4 font-semibold font-mono">{passportNumber}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-muted-foreground">Full Name</td>
                <td className="py-3 px-4 font-semibold">{fullName}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-muted-foreground">Date of Birth</td>
                <td className="py-3 px-4 font-semibold">{dateOfBirth}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-muted-foreground">Issue Date</td>
                <td className="py-3 px-4 font-semibold">{issueDate}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-muted-foreground">Expiry Date</td>
                <td className="py-3 px-4 font-semibold">{expiryDate}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-muted-foreground">Place of Issue</td>
                <td className="py-3 px-4 font-semibold">{placeOfIssue}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Appointment Preferences
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Preferred City</p>
              <p className="text-sm font-semibold">{preferredCity}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Preferred Date</p>
              <p className="text-sm font-semibold">{preferredDate}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}