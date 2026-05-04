"use client";

import { useState } from "react";
import styles from "./page.module.css";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // General
  {
    category: "General",
    question: "What is BiodiversityOS?",
    answer:
      "BiodiversityOS is a community-driven, open-source platform for collecting, structuring, and visualizing marine biodiversity data. It transforms real-world observations into open, verifiable knowledge, starting with shark tracking in Cozumel, Mexico, with a vision to expand globally across all ecosystems.",
  },
  {
    category: "General",
    question: "Is BiodiversityOS free to use?",
    answer:
      "Yes, BiodiversityOS is completely free and open source. Anyone can access the data, contribute observations, and use our tools for research and conservation purposes. We believe biodiversity data should be open and accessible to everyone.",
  },
  {
    category: "General",
    question: "Who created BiodiversityOS?",
    answer:
      "BiodiversityOS stems from years of field research in the Mexican Caribbean led by Mar Sustentable. What began as a project to document shark presence in Cozumel has evolved into a global vision for open biodiversity intelligence, combining science, community, and technology.",
  },
  {
    category: "General",
    question: "What makes BiodiversityOS different from other biodiversity platforms?",
    answer:
      "BiodiversityOS uniquely combines decentralized science (DeSci) principles with community-driven data collection. Unlike centralized platforms, our data is transparent, traceable, and openly accessible. We also emphasize local ecological knowledge and ensure all contributions are properly attributed.",
  },

  // Data Collection
  {
    category: "Data Collection",
    question: "How can I report a shark sighting?",
    answer:
      "You can report sightings through our web application at app.biodiversityos.org. Simply click 'Submit Sighting', fill in the details including species, location, date, behavior observed, and any photos. Our community verification system will help validate your observation.",
  },
  {
    category: "Data Collection",
    question: "What data does BiodiversityOS collect?",
    answer:
      "We collect georeferenced biodiversity observations including species identification, location coordinates, date and time, behavioral data, environmental conditions, and photographic evidence. All data is structured using scientific methodologies to ensure quality and usability for research.",
  },
  {
    category: "Data Collection",
    question: "Do I need to be a scientist to contribute data?",
    answer:
      "No! BiodiversityOS is designed for citizen scientists, divers, fishers, and anyone who encounters marine life. Our platform guides you through the data submission process, and our community verification system ensures data quality. Local ecological knowledge is highly valued.",
  },
  {
    category: "Data Collection",
    question: "What shark species can be found in Cozumel?",
    answer:
      "Cozumel's waters are home to several shark species including Caribbean Reef Sharks (Carcharhinus perezi), Nurse Sharks (Ginglymostoma cirratum), Bull Sharks (Carcharhinus leucas), Whale Sharks (Rhincodon typus), Hammerhead Sharks (Sphyrna spp.), and occasionally Blacktip Sharks. Our Species Guide has detailed information on each.",
  },

  // Technology
  {
    category: "Technology",
    question: "What technology does BiodiversityOS use?",
    answer:
      "BiodiversityOS is built with modern web technologies including Next.js, React, and Leaflet for interactive mapping. We integrate decentralized technologies for data integrity and traceability, ensuring biodiversity records are transparent, attributed, and permanently accessible.",
  },
  {
    category: "Technology",
    question: "What does 'decentralized science' (DeSci) mean?",
    answer:
      "Decentralized Science (DeSci) uses blockchain and distributed technologies to make scientific research more open, transparent, and collaborative. In BiodiversityOS, this means data contributions are traceable, properly attributed to their sources, and cannot be altered without a transparent record.",
  },
  {
    category: "Technology",
    question: "Can I access the BiodiversityOS data through an API?",
    answer:
      "We are developing open API access for researchers and developers. Our goal is to provide structured, georeferenced biodiversity data that can be integrated into other research tools and conservation platforms. Check our documentation for the latest on API availability.",
  },
  {
    category: "Technology",
    question: "Is the BiodiversityOS platform open source?",
    answer:
      "Yes, BiodiversityOS is committed to open-source principles. Our codebase is available on GitHub, and we welcome contributions from developers, researchers, and the community. This transparency ensures the platform evolves with the needs of conservation science.",
  },

  // Community
  {
    category: "Community",
    question: "How can researchers collaborate with BiodiversityOS?",
    answer:
      "Researchers can access structured, georeferenced biodiversity data for their studies, contribute their own field data, participate in community verification, and collaborate on analysis. Contact us to discuss research partnerships and data sharing agreements.",
  },
  {
    category: "Community",
    question: "Can conservation organizations partner with BiodiversityOS?",
    answer:
      "Absolutely. We actively seek partnerships with conservation organizations, protected area managers, academic institutions, and research networks. Partners can use our spatial insights to inform protection strategies and identify priority areas for conservation action.",
  },
  {
    category: "Community",
    question: "How can I support BiodiversityOS?",
    answer:
      "You can support BiodiversityOS by contributing observations, spreading awareness, partnering as an institution, or supporting the project financially. Every contribution helps expand data collection, strengthen community participation, and develop better tools for biodiversity monitoring.",
  },

  // Privacy & Data
  {
    category: "Privacy & Data",
    question: "How is my contributed data used?",
    answer:
      "Your contributed data is used to build a comprehensive picture of marine biodiversity. It feeds into interactive maps, species distribution analyses, and conservation research. Data is always attributed to contributors and used ethically in accordance with our open science principles.",
  },
  {
    category: "Privacy & Data",
    question: "Is my personal information protected?",
    answer:
      "Yes. While biodiversity observations are public and open, your personal information is protected. You control what identifying information is displayed with your contributions. We never sell personal data and follow strict data protection practices.",
  },
];

const categories = [...new Set(faqData.map((item) => item.category))];

export default function FAQPageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqData.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.faqContent}>
      {/* Search */}
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
          aria-label="Search frequently asked questions"
        />
        <svg
          className={styles.searchIcon}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>

      {/* Category Filters */}
      <div className={styles.categories}>
        <button
          className={`${styles.categoryBtn} ${activeCategory === "All" ? styles.categoryActive : ""}`}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.categoryBtn} ${activeCategory === cat ? styles.categoryActive : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className={styles.faqList}>
        {filteredFAQs.map((item, index) => {
          const globalIndex = faqData.indexOf(item);
          const isOpen = openIndex === globalIndex;

          return (
            <div
              key={globalIndex}
              className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${globalIndex}`}
                id={`faq-question-${globalIndex}`}
              >
                <span className={styles.faqCategoryBadge}>
                  {item.category}
                </span>
                <span className={styles.faqQuestionText}>{item.question}</span>
                <svg
                  className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ""}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                id={`faq-answer-${globalIndex}`}
                role="region"
                aria-labelledby={`faq-question-${globalIndex}`}
                className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}

        {filteredFAQs.length === 0 && (
          <div className={styles.noResults}>
            <p>No questions found matching your search. Try different keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
}
