# 468. Validate IP Address

- Difficulty: Medium
- Topics: String
- Slug: validate-ip-address
- Problem ID: 468

## Description
Given a string queryIP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.
A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros. For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses while "192.168.01.1", "192.168.1.00", and "192.168@1.1" are invalid IPv4 addresses.
A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:
For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and "2001:db8:85a3:0:0:8A2E:0370:7334" are valid IPv6 addresses, while "2001:0db8:85a3::8A2E:037j:7334" and "02001:0db8:85a3:0000:0000:8a2e:0370:7334" are invalid IPv6 addresses.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: queryIP = "172.16.254.1"
Output: "IPv4"
Explanation: This is a valid IPv4 address, return "IPv4".
```

### Example 2
```text
Input: queryIP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
Output: "IPv6"
Explanation: This is a valid IPv6 address, return "IPv6".
```

### Example 3
```text
Input: queryIP = "256.256.256.256"
Output: "Neither"
Explanation: This is neither a IPv4 address nor a IPv6 address.
```


## Constraints
- queryIP consists only of English letters, digits and the characters '.' and ':'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string validIPAddress(string queryIP) {
        
    }
};
```

### java
```java
class Solution {
    public String validIPAddress(String queryIP) {
        
    }
}
```

### python
```python
class Solution(object):
    def validIPAddress(self, queryIP):
        """
        :type queryIP: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def validIPAddress(self, queryIP: str) -> str:
```

### c
```c
char* validIPAddress(char* queryIP) {
    
}
```

### csharp
```csharp
public class Solution {
    public string ValidIPAddress(string queryIP) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    
};
```

### typescript
```typescript
function validIPAddress(queryIP: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $queryIP
     * @return String
     */
    function validIPAddress($queryIP) {
        
    }
}
```

### swift
```swift
class Solution {
    func validIPAddress(_ queryIP: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun validIPAddress(queryIP: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String validIPAddress(String queryIP) {
    
  }
}
```

### golang
```golang
func validIPAddress(queryIP string) string {
    
}
```

### ruby
```ruby
# @param {String} query_ip
# @return {String}
def valid_ip_address(query_ip)
    
end
```

### scala
```scala
object Solution {
    def validIPAddress(queryIP: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn valid_ip_address(query_ip: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (valid-ip-address queryIP)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec valid_ip_address(QueryIP :: unicode:unicode_binary()) -> unicode:unicode_binary().
valid_ip_address(QueryIP) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec valid_ip_address(query_ip :: String.t) :: String.t
  def valid_ip_address(query_ip) do
    
  end
end
```
