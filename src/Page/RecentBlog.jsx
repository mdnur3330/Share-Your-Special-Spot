import React from 'react';

const RecentBlog = () => {
    return (
       
            <section className="my-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">📰 Recent Discoveries & News</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: "Rare Buddhist Manuscript Found",
        date: "June 2025",
        desc: "A 2,000-year-old manuscript was found in Nepal, shedding light on ancient teachings.",
      },
      {
        title: "Ancient Tools in Amazon",
        date: "May 2025",
        desc: "Researchers discovered pre-Columbian tools used by indigenous tribes.",
      },
      {
        title: "Underground City in Turkey",
        date: "April 2025",
        desc: "A massive city was uncovered beneath Cappadocia, estimated to house 20,000 people.",
      },
    ].map((news, i) => (
      <div key={i} className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="font-bold text-lg mb-2">{news.title}</h3>
        <p className="text-sm text-gray-500 mb-1">{news.date}</p>
        <p className="text-gray-700">{news.desc}</p>
      </div>
    ))}
  </div>
</section>

    );
};

export default RecentBlog;