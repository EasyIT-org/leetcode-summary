# 1051. Height Checker

- Difficulty: Easy
- Topics: Array, Sorting, Counting Sort
- Slug: height-checker
- Problem ID: 1137

## Description
A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.
You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).
Return the number of indices where heights[i] != expected[i].
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.
```

### Example 2
```text
Input: heights = [5,1,2,3,4]
Output: 5
Explanation:
heights:  [5,1,2,3,4]
expected: [1,2,3,4,5]
All indices do not match.
```

### Example 3
```text
Input: heights = [1,2,3,4,5]
Output: 0
Explanation:
heights:  [1,2,3,4,5]
expected: [1,2,3,4,5]
All indices match.
```


## Constraints
- 1 <= heights.length <= 100
- 1 <= heights[i] <= 100

## Hints
- Build the correct order of heights by sorting another array, then compare the two arrays.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int heightChecker(vector<int>& heights) {
        
    }
};
```

### java
```java
class Solution {
    public int heightChecker(int[] heights) {
        
    }
}
```

### python
```python
class Solution(object):
    def heightChecker(self, heights):
        """
        :type heights: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
```

### c
```c
int heightChecker(int* heights, int heightsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int HeightChecker(int[] heights) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
};
```

### typescript
```typescript
function heightChecker(heights: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $heights
     * @return Integer
     */
    function heightChecker($heights) {
        
    }
}
```

### swift
```swift
class Solution {
    func heightChecker(_ heights: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun heightChecker(heights: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int heightChecker(List<int> heights) {
    
  }
}
```

### golang
```golang
func heightChecker(heights []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} heights
# @return {Integer}
def height_checker(heights)
    
end
```

### scala
```scala
object Solution {
    def heightChecker(heights: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn height_checker(heights: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (height-checker heights)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec height_checker(Heights :: [integer()]) -> integer().
height_checker(Heights) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec height_checker(heights :: [integer]) :: integer
  def height_checker(heights) do
    
  end
end
```
