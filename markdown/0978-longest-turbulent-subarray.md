# 978. Longest Turbulent Subarray

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Sliding Window
- Slug: longest-turbulent-subarray
- Problem ID: 1020

## Description
Given an integer array arr, return the length of a maximum size turbulent subarray of arr.
A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.
More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
```

### Example 2
```text
Input: arr = [4,8,12,16]
Output: 2
```

### Example 3
```text
Input: arr = [100]
Output: 1
```


## Constraints
- 1 <= arr.length <= 4 * 104
- 0 <= arr[i] <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxTurbulenceSize(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public int maxTurbulenceSize(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxTurbulenceSize(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
```

### c
```c
int maxTurbulenceSize(int* arr, int arrSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxTurbulenceSize(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    
};
```

### typescript
```typescript
function maxTurbulenceSize(arr: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function maxTurbulenceSize($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxTurbulenceSize(_ arr: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxTurbulenceSize(arr: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxTurbulenceSize(List<int> arr) {
    
  }
}
```

### golang
```golang
func maxTurbulenceSize(arr []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Integer}
def max_turbulence_size(arr)
    
end
```

### scala
```scala
object Solution {
    def maxTurbulenceSize(arr: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_turbulence_size(arr: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-turbulence-size arr)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_turbulence_size(Arr :: [integer()]) -> integer().
max_turbulence_size(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_turbulence_size(arr :: [integer]) :: integer
  def max_turbulence_size(arr) do
    
  end
end
```
