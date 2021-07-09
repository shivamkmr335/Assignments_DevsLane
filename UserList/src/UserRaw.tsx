import React from 'react';
import { StringMappingType } from 'typescript';

interface Props {
    page: number;
    mail?: string;
    gender?: string;
    first?: string;
    last?: String;
    index: number;
}

const UserRaw: React.FC<Props> = (props) => {
  return (
    <>
      
        <tr className="flex justify-evenly border flex-shrink-0">
            <td className="bg-green-100 w-8 flex-shrink-0 border text-center">{ (20*(props.page)) + props.index - 19}</td>
            <td className="bg-green-300 w-60 flex-shrink-0 border text-center">{props.first + " " + props.last}</td>
            <td className="bg-green-100 w-80 flex-shrink-0 border text-center">{props.mail}</td>
            <td className="bg-green-300 w-40 flex-shrink-0 border text-center">{props.gender}</td>
        </tr>
          
    </>
  );
};

UserRaw.defaultProps = {
}

export default  React.memo(UserRaw);