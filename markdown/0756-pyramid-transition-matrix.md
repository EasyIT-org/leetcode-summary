# 756. Pyramid Transition Matrix

- Difficulty: Medium
- Topics: Bit Manipulation, Depth-First Search, Breadth-First Search
- Slug: pyramid-transition-matrix
- Problem ID: 757

## Description
You are stacking blocks to form a pyramid. Each block has a color, which is represented by a single letter. Each row of blocks contains one less block than the row beneath it and is centered on top.
To make the pyramid aesthetically pleasing, there are only specific triangular patterns that are allowed. A triangular pattern consists of a single block stacked on top of two blocks. The patterns are given as a list of three-letter strings allowed, where the first two characters of a pattern represent the left and right bottom blocks respectively, and the third character is the top block.
You start with a bottom row of blocks bottom, given as a single string, that you must use as the base of the pyramid.
Given bottom and allowed, return true if you can build the pyramid all the way to the top such that every triangular pattern in the pyramid is in allowed, or false otherwise.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: bottom = "BCD", allowed = ["BCC","CDE","CEA","FFF"]
Output: true
Explanation: The allowed triangular patterns are shown on the right.
Starting from the bottom (level 3), we can build "CE" on level 2 and then build "A" on level 1.
There are three triangular patterns in the pyramid, which are "BCC", "CDE", and "CEA". All are allowed.
```
Images:
- https://assets.leetcode.com/uploads/2021/08/26/pyramid1-grid.jpg

### Example 2
```text
Input: bottom = "AAAA", allowed = ["AAB","AAC","BCD","BBE","DEF"]
Output: false
Explanation: The allowed triangular patterns are shown on the right.
Starting from the bottom (level 4), there are multiple ways to build level 3, but trying all the possibilites, you will get always stuck before building level 1.
```
Images:
- https://assets.leetcode.com/uploads/2021/08/26/pyramid2-grid.jpg


## Constraints
- 2 <= bottom.length <= 6
- 0 <= allowed.length <= 216
- allowed[i].length == 3
- The letters in all input strings are from the set {'A', 'B', 'C', 'D', 'E', 'F'}.
- All the values of allowed are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool pyramidTransition(string bottom, vector<string>& allowed) {
        
    }
};
```

### java
```java
class Solution {
    public boolean pyramidTransition(String bottom, List<String> allowed) {
        
    }
}
```

### python
```python
class Solution(object):
    def pyramidTransition(self, bottom, allowed):
        """
        :type bottom: str
        :type allowed: List[str]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def pyramidTransition(self, bottom: str, allowed: List[str]) -> bool:
```

### c
```c
bool pyramidTransition(char* bottom, char** allowed, int allowedSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool PyramidTransition(string bottom, IList<string> allowed) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
    
};
```

### typescript
```typescript
function pyramidTransition(bottom: string, allowed: string[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $bottom
     * @param String[] $allowed
     * @return Boolean
     */
    function pyramidTransition($bottom, $allowed) {
        
    }
}
```

### swift
```swift
class Solution {
    func pyramidTransition(_ bottom: String, _ allowed: [String]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun pyramidTransition(bottom: String, allowed: List<String>): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool pyramidTransition(String bottom, List<String> allowed) {
    
  }
}
```

### golang
```golang
func pyramidTransition(bottom string, allowed []string) bool {
    
}
```

### ruby
```ruby
# @param {String} bottom
# @param {String[]} allowed
# @return {Boolean}
def pyramid_transition(bottom, allowed)
    
end
```

### scala
```scala
object Solution {
    def pyramidTransition(bottom: String, allowed: List[String]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn pyramid_transition(bottom: String, allowed: Vec<String>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (pyramid-transition bottom allowed)
  (-> string? (listof string?) boolean?)
  )
```

### erlang
```erlang
-spec pyramid_transition(Bottom :: unicode:unicode_binary(), Allowed :: [unicode:unicode_binary()]) -> boolean().
pyramid_transition(Bottom, Allowed) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec pyramid_transition(bottom :: String.t, allowed :: [String.t]) :: boolean
  def pyramid_transition(bottom, allowed) do
    
  end
end
```
