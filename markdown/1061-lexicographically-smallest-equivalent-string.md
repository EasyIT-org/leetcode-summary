# 1061. Lexicographically Smallest Equivalent String

- Difficulty: Medium
- Topics: String, Union Find
- Slug: lexicographically-smallest-equivalent-string
- Problem ID: 1058

## Description
You are given two strings of the same length s1 and s2 and a string baseStr.
We say s1[i] and s2[i] are equivalent characters.
Equivalent characters follow the usual rules of any equivalence relation:
For example, given the equivalency information from s1 = "abc" and s2 = "cde", "acd" and "aab" are equivalent strings of baseStr = "eed", and "aab" is the lexicographically smallest equivalent string of baseStr.
Return the lexicographically smallest equivalent string of baseStr by using the equivalency information from s1 and s2.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s1 = "parker", s2 = "morris", baseStr = "parser"
Output: "makkek"
Explanation: Based on the equivalency information in s1 and s2, we can group their characters as [m,p], [a,o], [k,r,s], [e,i].
The characters in each group are equivalent and sorted in lexicographical order.
So the answer is "makkek".
```

### Example 2
```text
Input: s1 = "hello", s2 = "world", baseStr = "hold"
Output: "hdld"
Explanation: Based on the equivalency information in s1 and s2, we can group their characters as [h,w], [d,e,o], [l,r].
So only the second letter 'o' in baseStr is changed to 'd', the answer is "hdld".
```

### Example 3
```text
Input: s1 = "leetcode", s2 = "programs", baseStr = "sourcecode"
Output: "aauaaaaada"
Explanation: We group the equivalent characters in s1 and s2 as [a,o,e,r,s,c], [l,p], [g,t] and [d,m], thus all letters in baseStr except 'u' and 'd' are transformed to 'a', the answer is "aauaaaaada".
```


## Constraints
- 1 <= s1.length, s2.length, baseStr <= 1000
- s1.length == s2.length
- s1, s2, and baseStr consist of lowercase English letters.

## Hints
- Model these equalities as edges of a graph.
- Group each connected component of the graph and assign each node of this component to the node with the lowest lexicographically character.
- Finally convert the string with the precalculated information.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string smallestEquivalentString(string s1, string s2, string baseStr) {
        
    }
};
```

### java
```java
class Solution {
    public String smallestEquivalentString(String s1, String s2, String baseStr) {
        
    }
}
```

### python
```python
class Solution(object):
    def smallestEquivalentString(self, s1, s2, baseStr):
        """
        :type s1: str
        :type s2: str
        :type baseStr: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def smallestEquivalentString(self, s1: str, s2: str, baseStr: str) -> str:
```

### c
```c
char* smallestEquivalentString(char* s1, char* s2, char* baseStr) {
    
}
```

### csharp
```csharp
public class Solution {
    public string SmallestEquivalentString(string s1, string s2, string baseStr) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    
};
```

### typescript
```typescript
function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s1
     * @param String $s2
     * @param String $baseStr
     * @return String
     */
    function smallestEquivalentString($s1, $s2, $baseStr) {
        
    }
}
```

### swift
```swift
class Solution {
    func smallestEquivalentString(_ s1: String, _ s2: String, _ baseStr: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun smallestEquivalentString(s1: String, s2: String, baseStr: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String smallestEquivalentString(String s1, String s2, String baseStr) {
    
  }
}
```

### golang
```golang
func smallestEquivalentString(s1 string, s2 string, baseStr string) string {
    
}
```

### ruby
```ruby
# @param {String} s1
# @param {String} s2
# @param {String} base_str
# @return {String}
def smallest_equivalent_string(s1, s2, base_str)
    
end
```

### scala
```scala
object Solution {
    def smallestEquivalentString(s1: String, s2: String, baseStr: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn smallest_equivalent_string(s1: String, s2: String, base_str: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (smallest-equivalent-string s1 s2 baseStr)
  (-> string? string? string? string?)
  )
```

### erlang
```erlang
-spec smallest_equivalent_string(S1 :: unicode:unicode_binary(), S2 :: unicode:unicode_binary(), BaseStr :: unicode:unicode_binary()) -> unicode:unicode_binary().
smallest_equivalent_string(S1, S2, BaseStr) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec smallest_equivalent_string(s1 :: String.t, s2 :: String.t, base_str :: String.t) :: String.t
  def smallest_equivalent_string(s1, s2, base_str) do
    
  end
end
```
