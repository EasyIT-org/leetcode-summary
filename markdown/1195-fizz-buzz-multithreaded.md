# 1195. Fizz Buzz Multithreaded

- Difficulty: Medium
- Topics: Concurrency
- Slug: fizz-buzz-multithreaded
- Problem ID: 1316

## Description
You have the four functions:
You are given an instance of the class FizzBuzz that has four functions: fizz, buzz, fizzbuzz and number. The same instance of FizzBuzz will be passed to four different threads:
Modify the given class to output the series [1, 2, "fizz", 4, "buzz", ...] where the ith token (1-indexed) of the series is:
Implement the FizzBuzz class:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 15
Output: [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,"fizz",13,14,"fizzbuzz"]
```

### Example 2
```text
Input: n = 5
Output: [1,2,"fizz",4,"buzz"]
```


## Constraints
- 1 <= n <= 50

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class FizzBuzz {
private:
    int n;

public:
    FizzBuzz(int n) {
        this->n = n;
    }

    // printFizz() outputs "fizz".
    void fizz(function<void()> printFizz) {
        
    }

    // printBuzz() outputs "buzz".
    void buzz(function<void()> printBuzz) {
        
    }

    // printFizzBuzz() outputs "fizzbuzz".
	void fizzbuzz(function<void()> printFizzBuzz) {
        
    }

    // printNumber(x) outputs "x", where x is an integer.
    void number(function<void(int)> printNumber) {
        
    }
};
```

### java
```java
class FizzBuzz {
    private int n;

    public FizzBuzz(int n) {
        this.n = n;
    }

    // printFizz.run() outputs "fizz".
    public void fizz(Runnable printFizz) throws InterruptedException {
        
    }

    // printBuzz.run() outputs "buzz".
    public void buzz(Runnable printBuzz) throws InterruptedException {
        
    }

    // printFizzBuzz.run() outputs "fizzbuzz".
    public void fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {
        
    }

    // printNumber.accept(x) outputs "x", where x is an integer.
    public void number(IntConsumer printNumber) throws InterruptedException {
        
    }
}
```

### python
```python
class FizzBuzz(object):
    def __init__(self, n):
        self.n = n

    # printFizz() outputs "fizz"
    def fizz(self, printFizz):
        """
        :type printFizz: method
        :rtype: void
        """
    	

    # printBuzz() outputs "buzz"
    def buzz(self, printBuzz):
        """
        :type printBuzz: method
        :rtype: void
        """
    	

    # printFizzBuzz() outputs "fizzbuzz"
    def fizzbuzz(self, printFizzBuzz):
        """
        :type printFizzBuzz: method
        :rtype: void
        """
        

    # printNumber(x) outputs "x", where x is an integer.
    def number(self, printNumber):
        """
        :type printNumber: method
        :rtype: void
        """
```

### python3
```python3
class FizzBuzz:
    def __init__(self, n: int):
        self.n = n

    # printFizz() outputs "fizz"
    def fizz(self, printFizz: 'Callable[[], None]') -> None:
    	

    # printBuzz() outputs "buzz"
    def buzz(self, printBuzz: 'Callable[[], None]') -> None:
    	

    # printFizzBuzz() outputs "fizzbuzz"
    def fizzbuzz(self, printFizzBuzz: 'Callable[[], None]') -> None:
        

    # printNumber(x) outputs "x", where x is an integer.
    def number(self, printNumber: 'Callable[[int], None]') -> None:
```

### c
```c
typedef struct {
    int n;
} FizzBuzz;

FizzBuzz* fizzBuzzCreate(int n) {
    FizzBuzz* obj = (FizzBuzz*) malloc(sizeof(FizzBuzz));
    obj->n = n;
    return obj;
}

// Don't change the following declarations
void printNumber(int a);
void printFizz();
void printBuzz();
void printFizzBuzz();

// printFizz() outputs "fizz".
void fizz(FizzBuzz* obj) {
    
}

// printBuzz() outputs "buzz".
void buzz(FizzBuzz* obj) {
    
}

// printFizzBuzz() outputs "fizzbuzz".
void fizzbuzz(FizzBuzz* obj) {
    
}

// You may call global function `void printNumber(int x)`
// to output "x", where x is an integer.
void number(FizzBuzz* obj) {
    
}

void fizzBuzzFree(FizzBuzz* obj) {
    
}
```

### csharp
```csharp
public class FizzBuzz {
    private int n;

    public FizzBuzz(int n) {
        this.n = n;
    }

    // printFizz() outputs "fizz".
    public void Fizz(Action printFizz) {
        
    }

    // printBuzzz() outputs "buzz".
    public void Buzz(Action printBuzz) {
        
    }

    // printFizzBuzz() outputs "fizzbuzz".
    public void Fizzbuzz(Action printFizzBuzz) {
        
    }

    // printNumber(x) outputs "x", where x is an integer.
    public void Number(Action<int> printNumber) {
        
    }
}
```
