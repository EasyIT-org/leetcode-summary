# 66. Plus One

- Difficulty: Easy
- Topics: Array, Math
- Slug: plus-one
- Problem ID: 66

## Description
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
```

### Example 2
```text
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
```

### Example 3
```text
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
```


## Constraints
- 1 <= digits.length <= 100
- 0 <= digits[i] <= 9
- digits does not contain any leading 0's.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        
    }
};
```

### java
```java
class Solution {
    public int[] plusOne(int[] digits) {
        
    }
}
```

### python
```python
class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* plusOne(int* digits, int digitsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] PlusOne(int[] digits) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
};
```

### typescript
```typescript
function plusOne(digits: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $digits
     * @return Integer[]
     */
    function plusOne($digits) {
        
    }
}
```

### swift
```swift
class Solution {
    func plusOne(_ digits: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun plusOne(digits: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> plusOne(List<int> digits) {
    
  }
}
```

### golang
```golang
func plusOne(digits []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} digits
# @return {Integer[]}
def plus_one(digits)
    
end
```

### scala
```scala
object Solution {
    def plusOne(digits: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn plus_one(digits: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (plus-one digits)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec plus_one(Digits :: [integer()]) -> [integer()].
plus_one(Digits) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec plus_one(digits :: [integer]) :: [integer]
  def plus_one(digits) do
    
  end
end
```
