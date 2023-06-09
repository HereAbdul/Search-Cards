import './card-list.component.css'
import Card from "../cards/card.component";
const CardList=({monsters})=> {
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return(
          <Card monster={monster}/>
        )})}
      </div>
    );
  }
export default CardList;