# 989. Add to Array-Form of Integer

- Difficulty: Easy
- Topics: Array, Math
- Slug: add-to-array-form-of-integer
- Problem ID: 1031

## Description
The array-form of an integer num is an array representing its digits in left to right order.
Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234
```

### Example 2
```text
Input: num = [2,7,4], k = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455
```

### Example 3
```text
Input: num = [2,1,5], k = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021
```


## Constraints
- 1 <= num.length <= 104
- 0 <= num[i] <= 9
- num does not contain any leading zeros except for the zero itself.
- 1 <= k <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> addToArrayForm(vector<int>& num, int k) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> addToArrayForm(int[] num, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def addToArrayForm(self, num, k):
        """
        :type num: List[int]
        :type k: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* addToArrayForm(int* num, int numSize, int k, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> AddToArrayForm(int[] num, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    
};
```

### typescript
```typescript
function addToArrayForm(num: number[], k: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $num
     * @param Integer $k
     * @return Integer[]
     */
    function addToArrayForm($num, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func addToArrayForm(_ num: [Int], _ k: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun addToArrayForm(num: IntArray, k: Int): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> addToArrayForm(List<int> num, int k) {
    
  }
}
```

### golang
```golang
func addToArrayForm(num []int, k int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} num
# @param {Integer} k
# @return {Integer[]}
def add_to_array_form(num, k)
    
end
```

### scala
```scala
object Solution {
    def addToArrayForm(num: Array[Int], k: Int): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn add_to_array_form(num: Vec<i32>, k: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (add-to-array-form num k)
  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec add_to_array_form(Num :: [integer()], K :: integer()) -> [integer()].
add_to_array_form(Num, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec add_to_array_form(num :: [integer], k :: integer) :: [integer]
  def add_to_array_form(num, k) do
    
  end
end
```
