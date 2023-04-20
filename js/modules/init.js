async function fetchUsers() {
    try {
        const response = await fetch('../../data/employees.json');
        const employee = await response.json();
        return employee.employees;
    } catch (error) {
        console.error(error);
    }
}

export default fetchUsers();