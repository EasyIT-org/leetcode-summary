# 731. My Calendar II

- Difficulty: Medium
- Topics: Array, Binary Search, Design, Segment Tree, Prefix Sum, Ordered Set
- Slug: my-calendar-ii
- Problem ID: 731

## Description
You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a triple booking.
A triple booking happens when three events have some non-empty intersection (i.e., some moment is common to all the three events.).
The event can be represented as a pair of integers startTime and endTime that represents a booking on the half-open interval [startTime, endTime), the range of real numbers x such that startTime <= x < endTime.
Implement the MyCalendarTwo class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["MyCalendarTwo", "book", "book", "book", "book", "book", "book"]
[[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
Output
[null, true, true, true, false, true, true]

Explanation
MyCalendarTwo myCalendarTwo = new MyCalendarTwo();
myCalendarTwo.book(10, 20); // return True, The event can be booked. 
myCalendarTwo.book(50, 60); // return True, The event can be booked. 
myCalendarTwo.book(10, 40); // return True, The event can be double booked. 
myCalendarTwo.book(5, 15);  // return False, The event cannot be booked, because it would result in a triple booking.
myCalendarTwo.book(5, 10); // return True, The event can be booked, as it does not use time 10 which is already double booked.
myCalendarTwo.book(25, 55); // return True, The event can be booked, as the time in [25, 40) will be double booked with the third event, the time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.
```


## Constraints
- 0 <= start < end <= 109
- At most 1000 calls will be made to book.

## Hints
- Store two sorted lists of intervals: one list will be all times that are at least single booked, and another list will be all times that are definitely double booked.  If none of the double bookings conflict, then the booking will succeed, and you should update your single and double bookings accordingly.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class MyCalendarTwo {
public:
    MyCalendarTwo() {
        
    }
    
    bool book(int startTime, int endTime) {
        
    }
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * MyCalendarTwo* obj = new MyCalendarTwo();
 * bool param_1 = obj->book(startTime,endTime);
 */
```

### java
```java
class MyCalendarTwo {

    public MyCalendarTwo() {
        
    }
    
    public boolean book(int startTime, int endTime) {
        
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * MyCalendarTwo obj = new MyCalendarTwo();
 * boolean param_1 = obj.book(startTime,endTime);
 */
```

### python
```python
class MyCalendarTwo(object):

    def __init__(self):
        

    def book(self, startTime, endTime):
        """
        :type startTime: int
        :type endTime: int
        :rtype: bool
        """
        


# Your MyCalendarTwo object will be instantiated and called as such:
# obj = MyCalendarTwo()
# param_1 = obj.book(startTime,endTime)
```

### python3
```python3
class MyCalendarTwo:

    def __init__(self):
        

    def book(self, startTime: int, endTime: int) -> bool:
        


# Your MyCalendarTwo object will be instantiated and called as such:
# obj = MyCalendarTwo()
# param_1 = obj.book(startTime,endTime)
```

### c
```c



typedef struct {
    
} MyCalendarTwo;


MyCalendarTwo* myCalendarTwoCreate() {
    
}

bool myCalendarTwoBook(MyCalendarTwo* obj, int startTime, int endTime) {
    
}

void myCalendarTwoFree(MyCalendarTwo* obj) {
    
}

/**
 * Your MyCalendarTwo struct will be instantiated and called as such:
 * MyCalendarTwo* obj = myCalendarTwoCreate();
 * bool param_1 = myCalendarTwoBook(obj, startTime, endTime);
 
 * myCalendarTwoFree(obj);
*/
```

### csharp
```csharp
public class MyCalendarTwo {

    public MyCalendarTwo() {
        
    }
    
    public bool Book(int startTime, int endTime) {
        
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * MyCalendarTwo obj = new MyCalendarTwo();
 * bool param_1 = obj.Book(startTime,endTime);
 */
```

### javascript
```javascript

var MyCalendarTwo = function() {
    
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(startTime, endTime) {
    
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(startTime,endTime)
 */
```

### typescript
```typescript
class MyCalendarTwo {
    constructor() {
        
    }

    book(startTime: number, endTime: number): boolean {
        
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(startTime,endTime)
 */
```

### php
```php
class MyCalendarTwo {
    /**
     */
    function __construct() {
        
    }
  
    /**
     * @param Integer $startTime
     * @param Integer $endTime
     * @return Boolean
     */
    function book($startTime, $endTime) {
        
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * $obj = MyCalendarTwo();
 * $ret_1 = $obj->book($startTime, $endTime);
 */
```

### swift
```swift

class MyCalendarTwo {

    init() {
        
    }
    
    func book(_ startTime: Int, _ endTime: Int) -> Bool {
        
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * let obj = MyCalendarTwo()
 * let ret_1: Bool = obj.book(startTime, endTime)
 */
```

### kotlin
```kotlin
class MyCalendarTwo() {

    fun book(startTime: Int, endTime: Int): Boolean {
        
    }

}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = MyCalendarTwo()
 * var param_1 = obj.book(startTime,endTime)
 */
```

### dart
```dart
class MyCalendarTwo {

  MyCalendarTwo() {
    
  }
  
  bool book(int startTime, int endTime) {
    
  }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * MyCalendarTwo obj = MyCalendarTwo();
 * bool param1 = obj.book(startTime,endTime);
 */
```

### golang
```golang
type MyCalendarTwo struct {
    
}


func Constructor() MyCalendarTwo {
    
}


func (this *MyCalendarTwo) Book(startTime int, endTime int) bool {
    
}


/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Book(startTime,endTime);
 */
```

### ruby
```ruby
class MyCalendarTwo
    def initialize()
        
    end


=begin
    :type start_time: Integer
    :type end_time: Integer
    :rtype: Boolean
=end
    def book(start_time, end_time)
        
    end


end

# Your MyCalendarTwo object will be instantiated and called as such:
# obj = MyCalendarTwo.new()
# param_1 = obj.book(start_time, end_time)
```

### scala
```scala
class MyCalendarTwo() {

    def book(startTime: Int, endTime: Int): Boolean = {
        
    }

}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * val obj = new MyCalendarTwo()
 * val param_1 = obj.book(startTime,endTime)
 */
```

### rust
```rust
struct MyCalendarTwo {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyCalendarTwo {

    fn new() -> Self {
        
    }
    
    fn book(&self, start_time: i32, end_time: i32) -> bool {
        
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * let obj = MyCalendarTwo::new();
 * let ret_1: bool = obj.book(startTime, endTime);
 */
```

### racket
```racket
(define my-calendar-two%
  (class object%
    (super-new)
    
    (init-field)
    
    ; book : exact-integer? exact-integer? -> boolean?
    (define/public (book start-time end-time)
      )))

;; Your my-calendar-two% object will be instantiated and called as such:
;; (define obj (new my-calendar-two%))
;; (define param_1 (send obj book start-time end-time))
```

### erlang
```erlang
-spec my_calendar_two_init_() -> any().
my_calendar_two_init_() ->
  .

-spec my_calendar_two_book(StartTime :: integer(), EndTime :: integer()) -> boolean().
my_calendar_two_book(StartTime, EndTime) ->
  .


%% Your functions will be called as such:
%% my_calendar_two_init_(),
%% Param_1 = my_calendar_two_book(StartTime, EndTime),

%% my_calendar_two_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule MyCalendarTwo do
  @spec init_() :: any
  def init_() do
    
  end

  @spec book(start_time :: integer, end_time :: integer) :: boolean
  def book(start_time, end_time) do
    
  end
end

# Your functions will be called as such:
# MyCalendarTwo.init_()
# param_1 = MyCalendarTwo.book(start_time, end_time)

# MyCalendarTwo.init_ will be called before every test case, in which you can do some necessary initializations.
```
