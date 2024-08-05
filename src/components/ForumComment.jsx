import React, { useState, useEffect } from 'react';
import './forum-comment.css';
import closeIcon from './images/close-icon.svg';
import sendIcon from './images/send-icon.svg';
import createIcon from './images/create-icon.svg';

const ForumComment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [commentMessage, setCommentMessage] = useState('');

  useEffect(() => {
    const commentInput = document.querySelector(".comment-box .comment-input textarea");
    const sendCommentBtn = document.querySelector(".comment-box .comment-input span");

    if (!commentInput || !sendCommentBtn) {
      console.error("One or more required elements not found.");
      return;
    }

    const handleComment = () => {
      if (commentMessage.trim() !== '') {
        console.log('Comment sent: ' + commentMessage);
        setCommentMessage('');
      }
    };

    sendCommentBtn.addEventListener("click", handleComment);

    return () => {
      sendCommentBtn.removeEventListener("click", handleComment);
    };
  }, [commentMessage]);

  const toggleCommentBox = () => {
    setIsOpen(!isOpen);
    if (commentMessage.trim() !== '') {
      setCommentMessage('');
    }
  };

  return (
    <div className="comment-wrapper">
      {isOpen && (
        <div className="comment-box">
          <button className="comment-toggler" onClick={toggleCommentBox}>
            <img src={closeIcon} alt="Close" />
          </button>
          <div className="comment">
            <header>
              <h2>Comments</h2>
            </header>
            
            <div className="comment-input">
              <textarea
                placeholder="Share Your Experience..."
                value={commentMessage}
                onChange={(e) => setCommentMessage(e.target.value)}
              />
              <span className="send-btn">
                <img src={sendIcon} alt="Send" onClick={() => setCommentMessage('')} />
              </span>
            </div>
          </div>
        </div>
      )}
      <button className="comment-toggler" onClick={toggleCommentBox}>
        <img src={isOpen ? closeIcon : createIcon} alt="Toggle Comment Box" />
      </button>
    </div>
  );
};

export default ForumComment;
