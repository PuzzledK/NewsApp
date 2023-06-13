import './News.css';
import React,{Component} from 'react';


import { NewsItems } from './NewsItems';
export class News extends Component {
  constructor(props){
    super(props);
    this.state = {
        articles : []
    }
  }
  async componentDidMount(){
    let list = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=8bb5b84d4b1d4a219d6f1f924935d0a6');
    let parsed = await list.json();
    console.log(parsed);
    this.setState({
        articles : parsed.articles
    });
  }
    render() {
        return (
        <>
        <div className='NewsSection'>
           <h1>Sensational News in Cards</h1>
           <h3>A mini-project</h3>
        </div>
        <div className='newsRow'>
            {this.state.articles.map((element) => {
                return (
                    <div className='column' key={element.url}>
                    <NewsItems imgurl={element.urlToImage} title={element.title} desc={element.description} url={element.url} />
                   </div>
                );
            })}
        </div>
        </>
    );
}
}