// used to get the room matrix from the flask api

const fetchClosest = async (latitude, longitude, pageNumber = 0) => {
    const API_ENDPOINT = "https://kishorep1.pythonanywhere.com";
    // console log the request
    const response = await fetch(`${API_ENDPOINT}/closest?lat=${latitude}&long=${longitude}&page=${pageNumber}`);

    // handle errors
    if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data.buildings;
};

export default fetchClosest;