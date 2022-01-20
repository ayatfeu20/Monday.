const SearchBar = () => (

    <div className="container  border mx-2 px-2 text-center bg-light ">
        <p className=" small bg-success text-light">Archive</p>

    <form action="/" method="get">
        <label>
            <p className="small">Use our search engin here:</p>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search"
             
        />
        
        <button  className="btn btn-primary small py-1 px-1 my-3 " type="submit">Search</button>
    </form>
    
    </div>
);

export default SearchBar;