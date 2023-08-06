import './item.css';
function Item(props){
    const namo= props.namo;
    return(<p className="item">{namo}</p>);
}

export default Item;