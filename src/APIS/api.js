export const fetchData = async ()=>{
    try {
        const response = await fetch ("https://randomuser.me/api/?results=10");
        const data = await response.json ();
      
        const {results} = data;
       
        console.log(results);
        return results;

    } catch (error) {
        console.log(error);
    }
};