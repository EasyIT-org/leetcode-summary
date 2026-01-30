# 1189. Maximum Number of Balloons

- Difficulty: Easy
- Topics: Hash Table, String, Counting
- Slug: maximum-number-of-balloons
- Problem ID: 1297

## Description
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
You can use each character in text at most once. Return the maximum number of instances that can be formed.
Example 1:
Example 2:
Example 3:
Constraints:
Note: This question is the same as  2287: Rearrange Characters to Make Target String.

## Examples
### Example 1
```text
Input: text = "nlaebolko"
Output: 1
```
Images:
- https://assets.leetcode.com/uploads/2019/09/05/1536_ex1_upd.JPG

### Example 2
```text
Input: text = "loonbalxballpoon"
Output: 2
```
Images:
- https://assets.leetcode.com/uploads/2019/09/05/1536_ex2_upd.JPG

### Example 3
```text
Input: text = "leetcode"
Output: 0
```
Images:
- https://assets.leetcode.com/uploads/2019/09/05/1536_ex2_upd.JPG


## Constraints
- 1 <= text.length <= 104
- text consists of lower case English letters only.

## Hints
- Count the frequency of letters in the given string.
- Find the letter than can make the minimum number of instances of the word "balloon".

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxNumberOfBalloons(string text) {
        
    }
};
```

### java
```java
class Solution {
    public int maxNumberOfBalloons(String text) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxNumberOfBalloons(self, text):
        """
        :type text: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
```

### c
```c
int maxNumberOfBalloons(char* text) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxNumberOfBalloons(string text) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    
};
```

### typescript
```typescript
function maxNumberOfBalloons(text: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $text
     * @return Integer
     */
    function maxNumberOfBalloons($text) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxNumberOfBalloons(_ text: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxNumberOfBalloons(text: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxNumberOfBalloons(String text) {
    
  }
}
```

### golang
```golang
func maxNumberOfBalloons(text string) int {
    
}
```

### ruby
```ruby
# @param {String} text
# @return {Integer}
def max_number_of_balloons(text)
    
end
```

### scala
```scala
object Solution {
    def maxNumberOfBalloons(text: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_number_of_balloons(text: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-number-of-balloons text)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec max_number_of_balloons(Text :: unicode:unicode_binary()) -> integer().
max_number_of_balloons(Text) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_number_of_balloons(text :: String.t) :: integer
  def max_number_of_balloons(text) do
    
  end
end
```
