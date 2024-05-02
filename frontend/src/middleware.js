
const axios = require("axios"); // Import axios
const address = 'https://smorepedia-jdtk.vercel.app/api/';

// Function to make GET requests with axios
async function query(path, dataToSend) {
  try {
    const response = await axios.get(`${address}${path}`, {
      params: dataToSend,
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}

// Function to make POST requests with axios
async function add(path, id, title, content, infobox) {
  const postData = {
    id,
    title,
    content,
    infobox,
  };

  try {
    const response = await axios.post(`${address}${path}`, postData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`Success: ${JSON.stringify(response.data.result)}`);
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}

// Function to make DELETE requests with axios
async function remove(id) {
  const postData = { id };

  try {
    const response = await axios.delete(`${address}/api/byid`, {
      data: postData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`Success: ${JSON.stringify(response.data.result)}`);
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}


// Updated update function using axios
async function update(id, newData, prop) {
  try {
    const row = await query("/byid", { id });
    let updatedRow = { ...row };
    updatedRow[prop] = newData; // Update the specified property
    
    await remove(id); // Delete the existing entry
    await add("/add", updatedRow.id, updatedRow.title, updatedRow.content, updatedRow.infobox); // Re-add with updated data
  } catch (error) {
    console.error("Error updating data:", error.message);
  }
}

// Function to get the highest ID
async function getHighestID() {
  try {
    const result = await query("/maxid", {});
    return result.high;
  } catch (error) {
    console.error("Error fetching highest ID:", error.message);
    throw error;
  }
}


module.exports = {
    query,
    add,
    update,
};