# 383. Ransom Note

- Difficulty: Easy
- Topics: Hash Table, String, Counting
- Slug: ransom-note
- Problem ID: 383

## Description
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: ransomNote = "a", magazine = "b"
Output: false
```

### Example 2
```text
Input: ransomNote = "aa", magazine = "ab"
Output: false
```

### Example 3
```text
Input: ransomNote = "aa", magazine = "aab"
Output: true
```


## Constraints
- 1 <= ransomNote.length, magazine.length <= 105
- ransomNote and magazine consist of lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        
    }
};
```

### java
```java
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        
    }
}
```

### python
```python
class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
```

### c
```c
bool canConstruct(char* ransomNote, char* magazine) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CanConstruct(string ransomNote, string magazine) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
};
```

### typescript
```typescript
function canConstruct(ransomNote: string, magazine: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $ransomNote
     * @param String $magazine
     * @return Boolean
     */
    function canConstruct($ransomNote, $magazine) {
        
    }
}
```

### swift
```swift
class Solution {
    func canConstruct(_ ransomNote: String, _ magazine: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun canConstruct(ransomNote: String, magazine: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool canConstruct(String ransomNote, String magazine) {
    
  }
}
```

### golang
```golang
func canConstruct(ransomNote string, magazine string) bool {
    
}
```

### ruby
```ruby
# @param {String} ransom_note
# @param {String} magazine
# @return {Boolean}
def can_construct(ransom_note, magazine)
    
end
```

### scala
```scala
object Solution {
    def canConstruct(ransomNote: String, magazine: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn can_construct(ransom_note: String, magazine: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (can-construct ransomNote magazine)
  (-> string? string? boolean?)
  )
```

### erlang
```erlang
-spec can_construct(RansomNote :: unicode:unicode_binary(), Magazine :: unicode:unicode_binary()) -> boolean().
can_construct(RansomNote, Magazine) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec can_construct(ransom_note :: String.t, magazine :: String.t) :: boolean
  def can_construct(ransom_note, magazine) do
    
  end
end
```
