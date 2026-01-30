# 1218. Longest Arithmetic Subsequence of Given Difference

- Difficulty: Medium
- Topics: Array, Hash Table, Dynamic Programming
- Slug: longest-arithmetic-subsequence-of-given-difference
- Problem ID: 1330

## Description
Given an integer array arr and an integer difference, return the length of the longest subsequence in arr which is an arithmetic sequence such that the difference between adjacent elements in the subsequence equals difference.
A subsequence is a sequence that can be derived from arr by deleting some or no elements without changing the order of the remaining elements.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [1,2,3,4], difference = 1
Output: 4
Explanation: The longest arithmetic subsequence is [1,2,3,4].
```

### Example 2
```text
Input: arr = [1,3,5,7], difference = 1
Output: 1
Explanation: The longest arithmetic subsequence is any single element.
```

### Example 3
```text
Input: arr = [1,5,7,8,5,3,4,2,1], difference = -2
Output: 4
Explanation: The longest arithmetic subsequence is [7,5,3,1].
```


## Constraints
- 1 <= arr.length <= 105
- -104 <= arr[i], difference <= 104

## Hints
- Use dynamic programming.
- Let dp[i] be the maximum length of a subsequence of the given difference whose last element is i.
- dp[i] = 1 + dp[i-k]

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int longestSubsequence(vector<int>& arr, int difference) {
        
    }
};
```

### java
```java
class Solution {
    public int longestSubsequence(int[] arr, int difference) {
        
    }
}
```

### python
```python
class Solution(object):
    def longestSubsequence(self, arr, difference):
        """
        :type arr: List[int]
        :type difference: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def longestSubsequence(self, arr: List[int], difference: int) -> int:
```

### c
```c
int longestSubsequence(int* arr, int arrSize, int difference) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LongestSubsequence(int[] arr, int difference) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    
};
```

### typescript
```typescript
function longestSubsequence(arr: number[], difference: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $difference
     * @return Integer
     */
    function longestSubsequence($arr, $difference) {
        
    }
}
```

### swift
```swift
class Solution {
    func longestSubsequence(_ arr: [Int], _ difference: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun longestSubsequence(arr: IntArray, difference: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int longestSubsequence(List<int> arr, int difference) {
    
  }
}
```

### golang
```golang
func longestSubsequence(arr []int, difference int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @param {Integer} difference
# @return {Integer}
def longest_subsequence(arr, difference)
    
end
```

### scala
```scala
object Solution {
    def longestSubsequence(arr: Array[Int], difference: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn longest_subsequence(arr: Vec<i32>, difference: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (longest-subsequence arr difference)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec longest_subsequence(Arr :: [integer()], Difference :: integer()) -> integer().
longest_subsequence(Arr, Difference) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec longest_subsequence(arr :: [integer], difference :: integer) :: integer
  def longest_subsequence(arr, difference) do
    
  end
end
```
