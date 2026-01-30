# 483. Smallest Good Base

- Difficulty: Hard
- Topics: Math, Binary Search
- Slug: smallest-good-base
- Problem ID: 483

## Description
Given an integer n represented as a string, return the smallest good base of n.
We call k >= 2 a good base of n, if all digits of n base k are 1's.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = "13"
Output: "3"
Explanation: 13 base 3 is 111.
```

### Example 2
```text
Input: n = "4681"
Output: "8"
Explanation: 4681 base 8 is 11111.
```

### Example 3
```text
Input: n = "1000000000000000000"
Output: "999999999999999999"
Explanation: 1000000000000000000 base 999999999999999999 is 11.
```


## Constraints
- n is an integer in the range [3, 1018].
- n does not contain any leading zeros.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string smallestGoodBase(string n) {
        
    }
};
```

### java
```java
class Solution {
    public String smallestGoodBase(String n) {
        
    }
}
```

### python
```python
class Solution(object):
    def smallestGoodBase(self, n):
        """
        :type n: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def smallestGoodBase(self, n: str) -> str:
```

### c
```c
char* smallestGoodBase(char* n) {
    
}
```

### csharp
```csharp
public class Solution {
    public string SmallestGoodBase(string n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function(n) {
    
};
```

### typescript
```typescript
function smallestGoodBase(n: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $n
     * @return String
     */
    function smallestGoodBase($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func smallestGoodBase(_ n: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun smallestGoodBase(n: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String smallestGoodBase(String n) {
    
  }
}
```

### golang
```golang
func smallestGoodBase(n string) string {
    
}
```

### ruby
```ruby
# @param {String} n
# @return {String}
def smallest_good_base(n)
    
end
```

### scala
```scala
object Solution {
    def smallestGoodBase(n: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn smallest_good_base(n: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (smallest-good-base n)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec smallest_good_base(N :: unicode:unicode_binary()) -> unicode:unicode_binary().
smallest_good_base(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec smallest_good_base(n :: String.t) :: String.t
  def smallest_good_base(n) do
    
  end
end
```
