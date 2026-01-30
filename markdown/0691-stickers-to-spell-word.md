# 691. Stickers to Spell Word

- Difficulty: Hard
- Topics: Array, Hash Table, String, Dynamic Programming, Backtracking, Bit Manipulation, Memoization, Bitmask
- Slug: stickers-to-spell-word
- Problem ID: 691

## Description
We are given n different types of stickers. Each sticker has a lowercase English word on it.
You would like to spell out the given string target by cutting individual letters from your collection of stickers and rearranging them. You can use each sticker more than once if you want, and you have infinite quantities of each sticker.
Return the minimum number of stickers that you need to spell out target. If the task is impossible, return -1.
Note: In all test cases, all words were chosen randomly from the 1000 most common US English words, and target was chosen as a concatenation of two random words.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: stickers = ["with","example","science"], target = "thehat"
Output: 3
Explanation:
We can use 2 "with" stickers, and 1 "example" sticker.
After cutting and rearrange the letters of those stickers, we can form the target "thehat".
Also, this is the minimum number of stickers necessary to form the target string.
```

### Example 2
```text
Input: stickers = ["notice","possible"], target = "basicbasic"
Output: -1
Explanation:
We cannot form the target "basicbasic" from cutting letters from the given stickers.
```


## Constraints
- n == stickers.length
- 1 <= n <= 50
- 1 <= stickers[i].length <= 10
- 1 <= target.length <= 15
- stickers[i] and target consist of lowercase English letters.

## Hints
- We want to perform an exhaustive search, but we need to speed it up based on the input data being random.  

For all stickers, we can ignore any letters that are not in the target word.  

When our candidate answer won't be smaller than an answer we have already found, we can stop searching this path.  

When a sticker dominates another, we shouldn't include the dominated sticker in our sticker collection.  [Here, we say a sticker `A` dominates `B` if `A.count(letter) >= B.count(letter)` for all letters.]

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minStickers(vector<string>& stickers, string target) {
        
    }
};
```

### java
```java
class Solution {
    public int minStickers(String[] stickers, String target) {
        
    }
}
```

### python
```python
class Solution(object):
    def minStickers(self, stickers, target):
        """
        :type stickers: List[str]
        :type target: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minStickers(self, stickers: List[str], target: str) -> int:
```

### c
```c
int minStickers(char** stickers, int stickersSize, char* target) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinStickers(string[] stickers, string target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
    
};
```

### typescript
```typescript
function minStickers(stickers: string[], target: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $stickers
     * @param String $target
     * @return Integer
     */
    function minStickers($stickers, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func minStickers(_ stickers: [String], _ target: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minStickers(stickers: Array<String>, target: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minStickers(List<String> stickers, String target) {
    
  }
}
```

### golang
```golang
func minStickers(stickers []string, target string) int {
    
}
```

### ruby
```ruby
# @param {String[]} stickers
# @param {String} target
# @return {Integer}
def min_stickers(stickers, target)
    
end
```

### scala
```scala
object Solution {
    def minStickers(stickers: Array[String], target: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_stickers(stickers: Vec<String>, target: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-stickers stickers target)
  (-> (listof string?) string? exact-integer?)
  )
```

### erlang
```erlang
-spec min_stickers(Stickers :: [unicode:unicode_binary()], Target :: unicode:unicode_binary()) -> integer().
min_stickers(Stickers, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_stickers(stickers :: [String.t], target :: String.t) :: integer
  def min_stickers(stickers, target) do
    
  end
end
```
