import React, { Component } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'book'
    };
  }

  showBook = () => {
    this.setState({ selectedTab: 'book' });
  }

  showBlog = () => {
    this.setState({ selectedTab: 'blog' });
  }

  showCourse = () => {
    this.setState({ selectedTab: 'course' });
  }

  render() {
    const { selectedTab } = this.state;

    // Element variable technique
    let content;
    if (selectedTab === 'book') {
      content = <BookDetails />;
    } else if (selectedTab === 'blog') {
      content = <BlogDetails hasBlogs={true} />;
    } else {
      content = <CourseDetails isEnrolled={true} />;
    }

    return (
      <div>
        <h1>Blogger App</h1>
        <button onClick={this.showBook}>Show Book Details</button>
        <button onClick={this.showBlog}>Show Blog Details</button>
        <button onClick={this.showCourse}>Show Course Details</button>

        <hr />

        {/* Element variable rendering */}
        {content}

        <hr />

        {/* Ternary operator technique (extra demo) */}
        {selectedTab === 'book' ? <p><i>Currently viewing: Books</i></p> : <p><i>Currently viewing: {selectedTab}</i></p>}
      </div>
    );
  }
}

export default App;
