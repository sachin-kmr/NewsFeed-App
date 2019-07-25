import React,{Component} from 'react'
import Post from '../Components/post'
import Menu from '../Components/menu'

const homeUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1cb53ba1fd8641548ae606d94faaf3dc";

class Feed extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [],
        url: " "
      }
    }

    searchValueHandler = (searchValue) => {
        if(searchValue !== ""){
            this.setState({url: "https://newsapi.org/v2/everything?q=" + searchValue + "&apiKey=1cb53ba1fd8641548ae606d94faaf3dc"});
        }
        // this.render();
    }

    onClickHandler = (clickText) => {
        if(clickText === 'home'){
            this.setState({url: homeUrl});
        }
        else{
            this.setState({url: "https://newsapi.org/v2/top-headlines?country=in&category=" + clickText + "&apiKey=1cb53ba1fd8641548ae606d94faaf3dc"});
        }
    }

    componentWillMount(){
        this.setState({url: homeUrl});
    }

    loadData(){
        fetch(this.state.url)
        .then(response => {
                return response.json();
        })
        .then(result => {
          //   console.log(result.articles)
            this.setState({posts: result.articles});
        })
        .catch((error) => {
            console.log("Error !! ");
            this.setState({errorMsg: 'Error receiving data !'});
        });
    }

    componentDidMount(){
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.url !== this.state.url){
            // console.log("i am re-rendering");
            this.loadData();
        }
      } 

    render() {
      const posts = this.state.posts.map((post, index) =>
        <Post key={index} value={post}/>
      );

      return (
          <>
        <Menu searchValueHandler={this.searchValueHandler} onClickHandler={this.onClickHandler}/>
        <div className="feed">
          {posts}
        </div>
        </>
      )
    }
  }

export default Feed;