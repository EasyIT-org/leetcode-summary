# 1138. Alphabet Board Path

- Difficulty: Medium
- Topics: Hash Table, String
- Slug: alphabet-board-path
- Problem ID: 1238

## Description
On an alphabet board, we start at position (0, 0), corresponding to character board[0][0].
Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"], as shown in the diagram below.
We may make the following moves:
(Here, the only positions that exist on the board are positions with letters on them.)
Return a sequence of moves that makes our answer equal to target in the minimum number of moves.  You may return any path that does so.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: target = "leet"
Output: "DDR!UURRR!!DDD!"
```
Images:
- https://assets.leetcode.com/uploads/2019/07/28/azboard.png

### Example 2
```text
Input: target = "code"
Output: "RR!DDRR!UUL!R!"
```
Images:
- https://assets.leetcode.com/uploads/2019/07/28/azboard.png


## Constraints
- 1 <= target.length <= 100
- target consists only of English lowercase letters.

## Hints
- Create a hashmap from letter to position on the board.
- Now for each letter, try moving there in steps, where at each step you check if it is inside the boundaries of the board.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string alphabetBoardPath(string target) {
        
    }
};
```

### java
```java
class Solution {
    public String alphabetBoardPath(String target) {
        
    }
}
```

### python
```python
class Solution(object):
    def alphabetBoardPath(self, target):
        """
        :type target: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def alphabetBoardPath(self, target: str) -> str:
```

### c
```c


char * alphabetBoardPath(char * target){

}
```

### csharp
```csharp
public class Solution {
    public string AlphabetBoardPath(string target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    
};
```

### typescript
```typescript
function alphabetBoardPath(target: string): string {

};
```

### php
```php
class Solution {

    /**
     * @param String $target
     * @return String
     */
    function alphabetBoardPath($target) {
        
    }
}
```

### swift
```swift
class Solution {
    func alphabetBoardPath(_ target: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun alphabetBoardPath(target: String): String {
        
    }
}
```

### golang
```golang
func alphabetBoardPath(target string) string {
    
}
```

### ruby
```ruby
# @param {String} target
# @return {String}
def alphabet_board_path(target)
    
end
```

### scala
```scala
object Solution {
    def alphabetBoardPath(target: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn alphabet_board_path(target: String) -> String {
        
    }
}
```
