# 165. Compare Version Numbers

- Difficulty: Medium
- Topics: Two Pointers, String
- Slug: compare-version-numbers
- Problem ID: 165

## Description
Given two version strings, version1 and version2, compare them. A version string consists of revisions separated by dots '.'. The value of the revision is its integer conversion ignoring leading zeros.
To compare version strings, compare their revision values in left-to-right order. If one of the version strings has fewer revisions, treat the missing revision values as 0.
Return the following:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: version1 = "1.2", version2 = "1.10"
Output: -1
Explanation:
version1's second revision is "2" and version2's second revision is "10": 2 < 10, so version1 < version2.
```

### Example 2
```text
Input: version1 = "1.01", version2 = "1.001"
Output: 0
Explanation:
Ignoring leading zeroes, both "01" and "001" represent the same integer "1".
```

### Example 3
```text
Input: version1 = "1.0", version2 = "1.0.0.0"
Output: 0
Explanation:
version1 has less revisions, which means every missing revision are treated as "0".
```


## Constraints
- 1 <= version1.length, version2.length <= 500
- version1 and version2 only contain digits and '.'.
- version1 and version2 are valid version numbers.
- All the given revisions in version1 and version2 can be stored in a 32-bit integer.

## Hints
- You can use two pointers for each version string to traverse them together while comparing the corresponding segments.
- Utilize the substring method to extract each version segment delimited by '.'. Ensure you're extracting the segments correctly by adjusting the start and end indices accordingly.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int compareVersion(string version1, string version2) {
        
    }
};
```

### java
```java
class Solution {
    public int compareVersion(String version1, String version2) {
        
    }
}
```

### python
```python
class Solution(object):
    def compareVersion(self, version1, version2):
        """
        :type version1: str
        :type version2: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
```

### c
```c
int compareVersion(char* version1, char* version2) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CompareVersion(string version1, string version2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    
};
```

### typescript
```typescript
function compareVersion(version1: string, version2: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $version1
     * @param String $version2
     * @return Integer
     */
    function compareVersion($version1, $version2) {
        
    }
}
```

### swift
```swift
class Solution {
    func compareVersion(_ version1: String, _ version2: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun compareVersion(version1: String, version2: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int compareVersion(String version1, String version2) {
    
  }
}
```

### golang
```golang
func compareVersion(version1 string, version2 string) int {
    
}
```

### ruby
```ruby
# @param {String} version1
# @param {String} version2
# @return {Integer}
def compare_version(version1, version2)
    
end
```

### scala
```scala
object Solution {
    def compareVersion(version1: String, version2: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn compare_version(version1: String, version2: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (compare-version version1 version2)
  (-> string? string? exact-integer?)
  )
```

### erlang
```erlang
-spec compare_version(Version1 :: unicode:unicode_binary(), Version2 :: unicode:unicode_binary()) -> integer().
compare_version(Version1, Version2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec compare_version(version1 :: String.t, version2 :: String.t) :: integer
  def compare_version(version1, version2) do
    
  end
end
```
