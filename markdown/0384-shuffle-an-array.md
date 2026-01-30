# 384. Shuffle an Array

- Difficulty: Medium
- Topics: Array, Math, Design, Randomized
- Slug: shuffle-an-array
- Problem ID: 384

## Description
Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.
Implement the Solution class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
Output
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
                       // Any permutation of [1,2,3] must be equally likely to be returned.
                       // Example: return [3, 1, 2]
solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]
```


## Constraints
- 1 <= nums.length <= 50
- -106 <= nums[i] <= 106
- All the elements of nums are unique.
- At most 104 calls in total will be made to reset and shuffle.

## Hints
- The solution expects that we always use the original array to shuffle() else some of the test cases fail. (Credits; @snehasingh31)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    Solution(vector<int>& nums) {
        
    }
    
    vector<int> reset() {
        
    }
    
    vector<int> shuffle() {
        
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * Solution* obj = new Solution(nums);
 * vector<int> param_1 = obj->reset();
 * vector<int> param_2 = obj->shuffle();
 */
```

### java
```java
class Solution {

    public Solution(int[] nums) {
        
    }
    
    public int[] reset() {
        
    }
    
    public int[] shuffle() {
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int[] param_1 = obj.reset();
 * int[] param_2 = obj.shuffle();
 */
```

### python
```python
class Solution(object):

    def __init__(self, nums):
        """
        :type nums: List[int]
        """
        

    def reset(self):
        """
        :rtype: List[int]
        """
        

    def shuffle(self):
        """
        :rtype: List[int]
        """
        


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()
```

### python3
```python3
class Solution:

    def __init__(self, nums: List[int]):
        

    def reset(self) -> List[int]:
        

    def shuffle(self) -> List[int]:
        


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()
```

### c
```c



typedef struct {
    
} Solution;


Solution* solutionCreate(int* nums, int numsSize) {
    
}

int* solutionReset(Solution* obj, int* retSize) {
    
}

int* solutionShuffle(Solution* obj, int* retSize) {
    
}

void solutionFree(Solution* obj) {
    
}

/**
 * Your Solution struct will be instantiated and called as such:
 * Solution* obj = solutionCreate(nums, numsSize);
 * int* param_1 = solutionReset(obj, retSize);
 
 * int* param_2 = solutionShuffle(obj, retSize);
 
 * solutionFree(obj);
*/
```

### csharp
```csharp
public class Solution {

    public Solution(int[] nums) {
        
    }
    
    public int[] Reset() {
        
    }
    
    public int[] Shuffle() {
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int[] param_1 = obj.Reset();
 * int[] param_2 = obj.Shuffle();
 */
```

### javascript
```javascript
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
```

### typescript
```typescript
class Solution {
    constructor(nums: number[]) {
        
    }

    reset(): number[] {
        
    }

    shuffle(): number[] {
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
```

### php
```php
class Solution {
    /**
     * @param Integer[] $nums
     */
    function __construct($nums) {
        
    }
  
    /**
     * @return Integer[]
     */
    function reset() {
        
    }
  
    /**
     * @return Integer[]
     */
    function shuffle() {
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * $obj = Solution($nums);
 * $ret_1 = $obj->reset();
 * $ret_2 = $obj->shuffle();
 */
```

### swift
```swift

class Solution {

    init(_ nums: [Int]) {
        
    }
    
    func reset() -> [Int] {
        
    }
    
    func shuffle() -> [Int] {
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * let obj = Solution(nums)
 * let ret_1: [Int] = obj.reset()
 * let ret_2: [Int] = obj.shuffle()
 */
```

### kotlin
```kotlin
class Solution(nums: IntArray) {

    fun reset(): IntArray {
        
    }

    fun shuffle(): IntArray {
        
    }

}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
```

### dart
```dart
class Solution {

  Solution(List<int> nums) {
    
  }
  
  List<int> reset() {
    
  }
  
  List<int> shuffle() {
    
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = Solution(nums);
 * List<int> param1 = obj.reset();
 * List<int> param2 = obj.shuffle();
 */
```

### golang
```golang
type Solution struct {
    
}


func Constructor(nums []int) Solution {
    
}


func (this *Solution) Reset() []int {
    
}


func (this *Solution) Shuffle() []int {
    
}


/**
 * Your Solution object will be instantiated and called as such:
 * obj := Constructor(nums);
 * param_1 := obj.Reset();
 * param_2 := obj.Shuffle();
 */
```

### ruby
```ruby
class Solution

=begin
    :type nums: Integer[]
=end
    def initialize(nums)
        
    end


=begin
    :rtype: Integer[]
=end
    def reset()
        
    end


=begin
    :rtype: Integer[]
=end
    def shuffle()
        
    end


end

# Your Solution object will be instantiated and called as such:
# obj = Solution.new(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()
```

### scala
```scala
class Solution(_nums: Array[Int]) {

    def reset(): Array[Int] = {
        
    }

    def shuffle(): Array[Int] = {
        
    }

}

/**
 * Your Solution object will be instantiated and called as such:
 * val obj = new Solution(nums)
 * val param_1 = obj.reset()
 * val param_2 = obj.shuffle()
 */
```

### rust
```rust
struct Solution {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Solution {

    fn new(nums: Vec<i32>) -> Self {
        
    }
    
    fn reset(&self) -> Vec<i32> {
        
    }
    
    fn shuffle(&self) -> Vec<i32> {
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * let obj = Solution::new(nums);
 * let ret_1: Vec<i32> = obj.reset();
 * let ret_2: Vec<i32> = obj.shuffle();
 */
```

### racket
```racket
(define solution%
  (class object%
    (super-new)
    
    ; nums : (listof exact-integer?)
    (init-field
      nums)
    
    ; reset : -> (listof exact-integer?)
    (define/public (reset)
      )
    ; shuffle : -> (listof exact-integer?)
    (define/public (shuffle)
      )))

;; Your solution% object will be instantiated and called as such:
;; (define obj (new solution% [nums nums]))
;; (define param_1 (send obj reset))
;; (define param_2 (send obj shuffle))
```

### erlang
```erlang
-spec solution_init_(Nums :: [integer()]) -> any().
solution_init_(Nums) ->
  .

-spec solution_reset() -> [integer()].
solution_reset() ->
  .

-spec solution_shuffle() -> [integer()].
solution_shuffle() ->
  .


%% Your functions will be called as such:
%% solution_init_(Nums),
%% Param_1 = solution_reset(),
%% Param_2 = solution_shuffle(),

%% solution_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule Solution do
  @spec init_(nums :: [integer]) :: any
  def init_(nums) do
    
  end

  @spec reset() :: [integer]
  def reset() do
    
  end

  @spec shuffle() :: [integer]
  def shuffle() do
    
  end
end

# Your functions will be called as such:
# Solution.init_(nums)
# param_1 = Solution.reset()
# param_2 = Solution.shuffle()

# Solution.init_ will be called before every test case, in which you can do some necessary initializations.
```
