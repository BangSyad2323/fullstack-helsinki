const Header = ({name}) => <h1>{name}</h1>

const Content = ({content}) => {
    
    return(
    <div>
        {content.map(part => 
            <p key={part.id}>
                {part.name} {part.exercises}
            </p>
        )}
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