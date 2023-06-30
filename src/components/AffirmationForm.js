import React, { useState } from 'react';

function AffirmationForm({onAddAffirmation}) {
    const [affirmation, setAffirmation] = useState("");
    const [category, setCategory] = useState("Love and Relationships");
  
    function handleSubmit(e) {
        e.preventDefault();
        const affirmData = {
            statement: affirmation,
            category: category
        }
        fetch("http://localhost:3000/affirmations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(affirmData)
        })
        .then((r) => r.json())
        .then((newAffirm) => {
            onAddAffirmation(newAffirm)
            setAffirmation("")
        })
    }

    return (
    <form className="NewAffirmation" onSubmit={handleSubmit}>
        <label>
            Add Your Affirmation:
            <input 
                placeholder="type your affirmation..."
                type="text"
                name="statement"
                value={affirmation}
                onChange={(e) => setAffirmation(e.target.value)}/>
        </label>

        <label>
            Category:
            <select 
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="Financial Abundance">Financial Abundance</option>
                <option value="Health">Health</option>
                <option value="Love and Relationships">Love and Relationships</option>
                <option value="Success">Success</option>
            </select>
        </label>

        <button type="submit">Add Affirmation</button>
    </form>
  )
}

export default AffirmationForm