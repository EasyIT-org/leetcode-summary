# 927. Three Equal Parts

- Difficulty: Hard
- Topics: Array, Math
- Slug: three-equal-parts
- Problem ID: 963

## Description
You are given an array arr which consists of only zeros and ones, divide the array into three non-empty parts such that all of these parts represent the same binary value.
If it is possible, return any [i, j] with i + 1 < j, such that:
If it is not possible, return [-1, -1].
Note that the entire part is used when considering what binary value it represents. For example, [1,1,0] represents 6 in decimal, not 3. Also, leading zeros are allowed, so [0,1,1] and [1,1] represent the same value.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [1,0,1,0,1]
Output: [0,3]
```

### Example 2
```text
Input: arr = [1,1,0,1,1]
Output: [-1,-1]
```

### Example 3
```text
Input: arr = [1,1,0,0,1]
Output: [0,2]
```


## Constraints
- 3 <= arr.length <= 3 * 104
- arr[i] is 0 or 1

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> threeEqualParts(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public int[] threeEqualParts(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def threeEqualParts(self, arr):
        """
        :type arr: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def threeEqualParts(self, arr: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* threeEqualParts(int* arr, int arrSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] ThreeEqualParts(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var threeEqualParts = function(arr) {
    
};
```

### typescript
```typescript
function threeEqualParts(arr: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer[]
     */
    function threeEqualParts($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func threeEqualParts(_ arr: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun threeEqualParts(arr: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> threeEqualParts(List<int> arr) {
    
  }
}
```

### golang
```golang
func threeEqualParts(arr []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Integer[]}
def three_equal_parts(arr)
    
end
```

### scala
```scala
object Solution {
    def threeEqualParts(arr: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn three_equal_parts(arr: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (three-equal-parts arr)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec three_equal_parts(Arr :: [integer()]) -> [integer()].
three_equal_parts(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec three_equal_parts(arr :: [integer]) :: [integer]
  def three_equal_parts(arr) do
    
  end
end
```
