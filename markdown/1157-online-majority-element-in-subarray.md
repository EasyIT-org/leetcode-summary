# 1157. Online Majority Element In Subarray

- Difficulty: Hard
- Topics: Array, Binary Search, Design, Binary Indexed Tree, Segment Tree
- Slug: online-majority-element-in-subarray
- Problem ID: 1262

## Description
Design a data structure that efficiently finds the majority element of a given subarray.
The majority element of a subarray is an element that occurs threshold times or more in the subarray.
Implementing the MajorityChecker class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["MajorityChecker", "query", "query", "query"]
[[[1, 1, 2, 2, 1, 1]], [0, 5, 4], [0, 3, 3], [2, 3, 2]]
Output
[null, 1, -1, 2]

Explanation
MajorityChecker majorityChecker = new MajorityChecker([1, 1, 2, 2, 1, 1]);
majorityChecker.query(0, 5, 4); // return 1
majorityChecker.query(0, 3, 3); // return -1
majorityChecker.query(2, 3, 2); // return 2
```


## Constraints
- 1 <= arr.length <= 2 * 104
- 1 <= arr[i] <= 2 * 104
- 0 <= left <= right < arr.length
- threshold <= right - left + 1
- 2 * threshold > right - left + 1
- At most 104 calls will be made to query.

## Hints
- What's special about a majority element ?
- A majority element appears more than half the length of the array number of times.
- If we tried a random index of the array, what's the probability that this index has a majority element ?
- It's more than 50% if that array has a majority element.
- Try a random index for a proper number of times so that the probability of not finding the answer tends to zero.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class MajorityChecker {
public:
    MajorityChecker(vector<int>& arr) {
        
    }
    
    int query(int left, int right, int threshold) {
        
    }
};

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * MajorityChecker* obj = new MajorityChecker(arr);
 * int param_1 = obj->query(left,right,threshold);
 */
```

### java
```java
class MajorityChecker {

    public MajorityChecker(int[] arr) {
        
    }
    
    public int query(int left, int right, int threshold) {
        
    }
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * MajorityChecker obj = new MajorityChecker(arr);
 * int param_1 = obj.query(left,right,threshold);
 */
```

### python
```python
class MajorityChecker(object):

    def __init__(self, arr):
        """
        :type arr: List[int]
        """
        

    def query(self, left, right, threshold):
        """
        :type left: int
        :type right: int
        :type threshold: int
        :rtype: int
        """
        


# Your MajorityChecker object will be instantiated and called as such:
# obj = MajorityChecker(arr)
# param_1 = obj.query(left,right,threshold)
```

### python3
```python3
class MajorityChecker:

    def __init__(self, arr: List[int]):
        

    def query(self, left: int, right: int, threshold: int) -> int:
        


# Your MajorityChecker object will be instantiated and called as such:
# obj = MajorityChecker(arr)
# param_1 = obj.query(left,right,threshold)
```

### c
```c



typedef struct {
    
} MajorityChecker;


MajorityChecker* majorityCheckerCreate(int* arr, int arrSize) {
    
}

int majorityCheckerQuery(MajorityChecker* obj, int left, int right, int threshold) {
    
}

void majorityCheckerFree(MajorityChecker* obj) {
    
}

/**
 * Your MajorityChecker struct will be instantiated and called as such:
 * MajorityChecker* obj = majorityCheckerCreate(arr, arrSize);
 * int param_1 = majorityCheckerQuery(obj, left, right, threshold);
 
 * majorityCheckerFree(obj);
*/
```

### csharp
```csharp
public class MajorityChecker {

    public MajorityChecker(int[] arr) {
        
    }
    
    public int Query(int left, int right, int threshold) {
        
    }
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * MajorityChecker obj = new MajorityChecker(arr);
 * int param_1 = obj.Query(left,right,threshold);
 */
```

### javascript
```javascript
/**
 * @param {number[]} arr
 */
var MajorityChecker = function(arr) {
    
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function(left, right, threshold) {
    
};

/** 
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */
```

### typescript
```typescript
class MajorityChecker {
    constructor(arr: number[]) {
        
    }

    query(left: number, right: number, threshold: number): number {
        
    }
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */
```

