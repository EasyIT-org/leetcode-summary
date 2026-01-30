# 1053. Previous Permutation With One Swap

- Difficulty: Medium
- Topics: Array, Greedy
- Slug: previous-permutation-with-one-swap
- Problem ID: 1139

## Description
Given an array of positive integers arr (not necessarily distinct), return the lexicographically largest permutation that is smaller than arr, that can be made with exactly one swap. If it cannot be done, then return the same array.
Note that a swap exchanges the positions of two numbers arr[i] and arr[j]
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [3,2,1]
Output: [3,1,2]
Explanation: Swapping 2 and 1.
```

### Example 2
```text
Input: arr = [1,1,5]
Output: [1,1,5]
Explanation: This is already the smallest permutation.
```

### Example 3
```text
Input: arr = [1,9,4,6,7]
Output: [1,7,4,6,9]
Explanation: Swapping 9 and 7.
```


## Constraints
- 1 <= arr.length <= 104
- 1 <= arr[i] <= 104

## Hints
- You need to swap two values, one larger than the other.  Where is the larger one located?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> prevPermOpt1(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public int[] prevPermOpt1(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def prevPermOpt1(self, arr):
        """
        :type arr: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def prevPermOpt1(self, arr: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* prevPermOpt1(int* arr, int arrSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] PrevPermOpt1(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function(arr) {
    
};
```

### typescript
```typescript
function prevPermOpt1(arr: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer[]
     */
    function prevPermOpt1($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func prevPermOpt1(_ arr: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun prevPermOpt1(arr: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> prevPermOpt1(List<int> arr) {
    
  }
}
```

### golang
```golang
func prevPermOpt1(arr []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Integer[]}
def prev_perm_opt1(arr)
    
end
```

### scala
```scala
object Solution {
    def prevPermOpt1(arr: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn prev_perm_opt1(arr: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (prev-perm-opt1 arr)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec prev_perm_opt1(Arr :: [integer()]) -> [integer()].
prev_perm_opt1(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec prev_perm_opt1(arr :: [integer]) :: [integer]
  def prev_perm_opt1(arr) do
    
  end
end
```
