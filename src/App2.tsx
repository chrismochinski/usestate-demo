import React, {useState} from 'react'

const App2 = () => {

    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')


    return (
        <div className="App2">
            <h1>App2! Name stuff.</h1>
            <input style={{backgroundColor: '#fe00c350', height: 40, margin: '1ch'}}
            value={firstName} 
            onChange={(pants) => setFirstName(pants.target.value)} /> <br />
            <input style={{backgroundColor: "#09f42c3b", height: 40, margin: '1em'}}
            value={lastName}
            onChange={(woot) => setLastName(woot.target.value)} />
            <h3>{firstName} {lastName}</h3>
        </div>
    )
}

export default App2;
