import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {FC, memo} from 'react';
import UserRaw from './UserRaw';

interface Props {

    page: number;
    pageTitle?: string;
}

const UserList: FC<Props> = (props) => {

    const [users, setUsers] = useState<any>([]); 

    useEffect(()=>{
        axios.get("https://randomuser.me/api/?inc=id,name,gender,email&page="+ props.page+"&results=20"
        ).then((res)=> {
            console.log("After Response from server cureent Page No: " + props.page);
            console.log(res.data.results);
            setUsers(res.data.results);
            
        });
    },[props.page]);

  return (
    <div className=" my-3 p-4">
      <p>Showing List of {props.pageTitle}</p>
      <table className="bg-green-200 flex justify-evenly flex-col  mx-auto flex-shrink-0">
          
          <thead className="bg-gray-300 flex-shrink-0">
            <tr className="flex justify-evenly flex-shrink-0 bg-gray-300">
                <th className="bg-gray-300 flex-grow-0 w-8 flex-shrink-0">Index</th>
                <th className="bg-gray-300 flex-grow-0 w-60 flex-shrink-0">Name</th>
                <th className="bg-gray-300 flex-grow-0 w-80 flex-shrink-0">Mail ID</th>
                <th className="bg-gray-300 flex-grow-0 w-40 flex-shrink-0">Gender</th>
            </tr>
          </thead>
          <tbody>
            {users.map( (user:any,index:number) => 
                <UserRaw page={props.page} index={index} first={user.name.first} last={user.name.last} mail={user.email} gender={user.gender} /> 
            )}
          </tbody>
        </table>
        
    </div>
  );
};

UserList.defaultProps = {
    pageTitle: "User List", 
}

export default memo(UserList);