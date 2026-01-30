# 923. 3Sum With Multiplicity

- Difficulty: Medium
- Topics: Array, Hash Table, Two Pointers, Sorting, Counting
- Slug: 3sum-with-multiplicity
- Problem ID: 959

## Description
Given an integer array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and arr[i] + arr[j] + arr[k] == target.
As the answer can be very large, return it modulo 109 + 7.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
Output: 20
Explanation: 
Enumerating by the values (arr[i], arr[j], arr[k]):
(1, 2, 5) occurs 8 times;
(1, 3, 4) occurs 8 times;
(2, 2, 4) occurs 2 times;
(2, 3, 3) occurs 2 times.
```

### Example 2
```text
Input: arr = [1,1,2,2,2,2], target = 5
Output: 12
Explanation: 
arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
We choose one 1 from [1,1] in 2 ways,
and two 2s from [2,2,2,2] in 6 ways.
```

### Example 3
```text
Input: arr = [2,1,3], target = 6
Output: 1
Explanation: (1, 2, 3) occured one time in the array so we return 1.
```


## Constraints
- 3 <= arr.length <= 3000
- 0 <= arr[i] <= 100
- 0 <= target <= 300

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int threeSumMulti(vector<int>& arr, int target) {
        
    }
};
```

### java
```java
class Solution {
    public int threeSumMulti(int[] arr, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def threeSumMulti(self, arr, target):
        """
        :type arr: List[int]
        :type target: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def threeSumMulti(self, arr: List[int], target: int) -> int:
```

### c
```c
int threeSumMulti(int* arr, int arrSize, int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ThreeSumMulti(int[] arr, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    
};
```

### typescript
```typescript
function threeSumMulti(arr: number[], target: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $target
     * @return Integer
     */
    function threeSumMulti($arr, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func threeSumMulti(_ arr: [Int], _ target: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun threeSumMulti(arr: IntArray, target: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int threeSumMulti(List<int> arr, int target) {
    
  }
}
```

### golang
```golang
func threeSumMulti(arr []int, target int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @param {Integer} target
# @return {Integer}
def three_sum_multi(arr, target)
    
end
```

### scala
```scala
object Solution {
    def threeSumMulti(arr: Array[Int], target: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn three_sum_multi(arr: Vec<i32>, target: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (three-sum-multi arr target)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec three_sum_multi(Arr :: [integer()], Target :: integer()) -> integer().
three_sum_multi(Arr, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec three_sum_multi(arr :: [integer], target :: integer) :: integer
  def three_sum_multi(arr, target) do
    
  end
end
```
