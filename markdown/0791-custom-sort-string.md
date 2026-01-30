# 791. Custom Sort String

- Difficulty: Medium
- Topics: Hash Table, String, Sorting
- Slug: custom-sort-string
- Problem ID: 807

## Description
You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.
Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.
Return any permutation of s that satisfies this property.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: order = "cba", s = "abcd"
Output: "cbad"
Explanation: "a" , "b" , "c" appear in order, so the order of "a" , "b" , "c" should be "c" , "b" , and "a" .
Since "d" does not appear in order , it can be at any position in the returned string. "dcba" , "cdba" , "cbda" are also valid outputs.
```

### Example 2
```text
Input: order = "bcafg", s = "abcd"
Output: "bcad"
Explanation: The characters "b" , "c" , and "a" from order dictate the order for the characters in s . The character "d" in s does not appear in order , so its position is flexible.
Following the order of appearance in order , "b" , "c" , and "a" from s should be arranged as "b" , "c" , "a" . "d" can be placed at any position since it's not in order. The output "bcad" correctly follows this rule. Other arrangements like "dbca" or "bcda" would also be valid, as long as "b" , "c" , "a" maintain their order.
```


## Constraints
- 1 <= order.length <= 26
- 1 <= s.length <= 200
- order and s consist of lowercase English letters.
- All the characters of order are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string customSortString(string order, string s) {
        
    }
};
```

### java
```java
class Solution {
    public String customSortString(String order, String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def customSortString(self, order, s):
        """
        :type order: str
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def customSortString(self, order: str, s: str) -> str:
```

### c
```c
char* customSortString(char* order, char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string CustomSortString(string order, string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    
};
```

### typescript
```typescript
function customSortString(order: string, s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $order
     * @param String $s
     * @return String
     */
    function customSortString($order, $s) {
        
    }
}
```

### swift
```swift
class Solution {
    func customSortString(_ order: String, _ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun customSortString(order: String, s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String customSortString(String order, String s) {
    
  }
}
```

### golang
```golang
func customSortString(order string, s string) string {
    
}
```

### ruby
```ruby
# @param {String} order
# @param {String} s
# @return {String}
def custom_sort_string(order, s)
    
end
```

### scala
```scala
object Solution {
    def customSortString(order: String, s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn custom_sort_string(order: String, s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (custom-sort-string order s)
  (-> string? string? string?)
  )
```

### erlang
```erlang
-spec custom_sort_string(Order :: unicode:unicode_binary(), S :: unicode:unicode_binary()) -> unicode:unicode_binary().
custom_sort_string(Order, S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec custom_sort_string(order :: String.t, s :: String.t) :: String.t
  def custom_sort_string(order, s) do
    
  end
end
```
