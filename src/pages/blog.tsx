import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../components/firebaseConfig"; // Import Firebase configuration
import { collection, getDocs } from "firebase/firestore";

// Define the BlogPost type
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const categories = [
  "Web Development",
  "AI & Machine Learning",
  "Frontend Development",
  "SEO",
  "Cloud Computing",
];

const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  // Fetch blog posts from Firestore
  const fetchBlogPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const posts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as BlogPost[];
      setBlogPosts(posts);
    } catch (error) {
      console.error("Error fetching blog posts: ", error);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-800">Blog</h1>
          <p className="text-gray-600 mt-2">
            Insights, tutorials, and updates from the world of technology.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden mb-8 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <h2 className="text-2xl font-bold text-gray-800 mt-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mt-4">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm bg-[#fed90f] text-[#1a1a1a] px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-[#972326] font-semibold hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/blog/category/${category.toLowerCase()}`}
                      className="text-gray-600 hover:text-[#972326] hover:underline"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

     
      
    </div>
  );
};

export default BlogPage;