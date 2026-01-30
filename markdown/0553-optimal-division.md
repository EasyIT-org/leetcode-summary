# 553. Optimal Division

- Difficulty: Medium
- Topics: Array, Math, Dynamic Programming
- Slug: optimal-division
- Problem ID: 553

## Description
You are given an integer array nums. The adjacent integers in nums will perform the float division.
However, you can add any number of parenthesis at any position to change the priority of operations. You want to add these parentheses such the value of the expression after the evaluation is maximum.
Return the corresponding expression that has the maximum value in string format.
Note: your expression should not contain redundant parenthesis.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1000,100,10,2]
Output: "1000/(100/10/2)"
Explanation: 1000/(100/10/2) = 1000/((100/10)/2) = 200
However, the bold parenthesis in "1000/((100/10)/2)" are redundant since they do not influence the operation priority.
So you should return "1000/(100/10/2)".
Other cases:
1000/(100/10)/2 = 50
1000/(100/(10/2)) = 50
1000/100/10/2 = 0.5
1000/100/(10/2) = 2
```

### Example 2
```text
Input: nums = [2,3,4]
Output: "2/(3/4)"
Explanation: (2/(3/4)) = 8/3 = 2.667
It can be shown that after trying all possibilities, we cannot get an expression with evaluation greater than 2.667
```


## Constraints
- 1 <= nums.length <= 10
- 2 <= nums[i] <= 1000
- There is only one optimal division for the given input.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string optimalDivision(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public String optimalDivision(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def optimalDivision(self, nums):
        """
        :type nums: List[int]
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def optimalDivision(self, nums: List[int]) -> str:
```

### c
```c
char* optimalDivision(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string OptimalDivision(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    
};
```

### typescript
```typescript
function optimalDivision(nums: number[]): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return String
     */
    function optimalDivision($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func optimalDivision(_ nums: [Int]) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun optimalDivision(nums: IntArray): String {
        
    }
}
```

### dart
```dart
class Solution {
  String optimalDivision(List<int> nums) {
    
  }
}
```

### golang
```golang
func optimalDivision(nums []int) string {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {String}
def optimal_division(nums)
    
end
```

### scala
```scala
object Solution {
    def optimalDivision(nums: Array[Int]): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn optimal_division(nums: Vec<i32>) -> String {
        
    }
}
```

### racket
```racket
(define/contract (optimal-division nums)
  (-> (listof exact-integer?) string?)
  )
```

### erlang
```erlang
-spec optimal_division(Nums :: [integer()]) -> unicode:unicode_binary().
optimal_division(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec optimal_division(nums :: [integer]) :: String.t
  def optimal_division(nums) do
    
  end
end
```
