import React from "react"
import Contact from "./Contact"


function App() {
  //  const [users, setUsers] = useState()
    const debile = [{name: "Bartek", number: 1, mail: "dupa@zsk.pl", picture: "./po.jpg"}, 
    {name:"Włochu",number: 2, mail: "dupa1@zsk.pl", picture: "./lala.jpg"},
    {name: "Olek", number:3, mail: "dupa2@zsk.pl", picture: "./dipsy.jpg"}, 
    {name: "Wiktor", number: 4, mail: "dupa3@zsk.pl", picture: "./tinky_winky.jpg"},
    {name: "Jonasz", number: 5, mail: "dupa4@zsk.pl", picture: "./noonoo.jpg"},

]
    return (
        <div className="contacts">
            {debile.map(({name, number, mail, picture}, index) => <Contact name={name} number={number} 
            mail={mail} picture={picture} key={index} />)}
        </div>
    )
}

export default App