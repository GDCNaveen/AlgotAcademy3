import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import AuthCheck from "@/components/AuthCheck";

const Index = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [content] = useState([
    {
      id: 1,
      title: "Part-1",
      type: "video" as const,
      category: "Chapter-1 Real Numbers",
      description: "Chapter 1 Real Numbers Part 1 - Understanding the concept of real numbers and their classification",
      videoUrl: "https://player.vimeo.com/video/1095495803?h=55eac0fa5a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      id: 2,
      title: "Part-2",
      type: "video" as const,
      category: "Chapter-1 Real Numbers",
      description: "Chapter 1 Real Numbers Part 2",
      videoUrl: "https://player.vimeo.com/video/1100958844?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      id: 3,
      title: "Part-3",
      type: "video" as const,
      category: "Chapter-1 Real Numbers",
      description: "Chapter 1 Real Numbers Part 3",
      videoUrl: "https://player.vimeo.com/video/1100963408?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
     {
      id: 4,
      title: "Part-4",
      type: "video" as const,
      category: "Chapter-1 Real Numbers",
      description: "Chapter 1 Real Numbers Part 4",
      videoUrl: "https://player.vimeo.com/video/1100966211?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      id: 5,
      title: "Part-5",
      type: "video" as const,
      category: "Chapter-1 Real Numbers",
      description: "Chapter 1 Real Numbers Part 5",
      videoUrl: "https://player.vimeo.com/video/1100967428?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setHeaderVisible(true);
      } else {
        // Scrolling down
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
        
        {/* Main Content */}
        <main className="pt-32">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
              <h1 className="gradient-text text-3xl font-bold mb-4">
                Chapter-1 Real Numbers
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Learn about real numbers, their properties, operations, and applications in mathematics.
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

export default Index;
