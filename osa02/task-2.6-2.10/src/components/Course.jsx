const Header = ({name}) => <h1>{name.name}</h1>

const Content = ({content}) => {

    const total = content.reduce((s, p) => s + p.exercises, 0)
        
    return (
        <div>
            <div>
                {content.map(part => 
                    <p key={part.id}>
                        {part.name} {part.exercises}
                    </p>
                )}
            </div>
            <div>
                Total of {total} exercise
            </div>
        </div>
    )
}

export const Course = ({courses}) => {
    console.log(courses)
    return (
        <div>
            {courses.map(cours => 
            <div>
                 <Header key={cours.id} name={cours} />
                 <Content key={cours.id} content={cours.parts}/>
            </div>
            )}
       
        
        </div>
    )
}