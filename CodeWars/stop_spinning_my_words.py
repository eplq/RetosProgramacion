def spin_words(sentence: str):
    words = sentence.split(" ")
    for index, word in enumerate(words):
        if len(word) >= 5:
            words[index] = word[::-1]

    return " ".join(words)
