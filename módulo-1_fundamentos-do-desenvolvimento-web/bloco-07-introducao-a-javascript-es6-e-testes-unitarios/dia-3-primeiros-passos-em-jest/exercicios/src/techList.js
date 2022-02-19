const techList = (arrayTech, stringName) => {
    if (arrayTech.length > 0) {
        let objectTech = [];
        arrayTech.sort();
        for (let i = 0; i < arrayTech.length; i += 1) {
            objectTech.push({
                tech: arrayTech[i],
                name: stringName
            });
        }
        return objectTech;
    }
    return "Vazio!";
};

module.exports = techList;
