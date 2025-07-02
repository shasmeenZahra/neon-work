import { useState } from "react";
import {
  GraduationCap,
  Users,
  BookOpen,
  Star,
  CheckCircle,
  ArrowRight,
  User,
  Clock,
  Globe,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import TutorForm from "@/components/TutorForm";
import StudentForm from "@/components/StudentForm";

const Index = () => {
  const [isTutorFormOpen, setIsTutorFormOpen] = useState(false);
  const [isStudentFormOpen, setIsStudentFormOpen] = useState(false);

  const features = [
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Expert Tutors",
      description:
        "Connect with qualified, passionate educators who are experts in their fields.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-coral-500" />,
      title: "All Subjects",
      description:
        "From mathematics to languages, find tutors for every subject and level.",
    },
    {
      icon: <Clock className="w-8 h-8 text-navy-600" />,
      title: "Flexible Scheduling",
      description:
        "Book sessions that fit your schedule, whether online or in-person.",
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-600" />,
      title: "Online & In-Person",
      description:
        "Choose between virtual learning or face-to-face tutoring sessions.",
    },
  ];

  const benefits = [
    "Personalized learning approach",
    "Verified tutor credentials",
    "Affordable pricing options",
    "Progress tracking tools",
    "24/7 customer support",
    "Money-back guarantee",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-coral-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
                  Unlock Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-coral-500">
                    Academic Potential
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect with passionate, qualified tutors who will help you
                  achieve your learning goals. Whether you need help with
                  homework, test prep, or mastering new skills, we're here to
                  support your educational journey.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setIsStudentFormOpen(true)}
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold"
                >
                  Find a Tutor
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  onClick={() => setIsTutorFormOpen(true)}
                  variant="outline"
                  size="lg"
                  className="border-coral-500 text-coral-600 hover:bg-coral-50 px-8 py-4 text-lg font-semibold"
                >
                  Become a Tutor
                  <User className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>500+ Expert Tutors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span>10,000+ Happy Students</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-800">
                        Start Learning Today
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Join thousands of successful students
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Mathematics</span>
                      <span className="text-teal-600 font-semibold">
                        50+ tutors
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Science</span>
                      <span className="text-teal-600 font-semibold">
                        75+ tutors
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Languages</span>
                      <span className="text-teal-600 font-semibold">
                        40+ tutors
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      4.9/5 from 2,000+ reviews
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-coral-400 to-coral-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              Why Choose AYEH ACADEMY?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the perfect platform for meaningful connections between
              students and tutors, ensuring quality education for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-navy-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Categories Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              Popular Subject Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find expert tutors across all major academic subjects and skill
              levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📐</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">
                Mathematics
              </h3>
              <p className="text-gray-600 text-sm">
                Algebra, Calculus, Geometry, Statistics
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">
                Sciences
              </h3>
              <p className="text-gray-600 text-sm">
                Physics, Chemistry, Biology, Earth Science
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">
                Languages
              </h3>
              <p className="text-gray-600 text-sm">
                English, Spanish, French, Writing
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">
                Social Studies
              </h3>
              <p className="text-gray-600 text-sm">
                History, Geography, Civics, Economics
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">
                Computer Science
              </h3>
              <p className="text-gray-600 text-sm">
                Programming, Web Development, Data Science
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">
                Arts & Music
              </h3>
              <p className="text-gray-600 text-sm">
                Visual Arts, Music Theory, Creative Writing
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">
                Test Prep
              </h3>
              <p className="text-gray-600 text-sm">
                SAT, ACT, AP Exams, Standardized Tests
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">
                Special Needs
              </h3>
              <p className="text-gray-600 text-sm">
                Learning Disabilities, ADHD Support
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => setIsStudentFormOpen(true)}
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8"
            >
              Find Tutors in Your Subject
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
                  Everything You Need for
                  <span className="block text-teal-600">
                    Successful Learning
                  </span>
                </h2>
                <p className="text-xl text-gray-600">
                  Our comprehensive platform provides all the tools and support
                  you need to achieve your academic goals.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => setIsStudentFormOpen(true)}
                size="lg"
                className="bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-navy-800">
                    Success Stats
                  </h3>
                  <Heart className="w-6 h-6 text-coral-500" />
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Grade Improvement</span>
                      <span className="font-semibold text-teal-600">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full w-[92%]"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        Student Satisfaction
                      </span>
                      <span className="font-semibold text-coral-600">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-coral-500 to-coral-600 h-2 rounded-full w-[98%]"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tutor Quality</span>
                      <span className="font-semibold text-navy-600">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-navy-500 to-navy-600 h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              How AYESHA ACADEMY Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started is simple. Follow these easy steps to begin your
              learning journey or start teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* For Students */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-2">
                  For Students
                </h3>
                <p className="text-gray-600">
                  Find the perfect tutor in 3 simple steps
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-teal-100 text-teal-600 rounded-full font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-700 text-lg">
                      Tell Us What You Need
                    </h4>
                    <p className="text-gray-600">
                      Fill out our simple form with your subject, grade level,
                      and learning goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-teal-100 text-teal-600 rounded-full font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-700 text-lg">
                      Get Matched with Tutors
                    </h4>
                    <p className="text-gray-600">
                      We'll connect you with qualified tutors who match your
                      specific needs and schedule.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-teal-100 text-teal-600 rounded-full font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-700 text-lg">
                      Start Learning
                    </h4>
                    <p className="text-gray-600">
                      Begin your personalized tutoring sessions and watch your
                      confidence grow!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Tutors */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-coral-500 to-coral-600 rounded-full mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-2">
                  For Tutors
                </h3>
                <p className="text-gray-600">
                  Start teaching and earn in 3 easy steps
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-coral-100 text-coral-600 rounded-full font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-700 text-lg">
                      Submit Your Application
                    </h4>
                    <p className="text-gray-600">
                      Complete our tutor application with your qualifications
                      and expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-coral-100 text-coral-600 rounded-full font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-700 text-lg">
                      Get Verified & Approved
                    </h4>
                    <p className="text-gray-600">
                      We'll review your credentials and approve qualified tutors
                      within 2-3 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-coral-100 text-coral-600 rounded-full font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-700 text-lg">
                      Start Teaching
                    </h4>
                    <p className="text-gray-600">
                      Connect with students and begin making a positive impact
                      while earning income.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-navy-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Join our community today and experience the AYESHA ACADEMY
                difference
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setIsStudentFormOpen(true)}
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8"
                >
                  I Need a Tutor
                </Button>
                <Button
                  onClick={() => setIsTutorFormOpen(true)}
                  variant="outline"
                  className="border-coral-500 text-coral-600 hover:bg-coral-50 px-8"
                >
                  I Want to Teach
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-coral-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Learning Journey?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of students and tutors who are already part of the
              AYESHA ACADEMY community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsStudentFormOpen(true)}
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Find Your Perfect Tutor
              </Button>
              <Button
                onClick={() => setIsTutorFormOpen(true)}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold"
              >
                Share Your Knowledge
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Forms */}
      <TutorForm
        isOpen={isTutorFormOpen}
        onClose={() => setIsTutorFormOpen(false)}
      />
      <StudentForm
        isOpen={isStudentFormOpen}
        onClose={() => setIsStudentFormOpen(false)}
      />
    </Layout>
  );
};

export default Index;
