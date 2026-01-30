# 954. Array of Doubled Pairs

- Difficulty: Medium
- Topics: Array, Hash Table, Greedy, Sorting
- Slug: array-of-doubled-pairs
- Problem ID: 991

## Description
Given an integer array of even length arr, return true if it is possible to reorder arr such that arr[2 * i + 1] = 2 * arr[2 * i] for every 0 <= i < len(arr) / 2, or false otherwise.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [3,1,3,6]
Output: false
```

### Example 2
```text
Input: arr = [2,1,2,6]
Output: false
```

### Example 3
```text
Input: arr = [4,-2,2,-4]
Output: true
Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].
```


## Constraints
- 2 <= arr.length <= 3 * 104
- arr.length is even.
- -105 <= arr[i] <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool canReorderDoubled(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public boolean canReorderDoubled(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def canReorderDoubled(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def canReorderDoubled(self, arr: List[int]) -> bool:
```

### c
```c
bool canReorderDoubled(int* arr, int arrSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CanReorderDoubled(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    
};
```

### typescript
```typescript
function canReorderDoubled(arr: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Boolean
     */
    function canReorderDoubled($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func canReorderDoubled(_ arr: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun canReorderDoubled(arr: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool canReorderDoubled(List<int> arr) {
    
  }
}
```

### golang
```golang
func canReorderDoubled(arr []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Boolean}
def can_reorder_doubled(arr)
    
end
```

### scala
```scala
object Solution {
    def canReorderDoubled(arr: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn can_reorder_doubled(arr: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (can-reorder-doubled arr)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec can_reorder_doubled(Arr :: [integer()]) -> boolean().
can_reorder_doubled(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec can_reorder_doubled(arr :: [integer]) :: boolean
  def can_reorder_doubled(arr) do
    
  end
end
```
