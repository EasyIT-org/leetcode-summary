# 443. String Compression

- Difficulty: Medium
- Topics: Two Pointers, String
- Slug: string-compression
- Problem ID: 443

## Description
Given an array of characters chars, compress it using the following algorithm:
Begin with an empty string s. For each group of consecutive repeating characters in chars:
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.
After you are done modifying the input array, return the new length of the array.
You must write an algorithm that uses only constant extra space.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
```

### Example 2
```text
Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.
```

### Example 3
```text
Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
```


## Constraints
- 1 <= chars.length <= 2000
- chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.

## Hints
- How do you know if you are at the end of a consecutive group of characters?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int compress(vector<char>& chars) {
        
    }
};
```

### java
```java
class Solution {
    public int compress(char[] chars) {
        
    }
}
```

### python
```python
class Solution(object):
    def compress(self, chars):
        """
        :type chars: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def compress(self, chars: List[str]) -> int:
```

### c
```c
int compress(char* chars, int charsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int Compress(char[] chars) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    
};
```

### typescript
```typescript
function compress(chars: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $chars
     * @return Integer
     */
    function compress(&$chars) {
        
    }
}
```

### swift
```swift
class Solution {
    func compress(_ chars: inout [Character]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun compress(chars: CharArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int compress(List<String> chars) {
    
  }
}
```

### golang
```golang
func compress(chars []byte) int {
    
}
```

### ruby
```ruby
# @param {Character[]} chars
# @return {Integer}
def compress(chars)
    
end
```

### scala
```scala
object Solution {
    def compress(chars: Array[Char]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn compress(chars: &mut Vec<char>) -> i32 {
        
    }
}
```
