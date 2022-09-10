def valid_braces(string):
    
    stack = ""
    for character in string:
        if character in ["[", "{", "("]:
            stack += character

        if len(stack) == 0:
            continue

        if character == "]" and stack[-1] == "[":
            stack = stack[:len(stack) - 1]

        if character == "}" and stack[-1] == "{":
            stack = stack[:len(stack) - 1]
            
        if character == ")" and stack[-1] == "(":
            stack = stack[:len(stack) - 1]

    return len(stack) == 0