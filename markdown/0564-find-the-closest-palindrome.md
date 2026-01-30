# 564. Find the Closest Palindrome

- Difficulty: Hard
- Topics: Math, String
- Slug: find-the-closest-palindrome
- Problem ID: 564

## Description
Given a string n representing an integer, return the closest integer (not including itself), which is a palindrome. If there is a tie, return the smaller one.
The closest is defined as the absolute difference minimized between two integers.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = "123"
Output: "121"
```

### Example 2
```text
Input: n = "1"
Output: "0"
Explanation: 0 and 2 are the closest palindromes but we return the smallest which is 0.
```


## Constraints
- 1 <= n.length <= 18
- n consists of only digits.
- n does not have leading zeros.
- n is representing an integer in the range [1, 1018 - 1].

## Hints
- Will brute force work for this problem? Think of something else.
- Take some examples like 1234, 999,1000, etc and check their closest palindromes. How many different cases are possible?
- Do we have to consider only left half or right half of the string or both?
- Try to find the closest palindrome of these numbers- 12932, 99800, 12120. Did you observe something?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string nearestPalindromic(string n) {
        
    }
};
```

### java
```java
class Solution {
    public String nearestPalindromic(String n) {
        
    }
}
```

### python
```python
class Solution(object):
    def nearestPalindromic(self, n):
        """
        :type n: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def nearestPalindromic(self, n: str) -> str:
```

### c
```c
char* nearestPalindromic(char* n) {
    
}
```

### csharp
```csharp
public class Solution {
    public string NearestPalindromic(string n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
    
};
```

### typescript
```typescript
function nearestPalindromic(n: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $n
     * @return String
     */
    function nearestPalindromic($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func nearestPalindromic(_ n: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun nearestPalindromic(n: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String nearestPalindromic(String n) {
    
  }
}
```

### golang
```golang
func nearestPalindromic(n string) string {
    
}
```

### ruby
```ruby
# @param {String} n
# @return {String}
def nearest_palindromic(n)
    
end
```

### scala
```scala
object Solution {
    def nearestPalindromic(n: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn nearest_palindromic(n: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (nearest-palindromic n)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec nearest_palindromic(N :: unicode:unicode_binary()) -> unicode:unicode_binary().
nearest_palindromic(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec nearest_palindromic(n :: String.t) :: String.t
  def nearest_palindromic(n) do
    
  end
end
```
