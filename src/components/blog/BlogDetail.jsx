import React from "react";
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { posts } from "../mockData/data";

const BlogDetail = () => {
  const { slug } = useParams();

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setData(posts.find((item) => item.slug === slug));
  }, [slug]);

  return (
    <>
      <div style={{border:"2px solid yellow"}}>
      {data ? (
        <div>
          <h5>{data.title}</h5>
          <p>{data.slug}</p>
          <p>{data.content}</p>
        </div>
      ) : (
        <h2>404- Page Not Found</h2>
      )}
      </div>
    </>
  );
};

export default BlogDetail;
