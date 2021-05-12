import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import BigCard from "../Components/BigCard";
import Smaillcard from '../Components/Smaillcard';

const Home = () => {
    const [users, setUser]=useState([]);

    const getUser= async()=>{
       try {
           const response= await fetch('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20');
           const data= await response.json();
           setUser(data.results)
           
       } catch (error) {
           console.log(error);
       }
    }

    useEffect(()=>{
        getUser()
    }, []);

    return (
        <div className="home">
            <Navbar />
            <div className="home-inner">
                <div className="home-mainCard">
                    <BigCard />
                </div>
                <div className="home-allcards">
                   {
                       users.map((user, index)=>{
                             return (
                                 <>
                                  <Smaillcard 
                                     key={index}
                                     gender={user.gender}
                                     name={`${user.name.title} ${user.name.first} ${user.name.last}`}
                                     email={user.email}
                                  />
                                 </>
                             );
                       })
                   }
                </div>
            </div>
        </div>
    )
}

export default Home
