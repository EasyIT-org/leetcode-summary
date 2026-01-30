# 187. Repeated DNA Sequences

- Difficulty: Medium
- Topics: Hash Table, String, Bit Manipulation, Sliding Window, Rolling Hash, Hash Function
- Slug: repeated-dna-sequences
- Problem ID: 187

## Description
The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.
When studying DNA, it is useful to identify repeated sequences within the DNA.
Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]
```

### Example 2
```text
Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]
```


## Constraints
- 1 <= s.length <= 105
- s[i] is either 'A', 'C', 'G', or 'T'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> findRepeatedDnaSequences(string s) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> findRepeatedDnaSequences(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def findRepeatedDnaSequences(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** findRepeatedDnaSequences(char* s, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> FindRepeatedDnaSequences(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    
};
```

### typescript
```typescript
function findRepeatedDnaSequences(s: string): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String[]
     */
    function findRepeatedDnaSequences($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func findRepeatedDnaSequences(_ s: String) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findRepeatedDnaSequences(s: String): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> findRepeatedDnaSequences(String s) {
    
  }
}
```

### golang
```golang
func findRepeatedDnaSequences(s string) []string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String[]}
def find_repeated_dna_sequences(s)
    
end
```

### scala
```scala
object Solution {
    def findRepeatedDnaSequences(s: String): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_repeated_dna_sequences(s: String) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (find-repeated-dna-sequences s)
  (-> string? (listof string?))
  )
```

### erlang
```erlang
-spec find_repeated_dna_sequences(S :: unicode:unicode_binary()) -> [unicode:unicode_binary()].
find_repeated_dna_sequences(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_repeated_dna_sequences(s :: String.t) :: [String.t]
  def find_repeated_dna_sequences(s) do
    
  end
end
```
