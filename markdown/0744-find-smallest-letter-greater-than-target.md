# 744. Find Smallest Letter Greater Than Target

- Difficulty: Easy
- Topics: Array, Binary Search
- Slug: find-smallest-letter-greater-than-target
- Problem ID: 745

## Description
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.
Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
```

### Example 2
```text
Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
```

### Example 3
```text
Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
```


## Constraints
- 2 <= letters.length <= 104
- letters[i] is a lowercase English letter.
- letters is sorted in non-decreasing order.
- letters contains at least two different characters.
- target is a lowercase English letter.

## Hints
- Try to find whether each of 26 next letters are in the given string array.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        
    }
};
```

### java
```java
class Solution {
    public char nextGreatestLetter(char[] letters, char target) {
        
    }
}
```

### python
```python
class Solution(object):
    def nextGreatestLetter(self, letters, target):
        """
        :type letters: List[str]
        :type target: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
```

### c
```c
char nextGreatestLetter(char* letters, int lettersSize, char target) {
    
}
```

### csharp
```csharp
public class Solution {
    public char NextGreatestLetter(char[] letters, char target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    
};
```

### typescript
```typescript
function nextGreatestLetter(letters: string[], target: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $letters
     * @param String $target
     * @return String
     */
    function nextGreatestLetter($letters, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func nextGreatestLetter(_ letters: [Character], _ target: Character) -> Character {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun nextGreatestLetter(letters: CharArray, target: Char): Char {
        
    }
}
```

### dart
```dart
class Solution {
  String nextGreatestLetter(List<String> letters, String target) {
    
  }
}
```

### golang
```golang
func nextGreatestLetter(letters []byte, target byte) byte {
    
}
```

### ruby
```ruby
# @param {Character[]} letters
# @param {Character} target
# @return {Character}
def next_greatest_letter(letters, target)
    
end
```

### scala
```scala
object Solution {
    def nextGreatestLetter(letters: Array[Char], target: Char): Char = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn next_greatest_letter(letters: Vec<char>, target: char) -> char {
        
    }
}
```

### racket
```racket
(define/contract (next-greatest-letter letters target)
  (-> (listof char?) char? char?)
  )
```

### erlang
```erlang
-spec next_greatest_letter(Letters :: [char()], Target :: char()) -> char().
next_greatest_letter(Letters, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec next_greatest_letter(letters :: [char], target :: char) :: char
  def next_greatest_letter(letters, target) do
    
  end
end
```
