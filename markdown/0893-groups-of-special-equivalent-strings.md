# 893. Groups of Special-Equivalent Strings

- Difficulty: Medium
- Topics: Array, Hash Table, String, Sorting
- Slug: groups-of-special-equivalent-strings
- Problem ID: 929

## Description
You are given an array of strings of the same length words.
In one move, you can swap any two even indexed characters or any two odd indexed characters of a string words[i].
Two strings words[i] and words[j] are special-equivalent if after any number of moves, words[i] == words[j].
A group of special-equivalent strings from words is a non-empty subset of words such that:
Return the number of groups of special-equivalent strings from words.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: words = ["abcd","cdab","cbad","xyzz","zzxy","zzyx"]
Output: 3
Explanation: 
One group is ["abcd", "cdab", "cbad"], since they are all pairwise special equivalent, and none of the other strings is all pairwise special equivalent to these.
The other two groups are ["xyzz", "zzxy"] and ["zzyx"].
Note that in particular, "zzxy" is not special equivalent to "zzyx".
```

### Example 2
```text
Input: words = ["abc","acb","bac","bca","cab","cba"]
Output: 3
```


## Constraints
- 1 <= words.length <= 1000
- 1 <= words[i].length <= 20
- words[i] consist of lowercase English letters.
- All the strings are of the same length.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numSpecialEquivGroups(vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public int numSpecialEquivGroups(String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def numSpecialEquivGroups(self, words):
        """
        :type words: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numSpecialEquivGroups(self, words: List[str]) -> int:
```

### c
```c
int numSpecialEquivGroups(char** words, int wordsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumSpecialEquivGroups(string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function(words) {
    
};
```

### typescript
```typescript
function numSpecialEquivGroups(words: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @return Integer
     */
    function numSpecialEquivGroups($words) {
        
    }
}
```

### swift
```swift
class Solution {
    func numSpecialEquivGroups(_ words: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numSpecialEquivGroups(words: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numSpecialEquivGroups(List<String> words) {
    
  }
}
```

### golang
```golang
func numSpecialEquivGroups(words []string) int {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @return {Integer}
def num_special_equiv_groups(words)
    
end
```

### scala
```scala
object Solution {
    def numSpecialEquivGroups(words: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_special_equiv_groups(words: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-special-equiv-groups words)
  (-> (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec num_special_equiv_groups(Words :: [unicode:unicode_binary()]) -> integer().
num_special_equiv_groups(Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_special_equiv_groups(words :: [String.t]) :: integer
  def num_special_equiv_groups(words) do
    
  end
end
```
