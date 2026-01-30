# 307. Range Sum Query - Mutable

- Difficulty: Medium
- Topics: Array, Design, Binary Indexed Tree, Segment Tree
- Slug: range-sum-query-mutable
- Problem ID: 307

## Description
Given an integer array nums, handle multiple queries of the following types:
Implement the NumArray class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
Output
[null, 9, null, 8]

Explanation
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1, 2, 5]
numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8
```


## Constraints
- 1 <= nums.length <= 3 * 104
- -100 <= nums[i] <= 100
- 0 <= index < nums.length
- -100 <= val <= 100
- 0 <= left <= right < nums.length
- At most 3 * 104 calls will be made to update and sumRange.

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
    
    void update(int index, int val) {
        
    }
    
    int sumRange(int left, int right) {
        
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * obj->update(index,val);
 * int param_2 = obj->sumRange(left,right);
 */
```

### java
```java
class NumArray {

    public NumArray(int[] nums) {
        
    }
    
    public void update(int index, int val) {
        
    }
    
    public int sumRange(int left, int right) {
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * obj.update(index,val);
 * int param_2 = obj.sumRange(left,right);
 */
```

### python
```python
class NumArray(object):

    def __init__(self, nums):
        """
        :type nums: List[int]
        """
        

    def update(self, index, val):
        """
        :type index: int
        :type val: int
        :rtype: None
        """
        

    def sumRange(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: int
        """
        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# obj.update(index,val)
# param_2 = obj.sumRange(left,right)
```

### python3
```python3
class NumArray:

    def __init__(self, nums: List[int]):
        

    def update(self, index: int, val: int) -> None:
        

    def sumRange(self, left: int, right: int) -> int:
        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# obj.update(index,val)
# param_2 = obj.sumRange(left,right)
```

### c
```c



typedef struct {
    
} NumArray;


NumArray* numArrayCreate(int* nums, int numsSize) {
    
}

void numArrayUpdate(NumArray* obj, int index, int val) {
    
}

int numArraySumRange(NumArray* obj, int left, int right) {
    
}

void numArrayFree(NumArray* obj) {
    
}

/**
 * Your NumArray struct will be instantiated and called as such:
 * NumArray* obj = numArrayCreate(nums, numsSize);
 * numArrayUpdate(obj, index, val);
 
 * int param_2 = numArraySumRange(obj, left, right);
 
 * numArrayFree(obj);
*/
```

### csharp
```csharp
public class NumArray {

    public NumArray(int[] nums) {
        
    }
    
    public void Update(int index, int val) {
        
    }
    
    public int SumRange(int left, int right) {
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * obj.Update(index,val);
 * int param_2 = obj.SumRange(left,right);
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
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    
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
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
```

### typescript
```typescript
class NumArray {
    constructor(nums: number[]) {
        
    }

    update(index: number, val: number): void {
        
    }

    sumRange(left: number, right: number): number {
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
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
     * @param Integer $index
     * @param Integer $val
     * @return NULL
     */
    function update($index, $val) {
        
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
 * $obj->update($index, $val);
 * $ret_2 = $obj->sumRange($left, $right);
 */
```

### swift
```swift

class NumArray {

    init(_ nums: [Int]) {
        
    }
    
    func update(_ index: Int, _ val: Int) {
        
    }
    
    func sumRange(_ left: Int, _ right: Int) -> Int {
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * let obj = NumArray(nums)
 * obj.update(index, val)
 * let ret_2: Int = obj.sumRange(left, right)
 */
```

### kotlin
```kotlin
class NumArray(nums: IntArray) {

    fun update(index: Int, `val`: Int) {
        
    }

    fun sumRange(left: Int, right: Int): Int {
        
    }

}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = NumArray(nums)
 * obj.update(index,`val`)
 * var param_2 = obj.sumRange(left,right)
 */
```

### dart
```dart
class NumArray {

  NumArray(List<int> nums) {
    
  }
  
  void update(int index, int val) {
    
  }
  
  int sumRange(int left, int right) {
    
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = NumArray(nums);
 * obj.update(index,val);
 * int param2 = obj.sumRange(left,right);
 */
```

### golang
```golang
type NumArray struct {
    
}


func Constructor(nums []int) NumArray {
    
}


func (this *NumArray) Update(index int, val int)  {
    
}


func (this *NumArray) SumRange(left int, right int) int {
    
}


/**
 * Your NumArray object will be instantiated and called as such:
 * obj := Constructor(nums);
 * obj.Update(index,val);
 * param_2 := obj.SumRange(left,right);
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
    :type index: Integer
    :type val: Integer
    :rtype: Void
=end
    def update(index, val)
        
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
# obj.update(index, val)
# param_2 = obj.sum_range(left, right)
```

### scala
```scala
class NumArray(_nums: Array[Int]) {

    def update(index: Int, `val`: Int): Unit = {
        
    }

    def sumRange(left: Int, right: Int): Int = {
        
    }

}

/**
 * Your NumArray object will be instantiated and called as such:
 * val obj = new NumArray(nums)
 * obj.update(index,`val`)
 * val param_2 = obj.sumRange(left,right)
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
    
    fn update(&self, index: i32, val: i32) {
        
    }
    
    fn sum_range(&self, left: i32, right: i32) -> i32 {
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * let obj = NumArray::new(nums);
 * obj.update(index, val);
 * let ret_2: i32 = obj.sum_range(left, right);
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
    
    ; update : exact-integer? exact-integer? -> void?
    (define/public (update index val)
      )
    ; sum-range : exact-integer? exact-integer? -> exact-integer?
    (define/public (sum-range left right)
      )))

;; Your num-array% object will be instantiated and called as such:
;; (define obj (new num-array% [nums nums]))
;; (send obj update index val)
;; (define param_2 (send obj sum-range left right))
```

### erlang
```erlang
-spec num_array_init_(Nums :: [integer()]) -> any().
num_array_init_(Nums) ->
  .

-spec num_array_update(Index :: integer(), Val :: integer()) -> any().
num_array_update(Index, Val) ->
  .

-spec num_array_sum_range(Left :: integer(), Right :: integer()) -> integer().
num_array_sum_range(Left, Right) ->
  .


%% Your functions will be called as such:
%% num_array_init_(Nums),
%% num_array_update(Index, Val),
%% Param_2 = num_array_sum_range(Left, Right),

%% num_array_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule NumArray do
  @spec init_(nums :: [integer]) :: any
  def init_(nums) do
    
  end

  @spec update(index :: integer, val :: integer) :: any
  def update(index, val) do
    
  end

  @spec sum_range(left :: integer, right :: integer) :: integer
  def sum_range(left, right) do
    
  end
end

# Your functions will be called as such:
# NumArray.init_(nums)
# NumArray.update(index, val)
# param_2 = NumArray.sum_range(left, right)

# NumArray.init_ will be called before every test case, in which you can do some necessary initializations.
```
