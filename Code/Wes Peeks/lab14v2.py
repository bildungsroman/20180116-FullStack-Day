import random


def pick6():
    return [random.randint(0, 99) for _ in range(6)]

# def list_equal(list_1, list_2):
#     return set(list_1) == set(list_2)

payouts = [0, 4, 7, 50, 100]
winners = pick6()

balance = 0

for attempt in range(100000):
    ticket = pick6()

    matches = 0
    for i in range(6):
        if winners[i] == ticket[i]:
            matches += 1

    balance += payouts[matches]


    if list_equal(this_try, winners):
        winnings = winnings + winning_amount
        print('YOU FOUND A WINNA')
    else:
        winnings = winnings - 2
        print(winnings)