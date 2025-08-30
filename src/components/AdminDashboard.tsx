import { AdminSidebar } from "@/components/AdminSidebar";
import { AdminHeader } from "@/components/AdminHeader";
import { ApplicationCard } from "@/components/ApplicationCard";
import { PassportDetailsTable } from "@/components/PassportDetailsTable";
import { DocumentsSection } from "@/components/DocumentsSection";
import { JourneyTracker } from "@/components/JourneyTracker";

export function AdminDashboard() {
  // Sample data - in real app this would come from API
  const sampleApplication = {
    userEmail: "john.doe@example.com",
    phoneNumber: "+1 (555) 123-4567",
    countryAppliedFor: "United States",
    referenceId: "VS-2024-001234",
    status: "in-progress" as const,
  };

  const samplePassportDetails = {
    passportNumber: "AB1234567",
    fullName: "John Doe",
    dateOfBirth: "1990-05-15",
    issueDate: "2020-03-10",
    expiryDate: "2030-03-10",
    placeOfIssue: "New York, NY",
    preferredCity: "Los Angeles",
    preferredDate: "2024-02-15",
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Fixed Sidebar */}
      <AdminSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <AdminHeader />
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Page Title */}
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
              <p className="text-muted-foreground mt-1">
                Manage visa applications, track progress, and monitor applicant journeys.
              </p>
            </div>

            {/* Application Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ApplicationCard {...sampleApplication} />
              <JourneyTracker />
            </div>

            {/* Passport Details */}
            <PassportDetailsTable {...samplePassportDetails} />

            {/* Documents */}
            <DocumentsSection />
          </div>
        </main>
      </div>
    </div>
  );
}