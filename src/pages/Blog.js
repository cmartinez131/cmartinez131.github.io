import React, {useState, useEffect } from 'react';

const Blogpost = ({ title, content, date, tags }) => {
    return (
        <div className="blogpost">
            <h2 className="blogpost-title">{title}</h2>
            <p className="blogpost-content">{content}</p>
            <p className="blogpost-date">{date}</p>
            {tags && 
            <div className="blogpost-tags">
                <p className="tags-label">Tags:</p>
                {tags.map((tag, index) => (
                    <span key={index} className="blogpost-tag">{tag}</span>
                ))}
            </div>
            }
        </div>
    )
}


const Blog = () => {
    //can have an array of blogposts here. This can be fetched from an API or hardcoded
    
    const blogPosts = [
        // {
        //     title: 'My Journey into Web Development',
        //     content: 'Starting from a basic understanding of HTML, CSS, and JavaScript, this post outlines my journey into web development, the challenges I faced, and the triumphs that kept me going.',
        //     date: 'August 1, 2023',
        //     tags: ['Web Development', 'Personal', 'Journey']
        // },
        // {
        //     title: 'Understanding and Mastering React Hooks',
        //     content: 'React Hooks have changed the way we write and understand React code. Learn about useState, useEffect, and how you can leverage other built-in hooks to write clean, scalable code.',
        //     date: 'July 15, 2023',
        //     tags: ['React', 'JavaScript', 'Web Development']
        // },
        {
            title: 'Entrepreneurship Through "The Lean Startup"',
            content: 'In "The Lean Startup," Eric Ries introduces a fresh approach to business for entrepreneurs by advocating for efficiency and adaptability. He highlights the importance of launching a Minimum Viable Product (MVP), a simple version of the idea that quickly gets to market. From there, the Build-Measure-Learn loop comes into play: build the MVP, measure its success, and learn from the outcomes. This iterative process helps entrepreneurs to continuously adapt and refine their product, saving time and resources. Ries\'s concepts offer practical insights for those in the tech industry and beyond, providing a roadmap for innovation without unnecessary complexity or waste.',
            date: 'July 12, 2023',
            tags: ['Books', 'Resources']
        },
        //add more blog posts here
    ];

    const [filter, setFilter] = useState('all');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

    useEffect(() => {
        if (filter === 'all') {
            setFilteredPosts(blogPosts);
        } else if (filter === 'date') {
            setFilteredPosts([...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)));
        } else {
            setFilteredPosts(blogPosts.filter(post => post.tags.includes(filter)));
        }
    }, [filter, blogPosts]);

    return (
        <div className="blog">
            <h1 className="blog-title">My Blog Posts</h1>
            <div className="blog-filters">
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('date')}>Sort by Date</button>
                {allTags.map((tag, index) => (
                    <button key={index} onClick={() => setFilter(tag)}>{tag}</button>
                ))}
            </div>
            {filteredPosts.map((post, index) => (
                <Blogpost key={index} title={post.title} content={post.content} date={post.date} tags={post.tags} />
            ))}
        </div>
    )
}

export default Blog;