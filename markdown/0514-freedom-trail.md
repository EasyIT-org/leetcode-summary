# 514. Freedom Trail

- Difficulty: Hard
- Topics: String, Dynamic Programming, Depth-First Search, Breadth-First Search
- Slug: freedom-trail
- Problem ID: 514

## Description
In the video game Fallout 4, the quest "Road to Freedom" requires players to reach a metal dial called the "Freedom Trail Ring" and use the dial to spell a specific keyword to open the door.
Given a string ring that represents the code engraved on the outer ring and another string key that represents the keyword that needs to be spelled, return the minimum number of steps to spell all the characters in the keyword.
Initially, the first character of the ring is aligned at the "12:00" direction. You should spell all the characters in key one by one by rotating ring clockwise or anticlockwise to make each character of the string key aligned at the "12:00" direction and then by pressing the center button.
At the stage of rotating the ring to spell the key character key[i]:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: ring = "godding", key = "gd"
Output: 4
Explanation:
For the first key character 'g', since it is already in place, we just need 1 step to spell this character. 
For the second key character 'd', we need to rotate the ring "godding" anticlockwise by two steps to make it become "ddinggo".
Also, we need 1 more step for spelling.
So the final output is 4.
```
Images:
- https://assets.leetcode.com/uploads/2018/10/22/ring.jpg

### Example 2
```text
Input: ring = "godding", key = "godding"
Output: 13
```
Images:
- https://assets.leetcode.com/uploads/2018/10/22/ring.jpg


## Constraints
- 1 <= ring.length, key.length <= 100
- ring and key consist of only lower case English letters.
- It is guaranteed that key could always be spelled by rotating ring.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findRotateSteps(string ring, string key) {
        
    }
};
```

### java
```java
class Solution {
    public int findRotateSteps(String ring, String key) {
        
    }
}
```

### python
```python
class Solution(object):
    def findRotateSteps(self, ring, key):
        """
        :type ring: str
        :type key: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findRotateSteps(self, ring: str, key: str) -> int:
```

### c
```c
int findRotateSteps(char* ring, char* key) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindRotateSteps(string ring, string key) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    
};
```

### typescript
```typescript
function findRotateSteps(ring: string, key: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $ring
     * @param String $key
     * @return Integer
     */
    function findRotateSteps($ring, $key) {
        
    }
}
```

### swift
```swift
class Solution {
    func findRotateSteps(_ ring: String, _ key: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findRotateSteps(ring: String, key: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findRotateSteps(String ring, String key) {
    
  }
}
```

### golang
```golang
func findRotateSteps(ring string, key string) int {
    
}
```

### ruby
```ruby
# @param {String} ring
# @param {String} key
# @return {Integer}
def find_rotate_steps(ring, key)
    
end
```

### scala
```scala
object Solution {
    def findRotateSteps(ring: String, key: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_rotate_steps(ring: String, key: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-rotate-steps ring key)
  (-> string? string? exact-integer?)
  )
```

### erlang
```erlang
-spec find_rotate_steps(Ring :: unicode:unicode_binary(), Key :: unicode:unicode_binary()) -> integer().
find_rotate_steps(Ring, Key) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_rotate_steps(ring :: String.t, key :: String.t) :: integer
  def find_rotate_steps(ring, key) do
    
  end
end
```
