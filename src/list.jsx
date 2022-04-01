import React from 'react'
import './list.css';


const List = ({people}) => {
  return (
    <React.Fragment>
        {people.map((persons) =>{
            const {id,name,age, image} = persons;
            return <article key={id} className="persons">
                <img src={image} alt={name}/>

                <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
            </article>
        })}
    </React.Fragment>
  )
}

export default List