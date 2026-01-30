# 482. License Key Formatting

- Difficulty: Easy
- Topics: String
- Slug: license-key-formatting
- Problem ID: 482

## Description
You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.
We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.
Return the reformatted license key.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "5F3Z-2e-9-w", k = 4
Output: "5F3Z-2E9W"
Explanation: The string s has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.
```

### Example 2
```text
Input: s = "2-5g-3-J", k = 2
Output: "2-5G-3J"
Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.
```


## Constraints
- 1 <= s.length <= 105
- s consists of English letters, digits, and dashes '-'.
- 1 <= k <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string licenseKeyFormatting(string s, int k) {
        
    }
};
```

### java
```java
class Solution {
    public String licenseKeyFormatting(String s, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def licenseKeyFormatting(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
```

### c
```c
char* licenseKeyFormatting(char* s, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public string LicenseKeyFormatting(string s, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    
};
```

### typescript
```typescript
function licenseKeyFormatting(s: string, k: number): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return String
     */
    function licenseKeyFormatting($s, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func licenseKeyFormatting(_ s: String, _ k: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun licenseKeyFormatting(s: String, k: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String licenseKeyFormatting(String s, int k) {
    
  }
}
```

### golang
```golang
func licenseKeyFormatting(s string, k int) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {Integer} k
# @return {String}
def license_key_formatting(s, k)
    
end
```

### scala
```scala
object Solution {
    def licenseKeyFormatting(s: String, k: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn license_key_formatting(s: String, k: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (license-key-formatting s k)
  (-> string? exact-integer? string?)
  )
```

### erlang
```erlang
-spec license_key_formatting(S :: unicode:unicode_binary(), K :: integer()) -> unicode:unicode_binary().
license_key_formatting(S, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec license_key_formatting(s :: String.t, k :: integer) :: String.t
  def license_key_formatting(s, k) do
    
  end
end
```
