def is_multiply_of_3_or_5(number: int):
    return (number % 3 == 0) or (number % 5 == 0)


def solution(number):

    sumOfMultiples = 0

    currentNumber = 0
    while currentNumber < number:
        if is_multiply_of_3_or_5(currentNumber):
            sumOfMultiples += currentNumber

        currentNumber += 1

    return sumOfMultiples
