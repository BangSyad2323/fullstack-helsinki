const Header = ({name}) => <h1>{name}</h1>

const Content = ({content}) => {

const total = content.reduce((s, p) => s + p.exercises, 0)
    
return(
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

export const Course = ({course}) => {
    console.log(course)
    return (
        <div>
        <Header name={course.name} />
        <Content content={course.parts}/>
        </div>
    )
}