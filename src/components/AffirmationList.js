import React, { useEffect, useState } from 'react';
import AffirmationDetail from './AffirmationDetail';
import AffirmationForm from './AffirmationForm';
import Filter from './Filter';

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

    function handleUpdateAffirmation(updatedAffirm) {
        const updatedAffirms = affirmations.map((affirm) => {
            if (affirm.id === updatedAffirm.id) {
                return updatedAffirm;
            } else {
                return affirm;
            }
        });
        setAffirmations(updatedAffirms)
    }

    function handleDeleteAffirmation(deletedAffirm) {
        const updatedAffirms = affirmations.filter((affirmation) => affirmation.id !== deletedAffirm.id)
        setAffirmations(updatedAffirms)
    }

    const displayAffirmations = affirmations.filter((affirm) => {
        if (selectedCategory === "All") return true;

        return affirm.category === selectedCategory;
    })

  return (
    <div className="AffirmationList">
        <AffirmationForm onAddAffirmation={handleAddAffirmation}/>
        
        <Filter 
            category={selectedCategory}
            onCategoryChange={handleCategoryChange}/>   

        <ul className='Affirmations'>
            {displayAffirmations.map((affirm) => (
                <AffirmationDetail 
                    key={affirm.id}
                    affirm={affirm}
                    id={affirm.id}
                    statement={affirm.statement}
                    category={affirm.category}
                    onUpdateAffirm={handleUpdateAffirmation}
                    onDeleteAffirm={handleDeleteAffirmation}
                    />
            ))}
        </ul>
    </div>
  )
}

export default AffirmationList