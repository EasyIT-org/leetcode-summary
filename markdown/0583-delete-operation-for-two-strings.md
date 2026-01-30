# 583. Delete Operation for Two Strings

- Difficulty: Medium
- Topics: String, Dynamic Programming
- Slug: delete-operation-for-two-strings
- Problem ID: 583

## Description
Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.
In one step, you can delete exactly one character in either string.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: word1 = "sea", word2 = "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
```

### Example 2
```text
Input: word1 = "leetcode", word2 = "etco"
Output: 4
```


## Constraints
- 1 <= word1.length, word2.length <= 500
- word1 and word2 consist of only lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minDistance(string word1, string word2) {
        
    }
};
```

### java
```java
class Solution {
    public int minDistance(String word1, String word2) {
        
    }
}
```

### python
```python
class Solution(object):
    def minDistance(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
```

### c
```c
int minDistance(char* word1, char* word2) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinDistance(string word1, string word2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    
};
```

### typescript
```typescript
function minDistance(word1: string, word2: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $word1
     * @param String $word2
     * @return Integer
     */
    function minDistance($word1, $word2) {
        
    }
}
```

### swift
```swift
class Solution {
    func minDistance(_ word1: String, _ word2: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minDistance(word1: String, word2: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minDistance(String word1, String word2) {
    
  }
}
```

### golang
```golang
func minDistance(word1 string, word2 string) int {
    
}
```

### ruby
```ruby
# @param {String} word1
# @param {String} word2
# @return {Integer}
def min_distance(word1, word2)
    
end
```

### scala
```scala
object Solution {
    def minDistance(word1: String, word2: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_distance(word1: String, word2: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-distance word1 word2)
  (-> string? string? exact-integer?)
  )
```

### erlang
```erlang
-spec min_distance(Word1 :: unicode:unicode_binary(), Word2 :: unicode:unicode_binary()) -> integer().
min_distance(Word1, Word2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_distance(word1 :: String.t, word2 :: String.t) :: integer
  def min_distance(word1, word2) do
    
  end
end
```
