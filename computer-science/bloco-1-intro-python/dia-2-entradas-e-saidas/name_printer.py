def name_printer(name):
    for removving_letters in range(len(name)):
        for index in range(len(name) - removving_letters):
            print(name[index], end="")
        print()

if __name__ == "__main__":
    name = input("Digite seu nome:")
    name_printer(name)