### php
```php
class MajorityChecker {
    /**
     * @param Integer[] $arr
     */
    function __construct($arr) {
        
    }
  
    /**
     * @param Integer $left
     * @param Integer $right
     * @param Integer $threshold
     * @return Integer
     */
    function query($left, $right, $threshold) {
        
    }
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * $obj = MajorityChecker($arr);
 * $ret_1 = $obj->query($left, $right, $threshold);
 */
```

### swift
```swift

class MajorityChecker {

    init(_ arr: [Int]) {
        
    }
    
    func query(_ left: Int, _ right: Int, _ threshold: Int) -> Int {
        
    }
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * let obj = MajorityChecker(arr)
 * let ret_1: Int = obj.query(left, right, threshold)
 */
```

### kotlin
```kotlin
class MajorityChecker(arr: IntArray) {

    fun query(left: Int, right: Int, threshold: Int): Int {
        
    }

}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */
```

### dart
```dart
class MajorityChecker {

  MajorityChecker(List<int> arr) {
    
  }
  
  int query(int left, int right, int threshold) {
    
  }
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * MajorityChecker obj = MajorityChecker(arr);
 * int param1 = obj.query(left,right,threshold);
 */
```

### golang
```golang
type MajorityChecker struct {
    
}


func Constructor(arr []int) MajorityChecker {
    
}


func (this *MajorityChecker) Query(left int, right int, threshold int) int {
    
}


/**
 * Your MajorityChecker object will be instantiated and called as such:
 * obj := Constructor(arr);
 * param_1 := obj.Query(left,right,threshold);
 */
```

### ruby
```ruby
class MajorityChecker

=begin
    :type arr: Integer[]
=end
    def initialize(arr)
        
    end


=begin
    :type left: Integer
    :type right: Integer
    :type threshold: Integer
    :rtype: Integer
=end
    def query(left, right, threshold)
        
    end


end

# Your MajorityChecker object will be instantiated and called as such:
# obj = MajorityChecker.new(arr)
# param_1 = obj.query(left, right, threshold)
```

### scala
```scala
class MajorityChecker(_arr: Array[Int]) {

    def query(left: Int, right: Int, threshold: Int): Int = {
        
    }

}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * val obj = new MajorityChecker(arr)
 * val param_1 = obj.query(left,right,threshold)
 */
```

### rust
```rust
struct MajorityChecker {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MajorityChecker {

    fn new(arr: Vec<i32>) -> Self {
        
    }
    
    fn query(&self, left: i32, right: i32, threshold: i32) -> i32 {
        
    }
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * let obj = MajorityChecker::new(arr);
 * let ret_1: i32 = obj.query(left, right, threshold);
 */
```

### racket
```racket
(define majority-checker%
  (class object%
    (super-new)
    
    ; arr : (listof exact-integer?)
    (init-field
      arr)
    
    ; query : exact-integer? exact-integer? exact-integer? -> exact-integer?
    (define/public (query left right threshold)
      )))

;; Your majority-checker% object will be instantiated and called as such:
;; (define obj (new majority-checker% [arr arr]))
;; (define param_1 (send obj query left right threshold))
```

### erlang
```erlang
-spec majority_checker_init_(Arr :: [integer()]) -> any().
majority_checker_init_(Arr) ->
  .

-spec majority_checker_query(Left :: integer(), Right :: integer(), Threshold :: integer()) -> integer().
majority_checker_query(Left, Right, Threshold) ->
  .


%% Your functions will be called as such:
%% majority_checker_init_(Arr),
%% Param_1 = majority_checker_query(Left, Right, Threshold),

%% majority_checker_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule MajorityChecker do
  @spec init_(arr :: [integer]) :: any
  def init_(arr) do
    
  end

  @spec query(left :: integer, right :: integer, threshold :: integer) :: integer
  def query(left, right, threshold) do
    
  end
end

# Your functions will be called as such:
# MajorityChecker.init_(arr)
# param_1 = MajorityChecker.query(left, right, threshold)

# MajorityChecker.init_ will be called before every test case, in which you can do some necessary initializations.
```
