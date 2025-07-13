import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import AuthCheck from "@/components/AuthCheck";

const Chapter4Algebra = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [content] = useState([
    {
      id: 1,
      title: "Linear Equations",
      type: "video" as const,
      category: "Chapter-4 Algebra",
      description: "Solving linear equations in one and two variables",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Quadratic Equations",
      type: "video" as const,
      category: "Chapter-4 Algebra",
      description: "Methods to solve quadratic equations and their applications",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Algebraic Identities",
      type: "image" as const,
      category: "Chapter-4 Algebra",
      description: "Important algebraic identities and their proofs",
      imageUrl: "https://via.placeholder.com/400x300/0066cc/ffffff?text=Identities",
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
                Chapter-4 Algebra
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore algebraic concepts, equations, and problem-solving techniques.
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

export default Chapter4Algebra;