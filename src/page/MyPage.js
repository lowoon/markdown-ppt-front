import React from 'react';
import { Link } from 'react-router-dom';

function MyPage(props) {
  return (
    <div className="my-page">
      <div className="my-page-nav fixed">
        <div className="my-page-nav-item">
          <Link to={"/editor"}>
            <span className="my-page-nav-word">Create</span>
          </Link>
        </div>
      </div>
      <div className="notes-container">
        <button className="note-preview">Slide</button>
        <button className="note-preview">Slide</button>
        <button className="note-preview">Slide</button>
        <button className="note-preview">Slide</button>
        <button className="note-preview">Slide</button>
        <button className="note-preview">Slide</button>
        <button className="note-preview">Slide</button>
        <button className="note-preview">Slide</button>
        <button className="note-preview">Slide</button>
        <button className="note-preview">Slide</button>
      </div>
    </div>
  );
}

export default MyPage;
