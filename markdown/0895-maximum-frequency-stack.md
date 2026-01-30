# 895. Maximum Frequency Stack

- Difficulty: Hard
- Topics: Hash Table, Stack, Design, Ordered Set
- Slug: maximum-frequency-stack
- Problem ID: 931

## Description
Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.
Implement the FreqStack class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
[[], [5], [7], [5], [7], [4], [5], [], [], [], []]
Output
[null, null, null, null, null, null, null, 5, 7, 5, 4]

Explanation
FreqStack freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
```


## Constraints
- 0 <= val <= 109
- At most 2 * 104 calls will be made to push and pop.
- It is guaranteed that there will be at least one element in the stack before calling pop.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class FreqStack {
public:
    FreqStack() {
        
    }
    
    void push(int val) {
        
    }
    
    int pop() {
        
    }
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * FreqStack* obj = new FreqStack();
 * obj->push(val);
 * int param_2 = obj->pop();
 */
```

### java
```java
class FreqStack {

    public FreqStack() {
        
    }
    
    public void push(int val) {
        
    }
    
    public int pop() {
        
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * FreqStack obj = new FreqStack();
 * obj.push(val);
 * int param_2 = obj.pop();
 */
```

### python
```python
class FreqStack(object):

    def __init__(self):
        

    def push(self, val):
        """
        :type val: int
        :rtype: None
        """
        

    def pop(self):
        """
        :rtype: int
        """
        


# Your FreqStack object will be instantiated and called as such:
# obj = FreqStack()
# obj.push(val)
# param_2 = obj.pop()
```

### python3
```python3
class FreqStack:

    def __init__(self):
        

    def push(self, val: int) -> None:
        

    def pop(self) -> int:
        


# Your FreqStack object will be instantiated and called as such:
# obj = FreqStack()
# obj.push(val)
# param_2 = obj.pop()
```

### c
```c



typedef struct {
    
} FreqStack;


FreqStack* freqStackCreate() {
    
}

void freqStackPush(FreqStack* obj, int val) {
    
}

int freqStackPop(FreqStack* obj) {
    
}

void freqStackFree(FreqStack* obj) {
    
}

/**
 * Your FreqStack struct will be instantiated and called as such:
 * FreqStack* obj = freqStackCreate();
 * freqStackPush(obj, val);
 
 * int param_2 = freqStackPop(obj);
 
 * freqStackFree(obj);
*/
```

### csharp
```csharp
public class FreqStack {

    public FreqStack() {
        
    }
    
    public void Push(int val) {
        
    }
    
    public int Pop() {
        
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * FreqStack obj = new FreqStack();
 * obj.Push(val);
 * int param_2 = obj.Pop();
 */
```

### javascript
```javascript

var FreqStack = function() {
    
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
```

### typescript
```typescript
class FreqStack {
    constructor() {
        
    }

    push(val: number): void {
        
    }

    pop(): number {
        
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
```

### php
```php
class FreqStack {
    /**
     */
    function __construct() {
        
    }
  
    /**
     * @param Integer $val
     * @return NULL
     */
    function push($val) {
        
    }
  
    /**
     * @return Integer
     */
    function pop() {
        
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * $obj = FreqStack();
 * $obj->push($val);
 * $ret_2 = $obj->pop();
 */
```

### swift
```swift

class FreqStack {

    init() {
        
    }
    
    func push(_ val: Int) {
        
    }
    
    func pop() -> Int {
        
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * let obj = FreqStack()
 * obj.push(val)
 * let ret_2: Int = obj.pop()
 */
```

### kotlin
```kotlin
class FreqStack() {

    fun push(`val`: Int) {
        
    }

    fun pop(): Int {
        
    }

}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = FreqStack()
 * obj.push(`val`)
 * var param_2 = obj.pop()
 */
```

### dart
```dart
class FreqStack {

  FreqStack() {
    
  }
  
  void push(int val) {
    
  }
  
  int pop() {
    
  }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * FreqStack obj = FreqStack();
 * obj.push(val);
 * int param2 = obj.pop();
 */
```

### golang
```golang
type FreqStack struct {
    
}


func Constructor() FreqStack {
    
}


func (this *FreqStack) Push(val int)  {
    
}


func (this *FreqStack) Pop() int {
    
}


/**
 * Your FreqStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(val);
 * param_2 := obj.Pop();
 */
```

### ruby
```ruby
class FreqStack
    def initialize()
        
    end


=begin
    :type val: Integer
    :rtype: Void
=end
    def push(val)
        
    end


=begin
    :rtype: Integer
=end
    def pop()
        
    end


end

# Your FreqStack object will be instantiated and called as such:
# obj = FreqStack.new()
# obj.push(val)
# param_2 = obj.pop()
```

### scala
```scala
class FreqStack() {

    def push(`val`: Int): Unit = {
        
    }

    def pop(): Int = {
        
    }

}

/**
 * Your FreqStack object will be instantiated and called as such:
 * val obj = new FreqStack()
 * obj.push(`val`)
 * val param_2 = obj.pop()
 */
```

### rust
```rust
struct FreqStack {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl FreqStack {

    fn new() -> Self {
        
    }
    
    fn push(&self, val: i32) {
        
    }
    
    fn pop(&self) -> i32 {
        
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * let obj = FreqStack::new();
 * obj.push(val);
 * let ret_2: i32 = obj.pop();
 */
```

### racket
```racket
(define freq-stack%
  (class object%
    (super-new)
    
    (init-field)
    
    ; push : exact-integer? -> void?
    (define/public (push val)
      )
    ; pop : -> exact-integer?
    (define/public (pop)
      )))

;; Your freq-stack% object will be instantiated and called as such:
;; (define obj (new freq-stack%))
;; (send obj push val)
;; (define param_2 (send obj pop))
```

### erlang
```erlang
-spec freq_stack_init_() -> any().
freq_stack_init_() ->
  .

-spec freq_stack_push(Val :: integer()) -> any().
freq_stack_push(Val) ->
  .

-spec freq_stack_pop() -> integer().
freq_stack_pop() ->
  .


%% Your functions will be called as such:
%% freq_stack_init_(),
%% freq_stack_push(Val),
%% Param_2 = freq_stack_pop(),

%% freq_stack_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule FreqStack do
  @spec init_() :: any
  def init_() do
    
  end

  @spec push(val :: integer) :: any
  def push(val) do
    
  end

  @spec pop() :: integer
  def pop() do
    
  end
end

# Your functions will be called as such:
# FreqStack.init_()
# FreqStack.push(val)
# param_2 = FreqStack.pop()

# FreqStack.init_ will be called before every test case, in which you can do some necessary initializations.
```
