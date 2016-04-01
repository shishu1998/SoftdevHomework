def inc(x):
    return x + 1

f = inc
print f(10)
#should print 11

"""
Q1-This takes in a and b as parameter for the creation of a function
and adds them
"""

"""
Q2-This defines the function with the variable foo
"""

def h(x):
    return lambda y: x + y
print h(1)
print h(2)
print h(1)(3)
print h(2)(5)
"""
Giving the function one parameter will return the lambda function
Giving the function two parameters will return the result of using the
two parameters
"""

"""
Q3-h(2) would also create a closure
"""

def f(x):
    def g(y):
        return x + y
    return g

print f(1)
print f(2)
print f(1)(3)
print f(2)(5)

"""
The results from these runs are the same as lambda, cept
returning the function g requires a return call
"""
            
def repeat(word):
    def write(times):
        return word * times
    return write
def r1(times):
    return repeat('hello')(times)
def r2(times):
    return repeat('goodbye')(times)

print r1(2)
print r2(2)
print repeat('cool')(3)
