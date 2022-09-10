def is_pangram(s):
    alphabet = [character for character in "abcdefghijklmnopqrstuvwxyz"]
    for character in s:
        if character.lower() not in alphabet:
            continue

        alphabet.pop(alphabet.index(character.lower()))

    return len(alphabet) == 0
