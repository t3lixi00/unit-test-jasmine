/**
 * Exercise 1
 * */
function insertDashes(str) {
    // str = 'abc'
    const array1 = str.split('');
    return array1.join('-');
}

/**
 * Test Suite
 * */
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // range
        const value = 'abc';
        // act
        const result = insertDashes(value);
        // log
        console.log("result: ", result);
        //assert
        expect(result).toBe('a-b-c');
    });
})


/**
 * Exercise 2 test Group
 * tip: each class has name
 * if test pass, it shows 'User class'
 * */
class User {
    firstName;
    lastName;
    middleName;

    constructor(data = {}){
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.middleName = data.middleName;
    }
}

/**
 * Test suite
 * */
describe(`${User.name} class`, ()=> {

});
