# 1013. Partition Array Into Three Parts With Equal Sum

- Difficulty: Easy
- Topics: Array, Greedy
- Slug: partition-array-into-three-parts-with-equal-sum
- Problem ID: 1062

## Description
Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.
Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
```

### Example 2
```text
Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
Output: false
```

### Example 3
```text
Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
Output: true
Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
```


## Constraints
- 3 <= arr.length <= 5 * 104
- -104 <= arr[i] <= 104

## Hints
- If we have three parts with the same sum, what is the sum of each?
If you can find the first part, can you find the second part?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool canThreePartsEqualSum(vector<int>& arr) {
        
    }
};
```

### java
```java
class Solution {
    public boolean canThreePartsEqualSum(int[] arr) {
        
    }
}
```

### python
```python
class Solution(object):
    def canThreePartsEqualSum(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def canThreePartsEqualSum(self, arr: List[int]) -> bool:
```

### c
```c
bool canThreePartsEqualSum(int* arr, int arrSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CanThreePartsEqualSum(int[] arr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    
};
```

### typescript
```typescript
function canThreePartsEqualSum(arr: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @return Boolean
     */
    function canThreePartsEqualSum($arr) {
        
    }
}
```

### swift
```swift
class Solution {
    func canThreePartsEqualSum(_ arr: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun canThreePartsEqualSum(arr: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool canThreePartsEqualSum(List<int> arr) {
    
  }
}
```

### golang
```golang
func canThreePartsEqualSum(arr []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @return {Boolean}
def can_three_parts_equal_sum(arr)
    
end
```

### scala
```scala
object Solution {
    def canThreePartsEqualSum(arr: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn can_three_parts_equal_sum(arr: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (can-three-parts-equal-sum arr)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec can_three_parts_equal_sum(Arr :: [integer()]) -> boolean().
can_three_parts_equal_sum(Arr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec can_three_parts_equal_sum(arr :: [integer]) :: boolean
  def can_three_parts_equal_sum(arr) do
    
  end
end
```
