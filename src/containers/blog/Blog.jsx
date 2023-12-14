import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Nov 12, 2023" text="GPT-3 and Open AI is the future. Let us explore how it is?" ArticleUrl="https://fr.wikipedia.org/wiki/GPT-3" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="May 28, 2020" text="GPT-3: Language Models are Few-Shot Learners" ArticleUrl="https://arxiv.org/abs/2005.14165" />
        <Article imgUrl={blog03} date="Aug 24, 2023" text="OpenAI GPT-4 is Future of AI, But Security Concerns Remain" ArticleUrl="https://vpnoverview.com/news/openai-gpt-4-is-future-of-ai-but-security-concerns-remain/" />
        <Article imgUrl={blog04} date="Dec 02, 2023" text="How to Unlock the Power of ChatGPT for Social Media Marketing" ArticleUrl="https://planable.io/blog/chatgpt-social-media-marketing/" />
        <Article imgUrl={blog05} date="Feb 17, 2023" text="Legal, ethical, and data privacy considerations of using GPT-3 in your product" ArticleUrl="https://blog.accubits.com/legal-implications-of-gpt3-and-privacy-considerations-of-gpt3/#:~:text=Protecting%20User%20Data%20with%20GPT-3%201%20Data%20security%3A,%28CCPA%29%20in%20the%20United%20States.%20...%20%C3%89l%C3%A9ments%20suppl%C3%A9mentaires" />
      </div>
    </div>
  </div>
);

export default Blog;