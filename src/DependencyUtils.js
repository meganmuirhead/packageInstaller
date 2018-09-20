describe("DependencyUtils", () => {

    describe('first dependency added', () => {
        it('kitten service and ice should be able to be added without anything installed', () => {
            let inputToBeTested = [
                'KittenService: ',
                'Leetmeme: Cyberportal',
                'Cyberportal: Ice',
                'CamelCaser: KittenService',
                'Fraudstream: Leetmeme',
                'Ice: '
            ];
            let sortedDeps = sortDependencies(inputToBeTested);

            expect(sortedDeps).toEqual(["Ice", "KittenService", "Cyberportal", "Leetmeme", "CamelCaser", "Fraudstream"]);
        })
    })

});