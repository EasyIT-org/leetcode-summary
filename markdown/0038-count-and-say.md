# 38. Count and Say

- Difficulty: Medium
- Topics: String
- Slug: count-and-say
- Problem ID: 38

## Description
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string "3322251" we replace "33" with "23", replace "222" with "32", replace "5" with "15" and replace "1" with "11". Thus the compressed string becomes "23321511".
Given a positive integer n, return the nth element of the count-and-say sequence.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
countAndSay(1) = "1"
countAndSay(2) = RLE of "1" = "11"
countAndSay(3) = RLE of "11" = "21"
countAndSay(4) = RLE of "21" = "1211"
```


## Constraints
- 1 <= n <= 30

## Hints
- Create a helper function that maps an integer to pairs of its digits and their frequencies. For example, if you call this function with "223314444411", then it maps it to an array of pairs [[2,2], [3,2], [1,1], [4,5], [1, 2]].
- Create another helper function that takes the array of pairs and creates a new integer. For example, if you call this function with [[2,2], [3,2], [1,1], [4,5], [1, 2]], it should create "22"+"23"+"11"+"54"+"21" = "2223115421".
- Now, with the two helper functions, you can start with "1" and call the two functions alternatively n-1 times. The answer is the last integer you will obtain.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string countAndSay(int n) {
        
    }
};
```

### java
```java
class Solution {
    public String countAndSay(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def countAndSay(self, n):
        """
        :type n: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def countAndSay(self, n: int) -> str:
```

### c
```c
char* countAndSay(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public string CountAndSay(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
};
```

### typescript
```typescript
function countAndSay(n: number): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return String
     */
    function countAndSay($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func countAndSay(_ n: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countAndSay(n: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String countAndSay(int n) {
    
  }
}
```

### golang
```golang
func countAndSay(n int) string {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {String}
def count_and_say(n)
    
end
```

### scala
```scala
object Solution {
    def countAndSay(n: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_and_say(n: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (count-and-say n)
  (-> exact-integer? string?)
  )
```

### erlang
```erlang
-spec count_and_say(N :: integer()) -> unicode:unicode_binary().
count_and_say(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_and_say(n :: integer) :: String.t
  def count_and_say(n) do
    
  end
end
```
