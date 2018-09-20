function sortDependencies(input) {
    let mappedObjects = input.map(
        function (str, i) {
            console.log(`item ${i}`, str);
            return {
                dependency: str.split(': ')[1] ? str.split(': ')[1] : false,
                name: str.split(': ')[0]
            };
        }
    );
    console.log('mappedOpjects', mappedObjects);
}