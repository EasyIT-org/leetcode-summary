# 303. Range Sum Query - Immutable

- Difficulty: Easy
- Topics: Array, Design, Prefix Sum
- Slug: range-sum-query-immutable
- Problem ID: 303

## Description
Given an integer array nums, handle multiple queries of the following type:
Implement the NumArray class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
```


## Constraints
- 1 <= nums.length <= 104
- -105 <= nums[i] <= 105
- 0 <= left <= right < nums.length
- At most 104 calls will be made to sumRange.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class NumArray {
public:
    NumArray(vector<int>& nums) {
        
    }
    
    int sumRange(int left, int right) {
        
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * int param_1 = obj->sumRange(left,right);
 */
```

### java
```java
class NumArray {

    public NumArray(int[] nums) {
        
    }
    
    public int sumRange(int left, int right) {
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(left,right);
 */
```

### python
```python
class NumArray(object):

    def __init__(self, nums):
        """
        :type nums: List[int]
        """
        

    def sumRange(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: int
        """
        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
```

### python3
```python3
class NumArray:

    def __init__(self, nums: List[int]):
        

    def sumRange(self, left: int, right: int) -> int:
        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
```

### c
```c



typedef struct {
    
} NumArray;


NumArray* numArrayCreate(int* nums, int numsSize) {
    
}

int numArraySumRange(NumArray* obj, int left, int right) {
    
}

void numArrayFree(NumArray* obj) {
    
}

/**
 * Your NumArray struct will be instantiated and called as such:
 * NumArray* obj = numArrayCreate(nums, numsSize);
 * int param_1 = numArraySumRange(obj, left, right);
 
 * numArrayFree(obj);
*/
```

### csharp
```csharp
public class NumArray {

    public NumArray(int[] nums) {
        
    }
    
    public int SumRange(int left, int right) {
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.SumRange(left,right);
 */
```

### javascript
```javascript
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
```

### typescript
```typescript
class NumArray {
    constructor(nums: number[]) {
        
    }

    sumRange(left: number, right: number): number {
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
```

### php
```php
class NumArray {
    /**
     * @param Integer[] $nums
     */
    function __construct($nums) {
        
    }
  
    /**
     * @param Integer $left
     * @param Integer $right
     * @return Integer
     */
    function sumRange($left, $right) {
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * $obj = NumArray($nums);
 * $ret_1 = $obj->sumRange($left, $right);
 */
```

### swift
```swift

class NumArray {

    init(_ nums: [Int]) {
        
    }
    
    func sumRange(_ left: Int, _ right: Int) -> Int {
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * let obj = NumArray(nums)
 * let ret_1: Int = obj.sumRange(left, right)
 */
```

### kotlin
```kotlin
class NumArray(nums: IntArray) {

    fun sumRange(left: Int, right: Int): Int {
        
    }

}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
```

### dart
```dart
class NumArray {

  NumArray(List<int> nums) {
    
  }
  
  int sumRange(int left, int right) {
    
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = NumArray(nums);
 * int param1 = obj.sumRange(left,right);
 */
```

### golang
```golang
type NumArray struct {
    
}


func Constructor(nums []int) NumArray {
    
}


func (this *NumArray) SumRange(left int, right int) int {
    
}


/**
 * Your NumArray object will be instantiated and called as such:
 * obj := Constructor(nums);
 * param_1 := obj.SumRange(left,right);
 */
```

### ruby
```ruby
class NumArray

=begin
    :type nums: Integer[]
=end
    def initialize(nums)
        
    end


=begin
    :type left: Integer
    :type right: Integer
    :rtype: Integer
=end
    def sum_range(left, right)
        
    end


end

# Your NumArray object will be instantiated and called as such:
# obj = NumArray.new(nums)
# param_1 = obj.sum_range(left, right)
```

### scala
```scala
class NumArray(_nums: Array[Int]) {

    def sumRange(left: Int, right: Int): Int = {
        
    }

}

/**
 * Your NumArray object will be instantiated and called as such:
 * val obj = new NumArray(nums)
 * val param_1 = obj.sumRange(left,right)
 */
```

### rust
```rust
struct NumArray {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl NumArray {

    fn new(nums: Vec<i32>) -> Self {
        
    }
    
    fn sum_range(&self, left: i32, right: i32) -> i32 {
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * let obj = NumArray::new(nums);
 * let ret_1: i32 = obj.sum_range(left, right);
 */
```

### racket
```racket
(define num-array%
  (class object%
    (super-new)
    
    ; nums : (listof exact-integer?)
    (init-field
      nums)
    
    ; sum-range : exact-integer? exact-integer? -> exact-integer?
    (define/public (sum-range left right)
      )))

;; Your num-array% object will be instantiated and called as such:
;; (define obj (new num-array% [nums nums]))
;; (define param_1 (send obj sum-range left right))
```

### erlang
```erlang
-spec num_array_init_(Nums :: [integer()]) -> any().
num_array_init_(Nums) ->
  .

-spec num_array_sum_range(Left :: integer(), Right :: integer()) -> integer().
num_array_sum_range(Left, Right) ->
  .


%% Your functions will be called as such:
%% num_array_init_(Nums),
%% Param_1 = num_array_sum_range(Left, Right),

%% num_array_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule NumArray do
  @spec init_(nums :: [integer]) :: any
  def init_(nums) do
    
  end

  @spec sum_range(left :: integer, right :: integer) :: integer
  def sum_range(left, right) do
    
  end
end

# Your functions will be called as such:
# NumArray.init_(nums)
# param_1 = NumArray.sum_range(left, right)

# NumArray.init_ will be called before every test case, in which you can do some necessary initializations.
```
