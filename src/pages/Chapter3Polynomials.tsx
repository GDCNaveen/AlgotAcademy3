import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import AuthCheck from "@/components/AuthCheck";

const Chapter3Polynomials = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [content] = useState([
    {
      id: 1,
      title: "Introduction to Polynomials",
      type: "video" as const,
      category: "Chapter-3 Polynomials",
      description: "Understanding polynomials, their degree, and types",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Polynomial Operations",
      type: "video" as const,
      category: "Chapter-3 Polynomials",
      description: "Addition, subtraction, multiplication, and division of polynomials",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Factorization Methods",
      type: "image" as const,
      category: "Chapter-3 Polynomials",
      description: "Different methods to factorize polynomials",
      imageUrl: "https://via.placeholder.com/400x300/0066cc/ffffff?text=Factorization",
    }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AuthCheck>
      <div className="min-h-screen bg-background">
        <Header isVisible={headerVisible} />
        
        <main className="pt-32">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
              <h1 className="gradient-text text-3xl font-bold mb-4">
                Chapter-3 Polynomials
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Master polynomials, their operations, and factorization techniques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.map((item) => (
                <ContentCard
                  key={item.id}
                  title={item.title}
                  type={item.type}
                  category={item.category}
                  description={item.description}
                  videoUrl={item.type === "video" ? item.videoUrl : undefined}
                  imageUrl={item.type === "image" ? item.imageUrl : undefined}
                />
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </AuthCheck>
  );
};

export default Chapter3Polynomials;