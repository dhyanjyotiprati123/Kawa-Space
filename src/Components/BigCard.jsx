import React, {useEffect, useState} from 'react';

const BigCard = () => {

    const [user, setUser]=useState({
        source: "",
        name: "",
        location: "",
        gender: ""
    })

    const randomUser=async()=>{
        try{
          const url= await fetch("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20");

          const data=await url.json();
          const first=data.results[0];
          console.log(first);
          setUser({
              source: `${first.picture.large}`,
              name: `${first.name.title} ${first.name.first} ${first.name.last}`,
              location: `${first.location.city} ${first.location.country} ${first.location.state}`,
              gender: `${first.gender}`
          });
          
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        randomUser();
    }, [])

    return (
        <div className="bigcard">
            <figure className="bigcard-profile">
               <img className="bigcard-profile-pic" src={user.source} alt="profile" />
            </figure>
            <div className="bigcard-bio">
                <h1 className="bigcard-name active">
                  {user.name}
                </h1>
                <p className="bigcard-address">
                    {user.location}
                </p>
                <p className="bigcard-gender">
                     {user.gender}
                </p>
            </div>
        </div>
    )
}

export default BigCard
