# 451. Sort Characters By Frequency

- Difficulty: Medium
- Topics: Hash Table, String, Sorting, Heap (Priority Queue), Bucket Sort, Counting
- Slug: sort-characters-by-frequency
- Problem ID: 451

## Description
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
Return the sorted string. If there are multiple answers, return any of them.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
```

### Example 2
```text
Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.
```

### Example 3
```text
Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
```


## Constraints
- 1 <= s.length <= 5 * 105
- s consists of uppercase and lowercase English letters and digits.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string frequencySort(string s) {
        
    }
};
```

### java
```java
class Solution {
    public String frequencySort(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def frequencySort(self, s):
        """
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def frequencySort(self, s: str) -> str:
```

### c
```c
char* frequencySort(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string FrequencySort(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
};
```

### typescript
```typescript
function frequencySort(s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function frequencySort($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func frequencySort(_ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun frequencySort(s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String frequencySort(String s) {
    
  }
}
```

### golang
```golang
func frequencySort(s string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String}
def frequency_sort(s)
    
end
```

### scala
```scala
object Solution {
    def frequencySort(s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn frequency_sort(s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (frequency-sort s)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec frequency_sort(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
frequency_sort(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec frequency_sort(s :: String.t) :: String.t
  def frequency_sort(s) do
    
  end
end
```
