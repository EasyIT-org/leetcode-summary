# 831. Masking Personal Information

- Difficulty: Medium
- Topics: String
- Slug: masking-personal-information
- Problem ID: 858

## Description
You are given a personal information string s, representing either an email address or a phone number. Return the masked personal information using the below rules.
Email address:
An email address is:
To mask an email:
Phone number:
A phone number is formatted as follows:
To mask a phone number:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "LeetCode@LeetCode.com"
Output: "l*****e@leetcode.com"
Explanation: s is an email address.
The name and domain are converted to lowercase, and the middle of the name is replaced by 5 asterisks.
```

### Example 2
```text
Input: s = "AB@qq.com"
Output: "a*****b@qq.com"
Explanation: s is an email address.
The name and domain are converted to lowercase, and the middle of the name is replaced by 5 asterisks.
Note that even though "ab" is 2 characters, it still must have 5 asterisks in the middle.
```

### Example 3
```text
Input: s = "1(234)567-890"
Output: "***-***-7890"
Explanation: s is a phone number.
There are 10 digits, so the local number is 10 digits and the country code is 0 digits.
Thus, the resulting masked number is "***-***-7890".
```


## Constraints
- s is either a valid email or a phone number.
- If s is an email:
	
8 <= s.length <= 40
s consists of uppercase and lowercase English letters and exactly one '@' symbol and '.' symbol.
- 8 <= s.length <= 40
- s consists of uppercase and lowercase English letters and exactly one '@' symbol and '.' symbol.
- If s is a phone number:
	
10 <= s.length <= 20
s consists of digits, spaces, and the symbols '(', ')', '-', and '+'.
- 10 <= s.length <= 20
- s consists of digits, spaces, and the symbols '(', ')', '-', and '+'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string maskPII(string s) {
        
    }
};
```

### java
```java
class Solution {
    public String maskPII(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def maskPII(self, s):
        """
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def maskPII(self, s: str) -> str:
```

### c
```c
char* maskPII(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string MaskPII(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function(s) {
    
};
```

### typescript
```typescript
function maskPII(s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function maskPII($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func maskPII(_ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maskPII(s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String maskPII(String s) {
    
  }
}
```

### golang
```golang
func maskPII(s string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String}
def mask_pii(s)
    
end
```

### scala
```scala
object Solution {
    def maskPII(s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn mask_pii(s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (mask-pii s)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec mask_pii(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
mask_pii(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec mask_pii(s :: String.t) :: String.t
  def mask_pii(s) do
    
  end
end
```
