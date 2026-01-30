# 131. Palindrome Partitioning

- Difficulty: Medium
- Topics: String, Dynamic Programming, Backtracking
- Slug: palindrome-partitioning
- Problem ID: 131

## Description
Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
```

### Example 2
```text
Input: s = "a"
Output: [["a"]]
```


## Constraints
- 1 <= s.length <= 16
- s contains only lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<string>> partition(string s) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<String>> partition(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def partition(self, s):
        """
        :type s: str
        :rtype: List[List[str]]
        """
```

### python3
```python3
class Solution:
    def partition(self, s: str) -> List[List[str]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
char*** partition(char* s, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<string>> Partition(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    
};
```

### typescript
```typescript
function partition(s: string): string[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String[][]
     */
    function partition($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func partition(_ s: String) -> [[String]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun partition(s: String): List<List<String>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<String>> partition(String s) {
    
  }
}
```

### golang
```golang
func partition(s string) [][]string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String[][]}
def partition(s)
    
end
```

### scala
```scala
object Solution {
    def partition(s: String): List[List[String]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn partition(s: String) -> Vec<Vec<String>> {
        
    }
}
```

### racket
```racket
(define/contract (partition s)
  (-> string? (listof (listof string?)))
  )
```

### erlang
```erlang
-spec partition(S :: unicode:unicode_binary()) -> [[unicode:unicode_binary()]].
partition(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec partition(s :: String.t) :: [[String.t]]
  def partition(s) do
    
  end
end
```
