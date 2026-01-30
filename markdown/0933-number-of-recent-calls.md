# 933. Number of Recent Calls

- Difficulty: Easy
- Topics: Design, Queue, Data Stream
- Slug: number-of-recent-calls
- Problem ID: 969

## Description
You have a RecentCounter class which counts the number of recent requests within a certain time frame.
Implement the RecentCounter class:
It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
Output
[null, 1, 2, 3, 3]

Explanation
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
```


## Constraints
- 1 <= t <= 109
- Each test case will call ping with strictly increasing values of t.
- At most 104 calls will be made to ping.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class RecentCounter {
public:
    RecentCounter() {
        
    }
    
    int ping(int t) {
        
    }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter* obj = new RecentCounter();
 * int param_1 = obj->ping(t);
 */
```

### java
```java
class RecentCounter {

    public RecentCounter() {
        
    }
    
    public int ping(int t) {
        
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter obj = new RecentCounter();
 * int param_1 = obj.ping(t);
 */
```

### python
```python
class RecentCounter(object):

    def __init__(self):
        

    def ping(self, t):
        """
        :type t: int
        :rtype: int
        """
        


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)
```

### python3
```python3
class RecentCounter:

    def __init__(self):
        

    def ping(self, t: int) -> int:
        


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)
```

### c
```c



typedef struct {
    
} RecentCounter;


RecentCounter* recentCounterCreate() {
    
}

int recentCounterPing(RecentCounter* obj, int t) {
    
}

void recentCounterFree(RecentCounter* obj) {
    
}

/**
 * Your RecentCounter struct will be instantiated and called as such:
 * RecentCounter* obj = recentCounterCreate();
 * int param_1 = recentCounterPing(obj, t);
 
 * recentCounterFree(obj);
*/
```

### csharp
```csharp
public class RecentCounter {

    public RecentCounter() {
        
    }
    
    public int Ping(int t) {
        
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter obj = new RecentCounter();
 * int param_1 = obj.Ping(t);
 */
```

### javascript
```javascript

var RecentCounter = function() {
    
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
```

### typescript
```typescript
class RecentCounter {
    constructor() {
        
    }

    ping(t: number): number {
        
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
```

### php
```php
class RecentCounter {
    /**
     */
    function __construct() {
        
    }
  
    /**
     * @param Integer $t
     * @return Integer
     */
    function ping($t) {
        
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * $obj = RecentCounter();
 * $ret_1 = $obj->ping($t);
 */
```

### swift
```swift

class RecentCounter {

    init() {
        
    }
    
    func ping(_ t: Int) -> Int {
        
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * let obj = RecentCounter()
 * let ret_1: Int = obj.ping(t)
 */
```

### kotlin
```kotlin
class RecentCounter() {

    fun ping(t: Int): Int {
        
    }

}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = RecentCounter()
 * var param_1 = obj.ping(t)
 */
```

### dart
```dart
class RecentCounter {

  RecentCounter() {
    
  }
  
  int ping(int t) {
    
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter obj = RecentCounter();
 * int param1 = obj.ping(t);
 */
```

### golang
```golang
type RecentCounter struct {
    
}


func Constructor() RecentCounter {
    
}


func (this *RecentCounter) Ping(t int) int {
    
}


/**
 * Your RecentCounter object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Ping(t);
 */
```

### ruby
```ruby
class RecentCounter
    def initialize()
        
    end


=begin
    :type t: Integer
    :rtype: Integer
=end
    def ping(t)
        
    end


end

# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter.new()
# param_1 = obj.ping(t)
```

### scala
```scala
class RecentCounter() {

    def ping(t: Int): Int = {
        
    }

}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * val obj = new RecentCounter()
 * val param_1 = obj.ping(t)
 */
```

### rust
```rust
struct RecentCounter {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl RecentCounter {

    fn new() -> Self {
        
    }
    
    fn ping(&self, t: i32) -> i32 {
        
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * let obj = RecentCounter::new();
 * let ret_1: i32 = obj.ping(t);
 */
```

### racket
```racket
(define recent-counter%
  (class object%
    (super-new)
    
    (init-field)
    
    ; ping : exact-integer? -> exact-integer?
    (define/public (ping t)
      )))

;; Your recent-counter% object will be instantiated and called as such:
;; (define obj (new recent-counter%))
;; (define param_1 (send obj ping t))
```

### erlang
```erlang
-spec recent_counter_init_() -> any().
recent_counter_init_() ->
  .

-spec recent_counter_ping(T :: integer()) -> integer().
recent_counter_ping(T) ->
  .


%% Your functions will be called as such:
%% recent_counter_init_(),
%% Param_1 = recent_counter_ping(T),

%% recent_counter_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule RecentCounter do
  @spec init_() :: any
  def init_() do
    
  end

  @spec ping(t :: integer) :: integer
  def ping(t) do
    
  end
end

# Your functions will be called as such:
# RecentCounter.init_()
# param_1 = RecentCounter.ping(t)

# RecentCounter.init_ will be called before every test case, in which you can do some necessary initializations.
```
