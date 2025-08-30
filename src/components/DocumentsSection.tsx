import { Download, Upload, FileText, Image } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";

interface Document {
  id: string;
  name: string;
  type: "pdf" | "jpg" | "png" | "doc";
  status: "uploaded" | "missing";
  uploadedAt?: string;
}

interface DocumentsSectionProps {
  documents?: Document[];
  onUpload?: (file: File) => void;
  onDownload?: (documentId: string) => void;
}

const defaultDocuments: Document[] = [
  { id: "1", name: "Passport.pdf", type: "pdf", status: "uploaded", uploadedAt: "2024-01-15" },
  { id: "2", name: "Photograph.jpg", type: "jpg", status: "uploaded", uploadedAt: "2024-01-15" },
  { id: "3", name: "Bank Statement.pdf", type: "pdf", status: "missing" },
  { id: "4", name: "Employment Letter.pdf", type: "pdf", status: "uploaded", uploadedAt: "2024-01-14" },
];

export function DocumentsSection({ documents = defaultDocuments, onUpload, onDownload }: DocumentsSectionProps) {
  const getFileIcon = (type: Document["type"]) => {
    switch (type) {
      case "pdf":
        return <FileText className="w-5 h-5 text-red-500" />;
      case "jpg":
      case "png":
        return <Image className="w-5 h-5 text-blue-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Documents</CardTitle>
          <Button size="sm" className="flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Upload Document
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center space-x-3">
                {getFileIcon(doc.type)}
                <div>
                  <p className="font-medium text-foreground">{doc.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {doc.status === "uploaded" && doc.uploadedAt ? `Uploaded on ${doc.uploadedAt}` : "Document missing"}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                {doc.status === "uploaded" ? (
                  <StatusBadge status="approved" count={1} className="px-2 py-1 text-xs" />
                ) : (
                  <StatusBadge status="rejected" count={1} className="px-2 py-1 text-xs" />
                )}
                
                {doc.status === "uploaded" && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDownload?.(doc.id)}
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <h4 className="font-medium text-foreground mb-3">Admin Upload</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Upload appointment confirmations or other documents that will instantly reflect on the user's dashboard.
          </p>
          <Button variant="outline" className="flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Upload for Client
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}