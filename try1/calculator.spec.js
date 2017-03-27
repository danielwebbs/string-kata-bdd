const mocha = require("mocha");
const expect = require("chai").expect;
const calculator = require('./calculator.js');

describe('String calculator', () => {

    describe('when given an emptry string', () => {
        it('should return 0', () => {
            expect(calculator.sum('')).to.be.equal(0);
        });
    });

    describe('when given a string of "5" number', () => {
        it('should return the number 5', () => {
            expect(calculator.sum('5')).to.be.equal(5);
        });
    });

    describe('when given a string of 2 comma seperated numbers', () => {
        it('should return the sum of the two numbers', () => {
            expect(calculator.sum('1,2')).to.be.equal(3);
        });
    });

    describe('when given a string of unknown length of numbers', () => {
        it('should be able to calculate the sum for the entire string', () => {
            expect(calculator.sum('5,4,1')).to.be.equal(10);
        });
    });

    describe('when given a string of numbers seperated by new lines', () => {
        it('should calculate the sum' , () => {
            expect(calculator.sum('1\n2')).to.be.equal(3);
        });
    });

    describe('whebn given a string of numbers seperated by new line characters and commas', () => {
        it('should calculate the sum' , () => {
            expect(calculator.sum('1,5\n3')).to.be.equal(9);
        });
    });
});