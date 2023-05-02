const getDataApi = () => {
    return fetch('https://randomuser.me/api/?results=50')
    .then((response) => response.json())
    .then((data) => {
        const cleanData = data.results.map(eachContact => {
           return {
              name: eachContact.name.first,
              lastname: eachContact.name.last,
              city: eachContact.location.city,
              image: eachContact.picture.large,
              age: eachContact.dob.age,
              id: eachContact.login.uuid,
              gender: eachContact.gender,
              email: eachContact.email,
           }
        });
        return cleanData;
    });
};
export default getDataApi;