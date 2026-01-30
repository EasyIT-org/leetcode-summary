# 1073. Adding Two Negabinary Numbers

- Difficulty: Medium
- Topics: Array, Math
- Slug: adding-two-negabinary-numbers
- Problem ID: 1148

## Description
Given two numbers arr1 and arr2 in base -2, return the result of adding them together.
Each number is given in array format:  as an array of 0s and 1s, from most significant bit to least significant bit.  For example, arr = [1,1,0,1] represents the number (-2)^3 + (-2)^2 + (-2)^0 = -3.  A number arr in array, format is also guaranteed to have no leading zeros: either arr == [0] or arr[0] == 1.
Return the result of adding arr1 and arr2 in the same format: as an array of 0s and 1s with no leading zeros.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr1 = [1,1,1,1,1], arr2 = [1,0,1]
Output: [1,0,0,0,0]
Explanation: arr1 represents 11, arr2 represents 5, the output represents 16.
```

### Example 2
```text
Input: arr1 = [0], arr2 = [0]
Output: [0]
```

### Example 3
```text
Input: arr1 = [0], arr2 = [1]
Output: [1]
```


## Constraints
- 1 <= arr1.length, arr2.length <= 1000
- arr1[i] and arr2[i] are 0 or 1
- arr1 and arr2 have no leading zeros

## Hints
- We can try to determine the last digit of the answer, then divide everything by 2 and repeat.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> addNegabinary(vector<int>& arr1, vector<int>& arr2) {
        
    }
};
```

### java
```java
class Solution {
    public int[] addNegabinary(int[] arr1, int[] arr2) {
        
    }
}
```

### python
```python
class Solution(object):
    def addNegabinary(self, arr1, arr2):
        """
        :type arr1: List[int]
        :type arr2: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def addNegabinary(self, arr1: List[int], arr2: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* addNegabinary(int* arr1, int arr1Size, int* arr2, int arr2Size, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] AddNegabinary(int[] arr1, int[] arr2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function(arr1, arr2) {
    
};
```

### typescript
```typescript
function addNegabinary(arr1: number[], arr2: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr1
     * @param Integer[] $arr2
     * @return Integer[]
     */
    function addNegabinary($arr1, $arr2) {
        
    }
}
```

### swift
```swift
class Solution {
    func addNegabinary(_ arr1: [Int], _ arr2: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun addNegabinary(arr1: IntArray, arr2: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> addNegabinary(List<int> arr1, List<int> arr2) {
    
  }
}
```

### golang
```golang
func addNegabinary(arr1 []int, arr2 []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr1
# @param {Integer[]} arr2
# @return {Integer[]}
def add_negabinary(arr1, arr2)
    
end
```

### scala
```scala
object Solution {
    def addNegabinary(arr1: Array[Int], arr2: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn add_negabinary(arr1: Vec<i32>, arr2: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (add-negabinary arr1 arr2)
  (-> (listof exact-integer?) (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec add_negabinary(Arr1 :: [integer()], Arr2 :: [integer()]) -> [integer()].
add_negabinary(Arr1, Arr2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec add_negabinary(arr1 :: [integer], arr2 :: [integer]) :: [integer]
  def add_negabinary(arr1, arr2) do
    
  end
end
```
