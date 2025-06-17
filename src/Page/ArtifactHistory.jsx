import React from 'react';

const ArtifactHistory = () => {
    return (
        <div>
            <section className="my-16 px-4">
  <h2 className="text-xl md:text-3xl font-bold text-center mb-8">🕰️ Artifact Timeline</h2>
  <ol className="border-l-4 border-blue-600 pl-6 space-y-6">
    {[
      { year: "1200 BC", event: "Ancient Pottery Discovered in Egypt" },
      { year: "500 AD", event: "Stone Tablet from Roman Empire Unearthed" },
      { year: "1750", event: "Colonial Artifacts Found in Bengal" },
      { year: "1947", event: "Dead Sea Scrolls Discovered" },
    ].map((item, idx) => (
      <li key={idx} className="relative">
        <span className="absolute left-[-12px] top-1 w-3 h-3 bg-blue-600 rounded-full"></span>
        <p className="text-sm font-semibold text-blue-700">{item.year}</p>
        <p className="text-gray-700">{item.event}</p>
      </li>
    ))}
  </ol>
</section>

        </div>
    );
};

export default ArtifactHistory;