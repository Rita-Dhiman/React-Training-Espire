import React from "react";

const AboutSearch = ({searchQuery,searchFunction}) => {
   
    return (
     <>
       <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={searchFunction}
      />
     </>
  );
};

export default AboutSearch;
