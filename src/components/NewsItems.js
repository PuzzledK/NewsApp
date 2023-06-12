import './NewsItems.css';
export function NewsItems(props){
    return (
        <div className='card'>
            <div classnam='img-card'><img src={props.imgurl?props.imgurl:'https://th.bing.com/th/id/OIP.UOtN2FKlrxetB811rtNs7AHaF0?w=207&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'} alt='Img' style={{width:'100%'}}/>
            <div className='titleTxt'><h4>{props.title?props.title.slice(0,100)+'...':''}</h4></div>
            <div className='descTxt'><p>{props.desc?props.desc.slice(0,180)+'...':''}</p></div>
            <a className='btn btn-primary' href={props.url} target='_blank' rel="noreferrer">Read More</a>
            </div>
        </div>
    );
}