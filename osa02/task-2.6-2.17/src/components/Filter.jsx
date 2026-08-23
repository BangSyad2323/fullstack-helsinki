const Filter = ({handleFilter, filter}) => {
    return (
        <div>
            <input 
                onChange={handleFilter}
                value={filter}
            />
        </div>
    )
}

export default Filter