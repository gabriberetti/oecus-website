import React from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: "What is OECUS?",
      answer: "OECUS is an innovative electronic music collective and record label based in Berlin, specializing in techno, ambient, and experimental electronic music."
    },
    {
      question: "Do you offer mastering services?",
      answer: "Yes, we provide professional audio mastering services for electronic music artists. Our Berlin-based studio offers high-quality mastering for techno, ambient, and experimental tracks."
    },
    {
      question: "How can I submit music for release?",
      answer: "You can submit your music through our contact form or reach out directly via our social media channels. We review all submissions and respond to promising artists."
    },
    {
      question: "Where is OECUS located?",
      answer: "OECUS is based in Berlin, Germany, in the heart of the city's vibrant electronic music scene."
    },
    {
      question: "What genres do you specialize in?",
      answer: "We focus on electronic music genres including techno, ambient, experimental electronic music, and underground electronic sounds."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ; 