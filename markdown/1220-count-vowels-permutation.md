# 1220. Count Vowels Permutation

- Difficulty: Hard
- Topics: Dynamic Programming
- Slug: count-vowels-permutation
- Problem ID: 1332

## Description
Given an integer n, your task is to count how many strings of length n can be formed under the following rules:
Since the answer may be too large, return it modulo 10^9 + 7.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 1
Output: 5
Explanation: All possible strings are: "a", "e", "i" , "o" and "u".
```

### Example 2
```text
Input: n = 2
Output: 10
Explanation: All possible strings are: "ae", "ea", "ei", "ia", "ie", "io", "iu", "oi", "ou" and "ua".
```

### Example 3
```text
Input: n = 5
Output: 68
```


## Constraints
- 1 <= n <= 2 * 10^4

## Hints
- Use dynamic programming.
- Let dp[i][j] be the number of strings of length i that ends with the j-th vowel.
- Deduce the recurrence from the given relations between vowels.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int countVowelPermutation(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int countVowelPermutation(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def countVowelPermutation(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def countVowelPermutation(self, n: int) -> int:
```

### c
```c
int countVowelPermutation(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CountVowelPermutation(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    
};
```

### typescript
```typescript
function countVowelPermutation(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function countVowelPermutation($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func countVowelPermutation(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countVowelPermutation(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int countVowelPermutation(int n) {
    
  }
}
```

### golang
```golang
func countVowelPermutation(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def count_vowel_permutation(n)
    
end
```

### scala
```scala
object Solution {
    def countVowelPermutation(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_vowel_permutation(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (count-vowel-permutation n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec count_vowel_permutation(N :: integer()) -> integer().
count_vowel_permutation(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_vowel_permutation(n :: integer) :: integer
  def count_vowel_permutation(n) do
    
  end
end
```
