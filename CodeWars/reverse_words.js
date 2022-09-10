function reverseWords(str) {
    return str
        .split(" ") // separate using space as separator
        .map( // for every item
            word =>
                word // return the word
                    .split("") // characters of the word in an array
                    .reverse() // reverse the array
                    .join("") // join all the items in the array with no separator
        )
        .join(" ") // join all the words with spaces between them
}