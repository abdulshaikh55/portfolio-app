import React from "react";
import './styles/Miscellaneous.scss'

export default function Articles() {
  return (
    <div className="miscellaneous" id="miscellaneous">
      <div className="misc-header">
        <h2>Miscellaneous</h2>
      </div>

      <section className="article">
        <h3><a href="https://www.geeksforgeeks.org/file-i-o-in-rust/" target="_blank" rel="noopener noreferrer">File I/O in Rust</a></h3>
        <h4 className="tags">[Article]</h4>
        <p className="info">This article was published by GeeksforGeeks on their website. I wrote this article because there were no resources related to Rust file input/output except for the official Rust documentation. </p>
      </section>

      <section className="article">
        <h3><a href="https://rust-dsa.github.io" target="_blank" rel="noopener noreferrer">Data Structures and Algorithms in Rust</a></h3>
        <h4 className="tags">[Website] [mdbook]</h4>
        <p className="info">This article was published by GeeksforGeeks on their website by the same name. I wrote this article because there were no resources related to Rust file input/output except for the official Rust documentation. </p>
      </section>
    </div>
  )
}
