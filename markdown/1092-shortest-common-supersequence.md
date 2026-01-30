# 1092. Shortest Common Supersequence 

- Difficulty: Hard
- Topics: String, Dynamic Programming
- Slug: shortest-common-supersequence
- Problem ID: 1170

## Description
Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences. If there are multiple valid strings, return any of them.
A string s is a subsequence of string t if deleting some number of characters from t (possibly 0) results in the string s.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: str1 = "abac", str2 = "cab"
Output: "cabac"
Explanation: 
str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
The answer provided is the shortest such string that satisfies these properties.
```

### Example 2
```text
Input: str1 = "aaaaaaaa", str2 = "aaaaaaaa"
Output: "aaaaaaaa"
```


## Constraints
- 1 <= str1.length, str2.length <= 1000
- str1 and str2 consist of lowercase English letters.

## Hints
- We can find the length of the longest common subsequence between str1[i:] and str2[j:] (for all (i, j)) by using dynamic programming.
- We can use this information to recover the shortest common supersequence.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string shortestCommonSupersequence(string str1, string str2) {
        
    }
};
```

### java
```java
class Solution {
    public String shortestCommonSupersequence(String str1, String str2) {
        
    }
}
```

### python
```python
class Solution(object):
    def shortestCommonSupersequence(self, str1, str2):
        """
        :type str1: str
        :type str2: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def shortestCommonSupersequence(self, str1: str, str2: str) -> str:
```

### c
```c
char* shortestCommonSupersequence(char* str1, char* str2) {
    
}
```

### csharp
```csharp
public class Solution {
    public string ShortestCommonSupersequence(string str1, string str2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    
};
```

### typescript
```typescript
function shortestCommonSupersequence(str1: string, str2: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $str1
     * @param String $str2
     * @return String
     */
    function shortestCommonSupersequence($str1, $str2) {
        
    }
}
```

### swift
```swift
class Solution {
    func shortestCommonSupersequence(_ str1: String, _ str2: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun shortestCommonSupersequence(str1: String, str2: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String shortestCommonSupersequence(String str1, String str2) {
    
  }
}
```

### golang
```golang
func shortestCommonSupersequence(str1 string, str2 string) string {
    
}
```

### ruby
```ruby
# @param {String} str1
# @param {String} str2
# @return {String}
def shortest_common_supersequence(str1, str2)
    
end
```

### scala
```scala
object Solution {
    def shortestCommonSupersequence(str1: String, str2: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn shortest_common_supersequence(str1: String, str2: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (shortest-common-supersequence str1 str2)
  (-> string? string? string?)
  )
```

### erlang
```erlang
-spec shortest_common_supersequence(Str1 :: unicode:unicode_binary(), Str2 :: unicode:unicode_binary()) -> unicode:unicode_binary().
shortest_common_supersequence(Str1, Str2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec shortest_common_supersequence(str1 :: String.t, str2 :: String.t) :: String.t
  def shortest_common_supersequence(str1, str2) do
    
  end
end
```
