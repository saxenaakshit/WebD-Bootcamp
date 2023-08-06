import './itemDate.css';

function ItemDate(props){
    const day=props.day;
    const month = props.month;
    const year=props.year;
    return (
        
        <div className="itemDate">
            <span>{day} </span>
            <span>{month} </span>
            <span>{year}</span>
            {props.children}
            {/* to make the content written inside the tags visible  */}
        </div>
    );
}

export default ItemDate;