// used to get the room matrix from the flask api

const fetchClosest = async (latitude, longitude, pageNumber = 0) => {
    // console log the request
    const response = await fetch(`http://localhost:5000/closest?lat=${latitude}&long=${longitude}&page=${pageNumber}`);

    // handle errors
    if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data.buildings;
};

export default fetchClosest;