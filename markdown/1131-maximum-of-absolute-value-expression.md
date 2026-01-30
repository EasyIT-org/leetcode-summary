# 1131. Maximum of Absolute Value Expression

- Difficulty: Medium
- Topics: Array, Math
- Slug: maximum-of-absolute-value-expression
- Problem ID: 1230

## Description
Given two arrays of integers with equal lengths, return the maximum value of:
|arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|
where the maximum is taken over all 0 <= i, j < arr1.length.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: arr1 = [1,2,3,4], arr2 = [-1,4,5,6]
Output: 13
```

### Example 2
```text
Input: arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]
Output: 20
```


## Constraints
- 2 <= arr1.length == arr2.length <= 40000
- -10^6 <= arr1[i], arr2[i] <= 10^6

## Hints
- Use the idea that abs(A) + abs(B) = max(A+B, A-B, -A+B, -A-B).

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxAbsValExpr(vector<int>& arr1, vector<int>& arr2) {
        
    }
};
```

### java
```java
class Solution {
    public int maxAbsValExpr(int[] arr1, int[] arr2) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxAbsValExpr(self, arr1, arr2):
        """
        :type arr1: List[int]
        :type arr2: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxAbsValExpr(self, arr1: List[int], arr2: List[int]) -> int:
```

### c
```c
int maxAbsValExpr(int* arr1, int arr1Size, int* arr2, int arr2Size) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxAbsValExpr(int[] arr1, int[] arr2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    
};
```

### typescript
```typescript
function maxAbsValExpr(arr1: number[], arr2: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr1
     * @param Integer[] $arr2
     * @return Integer
     */
    function maxAbsValExpr($arr1, $arr2) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxAbsValExpr(_ arr1: [Int], _ arr2: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxAbsValExpr(arr1: IntArray, arr2: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxAbsValExpr(List<int> arr1, List<int> arr2) {
    
  }
}
```

### golang
```golang
func maxAbsValExpr(arr1 []int, arr2 []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr1
# @param {Integer[]} arr2
# @return {Integer}
def max_abs_val_expr(arr1, arr2)
    
end
```

### scala
```scala
object Solution {
    def maxAbsValExpr(arr1: Array[Int], arr2: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_abs_val_expr(arr1: Vec<i32>, arr2: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-abs-val-expr arr1 arr2)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_abs_val_expr(Arr1 :: [integer()], Arr2 :: [integer()]) -> integer().
max_abs_val_expr(Arr1, Arr2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_abs_val_expr(arr1 :: [integer], arr2 :: [integer]) :: integer
  def max_abs_val_expr(arr1, arr2) do
    
  end
end
```
