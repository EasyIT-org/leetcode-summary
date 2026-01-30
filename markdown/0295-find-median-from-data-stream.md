# 295. Find Median from Data Stream

- Difficulty: Hard
- Topics: Two Pointers, Design, Sorting, Heap (Priority Queue), Data Stream
- Slug: find-median-from-data-stream
- Problem ID: 295

## Description
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.
Implement the MedianFinder class:
Example 1:
Constraints:
Follow up:

## Examples
### Example 1
```text
Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
```


## Constraints
- -105 <= num <= 105
- There will be at least one element in the data structure before calling findMedian.
- At most 5 * 104 calls will be made to addNum and findMedian.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class MedianFinder {
public:
    MedianFinder() {
        
    }
    
    void addNum(int num) {
        
    }
    
    double findMedian() {
        
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder* obj = new MedianFinder();
 * obj->addNum(num);
 * double param_2 = obj->findMedian();
 */
```

### java
```java
class MedianFinder {

    public MedianFinder() {
        
    }
    
    public void addNum(int num) {
        
    }
    
    public double findMedian() {
        
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */
```

### python
```python
class MedianFinder(object):

    def __init__(self):
        

    def addNum(self, num):
        """
        :type num: int
        :rtype: None
        """
        

    def findMedian(self):
        """
        :rtype: float
        """
        


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()
```

### python3
```python3
class MedianFinder:

    def __init__(self):
        

    def addNum(self, num: int) -> None:
        

    def findMedian(self) -> float:
        


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()
```

### c
```c



typedef struct {
    
} MedianFinder;


MedianFinder* medianFinderCreate() {
    
}

void medianFinderAddNum(MedianFinder* obj, int num) {
    
}

double medianFinderFindMedian(MedianFinder* obj) {
    
}

void medianFinderFree(MedianFinder* obj) {
    
}

/**
 * Your MedianFinder struct will be instantiated and called as such:
 * MedianFinder* obj = medianFinderCreate();
 * medianFinderAddNum(obj, num);
 
 * double param_2 = medianFinderFindMedian(obj);
 
 * medianFinderFree(obj);
*/
```

### csharp
```csharp
public class MedianFinder {

    public MedianFinder() {
        
    }
    
    public void AddNum(int num) {
        
    }
    
    public double FindMedian() {
        
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.AddNum(num);
 * double param_2 = obj.FindMedian();
 */
```

### javascript
```javascript

var MedianFinder = function() {
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
```

### typescript
```typescript
class MedianFinder {
    constructor() {
        
    }

    addNum(num: number): void {
        
    }

    findMedian(): number {
        
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
```

### php
```php
class MedianFinder {
    /**
     */
    function __construct() {
        
    }
  
    /**
     * @param Integer $num
     * @return NULL
     */
    function addNum($num) {
        
    }
  
    /**
     * @return Float
     */
    function findMedian() {
        
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * $obj = MedianFinder();
 * $obj->addNum($num);
 * $ret_2 = $obj->findMedian();
 */
```

### swift
```swift

class MedianFinder {

    init() {
        
    }
    
    func addNum(_ num: Int) {
        
    }
    
    func findMedian() -> Double {
        
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * let obj = MedianFinder()
 * obj.addNum(num)
 * let ret_2: Double = obj.findMedian()
 */
```

### kotlin
```kotlin
class MedianFinder() {

    fun addNum(num: Int) {
        
    }

    fun findMedian(): Double {
        
    }

}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
```

### dart
```dart
class MedianFinder {

  MedianFinder() {
    
  }
  
  void addNum(int num) {
    
  }
  
  double findMedian() {
    
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = MedianFinder();
 * obj.addNum(num);
 * double param2 = obj.findMedian();
 */
```

### golang
```golang
type MedianFinder struct {
    
}


func Constructor() MedianFinder {
    
}


func (this *MedianFinder) AddNum(num int)  {
    
}


func (this *MedianFinder) FindMedian() float64 {
    
}


/**
 * Your MedianFinder object will be instantiated and called as such:
 * obj := Constructor();
 * obj.AddNum(num);
 * param_2 := obj.FindMedian();
 */
```

### ruby
```ruby
class MedianFinder
    def initialize()
        
    end


=begin
    :type num: Integer
    :rtype: Void
=end
    def add_num(num)
        
    end


=begin
    :rtype: Float
=end
    def find_median()
        
    end


end

# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder.new()
# obj.add_num(num)
# param_2 = obj.find_median()
```

### scala
```scala
class MedianFinder() {

    def addNum(num: Int): Unit = {
        
    }

    def findMedian(): Double = {
        
    }

}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * val obj = new MedianFinder()
 * obj.addNum(num)
 * val param_2 = obj.findMedian()
 */
```

### rust
```rust
struct MedianFinder {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MedianFinder {

    fn new() -> Self {
        
    }
    
    fn add_num(&self, num: i32) {
        
    }
    
    fn find_median(&self) -> f64 {
        
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * let obj = MedianFinder::new();
 * obj.add_num(num);
 * let ret_2: f64 = obj.find_median();
 */
```

### racket
```racket
(define median-finder%
  (class object%
    (super-new)
    
    (init-field)
    
    ; add-num : exact-integer? -> void?
    (define/public (add-num num)
      )
    ; find-median : -> flonum?
    (define/public (find-median)
      )))

;; Your median-finder% object will be instantiated and called as such:
;; (define obj (new median-finder%))
;; (send obj add-num num)
;; (define param_2 (send obj find-median))
```

### erlang
```erlang
-spec median_finder_init_() -> any().
median_finder_init_() ->
  .

-spec median_finder_add_num(Num :: integer()) -> any().
median_finder_add_num(Num) ->
  .

-spec median_finder_find_median() -> float().
median_finder_find_median() ->
  .


%% Your functions will be called as such:
%% median_finder_init_(),
%% median_finder_add_num(Num),
%% Param_2 = median_finder_find_median(),

%% median_finder_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule MedianFinder do
  @spec init_() :: any
  def init_() do
    
  end

  @spec add_num(num :: integer) :: any
  def add_num(num) do
    
  end

  @spec find_median() :: float
  def find_median() do
    
  end
end

# Your functions will be called as such:
# MedianFinder.init_()
# MedianFinder.add_num(num)
# param_2 = MedianFinder.find_median()

# MedianFinder.init_ will be called before every test case, in which you can do some necessary initializations.
```
