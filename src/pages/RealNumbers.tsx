import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import AuthCheck from "@/components/AuthCheck";

const BA = () => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Sample Real Numbers content
  const baContent = [
    {
      id: 1,
      type: "video" as const,
      title: "Real Numbers Part 1",
      description: "Real Numbers Part 1 Video Explanation",
      category: "Real Numbers",
      videoUrl: "https://player.vimeo.com/video/1095510347?h=adbdfa174b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    },
    {
      id: 2,
      type: "image" as const,
      title: "Real Numbers Part 2",
      description: " Real Numbers Part 2 video explanation.",
      category: "Real Numbers",
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=450&fit=crop",
    },
  ];

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
        
        <main className="pt-40 pb-8">
          <div className="w-full">
            {baContent.map((content) => (
              <ContentCard
                key={content.id}
                type={content.type}
                title={content.title}
                description={content.description}
                category={content.category}
                videoUrl={content.videoUrl}
                imageUrl={content.imageUrl}
              />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </AuthCheck>
  );
};

export default BA;