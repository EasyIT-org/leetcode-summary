# 956. Tallest Billboard

- Difficulty: Hard
- Topics: Array, Dynamic Programming
- Slug: tallest-billboard
- Problem ID: 993

## Description
You are installing a billboard and want it to have the largest height. The billboard will have two steel supports, one on each side. Each steel support must be an equal height.
You are given a collection of rods that can be welded together. For example, if you have rods of lengths 1, 2, and 3, you can weld them together to make a support of length 6.
Return the largest possible height of your billboard installation. If you cannot support the billboard, return 0.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: rods = [1,2,3,6]
Output: 6
Explanation: We have two disjoint subsets {1,2,3} and {6}, which have the same sum = 6.
```

### Example 2
```text
Input: rods = [1,2,3,4,5,6]
Output: 10
Explanation: We have two disjoint subsets {2,3,5} and {4,6}, which have the same sum = 10.
```

### Example 3
```text
Input: rods = [1,2]
Output: 0
Explanation: The billboard cannot be supported, so we return 0.
```


## Constraints
- 1 <= rods.length <= 20
- 1 <= rods[i] <= 1000
- sum(rods[i]) <= 5000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int tallestBillboard(vector<int>& rods) {
        
    }
};
```

### java
```java
class Solution {
    public int tallestBillboard(int[] rods) {
        
    }
}
```

### python
```python
class Solution(object):
    def tallestBillboard(self, rods):
        """
        :type rods: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def tallestBillboard(self, rods: List[int]) -> int:
```

### c
```c
int tallestBillboard(int* rods, int rodsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int TallestBillboard(int[] rods) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function(rods) {
    
};
```

### typescript
```typescript
function tallestBillboard(rods: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $rods
     * @return Integer
     */
    function tallestBillboard($rods) {
        
    }
}
```

### swift
```swift
class Solution {
    func tallestBillboard(_ rods: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun tallestBillboard(rods: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int tallestBillboard(List<int> rods) {
    
  }
}
```

### golang
```golang
func tallestBillboard(rods []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} rods
# @return {Integer}
def tallest_billboard(rods)
    
end
```

### scala
```scala
object Solution {
    def tallestBillboard(rods: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn tallest_billboard(rods: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (tallest-billboard rods)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec tallest_billboard(Rods :: [integer()]) -> integer().
tallest_billboard(Rods) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec tallest_billboard(rods :: [integer]) :: integer
  def tallest_billboard(rods) do
    
  end
end
```
