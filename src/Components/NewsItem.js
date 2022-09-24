import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description, imgUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card " style={{ width: "18rem" }}>
          <img src={imgUrl?imgUrl:"https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-primary">
              View More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
