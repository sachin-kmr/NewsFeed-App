import React,{Component} from 'react'

class Post extends Component {
    render() {
      return (
        <div className="post">
            <h2>{this.props.value.title}</h2>
            <div> <img src={this.props.value.urlToImage} className="img-fluid rounded" height="400" width="800"/> </div>
            <div>Source : {this.props.value.source.name}</div>
            <div>{this.props.value.description} <a href={this.props.value.url} target="_blank">Read More</a></div>
            {/* <div>Publish Time : {this.props.value.publishedAt}</div> */}
            <br></br><br></br>
        </div>
      )
    }
  }

export default Post;