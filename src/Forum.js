import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Forumbody from './components/Forum-body';
import ForumComment from './components/ForumComment';
const Forum = () => {
  return (
    <div>
      <Header />
      <Forumbody />
      <Footer />
      <ForumComment/>
    </div>
  )
}

export default Forum
