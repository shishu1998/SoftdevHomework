print [x for x in range(8)]
print [x*x for x in range(8)]
print [ (x, x*x, x*x*x) for x in range(8) ]
p="myNoobPass1234"
print [x for x in p]
print [x for x in "1234"]
UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
print [ x for x in p if x in UC_LETTERS ]
print [ 1 for x in p if x in UC_LETTERS ]
print [ 1 if x in UC_LETTERS else 0 for x in p ]

def validate(str):
    num = "0123456789"
    Cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    Low = Cap.lower()
    valid = True
    temp = [x for x in p if x in num]
    valid = not(temp == []) and valid
    temp = [x for x in p if x in Cap]
    valid = not(temp == []) and valid
    temp = [x for x in p if x in Low]
    valid = not(temp == []) and valid
    return valid

print validate(p)

p += "#"
def strengthof(str):
    #number = 1,lower = 2, upper = 3, strange character = 4
    num = "0123456789"
    Cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    Low = Cap.lower()
    Strange = ". ? ! & # , ; : - _ *"
    rating = 0
    temp = [x for x in p if x in num]
    if not(temp == []):
        rating += 1
    temp = [x for x in p if x in Low]
    if not(temp == []):
        rating += 2
    temp = [x for x in p if x in Cap]
    if not(temp == []):
        rating += 3
    temp = [x for x in p if x in Strange]
    if not(temp == []):
        rating += 4
    return rating
print strengthof(p)
