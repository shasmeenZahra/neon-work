import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface StudentFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const StudentForm = ({ isOpen, onClose }: StudentFormProps) => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "",
    subjects: [] as string[],
    learningGoals: "",
    schedule: "",
    preferredMode: "",
    budget: "",
    urgency: "",
    location: "",
    additionalInfo: "",
  });

  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
    "Geography",
    "Computer Science",
    "Economics",
    "French",
    "Spanish",
    "Art",
  ];

  const handleSubjectChange = (subject: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      subjects: checked
        ? [...prev.subjects, subject]
        : prev.subjects.filter((s) => s !== subject),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Student tutor request:", formData);
    // In a real app, you'd send this to your backend
    alert("Thank you! We'll match you with a suitable tutor soon.");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-navy-800">Find a Tutor</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            Tell us about your learning needs and we'll connect you with the
            perfect tutor.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Student Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-navy-700">
              Student Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="studentName">Student Name *</Label>
                <Input
                  id="studentName"
                  type="text"
                  value={formData.studentName}
                  onChange={(e) =>
                    setFormData({ ...formData, studentName: e.target.value })
                  }
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="parentName">Parent/Guardian Name</Label>
                <Input
                  id="parentName"
                  type="text"
                  value={formData.parentName}
                  onChange={(e) =>
                    setFormData({ ...formData, parentName: e.target.value })
                  }
                  className="mt-1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="grade">Grade/Level *</Label>
              <Select
                value={formData.grade}
                onValueChange={(value) =>
                  setFormData({ ...formData, grade: value })
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select student's grade level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="elementary">Elementary (K-5)</SelectItem>
                  <SelectItem value="middle">Middle School (6-8)</SelectItem>
                  <SelectItem value="high">High School (9-12)</SelectItem>
                  <SelectItem value="college">College/University</SelectItem>
                  <SelectItem value="adult">Adult Learning</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Learning Requirements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-navy-700">
              Learning Requirements
            </h3>

            <div>
              <Label>Required Subjects * (Select all that apply)</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                {subjects.map((subject) => (
                  <div key={subject} className="flex items-center space-x-2">
                    <Checkbox
                      id={`student-${subject}`}
                      checked={formData.subjects.includes(subject)}
                      onCheckedChange={(checked) =>
                        handleSubjectChange(subject, checked as boolean)
                      }
                    />
                    <Label htmlFor={`student-${subject}`} className="text-sm">
                      {subject}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="learningGoals">Learning Goals *</Label>
              <Textarea
                id="learningGoals"
                value={formData.learningGoals}
                onChange={(e) =>
                  setFormData({ ...formData, learningGoals: e.target.value })
                }
                placeholder="What specific topics or skills does the student need help with? Any upcoming exams or projects?"
                required
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="urgency">How Soon Do You Need Help? *</Label>
                <Select
                  value={formData.urgency}
                  onValueChange={(value) =>
                    setFormData({ ...formData, urgency: value })
                  }
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP (Within 1 week)</SelectItem>
                    <SelectItem value="soon">Soon (1-2 weeks)</SelectItem>
                    <SelectItem value="flexible">
                      Flexible (Within a month)
                    </SelectItem>
                    <SelectItem value="planning">Planning ahead</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget">Budget Range (USD/hour)</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) =>
                    setFormData({ ...formData, budget: value })
                  }
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15-25">$15 - $25</SelectItem>
                    <SelectItem value="25-40">$25 - $40</SelectItem>
                    <SelectItem value="40-60">$40 - $60</SelectItem>
                    <SelectItem value="60+">$60+</SelectItem>
                    <SelectItem value="discuss">Discuss with tutor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="preferredMode">Preferred Learning Mode *</Label>
              <Select
                value={formData.preferredMode}
                onValueChange={(value) =>
                  setFormData({ ...formData, preferredMode: value })
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select learning preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online">Online Only</SelectItem>
                  <SelectItem value="in-person">In-Person Only</SelectItem>
                  <SelectItem value="both">Both Online & In-Person</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="schedule">Preferred Schedule *</Label>
              <Textarea
                id="schedule"
                value={formData.schedule}
                onChange={(e) =>
                  setFormData({ ...formData, schedule: e.target.value })
                }
                placeholder="When is the student available? (e.g., Weekdays after 4 PM, Weekend mornings, etc.)"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="location">
                Location (for in-person tutoring)
              </Label>
              <Input
                id="location"
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                placeholder="City, State or specific area"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) =>
                  setFormData({ ...formData, additionalInfo: e.target.value })
                }
                placeholder="Any special requirements, learning preferences, or other details we should know..."
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700"
            >
              Find My Tutor
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
