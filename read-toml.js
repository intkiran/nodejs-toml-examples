const fs = require('fs');
const toml = require('toml');
try{
    // Read the TOML file into a string
    const data = fs.readFileSync('config.toml', 'utf8');
    
    // Parse the TOML data into an javascript object
    const result = toml.parse(data);
    console.log(result.mysql.host);  
    console.log(result.mysql.username);   
    console.log(result.mysql.password); 
    console.log(result.mysql.database); 
    } catch (e) {
      console.error("Parsing toml content on line " + e.line + ", column " + e.column +
        ": " + e.message);
    }