import Image from 'next/image';
import React, { useState } from 'react';
import { FaRegThumbsUp, FaRegComment, FaRegBookmark,  FaEllipsisH } from 'react-icons/fa';

const GroupPostCard = () => {
  // Fake data with 10 posts (some with images, some without)
  const posts = [

    {
      id: 2,
      user: {
        name: "Alex Johnson",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
      },
      time: "1d ago",
      title: "React 18 New Features",
      content:
        "React 18 introduces several new features aimed at improving performance and developer experience. Concurrent rendering enables smoother UI updates. Automatic batching reduces unnecessary re-renders. Server components allow efficient data fetching. Suspense updates enhance lazy loading experience. Upgrade now to take advantage of these powerful improvements!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR-cG9xMyi0UAOD0qBqH3djjbAqURq-5mxw&s",
      tags: ["REACT", "FRONTEND"],
      likes: 89,
      comments: 15
    },    {
      id: 1,
      user: {
        name: "Sabbir Hosen",
        avatar: "https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4395.jpg"
      },
      time: "8h ago",
      title: "Top 10 Productivity Hacks for Developers",
      content:
        "Boost your efficiency with these productivity tips. 1. Use the Pomodoro Technique to manage focus. 2. Automate repetitive tasks with scripts. 3. Leverage keyboard shortcuts for speed. 4. Use task managers like Trello or Notion. 5. Minimize distractions with website blockers. 6. Optimize your workspace ergonomics. 7. Prioritize deep work sessions. 8. Set clear daily goals. 9. Take regular breaks for mental clarity. 10. Keep learning and improving daily.",
      // image: "/post1.jpg",
      tags: ["PRODUCTIVITY", "DEVELOPMENT"],
      likes: 124,
      comments: 28
    },
    {
      id: 3,
      user: {
        name: "Maria Garcia",
        avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
      },
      time: "2d ago",
      title: "Node.js Performance Tips",
      content:
        "Optimizing Node.js applications is crucial for scalability. 1. Use asynchronous programming with Promises and async/await. 2. Optimize database queries with indexing. 3. Cache data using Redis to reduce load. 4. Use compression like Gzip for faster responses. 5. Minimize dependencies to keep the app lightweight. Implement these techniques for a high-performance Node.js backend.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMOAlJuDSsCyJZCKmUSU8NlQVPJ0Irj58buQ&s",
      tags: ["NODEJS", "BACKEND"],
      likes: 156,
      comments: 42
    },
    {
      id: 4,
      user: {
        name: "Emily Carter",
        avatar: "https://img.freepik.com/free-photo/calm-handsome-curly-haired-boy-posing-isolated-light-grey-standing-still-looks-peaceful-wearing-casual-manner-youth-style-concept_176532-8831.jpg"
      },
      time: "3d ago",
      title: "Mastering TypeScript for Better JavaScript",
      content:
        "TypeScript enhances JavaScript by adding static typing, which improves maintainability and debugging. Features like interfaces, type inference, and generics help write cleaner and more scalable code. If you're a JavaScript developer, learning TypeScript can significantly boost your efficiency in larger projects.",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQFptCINerHuiQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691780594440?e=2147483647&v=beta&t=Mez7l5p7d27DJpWf3yIoXMQfGcjyRcc4Ye4F926lgRQ",
      tags: ["TYPESCRIPT", "JAVASCRIPT"],
      likes: 134,
      comments: 23
    },
    {
      id: 5,
      user: {
        name: "John Doe",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjTm132hp8Jr4nqpcIS2Z1PYwZ1n27IrM7wyt0MBhyelQkRjYcNEeT6s8Kb34GQdCWT8&usqp=CAU"
      },
      time: "4d ago",
      title: "Understanding REST API vs GraphQL",
      content:
        "REST and GraphQL are two popular API paradigms. REST follows a structured approach with endpoints, while GraphQL allows flexible data fetching with queries. If your application needs precise data fetching and fewer requests, GraphQL is a great choice. However, REST is still widely used for its simplicity and scalability.",
      // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAs2-z6JOFi2BWqHBgGfaIf76LFxBQ7Y8Qww&s",
      tags: ["API", "WEB DEVELOPMENT"],
      likes: 178,
      comments: 30
    },
    {
      id: 6,
      user: {
        name: "Sophia Lee",
        avatar: "https://img.freepik.com/free-photo/bearded-man-denim-shirt-round-glasses_273609-11770.jpg"
      },
      time: "5d ago",
      title: "The Importance of UI/UX in Web Development",
      content:
        "A great UI/UX design can make or break your web application. User experience affects engagement, conversion rates, and overall success. Focus on usability, accessibility, and responsiveness to create intuitive designs that delight users.",
      // image: "/post6.jpg",
      tags: ["UI/UX", "WEB DESIGN"],
      likes: 220,
      comments: 50
    },
    {
      id: 7,
      user: {
        name: "Michael Brown",
        avatar: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
      },
      time: "6d ago",
      title: "Docker Essentials: Why You Should Use It",
      content:
        "Docker simplifies application deployment by packaging everything into containers. It ensures consistency across environments, making it easier to develop, test, and deploy applications. If you're not using Docker yet, it's time to start!",
      image: "https://careerswami.com/wp-content/uploads/2024/08/DOCKERIMAGE.webp",
      tags: ["DOCKER", "DEVOPS"],
      likes: 105,
      comments: 18
    },
    {
      id: 8,
      user: {
        name: "Jessica Williams",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFIJ9iAX4DAPoH0qh-_kc5wBcNltXkJoTezI7P6KTSRIbYsr2nGatHGyVOurMBCWqYnxM&usqp=CAU"
      },
      time: "1w ago",
      title: "The Power of Git and Version Control",
      content:
        "Git is essential for developers to collaborate and track changes in codebases. Branching strategies, commits, and pull requests make development workflows efficient. Mastering Git can significantly improve your productivity as a developer.",
      image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401194608/GIT-WorkFlow.png",
      tags: ["GIT", "VERSION CONTROL"],
      likes: 190,
      comments: 35
    },
    {
      id: 9,
      user: {
        name: "Robert Wilson",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRTCMwPUaYRp6zwNfTYJSEKvEWDKA2JZvSFoc77poU2qXSNExMtXgqNkt4ztSZeTd1m48&usqp=CAU"
      },
      time: "1w ago",
      title: "Python for Data Science: A Beginner's Guide",
      content:
        "Python is a powerful language for data science. Libraries like Pandas, NumPy, and Scikit-learn provide robust tools for data analysis and machine learning. If you're starting in data science, Python is the best choice to begin with.",
      image: "https://www.leanwisdom.com/blog/wp-content/uploads/2024/10/Python-for-Data-Science.png",
      tags: ["PYTHON", "DATA SCIENCE"],
      likes: 250,
      comments: 60
    },
    {
      id: 10,
      user: {
        name: "David Kim",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlhDUk2_eUb3CVA2WNwmsguyf_0S3de195oORIpqibKUMoYDqrXd9ex37_SCBL_6vLEVQ&usqp=CAU"
      },
      time: "1w ago",
      title: "CSS Grid vs Flexbox: Which One to Use?",
      content:
        "CSS Grid and Flexbox are powerful layout tools. Grid is great for 2D layouts, while Flexbox is ideal for 1D layouts. Understanding when to use each will help you create responsive and efficient designs.",
      // image: "/post10.jpg",
      tags: ["CSS", "FRONTEND"],
      likes: 210,
      comments: 37
    }
  ];
  

  // State to track expanded posts
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);

  // Toggle post content expansion
  const toggleExpand = (postId: number) => {
    if (expandedPosts.includes(postId)) {
      setExpandedPosts(expandedPosts.filter(id => id !== postId));
    } else {
      setExpandedPosts([...expandedPosts, postId]);
    }
  };

  // Check if content needs "more" button (more than 100 words)
  const needsMoreButton = (content: string) => {
    return content.split(' ').length > 100;
  };

  // Get truncated content (first 100 words)
  const getTruncatedContent = (content: string) => {
    return content.split(' ').slice(0, 100).join(' ') + '...';
  };

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* User Header */}
          <div className="p-4 pb-2">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 relative">
                  <Image
                    src={post.user.avatar}
                    alt={post.user.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{post.user.name}</h3>
                  <p className="text-xs text-gray-400">{post.time}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <FaEllipsisH />
              </button>
            </div>
          </div>

          {/* Post Content */}
          <div className="px-4 pb-2">
            <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
            <p className="text-gray-700 text-sm mb-3">
              {needsMoreButton(post.content) && !expandedPosts.includes(post.id) 
                ? getTruncatedContent(post.content)
                : post.content}
              
              {needsMoreButton(post.content) && (
                <span 
                  className="text-blue-500 cursor-pointer hover:underline ml-1"
                  onClick={() => toggleExpand(post.id)}
                >
                  {expandedPosts.includes(post.id) ? ' show less' : ' more'}
                </span>
              )}
            </p>
          </div>

          {/* Post Image - Only if image exists */}
          {post.image && (
            <div className="relative w-full h-64 bg-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="px-4 py-2">
              <div className="flex gap-2 overflow-x-auto py-1 scrollbar-hide">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="px-4 py-2 border-t border-gray-100 text-xs text-gray-500 flex justify-between">
            <span>{post.likes} likes</span>
            <span>{post.comments} comments</span>
          </div>

          {/* Action Buttons */}
          <div className="flex border-t border-gray-100 divide-x divide-gray-100">
            <button className="flex-1 flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 py-2 rounded-sm hover:bg-gray-50 transition-colors">
              <FaRegThumbsUp className="text-base" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 py-2 rounded-sm hover:bg-gray-50 transition-colors">
              <FaRegComment className="text-base" />
              <span className="text-sm">Comment</span>
            </button>
            {/* <button className="flex-1 flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 py-2 rounded-sm hover:bg-gray-50 transition-colors">
              <FaRegShareSquare className="text-base" />
              <span className="text-sm">Share</span>
            </button> */}
            <button className="flex-1 flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 py-2 rounded-sm hover:bg-gray-50 transition-colors">
              <FaRegBookmark className="text-base" />
              <span className="text-sm">Save</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupPostCard;