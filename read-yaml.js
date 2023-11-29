const fs = require('fs');
const yaml = require('js-yaml');

try {
    const yamlData = yaml.load(fs.readFileSync('config.yaml', 'utf8'));
    console.log(yamlData);
    console.log(yamlData.author);
    console.log(yamlData.support);


} catch (error) {
    console.error(error);
}