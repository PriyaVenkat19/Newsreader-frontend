import React from 'react'

function NewsComponent({newsItem}) {
    return (
        <div className="card">
          <div className="text-container">
            <h3>{newsItem.newsTitle}</h3>
            <p className="location"><span>{newsItem.newsCategory}</span> - {newsItem.newsID}</p>
            <p className="status">
            Authored by : {newsItem.newsAuthor}, {newsItem.newsLocation}
            </p>
            
            <button>Read More</button>
          </div>
        </div>
      )
}

export default NewsComponent