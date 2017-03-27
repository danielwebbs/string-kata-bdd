const calculator = () => {

    const seperateNumberString = (numbers) => {
        if (numbers.includes('\n')) { 
            numbers = numbers.replace('\n', ',');
        }

        return numbers.split(',');
    }

    const sum = (numbers) => {
        if (numbers === '') return 0;

        let seperatedNumbers = seperateNumberString(numbers);

        return seperatedNumbers.reduce((sum, number) => {
            return sum + parseInt(number);
        }, 0);
    };

    return {
        sum
    }
}

module.exports = calculator();