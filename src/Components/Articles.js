import React from "react";
import './styles/Articles.scss'

export default function Articles() {
  return (
    <div className="articles" id="articles">
      <div className="article-header">
        <h2>Articles</h2>
      </div>

      <section className="article">
        <h3><a href="https://www.geeksforgeeks.org/file-i-o-in-rust/">File I/O in Rust</a></h3>
        <p className="info">This article was published by GeeksforGeeks on their website by the same name. I wrote this article because there were no resources related to Rust file input/output except for the official Rust documentation. </p>
      </section>
    </div>
  )
}
