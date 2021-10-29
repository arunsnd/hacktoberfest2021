def is_palindrom(txt):
    i = 0
    j = len(txt) - 1

    while i < j:
        while not txt[i].isalnum() and i < j:
            i += 1
        while not txt[j].isalnum() and i < j:
            j -= 1

        if txt[i].lower() != txt[j].lower():
            return False
        j -= 1
        i += 1
    return True


text_ = "A  man, a plan, a canal: Panama"
is_palindrom(text_)
