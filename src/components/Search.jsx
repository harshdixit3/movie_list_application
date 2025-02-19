// eslint-disable-next-line react/prop-types
const Search = ({searchTearm, setSearchTearm}) => {
    return (
        <div className="search">
            <div>
                <img src="./search.svg" alt="Search"/>
                <input onChange={(event) => setSearchTearm(event.target.value)} type="text" value={searchTearm}
                       placeholder="Search..."/>
            </div>
        </div>
    )
}
export default Search
