import {
  GraduationCap,
  Target,
  Heart,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  Shield,
} from "lucide-react";
import Layout from "@/components/Layout";

const AboutUs = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-teal-600" />,
      title: "Excellence in Education",
      description:
        "We are committed to providing the highest quality educational experiences through our carefully vetted tutors and comprehensive learning resources.",
    },
    {
      icon: <Heart className="w-8 h-8 text-coral-500" />,
      title: "Personalized Learning",
      description:
        "Every student is unique. We believe in tailored learning approaches that adapt to individual learning styles, pace, and goals.",
    },
    {
      icon: <Users className="w-8 h-8 text-navy-600" />,
      title: "Community Building",
      description:
        "We foster a supportive community where students, tutors, and families come together to create meaningful learning relationships.",
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: "Trust & Safety",
      description:
        "Our platform ensures safe, secure, and reliable connections between students and tutors through rigorous verification processes.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Ahmed",
      role: "Founder & CEO",
      description:
        "Former educator with 15+ years of experience in curriculum development and educational technology.",
      image: "👩‍🏫",
    },
    {
      name: "Michael Chen",
      role: "Head of Tutor Relations",
      description:
        "Passionate about connecting talented educators with students who need their expertise and guidance.",
      image: "👨‍💼",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Academic Director",
      description:
        "PhD in Education with specialization in learning methodologies and student success strategies.",
      image: "👩‍🎓",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-coral-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900">
              About AYESHA TUTOR ACADEMY
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bridging the gap between passionate educators and eager learners
              through innovative technology and personalized connections.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At AYESHA TUTOR ACADEMY, we believe that every student deserves
                access to quality education and personalized learning support.
                Our mission is to democratize education by connecting students
                with passionate, qualified tutors who can help them achieve
                their academic goals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that traditional classroom settings don't always
                meet every student's unique learning needs. That's why we've
                created a platform that facilitates one-on-one connections,
                allowing for customized learning experiences that adapt to each
                student's pace, style, and objectives.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-coral-100 rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-navy-800">
                  What Drives Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-6 h-6 text-teal-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-navy-700">
                        Innovation in Learning
                      </h4>
                      <p className="text-gray-600">
                        Leveraging technology to make quality education
                        accessible to everyone.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-coral-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-navy-700">
                        Academic Excellence
                      </h4>
                      <p className="text-gray-600">
                        Maintaining high standards in tutor selection and
                        educational outcomes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BookOpen className="w-6 h-6 text-navy-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-navy-700">
                        Lifelong Learning
                      </h4>
                      <p className="text-gray-600">
                        Fostering a love for learning that extends beyond the
                        classroom.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the AYESHA
              ACADEMY experience for students, tutors, and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    {value.icon}
                    <h3 className="text-xl font-bold text-navy-800">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How AYESHA TUTOR ACADEMY came to life and our vision for the
                future of education.
              </p>
            </div>

            <div className="prose prose-lg max-w-4xl mx-auto">
              <p className="text-gray-600 leading-relaxed">
                AYESHA TUTOR ACADEMY was born from a simple observation: many
                talented students struggle not because they lack ability, but
                because they haven't found the right learning approach or
                received the personalized attention they need to thrive.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2024, our platform emerged from the recognition that
                while there are many skilled educators passionate about
                teaching, and countless students eager to learn, connecting them
                effectively remained a challenge. We set out to bridge this gap
                with technology that makes meaningful educational relationships
                possible.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, AYESHA ACADEMY serves thousands of students and hundreds
                of tutors across various subjects and grade levels. Our platform
                has facilitated over 10,000 successful tutoring sessions,
                helping students improve their grades, gain confidence, and
                develop a love for learning.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Looking ahead, we're committed to expanding our reach,
                continuously improving our platform, and maintaining our focus
                on quality, personalized education for all learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate educators and technology experts behind AYESHA
              ACADEMY.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <div className="text-6xl">{member.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-800">
                      {member.name}
                    </h3>
                    <p className="text-teal-600 font-medium">{member.role}</p>
                  </div>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-teal-400">10,000+</div>
                <div className="text-gray-300">Tutoring Sessions</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-coral-400">500+</div>
                <div className="text-gray-300">Qualified Tutors</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-teal-400">5,000+</div>
                <div className="text-gray-300">Happy Students</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-coral-400">92%</div>
                <div className="text-gray-300">Grade Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
