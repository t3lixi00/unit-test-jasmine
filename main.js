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
 * tip: each class has name property
 * if test pass, it shows 'User class'
 * */
class User {
    firstName;
    lastName;
    middleName;

    constructor(data = {}){
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.middleName = data.middleName || '';
    }
}

/**
 * Test suite
 * */
describe(`${User.name} class`, ()=> {

});

/**
 * Exercise 3
 * How to test this class
 */
// Unit Testing: Our first test with it

describe('User', ()=> {
    it('Expect firstName wont break', () => {
        // arrange
        const data = { firstName: null };

        // act
        const model = new User(data);

        // assert
        expect(model.firstName).toBe('');
    })

    it('Expect lastName wont break', () => {
        // arrange
        const data = { lastName: 'test' };

        // act
        const model = new User(data);

        // assert
        expect(model.lastName).toBe('test');
    })
})

// Test Suite
describe(`${User.name} Class`, () => {
    describe('default values', () => {
        it('first name defaults to empty', () => {
            // arrange
            const data = { firstName: null };

            // act
            const model = new User(data);

            // assert
            expect(model.firstName).toBe('');
        });

        it('last name defaults to empty', () => {
            // arrange
            const data = { lastName: null };

            // act
            const model = new User(data);

            // assert
            expect(model.lastName).toBe('');
        });

        it('middle name defaults to empty', () => {
            // arrange
            const data = { middleName: null };

            // act
            const model = new User(data);

            // assert
            expect(model.middleName).toBe('');
        });
    });
});
