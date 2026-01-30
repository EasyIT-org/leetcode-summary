# 299. Bulls and Cows

- Difficulty: Medium
- Topics: Hash Table, String, Counting
- Slug: bulls-and-cows
- Problem ID: 299

## Description
You are playing the Bulls and Cows game with your friend.
You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:
Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.
The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: secret = "1807", guess = "7810"
Output: "1A3B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1807"
  |
"7810"
```

### Example 2
```text
Input: secret = "1123", guess = "0111"
Output: "1A1B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1123"        "1123"
  |      or     |
"0111"        "0111"
Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.
```


## Constraints
- 1 <= secret.length, guess.length <= 1000
- secret.length == guess.length
- secret and guess consist of digits only.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string getHint(string secret, string guess) {
        
    }
};
```

### java
```java
class Solution {
    public String getHint(String secret, String guess) {
        
    }
}
```

### python
```python
class Solution(object):
    def getHint(self, secret, guess):
        """
        :type secret: str
        :type guess: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def getHint(self, secret: str, guess: str) -> str:
```

### c
```c
char* getHint(char* secret, char* guess) {
    
}
```

### csharp
```csharp
public class Solution {
    public string GetHint(string secret, string guess) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    
};
```

### typescript
```typescript
function getHint(secret: string, guess: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $secret
     * @param String $guess
     * @return String
     */
    function getHint($secret, $guess) {
        
    }
}
```

### swift
```swift
class Solution {
    func getHint(_ secret: String, _ guess: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun getHint(secret: String, guess: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String getHint(String secret, String guess) {
    
  }
}
```

### golang
```golang
func getHint(secret string, guess string) string {
    
}
```

### ruby
```ruby
# @param {String} secret
# @param {String} guess
# @return {String}
def get_hint(secret, guess)
    
end
```

### scala
```scala
object Solution {
    def getHint(secret: String, guess: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn get_hint(secret: String, guess: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (get-hint secret guess)
  (-> string? string? string?)
  )
```

### erlang
```erlang
-spec get_hint(Secret :: unicode:unicode_binary(), Guess :: unicode:unicode_binary()) -> unicode:unicode_binary().
get_hint(Secret, Guess) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec get_hint(secret :: String.t, guess :: String.t) :: String.t
  def get_hint(secret, guess) do
    
  end
end
```
