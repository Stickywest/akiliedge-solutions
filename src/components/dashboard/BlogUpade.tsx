import React, { useState, useEffect } from 'react';
import { db } from "../firebaseConfig"; // Adjust the path to your firebase config
import { collection, getDocs, addDoc, doc, updateDoc } from 'firebase/firestore';

const BlogUpdate: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  // Fetch blogs from Firestore
  const fetchBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
    } catch (error) {
      console.error('Error fetching blogs: ', error);
    }
  };

  // Add a new blog to Firestore
  const addBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'blogs'), {
        title,
        excerpt,
        category,
        image,
        isVisible,
        date: new Date().toLocaleDateString(),
      });
      alert('Blog added successfully!');
      setTitle('');
      setExcerpt('');
      setCategory('');
      setImage('');
      fetchBlogs(); // Refresh the list
    } catch (error) {
      console.error('Error adding blog: ', error);
    }
  };

  // Toggle blog visibility
  const toggleVisibility = async (id: string, isVisible: boolean) => {
    try {
      await updateDoc(doc(db, 'blogs', id), {
        isVisible: !isVisible,
      });
      fetchBlogs(); // Refresh the list
    } catch (error) {
      console.error('Error updating blog: ', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Update Blog</h2>
      <form onSubmit={addBlog} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />
        <textarea
          placeholder="Excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isVisible}
            onChange={(e) => setIsVisible(e.target.checked)}
            className="form-checkbox"
          />
          <span>Visible</span>
        </label>
        <button
          type="submit"
          className="bg-[#972326] text-white px-4 py-2 rounded-lg hover:bg-[#7a1c1f]"
        >
          Add Blog
        </button>
      </form>

      {/* List of Blogs */}
      <div className="mt-6 space-y-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-4 border rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-gray-600">{blog.excerpt}</p>
              <span
                className={`text-sm ${
                  blog.isVisible ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {blog.isVisible ? 'Visible' : 'Hidden'}
              </span>
            </div>
            <button
              onClick={() => toggleVisibility(blog.id, blog.isVisible)}
              className={`px-4 py-2 rounded-lg ${
                blog.isVisible
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-green-500 hover:bg-green-600'
              } text-white`}
            >
              {blog.isVisible ? 'Hide' : 'Show'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogUpdate;