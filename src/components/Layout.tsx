import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TutorForm from "./TutorForm";
import StudentForm from "./StudentForm";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isTutorFormOpen, setIsTutorFormOpen] = useState(false);
  const [isStudentFormOpen, setIsStudentFormOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onTutorFormOpen={() => setIsTutorFormOpen(true)}
        onStudentFormOpen={() => setIsStudentFormOpen(true)}
      />

      <main className="flex-1 pt-16 md:pt-20">{children}</main>

      <Footer />

      <TutorForm
        isOpen={isTutorFormOpen}
        onClose={() => setIsTutorFormOpen(false)}
      />

      <StudentForm
        isOpen={isStudentFormOpen}
        onClose={() => setIsStudentFormOpen(false)}
      />
    </div>
  );
};

export default Layout;
