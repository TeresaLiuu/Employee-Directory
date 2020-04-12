import axios from 'axios';

export default {
  getEmployeeList: function() {
    return new Promise((resolve, reject) => {
      axios
        .get('https://randomuser.me/api/?results=15')
        .then(res => {
          const employees = res.data.results;
          const results = employees.map(user => {
            return {
              firstname: user.name.first,
              lastname: user.name.last,
              email: user.email,
              image: user.picture.large,
              phone: user.phone,
              dob: user.dob.date.slice(0,10)
            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    });
  }
};

