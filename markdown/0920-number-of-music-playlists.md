# 920. Number of Music Playlists

- Difficulty: Hard
- Topics: Math, Dynamic Programming, Combinatorics
- Slug: number-of-music-playlists
- Problem ID: 956

## Description
Your music player contains n different songs. You want to listen to goal songs (not necessarily different) during your trip. To avoid boredom, you will create a playlist so that:
Given n, goal, and k, return the number of possible playlists that you can create. Since the answer can be very large, return it modulo 109 + 7.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 3, goal = 3, k = 1
Output: 6
Explanation: There are 6 possible playlists: [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], and [3, 2, 1].
```

### Example 2
```text
Input: n = 2, goal = 3, k = 0
Output: 6
Explanation: There are 6 possible playlists: [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2, 1], [2, 1, 2], and [1, 2, 2].
```

### Example 3
```text
Input: n = 2, goal = 3, k = 1
Output: 2
Explanation: There are 2 possible playlists: [1, 2, 1] and [2, 1, 2].
```


## Constraints
- 0 <= k < n <= goal <= 100

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numMusicPlaylists(int n, int goal, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int numMusicPlaylists(int n, int goal, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def numMusicPlaylists(self, n, goal, k):
        """
        :type n: int
        :type goal: int
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numMusicPlaylists(self, n: int, goal: int, k: int) -> int:
```

### c
```c
int numMusicPlaylists(int n, int goal, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumMusicPlaylists(int n, int goal, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var numMusicPlaylists = function(n, goal, k) {
    
};
```

### typescript
```typescript
function numMusicPlaylists(n: number, goal: number, k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer $goal
     * @param Integer $k
     * @return Integer
     */
    function numMusicPlaylists($n, $goal, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func numMusicPlaylists(_ n: Int, _ goal: Int, _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numMusicPlaylists(n: Int, goal: Int, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numMusicPlaylists(int n, int goal, int k) {
    
  }
}
```

### golang
```golang
func numMusicPlaylists(n int, goal int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer} goal
# @param {Integer} k
# @return {Integer}
def num_music_playlists(n, goal, k)
    
end
```

### scala
```scala
object Solution {
    def numMusicPlaylists(n: Int, goal: Int, k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_music_playlists(n: i32, goal: i32, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-music-playlists n goal k)
  (-> exact-integer? exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec num_music_playlists(N :: integer(), Goal :: integer(), K :: integer()) -> integer().
num_music_playlists(N, Goal, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_music_playlists(n :: integer, goal :: integer, k :: integer) :: integer
  def num_music_playlists(n, goal, k) do
    
  end
end
```
