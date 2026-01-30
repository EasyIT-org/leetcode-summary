# 901. Online Stock Span

- Difficulty: Medium
- Topics: Stack, Design, Monotonic Stack, Data Stream
- Slug: online-stock-span
- Problem ID: 937

## Description
Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.
The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.
Implement the StockSpanner class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
Output
[null, 1, 1, 1, 2, 1, 4, 6]

Explanation
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85);  // return 6
```


## Constraints
- 1 <= price <= 105
- At most 104 calls will be made to next.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class StockSpanner {
public:
    StockSpanner() {
        
    }
    
    int next(int price) {
        
    }
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner* obj = new StockSpanner();
 * int param_1 = obj->next(price);
 */
```

### java
```java
class StockSpanner {

    public StockSpanner() {
        
    }
    
    public int next(int price) {
        
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner obj = new StockSpanner();
 * int param_1 = obj.next(price);
 */
```

### python
```python
class StockSpanner(object):

    def __init__(self):
        

    def next(self, price):
        """
        :type price: int
        :rtype: int
        """
        


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)
```

### python3
```python3
class StockSpanner:

    def __init__(self):
        

    def next(self, price: int) -> int:
        


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)
```

### c
```c



typedef struct {
    
} StockSpanner;


StockSpanner* stockSpannerCreate() {
    
}

int stockSpannerNext(StockSpanner* obj, int price) {
    
}

void stockSpannerFree(StockSpanner* obj) {
    
}

/**
 * Your StockSpanner struct will be instantiated and called as such:
 * StockSpanner* obj = stockSpannerCreate();
 * int param_1 = stockSpannerNext(obj, price);
 
 * stockSpannerFree(obj);
*/
```

### csharp
```csharp
public class StockSpanner {

    public StockSpanner() {
        
    }
    
    public int Next(int price) {
        
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner obj = new StockSpanner();
 * int param_1 = obj.Next(price);
 */
```

### javascript
```javascript

var StockSpanner = function() {
    
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
```

### typescript
```typescript
class StockSpanner {
    constructor() {
        
    }

    next(price: number): number {
        
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
```

### php
```php
class StockSpanner {
    /**
     */
    function __construct() {
        
    }
  
    /**
     * @param Integer $price
     * @return Integer
     */
    function next($price) {
        
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * $obj = StockSpanner();
 * $ret_1 = $obj->next($price);
 */
```

### swift
```swift

class StockSpanner {

    init() {
        
    }
    
    func next(_ price: Int) -> Int {
        
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * let obj = StockSpanner()
 * let ret_1: Int = obj.next(price)
 */
```

### kotlin
```kotlin
class StockSpanner() {

    fun next(price: Int): Int {
        
    }

}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = StockSpanner()
 * var param_1 = obj.next(price)
 */
```

### dart
```dart
class StockSpanner {

  StockSpanner() {
    
  }
  
  int next(int price) {
    
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner obj = StockSpanner();
 * int param1 = obj.next(price);
 */
```

### golang
```golang
type StockSpanner struct {
    
}


func Constructor() StockSpanner {
    
}


func (this *StockSpanner) Next(price int) int {
    
}


/**
 * Your StockSpanner object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Next(price);
 */
```

### ruby
```ruby
class StockSpanner
    def initialize()
        
    end


=begin
    :type price: Integer
    :rtype: Integer
=end
    def next(price)
        
    end


end

# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner.new()
# param_1 = obj.next(price)
```

### scala
```scala
class StockSpanner() {

    def next(price: Int): Int = {
        
    }

}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * val obj = new StockSpanner()
 * val param_1 = obj.next(price)
 */
```

### rust
```rust
struct StockSpanner {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl StockSpanner {

    fn new() -> Self {
        
    }
    
    fn next(&self, price: i32) -> i32 {
        
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * let obj = StockSpanner::new();
 * let ret_1: i32 = obj.next(price);
 */
```

### racket
```racket
(define stock-spanner%
  (class object%
    (super-new)
    
    (init-field)
    
    ; next : exact-integer? -> exact-integer?
    (define/public (next price)
      )))

;; Your stock-spanner% object will be instantiated and called as such:
;; (define obj (new stock-spanner%))
;; (define param_1 (send obj next price))
```

### erlang
```erlang
-spec stock_spanner_init_() -> any().
stock_spanner_init_() ->
  .

-spec stock_spanner_next(Price :: integer()) -> integer().
stock_spanner_next(Price) ->
  .


%% Your functions will be called as such:
%% stock_spanner_init_(),
%% Param_1 = stock_spanner_next(Price),

%% stock_spanner_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule StockSpanner do
  @spec init_() :: any
  def init_() do
    
  end

  @spec next(price :: integer) :: integer
  def next(price) do
    
  end
end

# Your functions will be called as such:
# StockSpanner.init_()
# param_1 = StockSpanner.next(price)

# StockSpanner.init_ will be called before every test case, in which you can do some necessary initializations.
```
