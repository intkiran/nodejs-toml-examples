const fs = require('fs');
const toml = require('toml');


const obj = {
    mysql: {
      host: "localhost",
      username: "root",
      password: "password"
    }
  };
  
  // Convert the object to TOML format
  const str = toml.stringify(obj);
  
  // Write the TOML string to a file
  fs.writeFileSync('result.toml', str, 'utf8');