const fs = require('fs');
const yaml = require('js-yaml');

const data = {
    author: 'Franc',
    database: {
        driver: "com.mysql.jdbc.Driver",
        port: 3306,
        dbname: "students",
        username: "root",
        password: "root"
    },
    support: ['mysql', 'mongodb', 'postgres']
};

const yamlString = yaml.dump(data);

fs.writeFileSync('output.yaml', yamlString, 'utf8');
