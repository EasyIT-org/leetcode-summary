# 1116. Print Zero Even Odd

- Difficulty: Medium
- Topics: Concurrency
- Slug: print-zero-even-odd
- Problem ID: 1216

## Description
You have a function printNumber that can be called with an integer parameter and prints it to the console.
You are given an instance of the class ZeroEvenOdd that has three functions: zero, even, and odd. The same instance of ZeroEvenOdd will be passed to three different threads:
Modify the given class to output the series "010203040506..." where the length of the series must be 2n.
Implement the ZeroEvenOdd class:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 2
Output: "0102"
Explanation: There are three threads being fired asynchronously.
One of them calls zero(), the other calls even(), and the last one calls odd().
"0102" is the correct output.
```

### Example 2
```text
Input: n = 5
Output: "0102030405"
```


## Constraints
- 1 <= n <= 1000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class ZeroEvenOdd {
private:
    int n;

public:
    ZeroEvenOdd(int n) {
        this->n = n;
    }

    // printNumber(x) outputs "x", where x is an integer.
    void zero(function<void(int)> printNumber) {
        
    }

    void even(function<void(int)> printNumber) {
        
    }

    void odd(function<void(int)> printNumber) {
        
    }
};
```

### java
```java
class ZeroEvenOdd {
    private int n;
    
    public ZeroEvenOdd(int n) {
        this.n = n;
    }

    // printNumber.accept(x) outputs "x", where x is an integer.
    public void zero(IntConsumer printNumber) throws InterruptedException {
        
    }

    public void even(IntConsumer printNumber) throws InterruptedException {
        
    }

    public void odd(IntConsumer printNumber) throws InterruptedException {
        
    }
}
```

### python
```python
class ZeroEvenOdd(object):
    def __init__(self, n):
        self.n = n
        
        
	# printNumber(x) outputs "x", where x is an integer.
    def zero(self, printNumber):
        """
        :type printNumber: method
        :rtype: void
        """
        
        
        
    def even(self, printNumber):
        """
        :type printNumber: method
        :rtype: void
        """
        
        
        
    def odd(self, printNumber):
        """
        :type printNumber: method
        :rtype: void
        """
```

### python3
```python3
class ZeroEvenOdd:
    def __init__(self, n):
        self.n = n
        
        
	# printNumber(x) outputs "x", where x is an integer.
    def zero(self, printNumber: 'Callable[[int], None]') -> None:
        
        
        
    def even(self, printNumber: 'Callable[[int], None]') -> None:
        
        
        
    def odd(self, printNumber: 'Callable[[int], None]') -> None:
```

### c
```c
typedef struct {
    int n;
} ZeroEvenOdd;

ZeroEvenOdd* zeroEvenOddCreate(int n) {
    ZeroEvenOdd* obj = (ZeroEvenOdd*) malloc(sizeof(ZeroEvenOdd));
    obj->n = n;
    return obj;
}

// You may call global function `void printNumber(int x)`
// to output "x", where x is an integer.

void zero(ZeroEvenOdd* obj) {
    
}

void even(ZeroEvenOdd* obj) {
    
}

void odd(ZeroEvenOdd* obj) {
    
}

void zeroEvenOddFree(ZeroEvenOdd* obj) {
    
}
```

### csharp
```csharp
public class ZeroEvenOdd {
    private int n;
    
    public ZeroEvenOdd(int n) {
        this.n = n;
    }

    // printNumber(x) outputs "x", where x is an integer.
    public void Zero(Action<int> printNumber) {
        
    }

    public void Even(Action<int> printNumber) {
        
    }

    public void Odd(Action<int> printNumber) {
        
    }
}
```
