# 93. Restore IP Addresses

- Difficulty: Medium
- Topics: String, Backtracking
- Slug: restore-ip-addresses
- Problem ID: 93

## Description
A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.
Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]
```

### Example 2
```text
Input: s = "0000"
Output: ["0.0.0.0"]
```

### Example 3
```text
Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
```


## Constraints
- 1 <= s.length <= 20
- s consists of digits only.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> restoreIpAddresses(string s) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> restoreIpAddresses(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def restoreIpAddresses(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** restoreIpAddresses(char* s, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> RestoreIpAddresses(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    
};
```

### typescript
```typescript
function restoreIpAddresses(s: string): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String[]
     */
    function restoreIpAddresses($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func restoreIpAddresses(_ s: String) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun restoreIpAddresses(s: String): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> restoreIpAddresses(String s) {
    
  }
}
```

### golang
```golang
func restoreIpAddresses(s string) []string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String[]}
def restore_ip_addresses(s)
    
end
```

### scala
```scala
object Solution {
    def restoreIpAddresses(s: String): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn restore_ip_addresses(s: String) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (restore-ip-addresses s)
  (-> string? (listof string?))
  )
```

### erlang
```erlang
-spec restore_ip_addresses(S :: unicode:unicode_binary()) -> [unicode:unicode_binary()].
restore_ip_addresses(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec restore_ip_addresses(s :: String.t) :: [String.t]
  def restore_ip_addresses(s) do
    
  end
end
```
