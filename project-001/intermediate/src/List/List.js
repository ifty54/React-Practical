import React from 'react'

const uniqueList = [
    {
        Nation : "Spain",
        Experience : "10",
        freeAgent: [
            {
                Shirt : "Cesar Azpilicueta",
                Deadline : "April"
            },
            {
                Shirt : "Marc Cucurella",
                Deadline : "July"  
            }
        ]
    },
    {
        Nation : "England",
        Experience : "9",
        freeAgent: [
            {
                Shirt : "Raheem Sterling",
                Deadline : "December"
            },
            {
                Shirt : "Mason Mount",
                Deadline : "September"  
            }
        ]
    },
    {
        Nation : "Gabon",
        Experience : "7",
        freeAgent: [
            {
                Shirt : "Pierre Emrick Aubameyang",
                Deadline : "June"  
            }
        ]
    }

]

const List = () => {
  return (
  <div>
    <h1>Breaking news</h1>
        {uniqueList.map((unique, index) => (
            <article key={index}>
                <h2>Foreign Players of PL are from {unique.Nation} with experiences of {unique.Experience}</h2>
                {
                    unique.freeAgent.map((agent, index) => 
                    <div>
                        <p>Chelsea will release {agent.Shirt} within {agent.Deadline}</p>
                    </div>)

                }
            </article>
            ))}

        </div>
        );
}

export default List