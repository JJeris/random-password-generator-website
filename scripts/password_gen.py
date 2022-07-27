"""
password_gen.py
Made by JJeris, dat: unknown

About me:

Programs purpose is to create a random password (a string of characters that consist of 
letters, both uppercase and lowercase, numbers and symbols). The passwords are gibberish
which means theyll be even harder to crack and or guess by malicious parties.

*This is only an example, built in python, that will be copied over to JS to be used in
the Random Password Generator Website project.

-JJeris

"""
import random
"""
Assets - lists of characters that will be used in the generation of password.
"""
uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lowercase_letters = "abcdefghijklmnopqrstuvwxyz"
numbers = "1234567890"
symbols = "`~!@#$%^&*()_+-={|[]\:;<>?,./:"

"""
Add_length()

About me:
This function takes a user input for the length of the password, 
which he wishes to generate.

"""
def Add_length():
    password_length = int(input("Add length:"))
    while password_length <= 0:
        print("Input invalid")
        password_length = int(input("Add length?"))
    print("Length is", password_length)
    return password_length


"""
Generate_password()

About me:
This function generates the password, which will be as long as the user given input
in the Add_length() function.

The password is generated using the random module for Python. It chooses a number from 1-5,
which determins which one of the globally declared lists will be used (the numbers
corresponding to the list in the order that they were declared).

Then, finding out which list is to be used for the next character in the password, another 
random number is chosen in the borders of 1-length_of_the_given_list. The password string variable
gets appended with the character, whose index in the given list equals the randomly chosen number.

"""
def Generate_password():
    password_length = Add_length()
    password_output = ""
    for i in range(password_length):
        x = random.randrange (1, 5)
        if x==1:
            x1 = random.randrange(len(uppercase_letters))
            password_output += uppercase_letters[x1]
        elif x==2:
            x2 = random.randrange(len(lowercase_letters))
            password_output += lowercase_letters[x2]
        elif x==3:
            x3 = random.randrange(len(numbers))
            password_output += numbers[x3] 
        elif x==4:
            x4 = random.randrange(len(symbols))
            password_output += symbols[x4]
    print(password_output)

Generate_password()