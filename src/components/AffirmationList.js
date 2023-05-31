import React, { useEffect, useState } from 'react';
import AffirmationDetail from './AffirmationDetail';
import AffirmationForm from './AffirmationForm';

function AffirmationList() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [affirmations, setAffirmations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/affirmations")
        .then ((r) => r.json())
        .then ((affirmations) => setAffirmations(affirmations))
    }, [])

    function handleCategoryChange(category) {
        setSelectedCategory(category);
    }

    function handleAddAffirmation(newAffirmation){
        setAffirmations([...affirmations, newAffirmation])
    }

    const displayAffirmations = affirmations.filter((affirm) => {
        if (selectedCategory === "All") return true;

        return affirm.category === selectedCategory;
    })

  return (
    <div className="AffirmationList">
        <ul className='Affirmations'>
            {displayAffirmations.map((affirm) => (
                <AffirmationDetail 
                    key={affirm.id}
                    affirmation={affirm}/>
            ))}
        </ul>

    <AffirmationForm />
    </div>
  )
}

export default AffirmationList