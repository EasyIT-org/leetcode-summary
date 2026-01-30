# 241. Different Ways to Add Parentheses

- Difficulty: Medium
- Topics: Math, String, Dynamic Programming, Recursion, Memoization
- Slug: different-ways-to-add-parentheses
- Problem ID: 241

## Description
Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.
The test cases are generated such that the output values fit in a 32-bit integer and the number of different results does not exceed 104.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: expression = "2-1-1"
Output: [0,2]
Explanation:
((2-1)-1) = 0 
(2-(1-1)) = 2
```

### Example 2
```text
Input: expression = "2*3-4*5"
Output: [-34,-14,-10,-10,10]
Explanation:
(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10
```


## Constraints
- 1 <= expression.length <= 20
- expression consists of digits and the operator '+', '-', and '*'.
- All the integer values in the input expression are in the range [0, 99].
- The integer values in the input expression do not have a leading '-' or '+' denoting the sign.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> diffWaysToCompute(string expression) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> diffWaysToCompute(String expression) {
        
    }
}
```

### python
```python
class Solution(object):
    def diffWaysToCompute(self, expression):
        """
        :type expression: str
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def diffWaysToCompute(self, expression: str) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* diffWaysToCompute(char* expression, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> DiffWaysToCompute(string expression) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    
};
```

### typescript
```typescript
function diffWaysToCompute(expression: string): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $expression
     * @return Integer[]
     */
    function diffWaysToCompute($expression) {
        
    }
}
```

### swift
```swift
class Solution {
    func diffWaysToCompute(_ expression: String) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun diffWaysToCompute(expression: String): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> diffWaysToCompute(String expression) {
    
  }
}
```

### golang
```golang
func diffWaysToCompute(expression string) []int {
    
}
```

### ruby
```ruby
# @param {String} expression
# @return {Integer[]}
def diff_ways_to_compute(expression)
    
end
```

### scala
```scala
object Solution {
    def diffWaysToCompute(expression: String): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn diff_ways_to_compute(expression: String) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (diff-ways-to-compute expression)
  (-> string? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec diff_ways_to_compute(Expression :: unicode:unicode_binary()) -> [integer()].
diff_ways_to_compute(Expression) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec diff_ways_to_compute(expression :: String.t) :: [integer]
  def diff_ways_to_compute(expression) do
    
  end
end
```
