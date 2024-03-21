import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDumbbell, faBowlFood } from "@fortawesome/free-solid-svg-icons";

interface Props {
    title: string;
    items?: string[];
    icon?: any;
}

const PlanCard = ({ title, icon, items }: Props) => {
    return (
      <div className="p-8 border border-black/10 rounded-lg bg-white">
        <FontAwesomeIcon icon={icon} className="text-primary text-5xl mb-4"/>
        <h3 className="text-xl font-semibold leading-7 mb-4">{title}</h3>
        <ul>
          {items!.map((item, index) => (
            <li key={index} className='flex mb-2'>
                <FontAwesomeIcon icon={faCheck} className="fas fa-check text-primary mr-2 mt-1 text-lg"/>
                {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PlanCard;