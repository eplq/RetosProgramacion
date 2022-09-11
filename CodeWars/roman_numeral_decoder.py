def solution(roman):

    ROMAN_VALUES = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    result = 0
    correlations = [ROMAN_VALUES[character] for character in roman]
    
    for index, value in enumerate(correlations):
        if index == len(correlations) - 1:
            result += value
            continue

        if correlations[index + 1] > value:
            result -= value
            continue
        
        result += value

    return result