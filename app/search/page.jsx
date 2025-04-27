"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAndFilter = async () => {
      if (!query) return;
      setLoading(true);
      try {
        const res = await axios.get("/api/blog"); // Replace with your real API
        const data = res.data.blog;

        const filtered = data.filter((item) => {
          const contentText = item.content.replace(/<[^>]*>/g, "").toLowerCase();
          return (
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            contentText.includes(query.toLowerCase())
          );
        });

        setResults(filtered);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndFilter();
  }, [query]);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Search Results for: "{query}"</h1>
      {loading ? (
        <p>Loading...</p>
      ) : results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul className="space-y-4">
          {results.map((item) => (
            <li key={item._id} className="border p-4 rounded bg-white shadow">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.content.slice(0, 150) + "...",
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
