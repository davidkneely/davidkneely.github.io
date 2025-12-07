//TODO: Figure out how to lift the filteredProjects state up to the ProjectPosts component
//TODO: Add a clear button to clear the search
//TODO: Add CSS for the search container

import React, {useState} from 'react';

function Search({ projects, onFilter }) {
  const [query, setQuery] = useState('');
   
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    // console.log("Search term: " + searchTerm);
    const filteredProjects = projects.filter((project) => {
      return project.title.toLowerCase().includes(query.toLowerCase())
    });
    onFilter(filteredProjects);
  };

  return (
    <div className="search-container">
    <h1>Search</h1>
      <form>
      <input type="text" placeholder="Search projects" name="search" onChange={handleSearch}/>
      </form>
    </div>
  );
}

export default Search;