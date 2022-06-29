import React from 'react';
import Card from './Card';
import data from './SkillsApi'
const Skills = () => {
    return (
        <>
            <section className='skills top' id='skills'>
                <div className="container">
                    <div className="heading">
                        <h4>My Skills</h4>
                        <h5>These are the technologies I have work with</h5>
                    </div>
                    <div className="content grid">
                        {data.map((val, index) => {
                            return <Card key={index} image={val.image} />
                        })}
                    </div>


                </div>

            </section>
        </>
    );
};

export default Skills;