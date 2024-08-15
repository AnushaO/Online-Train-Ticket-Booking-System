import axios from "axios";



// Config







const getSelectedUsers = async (id) => {

    console.log(id);

    const url = "http://localhost:8000/employee/get/" + id;

    const {data}  = await axios.get(url);

    return data.Employee;

}



export default getSelectedUsers;