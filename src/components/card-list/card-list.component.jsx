import Card from '../card/card.component';

import './card-list.styles.css';
const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return <Card name={name} email={email} id={id} key={name} />;
      })}
    </div>
  );
};

export default CardList;
